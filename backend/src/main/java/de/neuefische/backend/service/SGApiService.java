package de.neuefische.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.model.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Service
public class SGApiService {

    @Value("${storm.glass.key}")
    private String sgApiKey;

    private ObjectMappingService mappingService;

    public SGApiService(ObjectMappingService mappingService){
        this.mappingService = mappingService;
    }

    public SurfSpot getSGData(String longitude, String latitude){
        HttpHeaders header = new HttpHeaders();
        header.set("Authorization", sgApiKey);

        HttpEntity<Void> entity = new HttpEntity<>(null, header);

        String sgGetUrl =generateRequestString(longitude, latitude);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(sgGetUrl, HttpMethod.GET, entity, String.class);

        try{
            return mappingService.mapSGApiResponseToSGSurfData(response.getBody(), longitude, latitude);
        }catch(Exception e){
            throw new RuntimeException("Json deserialization failed.");
        }

    }

    public String generateRequestString(String longitude, String latitude){
        return  "https://api.stormglass.io/v2/weather/point?" +
                "lat=" +latitude+
                "&lng=" +longitude+
                "&params=airTemperature,windSpeed," +
                "windDirection,waterTemperature,waveHeight," +
                "wavePeriod,waveDirection" +
                "&start=2021-06-19T18:00:00" +
                "&end=2021-06-19T21:00:00&source=sg";

    }



}
