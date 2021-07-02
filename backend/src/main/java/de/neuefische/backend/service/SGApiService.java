package de.neuefische.backend.service;

import de.neuefische.backend.model.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Service
public class SGApiService {

    @Value("${storm.glass.key}")
    private String sgApiKey;

    private ObjectMappingService mappingService;

    private Instant startTimeStampForSGRequest;
    private Instant endTimeStampForSGRequest;

    public SGApiService(ObjectMappingService mappingService){
        this.mappingService = mappingService;
    }

    public SurfSpot getSGData(String longitude, String latitude){
        HttpHeaders header = new HttpHeaders();
        header.set("Authorization", sgApiKey);

        HttpEntity<Void> entity = new HttpEntity<>(null, header);

        String sgGetUrl = generateRequestString(longitude, latitude);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(sgGetUrl, HttpMethod.GET, entity, String.class);

        try{
            SurfSpot updatedSurfSpot = mappingService.mapSGApiResponseToSGSurfData(response.getBody(), longitude, latitude);
            return getEvery3rdHour(updatedSurfSpot);
        }catch(Exception e){
            throw new RuntimeException("Json deserialization failed.");
        }

    }

    public String generateRequestString(String longitude, String latitude){
        startTimeStampForSGRequest = generateStartTime();
        endTimeStampForSGRequest = startTimeStampForSGRequest.truncatedTo(ChronoUnit.HOURS).plusSeconds(60*60*24*3);

        return  "https://api.stormglass.io/v2/weather/point?" +
                "lat=" +latitude+
                "&lng=" +longitude+
                "&params=airTemperature,windSpeed," +
                "windDirection,waterTemperature,swellHeight," +
                "swellPeriod,swellDirection" +
                "&start="+ startTimeStampForSGRequest +
                "&end=" + endTimeStampForSGRequest +"&source=sg";
    }

    public Instant generateStartTime(){

        Instant generatedTime = Instant.now().truncatedTo(ChronoUnit.HOURS);
        Instant compareTime = Instant.now().truncatedTo(ChronoUnit.DAYS);

        if(generatedTime.isBefore(compareTime.plusSeconds(60*60*3))){
            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS);
        }
        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*6))){
            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*3);
        }
        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*9))){
            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*6);
        }
        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*12))){
            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*9);
        }
        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*15))){
            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*12);
        }
        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*18))){
            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*15);
        }
        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*21))){
            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*18);
        }
        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*23 + 60*59 + 59))){
            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*21);
        }
        return generatedTime;
    }

    public SurfSpot getEvery3rdHour(SurfSpot givenSurfSpot){
        SurfSpot updatedSurfSpot = new SurfSpot();
        updatedSurfSpot.setId(givenSurfSpot.getId());
        updatedSurfSpot.setSpotLocationDetails(givenSurfSpot.getSpotLocationDetails());

        List<SGSurfData> updatedSGSurfData = new ArrayList<>();

        for(SGSurfData surfData : givenSurfSpot.getSurfData()){
            Instant timeToCompareWith = Instant.parse(surfData.getTime()).truncatedTo(ChronoUnit.DAYS);
            Instant dataTimeStamp = Instant.parse(surfData.getTime());
            if(timeToCompareWith.equals(dataTimeStamp)){ // 00:00Uhr
                updatedSGSurfData.add(surfData);
            }
            else if(timeToCompareWith.plusSeconds(60*60*3).equals(dataTimeStamp)){
                updatedSGSurfData.add(surfData);
            }
            else if(timeToCompareWith.plusSeconds(60*60*6).equals(dataTimeStamp)){
                updatedSGSurfData.add(surfData);
            }
            else if(timeToCompareWith.plusSeconds(60*60*9).equals(dataTimeStamp)){
                updatedSGSurfData.add(surfData);
            }
            else if(timeToCompareWith.plusSeconds(60*60*12).equals(dataTimeStamp)){
                updatedSGSurfData.add(surfData);
            }
            else if(timeToCompareWith.plusSeconds(60*60*15).equals(dataTimeStamp)){
                updatedSGSurfData.add(surfData);
            }
            else if(timeToCompareWith.plusSeconds(60*60*18).equals(dataTimeStamp)){
                updatedSGSurfData.add(surfData);
            }
            else if(timeToCompareWith.plusSeconds(60*60*21).equals(dataTimeStamp)){
                updatedSGSurfData.add(surfData);
            }
        }
        updatedSurfSpot.setSurfData(updatedSGSurfData);

        return updatedSurfSpot;
    }



}
