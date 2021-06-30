package de.neuefische.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.SurfSpotRepo;
import org.springframework.stereotype.Service;

@Service
public class ObjectMappingService {


    private SurfSpotRepo surfSpotRepo;

    public ObjectMappingService( SurfSpotRepo surfSpotRepo){
        this.surfSpotRepo = surfSpotRepo;
    }

    public SurfSpot mapSGApiResponseToSGSurfData(String apiResponseString, String longitude, String latitude) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        SGApiResponseDto sgResponse = objectMapper.readValue(apiResponseString, SGApiResponseDto.class);

        return new SurfSpot(latitude+longitude,
                surfSpotRepo.findSurfSpotById(latitude+longitude).getSpotLocationDetails(),
                sgResponse.getHours());


//         return  new SurfSpot(locationDetails.getId(), locationDetails, sgResponse.getHours());

    }
}
