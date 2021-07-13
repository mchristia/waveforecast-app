package de.neuefische.backend.service;

import de.neuefische.backend.model.*;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class SGApiServiceTest {


    private String sgApiKey;
    private final RestTemplate mockedRestTemplate = mock(RestTemplate.class);
    private final ObjectMappingService objectMappingService = mock(ObjectMappingService.class);
    private final SGApiService sgApiService = new SGApiService(objectMappingService);

    @Test
    void generateStartTimeShouldReturnTime(){
        //Given
        Instant startTime = sgApiService.generateStartTime();

        //When
        Instant expectedTime  = sgApiService.generateStartTime();

        //Then
        assertEquals(expectedTime, startTime);
    }

    @Test
    void geSGDataShouldReturnEmptySurfSpot(){
        //Given
        HttpHeaders header = new HttpHeaders();
        header.set("Authorization", sgApiKey);

        HttpEntity<Void> entity = new HttpEntity<>(null, header);

        String latitude = "43.95339608383859";
        String longitude = "-1.3642210235940333";
        Instant startTime = Instant.now().truncatedTo(ChronoUnit.HOURS);
        Instant endTime = Instant.now().truncatedTo(ChronoUnit.HOURS);
        String url = "https://api.stormglass.io/v2/weather/point?" +
                "lat=" +latitude+
                "&lng=" +longitude+
                "&params=airTemperature,windSpeed," +
                "windDirection,waterTemperature,swellHeight," +
                "swellPeriod,swellDirection" +
                "&start="+ startTime +
                "&end=" + endTime +"&source=sg";
        String responseString = "response String";

        SurfSpot surfSpot= new SurfSpot();

        when(mockedRestTemplate.exchange(url, HttpMethod.GET, entity, String.class)).thenReturn(ResponseEntity.ok(responseString));

        //When
        SurfSpot expectedSpot = sgApiService.getSGData(longitude, latitude);
        //Then
        assertThat(expectedSpot, is(surfSpot));
       // verify(mockedRestTemplate).exchange(url, HttpMethod.GET, entity, String.class);
    }

}