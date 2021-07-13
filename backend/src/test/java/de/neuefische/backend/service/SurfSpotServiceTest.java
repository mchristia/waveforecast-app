package de.neuefische.backend.service;

import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.SurfSpotRepo;
import org.junit.jupiter.api.Test;


import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.collection.IsIterableContainingInAnyOrder.containsInAnyOrder;
import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.*;

class SurfSpotServiceTest {

    private SurfSpotRepo surfSpotRepo = mock(SurfSpotRepo.class);
    private SGApiService sgApiService = mock(SGApiService.class);
    private  SurfSpotService surfSpotService = new SurfSpotService(surfSpotRepo, sgApiService);

    @Test
    public void getAllSurfSpotsShouldReturnAllSurfSpots(){
        //Given
        when(surfSpotRepo.findAll()).thenReturn(List.of(
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

        //When
        List<SurfSpot> expectedList = surfSpotService.getAllSurfSpots();

        //Then
        assertThat(expectedList, containsInAnyOrder(
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
    public void addSGDataToSurfSpotShouldAddANewSurfSpotWithSGData(){
        //Given
        SurfSpot addSurfSpotToRepo = new SurfSpot("43.854448442635984"+"-1.3916103531016923", SpotLocationDetails.builder()
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
        );

        SGSurfData sgSurfData = SGSurfData.builder()
                .time("Time")
                .airTemperature(new AirTemperature(1))
                .windSpeed(new WindSpeed(1))
                .windDirection(new WindDirection(1))
                .waterTemperature(new WaterTemperature(1))
                .swellHeight(new SwellHeight(1))
                .swellPeriod(new SwellPeriod(1))
                .swellDirection(new SwellDirection(1))
                .build();

        addSurfSpotToRepo.setSurfData(List.of(sgSurfData));

        //When
        surfSpotService.addSGDataToSurfSpot(addSurfSpotToRepo);


        //Then
        verify(surfSpotRepo).save(new SurfSpot("43.854448442635984"+"-1.3916103531016923", SpotLocationDetails.builder()
                .id("43.854448442635984"+"-1.3916103531016923")
                .name("Plage de Moliets")
                .latitude("43.854448442635984")
                .longitude("-1.3916103531016923")
                .continent("Europa")
                .country("France")
                .region("Biarritz")
                .build(), List.of(SGSurfData.builder()
                .time("Time")
                .airTemperature(new AirTemperature(1))
                .windSpeed(new WindSpeed(1))
                .windDirection(new WindDirection(1))
                .waterTemperature(new WaterTemperature(1))
                .swellHeight(new SwellHeight(1))
                .swellPeriod(new SwellPeriod(1))
                .swellDirection(new SwellDirection(1))
                .build())
        ));
    }

    @Test
    void findSurfSpotByIdShouldReturnSurfSpot(){
        //Given
        when(surfSpotRepo.findSurfSpotById("43.95339608383859-1.3642210235940333")).thenReturn(
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

                ));

        //When
        SurfSpot expectedSurfSpot = surfSpotService.findSurfSpotById("43.95339608383859-1.3642210235940333");


        //Then
        assertThat(expectedSurfSpot.getId(), is("43.95339608383859-1.3642210235940333") );
        assertThat(expectedSurfSpot, is(new SurfSpot("43.95339608383859"+"-1.3642210235940333", SpotLocationDetails.builder()
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
                .build()))));
    }
}