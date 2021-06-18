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

@Service
public class SGApiService {

    @Value("${storm.glass.key}")
    private String sgApiKey;



    public SGSurfData getSGData(String longitude, String latitude){
        HttpHeaders header = new HttpHeaders();
        header.set("Authorization", sgApiKey);

        HttpEntity<Void> entity = new HttpEntity<>(null, header);

        String sgGetUrl = "https://api.stormglass.io/v2/weather/point?lat=" +latitude+
                "&lng=" + longitude+"&params=airTemperature,windSpeed,windDirection,waterTemperature," +
                "waveHeight,wavePeriod,waveDirection&start=2021-06-19T18:00:00&end=2021-06-19T18:00:00&source=sg";

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(sgGetUrl, HttpMethod.GET, entity, String.class);

        try{
            return mapSGApiResponseToSGSurfData(response.getBody());
        }catch(Exception e){
            throw new RuntimeException("Json deserialization failed.");
        }

    }

    public SGSurfData mapSGApiResponseToSGSurfData(String apiResponseString) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        SGApiResponseData sgResponse = objectMapper.readValue(apiResponseString, SGApiResponseData.class);
        String time = sgResponse.getHours().get(0).getTime();
        double airTemperatur = sgResponse.getHours().get(0).getAirTemperature().getSg();
        double waterTemperatur = sgResponse.getHours().get(0).getWaterTemperature().getSg();
        double waveDirection = sgResponse.getHours().get(0).getWaveDirection().getSg();
        double waveHeight = sgResponse.getHours().get(0).getWaveHeight().getSg();
        double wavePeriod = sgResponse.getHours().get(0).getWavePeriod().getSg();
        double windSpeed = sgResponse.getHours().get(0).getWindSpeed().getSg();
        double windDirection = sgResponse.getHours().get(0).getWindDirection().getSg();

        System.out.println(airTemperatur +", " + waterTemperatur+", " + waveDirection+", " + waveHeight +", " + wavePeriod +", " + windDirection+", " + windSpeed);
        return SGSurfData.builder()
                .time(time)
                .airTemperature(new AirTemperature(airTemperatur))
                .waterTemperature(new WaterTemperature(waterTemperatur))
                .waveDirection(new WaveDirection(waveDirection))
                .waveHeight(new WaveHeight(waveHeight))
                .wavePeriod(new WavePeriod(wavePeriod))
                .windSpeed(new WindSpeed(windSpeed))
                .windDirection(new WindDirection(windDirection))
                .build();
    }
}
