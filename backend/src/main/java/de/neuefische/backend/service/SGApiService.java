package de.neuefische.backend.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SGApiService {

    RestTemplate restTemplate = new RestTemplate();

    public String getSGData(int longitude, int latitude){
        String sgGetUrl = "https://api.stormglass.io/v2/weather/point?lat=43.95339608383859" +
                "&lng=-1.3642210235940333&params=airTemperature,windSpeed,windDirection,waterTemperature," +
                "waveHeight,wavePeriod,waveDirection&start=2021-06-17T05:00:00&&end=2021-06-17T06:00:00&source=sg";

        ResponseEntity<String> response = restTemplate.getForEntity(sgGetUrl, String.class);

        return response.getBody();
    }
}
