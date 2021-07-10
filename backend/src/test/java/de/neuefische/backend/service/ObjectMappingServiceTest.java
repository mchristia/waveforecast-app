package de.neuefische.backend.service;

import de.neuefische.backend.repository.SurfSpotRepo;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

class ObjectMappingServiceTest {

    SurfSpotRepo surfSpotRepo = mock(SurfSpotRepo.class);
    ObjectMappingService objectMappingService = new ObjectMappingService(surfSpotRepo);

    @Test
    void mapSGApiResponseToSGSurfDataShouldReturnSurfSpotWithSGData(){
        //Given
        String latitude;
        String longitude;
        String apiResponseString;
        //When
        //Then
    }
}