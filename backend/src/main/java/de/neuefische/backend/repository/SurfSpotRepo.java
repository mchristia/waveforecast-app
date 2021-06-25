package de.neuefische.backend.repository;

import de.neuefische.backend.model.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SurfSpotRepo extends PagingAndSortingRepository<SurfSpot, String> {

    List<SurfSpot> findAll();

    SurfSpot findSurfSpotById(String id);

//    private SpotLocationDetailsRepo locationDetailsRepo = new SpotLocationDetailsRepo();
//    private List<SurfSpot> spotList = List.of(
//            new SurfSpot( SpotLocationDetails.builder()
//                    .id("43.95339608383859"+"-1.3642210235940333")
//                    .name("Plage de St. Girons")
//                    .latitude("43.95339608383859")
//                    .longitude("-1.3642210235940333")
//                    .continent("Europa")
//                    .country("France")
//                    .region("Landes")
//                    .build(), List.of(SGSurfData.builder()
//                    .time("")
//                    .airTemperature(new AirTemperature())
//                    .windSpeed(new WindSpeed())
//                    .windDirection(new WindDirection())
//                    .waterTemperature(new WaterTemperature())
//                    .waveHeight(new WaveHeight())
//                    .wavePeriod(new WavePeriod())
//                    .waveDirection(new WaveDirection())
//                    .build())
//
//            ),new SurfSpot( SpotLocationDetails.builder()
//                    .id("43.854448442635984"+"-1.3916103531016923")
//                    .name("Plage de Moliets")
//                    .latitude("43.854448442635984")
//                    .longitude("-1.3916103531016923")
//                    .continent("Europa")
//                    .country("France")
//                    .region("Biarritz")
//                    .build(), List.of(SGSurfData.builder()
//                    .time("")
//                    .airTemperature(new AirTemperature())
//                    .windSpeed(new WindSpeed())
//                    .windDirection(new WindDirection())
//                    .waterTemperature(new WaterTemperature())
//                    .waveHeight(new WaveHeight())
//                    .wavePeriod(new WavePeriod())
//                    .waveDirection(new WaveDirection())
//                    .build())
//
//            ),new SurfSpot( SpotLocationDetails.builder()
//                    .id("43.4753051551581"+"-1.5684491397804103")
//                    .name("Plage de la Cote de Basques")
//                    .latitude("43.4753051551581")
//                    .longitude("-1.5684491397804103")
//                    .continent("Europa")
//                    .country("France")
//                    .region("Biarritz")
//                    .build(), List.of(SGSurfData.builder()
//                    .time("")
//                    .airTemperature(new AirTemperature())
//                    .windSpeed(new WindSpeed())
//                    .windDirection(new WindDirection())
//                    .waterTemperature(new WaterTemperature())
//                    .waveHeight(new WaveHeight())
//                    .wavePeriod(new WavePeriod())
//                    .waveDirection(new WaveDirection())
//                    .build())
//
//            ), new SurfSpot( SpotLocationDetails.builder()
//                    .id("43.46491512696849"+"-1.5760960225063894")
//                    .name("Plage de Milady")
//                    .latitude("43.46491512696849")
//                    .longitude("-1.5760960225063894")
//                    .continent("Europa")
//                    .country("France")
//                    .region("Biarritz")
//                    .build(), List.of(SGSurfData.builder()
//                    .time("")
//                    .airTemperature(new AirTemperature())
//                    .windSpeed(new WindSpeed())
//                    .windDirection(new WindDirection())
//                    .waterTemperature(new WaterTemperature())
//                    .waveHeight(new WaveHeight())
//                    .wavePeriod(new WavePeriod())
//                    .waveDirection(new WaveDirection())
//                    .build())
//
//            ), new SurfSpot( SpotLocationDetails.builder()
//                    .id("43.38498328185575"+"-3.0052290767247047")
//                    .name("Playa de Sopelana")
//                    .latitude("43.38498328185575")
//                    .longitude("-3.0052290767247047")
//                    .continent("Europa")
//                    .country("Spain")
//                    .region("Bilbao")
//                    .build(), List.of(SGSurfData.builder()
//                    .time("")
//                    .airTemperature(new AirTemperature())
//                    .windSpeed(new WindSpeed())
//                    .windDirection(new WindDirection())
//                    .waterTemperature(new WaterTemperature())
//                    .waveHeight(new WaveHeight())
//                    .wavePeriod(new WavePeriod())
//                    .waveDirection(new WaveDirection())
//                    .build())
//
//            ), new SurfSpot( SpotLocationDetails.builder()
//                    .id("39.373847164089895" + "-9.336478033348522")
//                    .name("Praia Baleal Norte")
//                    .latitude("39.373847164089895")
//                    .longitude("-9.336478033348522")
//                    .continent("Europa")
//                    .country("Portugal")
//                    .region("Peniche")
//                    .build(), List.of(SGSurfData.builder()
//                    .time("")
//                    .airTemperature(new AirTemperature())
//                    .windSpeed(new WindSpeed())
//                    .windDirection(new WindDirection())
//                    .waterTemperature(new WaterTemperature())
//                    .waveHeight(new WaveHeight())
//                    .wavePeriod(new WavePeriod())
//                    .waveDirection(new WaveDirection())
//                    .build())
//            ), new SurfSpot( SpotLocationDetails.builder()
//                    .id("39.36526264984761" +"-9.343233714472387")
//                    .name("Praia Baleal Sul")
//                    .latitude("39.36526264984761")
//                    .longitude("-9.343233714472387")
//                    .continent("Europa")
//                    .country("Portugal")
//                    .region("Peniche")
//                    .build(), List.of(SGSurfData.builder()
//                    .time("")
//                    .airTemperature(new AirTemperature())
//                    .windSpeed(new WindSpeed())
//                    .windDirection(new WindDirection())
//                    .waterTemperature(new WaterTemperature())
//                    .waveHeight(new WaveHeight())
//                    .wavePeriod(new WavePeriod())
//                    .waveDirection(new WaveDirection())
//                    .build())
//
//            ));
//
//
//    public List<SurfSpot> getAllSurfSpots() {
//        return spotList;
//    }
//
//    public void addSurfSpot(SurfSpot surfSpot){
//        spotList.add(surfSpot);
//
//    }
//
//
}
