package de.neuefische.backend.service;

import de.neuefische.backend.model.SurfSpot;
import de.neuefische.backend.repository.SurfSpotRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SurfSpotServiceTest {

    private SurfSpotRepo surfSpotRepo = new SurfSpotRepo();
    private  SurfSpotService surfSpotService = new SurfSpotService(surfSpotRepo);

//    @Test
//    public void getAllSurfSpotsShouldReturnAllSurfSpots(){
//        //Given
//        List<SurfSpot> surfSpotList = List.of(
//                new SurfSpot("ABC", "Spot1", 1, 1),
//                new SurfSpot("DEF", "Spot2", 1, 2),
//                new SurfSpot("GHI", "Spot1", 1, 3)
//        );
//
//        surfSpotRepo.addSurfSpot(surfSpotList.get(0));
//        surfSpotRepo.addSurfSpot(surfSpotList.get(1));
//        surfSpotRepo.addSurfSpot(surfSpotList.get(2));
//
//
//        //When
//        List<SurfSpot> expectedList = surfSpotService.getAllSurfSpots();
//
//        //Then
//        assertEquals(expectedList, surfSpotList);
//    }
//
//    @Test
//    public void addSurfSpotShouldAddANewSurfSpot(){
//        //Given
//        List<SurfSpot> surfSpotList = List.of(
//                new SurfSpot("ABC", "Spot1", 1, 1),
//                new SurfSpot("DEF", "Spot2", 1, 2),
//                new SurfSpot("GHI", "Spot1", 1, 3)
//        );
//
//        surfSpotRepo.addSurfSpot(surfSpotList.get(0));
//        surfSpotRepo.addSurfSpot(surfSpotList.get(1));
//        surfSpotRepo.addSurfSpot(surfSpotList.get(2));
//
//        //When
//        SurfSpot oneMoreSpot = new SurfSpot("JKL", "Spot4", 2, 3);
//        surfSpotService.addSurfSpot(oneMoreSpot);
//        List<SurfSpot> actualList =  List.of(
//                new SurfSpot("ABC", "Spot1", 1, 1),
//                new SurfSpot("DEF", "Spot2", 1, 2),
//                new SurfSpot("GHI", "Spot1", 1, 3),
//                new SurfSpot("JKL", "Spot4", 2, 3)
//        );
//        List<SurfSpot> expectedList = surfSpotService.getAllSurfSpots();
//
//        //Then
//
//        assertEquals(expectedList, actualList);
//    }
}