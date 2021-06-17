package de.neuefische.backend.controller;

import de.neuefische.backend.service.SGApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/sgAPI")
public class SGApiController {
    private final SGApiService sgApiService;

    @Autowired
    public SGApiController(SGApiService sgApiService){
        this.sgApiService = sgApiService;
    }

    @GetMapping
    public String sgGetData(int longitude, int latitude){
        return sgApiService.getSGData(longitude, latitude);
    }
}
