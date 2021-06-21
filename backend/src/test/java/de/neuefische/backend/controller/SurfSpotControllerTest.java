package de.neuefische.backend.controller;

import de.neuefische.backend.repository.SurfSpotRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

class SurfSpotControllerTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;


    @Autowired
    private SurfSpotRepo surfSpotRepo;

//    @Test
//    void getAllSurfSpotsShouldReturnAllSurfSpots(){
//        //Given
//        surfSpotRepo.save
//        //When
//
//        //Then
//    }

}