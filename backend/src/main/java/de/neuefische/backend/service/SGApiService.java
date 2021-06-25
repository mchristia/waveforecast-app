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
        //Instant.now().plus(3, ChronoUnit.HOURS);
        startTimeStampForSGRequest = generateStartTime(); //Auf genaue Stunde abrunden
        endTimeStampForSGRequest = startTimeStampForSGRequest.truncatedTo(ChronoUnit.HOURS).plusSeconds(60*60*24); // Plus 3 Tage

        return  "https://api.stormglass.io/v2/weather/point?" +
                "lat=" +latitude+
                "&lng=" +longitude+
                "&params=airTemperature,windSpeed," +
                "windDirection,waterTemperature,waveHeight," +
                "wavePeriod,waveDirection" +
                "&start="+ startTimeStampForSGRequest +
                "&end=" + endTimeStampForSGRequest +"&source=sg";
    }
// Start time should always be 00:00 o'clock the day of the request!
    // so that there is no starting gap in frontend table, e.g request at 15:00 afternoon would mean
    // the current day would have a gap of surf data between the morning and 15:00.
    // But every row should be filled, starting at the same time! If data is missing, that does not work.
    public Instant generateStartTime(){
        return Instant.now().truncatedTo(ChronoUnit.DAYS);
//        Instant generatedTime = Instant.now().truncatedTo(ChronoUnit.HOURS);
//        Instant compareTime = Instant.now().truncatedTo(ChronoUnit.DAYS);// Aud 00 Uhr gesetzt
//
//        if(generatedTime.isBefore(compareTime.plusSeconds(60*60*3))){ // Vergleich mit 03:00 Uhr
//            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS);
//        }
//        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*6))){ // Vergleich mit 06:00 Uhr
//            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*3);
//        }
//        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*9))){ // Vergleich mit 09:00 Uhr
//            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*6);
//        }
//        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*12))){ // Vergleich mit 12:00 Uhr
//            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*9);
//        }
//        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*15))){ // Vergleich mit 15:00 Uhr
//            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*12);
//        }
//        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*18))){ // Vergleich mit 18:00 Uhr
//            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*15);
//        }
//        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*21))){ // Vergleich mit 21:00 Uhr
//            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*18);
//        }
//        else if(generatedTime.isBefore(compareTime.plusSeconds(60*60*23 + 60*59 + 59))){ // Vergleich mit 23:59:59 Uhr
//            generatedTime = generatedTime.truncatedTo(ChronoUnit.DAYS).plusSeconds(60*60*21);
//        }
//        return generatedTime;
    }

    public SurfSpot getEvery3rdHour(SurfSpot givenSurfSpot){
        SurfSpot updatedSurfSpot = new SurfSpot();
        updatedSurfSpot.setId(givenSurfSpot.getId());
        updatedSurfSpot.setSpotLocationDetails(givenSurfSpot.getSpotLocationDetails());

        List<SGSurfData> updatedSGSurfData = new ArrayList<>();
        Instant timeToCompareWith = Instant.now().truncatedTo(ChronoUnit.DAYS);

        for(SGSurfData surfData : givenSurfSpot.getSurfData()){
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
