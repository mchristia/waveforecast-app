package de.neuefische.backend.service;

import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.SurfSpotRepo;
import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.repository.AppUserRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class FavouritesServiceTest {

    private final AppUserRepo mockedUserRepo = mock(AppUserRepo.class);
    private final SurfSpotRepo mockedSurfSpotRepo = mock(SurfSpotRepo.class);

    private final FavouritesService favouritesService = new FavouritesService(mockedUserRepo, mockedSurfSpotRepo);

    @Test
    void getAllFavourites(){
        //Given
        AppUser appUser = new AppUser("Mario", "secretepassword", List.of(
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

        when(mockedUserRepo.findAppUserById("Mario")).thenReturn(appUser);

        //When
        List<SurfSpot> surfSpotList = favouritesService.getAllFavourites(appUser.getUsername());

        //Then
        assertThat(surfSpotList, is(List.of(
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
        )));
    }

    @Test
    void addToFavourites(){
        //Given
        AppUser appUser = new AppUser("Mario", "secretepassword", List.of(
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

        SurfSpot spotToAdd = new SurfSpot("43.4753051551581"+"-1.5684491397804103",
                SpotLocationDetails.builder()
                    .id("43.4753051551581"+"-1.5684491397804103")
                    .name("Plage de la Cote de Basques")
                    .latitude("43.4753051551581")
                    .longitude("-1.5684491397804103")
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

        when(mockedUserRepo.findAppUserById("Mario")).thenReturn(appUser);
        when(mockedSurfSpotRepo.findSurfSpotById(spotToAdd.getId()))
                .thenReturn(new SurfSpot("43.4753051551581"+"-1.5684491397804103",
                        SpotLocationDetails.builder()
                                            .id("43.4753051551581"+"-1.5684491397804103")
                                            .name("Plage de la Cote de Basques")
                                            .latitude("43.4753051551581")
                                            .longitude("-1.5684491397804103")
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
        SurfSpot expectedSurfSpot = favouritesService.addToFavourites(appUser.getUsername(), spotToAdd.getId());

        //Then
        assertThat(expectedSurfSpot, is(
                new SurfSpot("43.4753051551581"+"-1.5684491397804103",
                        SpotLocationDetails.builder()
                        .id("43.4753051551581"+"-1.5684491397804103")
                        .name("Plage de la Cote de Basques")
                        .latitude("43.4753051551581")
                        .longitude("-1.5684491397804103")
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
    void deleteById(){

    }
}