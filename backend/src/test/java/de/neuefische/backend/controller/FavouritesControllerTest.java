package de.neuefische.backend.controller;

import de.neuefische.backend.security.repository.AppUserRepo;
import de.neuefische.backend.security.service.AppUserDetailsService;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class FavouritesControllerTest {

//    @LocalServerPort
//    private int port;
//
//    @Autowired
//    private TestRestTemplate testRestTemplate;
//
//    @MockBean
//    private AppUserDetailsService appUserDetailsService;
//
//    @Autowired
//    private AppUserRepo appUserRepo;
//
//    @BeforeEach
//    public void clearDb(){
//
//    }

}