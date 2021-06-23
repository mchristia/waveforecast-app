package de.neuefische.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.SpotLocationDetailsRepo;
import de.neuefische.backend.repository.SurfSpotRepo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ObjectMappingService {

    private SpotLocationDetailsRepo locationDetailsRepo;
    private SurfSpotRepo surfSpotRepo;

    public ObjectMappingService(SpotLocationDetailsRepo locationDetailsRepo, SurfSpotRepo surfSpotRepo){
        this.locationDetailsRepo = locationDetailsRepo;
        this.surfSpotRepo = surfSpotRepo;
    }

    public SurfSpot mapSGApiResponseToSGSurfData(String apiResponseString, String longitude, String latitude) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        SGApiResponseData sgResponse = objectMapper.readValue(apiResponseString, SGApiResponseData.class);

        SpotLocationDetails locationDetails = locationDetailsRepo.findSpotLocationById(latitude+longitude);


         return  new SurfSpot(locationDetails.getId(), locationDetails, sgResponse.getHours());

    }
}
