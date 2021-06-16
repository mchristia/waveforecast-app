package de.neuefische.backend.controller;

import de.neuefische.backend.service.SurfSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/surfspots")
public class SurfSpotController {

    private final SurfSpotService surfSpotService;

    @Autowired
    public SurfSpotController(SurfSporService surfSporService){
        this.surfSpotService = surfSporService;
    }

    @GetMapping()
    public List<SurfSpot> getAllSurfSpot(){

    }
}