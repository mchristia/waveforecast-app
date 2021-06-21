package de.neuefische.backend.controller;

import de.neuefische.backend.model.SurfSpot;
import de.neuefische.backend.service.SGApiService;
import de.neuefische.backend.service.SurfSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/surfspots")
public class SurfSpotController {

    private final SurfSpotService surfSpotService;
    private final SGApiService sgApiService;

    @Autowired
    public SurfSpotController(SurfSpotService surfSpotService, SGApiService sgApiService){
        this.surfSpotService = surfSpotService;
        this.sgApiService = sgApiService;
    }

    @GetMapping("/all")
    public List<SurfSpot> getAllSurfSpots(){
        SurfSpot surfSpotWithSGData ;
        for(SurfSpot spot : surfSpotService.getAllSurfSpots()){
            surfSpotWithSGData = sgApiService.getSGData(spot.getSpotLocationDetails().getLongitude(),
                    spot.getSpotLocationDetails().getLatitude());
            surfSpotService.addSGDataToSurfSpot(surfSpotWithSGData);
        }
        return surfSpotService.getAllSurfSpots();
    }

//    @GetMapping
//    public List<SurfSpot> getSpotList(){
//        return surfSpotService.getSpotList();
//    }
}
