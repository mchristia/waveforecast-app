package de.neuefische.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SGApiService {

    @Value("${storm.glass.key}")
    private String sgApiKey;



    public String getSGData(String longitude, String latitude){
        HttpHeaders header = new HttpHeaders();
        header.set("Authorization", sgApiKey);

        HttpEntity<Void> entity = new HttpEntity<>(null, header);

        String sgGetUrl = "https://api.stormglass.io/v2/weather/point?lat=" +latitude+
                "&lng=" + longitude+"&params=airTemperature,windSpeed,windDirection,waterTemperature," +
                "waveHeight,wavePeriod,waveDirection&start=2021-06-17T05:00:00&&end=2021-06-17T06:00:00&source=sg";

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(sgGetUrl, HttpMethod.GET, entity, String.class);

        return response.getBody();
    }
}
