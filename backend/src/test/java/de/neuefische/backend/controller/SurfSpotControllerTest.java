package de.neuefische.backend.controller;

import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.SurfSpotRepo;
import de.neuefische.backend.service.SGApiService;
import de.neuefische.backend.service.SurfSpotService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class SurfSpotControllerTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private SurfSpotRepo surfSpotRepo;
    @MockBean
    private SGApiService sgApiService;
    @Autowired
    private SurfSpotService surfSpotService ;

    @BeforeEach
    public void clearDb(){
        surfSpotRepo.deleteAll();
    }

    @Test
    void getAllSurfSpotsShouldReturnAllSurfSpots(){
        //Given
        surfSpotRepo.save(new SurfSpot("43.95339608383859"+"-1.3642210235940333", SpotLocationDetails.builder()
                        .id("43.95339608383859"+"-1.3642210235940333")
                        .name("Plage de St. Girons")
                        .latitude("43.95339608383859")
                        .longitude("-1.3642210235940333")
                        .continent("Europa")
                        .country("France")
                        .region("Landes")
                        .build(), List.of(SGSurfData.builder()
                        .time("")
                        .airTemperature(new AirTemperature())
                        .windSpeed(new WindSpeed())
                        .windDirection(new WindDirection())
                        .waterTemperature(new WaterTemperature())
                        .swellHeight(new SwellHeight())
                        .swellPeriod(new SwellPeriod())
                        .swellDirection(new SwellDirection())
                        .build())
                ));
        surfSpotRepo.save(new SurfSpot("43.854448442635984"+"-1.3916103531016923", SpotLocationDetails.builder()
                .id("43.854448442635984"+"-1.3916103531016923")
                .name("Plage de Moliets")
                .latitude("43.854448442635984")
                .longitude("-1.3916103531016923")
                .continent("Europa")
                .country("France")
                .region("Biarritz")
                .build(), List.of(SGSurfData.builder()
                .time("")
                .airTemperature(new AirTemperature())
                .windSpeed(new WindSpeed())
                .windDirection(new WindDirection())
                .waterTemperature(new WaterTemperature())
                .swellHeight(new SwellHeight())
                .swellPeriod(new SwellPeriod())
                .swellDirection(new SwellDirection())
                .build())
        ));
        //When
        ResponseEntity<SurfSpot[]> response = testRestTemplate.getForEntity(
                "http://localhost:" +port+ "/api/surfspots/all", SurfSpot[].class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new SurfSpot("43.95339608383859"+"-1.3642210235940333", SpotLocationDetails.builder()
                        .id("43.95339608383859"+"-1.3642210235940333")
                        .name("Plage de St. Girons")
                        .latitude("43.95339608383859")
                        .longitude("-1.3642210235940333")
                        .continent("Europa")
                        .country("France")
                        .region("Landes")
                        .build(), List.of(SGSurfData.builder()
                        .time("")
                        .airTemperature(new AirTemperature())
                        .windSpeed(new WindSpeed())
                        .windDirection(new WindDirection())
                        .waterTemperature(new WaterTemperature())
                        .swellHeight(new SwellHeight())
                        .swellPeriod(new SwellPeriod())
                        .swellDirection(new SwellDirection())
                        .build())

                ), new SurfSpot("43.854448442635984"+"-1.3916103531016923", SpotLocationDetails.builder()
                        .id("43.854448442635984"+"-1.3916103531016923")
                        .name("Plage de Moliets")
                        .latitude("43.854448442635984")
                        .longitude("-1.3916103531016923")
                        .continent("Europa")
                        .country("France")
                        .region("Biarritz")
                        .build(), List.of(SGSurfData.builder()
                        .time("")
                        .airTemperature(new AirTemperature())
                        .windSpeed(new WindSpeed())
                        .windDirection(new WindDirection())
                        .waterTemperature(new WaterTemperature())
                        .swellHeight(new SwellHeight())
                        .swellPeriod(new SwellPeriod())
                        .swellDirection(new SwellDirection())
                        .build())
                )
        ));
    }

    @Test
    void getSurfSpotByIdShouldReturnSurfSpot(){
        //Given
        surfSpotRepo.save(new SurfSpot("43.95339608383859"+"-1.3642210235940333", SpotLocationDetails.builder()
                .id("43.95339608383859"+"-1.3642210235940333")
                .name("Plage de St. Girons")
                .latitude("43.95339608383859")
                .longitude("-1.3642210235940333")
                .continent("Europa")
                .country("France")
                .region("Landes")
                .build(), List.of(SGSurfData.builder()
                .time("")
                .airTemperature(new AirTemperature())
                .windSpeed(new WindSpeed())
                .windDirection(new WindDirection())
                .waterTemperature(new WaterTemperature())
                .swellHeight(new SwellHeight())
                .swellPeriod(new SwellPeriod())
                .swellDirection(new SwellDirection())
                .build())
        ));
        surfSpotRepo.save(new SurfSpot("43.854448442635984"+"-1.3916103531016923", SpotLocationDetails.builder()
                .id("43.854448442635984"+"-1.3916103531016923")
                .name("Plage de Moliets")
                .latitude("43.854448442635984")
                .longitude("-1.3916103531016923")
                .continent("Europa")
                .country("France")
                .region("Biarritz")
                .build(), List.of(SGSurfData.builder()
                .time("")
                .airTemperature(new AirTemperature())
                .windSpeed(new WindSpeed())
                .windDirection(new WindDirection())
                .waterTemperature(new WaterTemperature())
                .swellHeight(new SwellHeight())
                .swellPeriod(new SwellPeriod())
                .swellDirection(new SwellDirection())
                .build())
        ));

        //When
        ResponseEntity<SurfSpot> response = testRestTemplate.getForEntity(
                "http://localhost:" +port+ "/api/surfspots/id/"+"43.854448442635984"+"-1.3916103531016923", SurfSpot.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(
                new SurfSpot("43.95339608383859"+"-1.3642210235940333", SpotLocationDetails.builder()
                        .id("43.95339608383859"+"-1.3642210235940333")
                        .name("Plage de St. Girons")
                        .latitude("43.95339608383859")
                        .longitude("-1.3642210235940333")
                        .continent("Europa")
                        .country("France")
                        .region("Landes")
                        .build(), List.of(SGSurfData.builder()
                        .time("")
                        .airTemperature(new AirTemperature())
                        .windSpeed(new WindSpeed())
                        .windDirection(new WindDirection())
                        .waterTemperature(new WaterTemperature())
                        .swellHeight(new SwellHeight())
                        .swellPeriod(new SwellPeriod())
                        .swellDirection(new SwellDirection())
                        .build())

                )));
    }

}