package de.neuefische.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.SpotLocationDetailsRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ObjectMappingService {

    private SpotLocationDetailsRepo locationDetailsRepo;

    public ObjectMappingService(SpotLocationDetailsRepo locationDetailsRepo){
        this.locationDetailsRepo = locationDetailsRepo;
    }

    public SurfSpot mapSGApiResponseToSGSurfData(String apiResponseString, String longitude, String latitude) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        SGApiResponseData sgResponse = objectMapper.readValue(apiResponseString, SGApiResponseData.class);

        SpotLocationDetails locationDetails = locationDetailsRepo.findSpotLocationById(latitude+longitude);

        return  new SurfSpot(locationDetails, sgResponse.getHours());

//        List<SGSurfData> surfDataList = new ArrayList<>();
//        for(SGSurfData surfData : sgResponse.getHours()){
//            if(surfData.getTime().equals())
//            surfDataList.add(surfData);
//        }

//        String time = sgResponse.getHours().get(0).getTime();
//        double airTemperatur = sgResponse.getHours().get(0).getAirTemperature().getSg();
//        double waterTemperatur = sgResponse.getHours().get(0).getWaterTemperature().getSg();
//        double waveDirection = sgResponse.getHours().get(0).getWaveDirection().getSg();
//        double waveHeight = sgResponse.getHours().get(0).getWaveHeight().getSg();
//        double wavePeriod = sgResponse.getHours().get(0).getWavePeriod().getSg();
//        double windSpeed = sgResponse.getHours().get(0).getWindSpeed().getSg();
//        double windDirection = sgResponse.getHours().get(0).getWindDirection().getSg();
//
//
//
//        System.out.println(time +", "+ airTemperatur +", " + waterTemperatur+", " + waveDirection+", " + waveHeight +", " + wavePeriod +", " + windDirection+", " + windSpeed);
//        return SGSurfData.builder()
//                .time(time)
//                .airTemperature(new AirTemperature(airTemperatur))
//                .waterTemperature(new WaterTemperature(waterTemperatur))
//                .waveDirection(new WaveDirection(waveDirection))
//                .waveHeight(new WaveHeight(waveHeight))
//                .wavePeriod(new WavePeriod(wavePeriod))
//                .windSpeed(new WindSpeed(windSpeed))
//                .windDirection(new WindDirection(windDirection))
//                .build();
    }
}
