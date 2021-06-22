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
            return mappingService.mapSGApiResponseToSGSurfData(response.getBody(), longitude, latitude);
        }catch(Exception e){
            throw new RuntimeException("Json deserialization failed.");
        }

    }

    public String generateRequestString(String longitude, String latitude){
        //Instant.now().plus(3, ChronoUnit.HOURS);
        startTimeStampForSGRequest = Instant.now().truncatedTo(ChronoUnit.HOURS); //Auf genaue Stunde abrunden
        endTimeStampForSGRequest = Instant.now().truncatedTo(ChronoUnit.HOURS).plusSeconds(60*60*3); // Plus 3 Tage

        return  "https://api.stormglass.io/v2/weather/point?" +
                "lat=" +latitude+
                "&lng=" +longitude+
                "&params=airTemperature,windSpeed," +
                "windDirection,waterTemperature,waveHeight," +
                "wavePeriod,waveDirection" +
                "&start="+ startTimeStampForSGRequest +
                "&end=" + endTimeStampForSGRequest +"&source=sg";
// start Instant.now() auf volle Stunde ab oder aufrunden
// Instant.now().plus(<0ffset of 3 days>)
    }

    public SurfSpot getEvery3rdHour(SurfSpot givenSurfData){
        SurfSpot updatedSurfSpot = new SurfSpot();
        for(SGSurfData surfData : givenSurfData.getSurfData()){
            Instant dataTimeStamp = Instant.parse(surfData.getTime());
            if(startTimeStampForSGRequest)
        }
    }



}
