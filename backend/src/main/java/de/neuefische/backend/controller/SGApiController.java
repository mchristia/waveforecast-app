package de.neuefische.backend.controller;

import de.neuefische.backend.model.SGSurfData;
import de.neuefische.backend.service.SGApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stormglass")
public class SGApiController {
    private final SGApiService sgApiService;

    @Autowired
    public SGApiController(SGApiService sgApiService){
        this.sgApiService = sgApiService;
    }

    @GetMapping
    public SGSurfData sgGetData(@RequestParam String longitude, @RequestParam String latitude){
        return sgApiService.getSGData(longitude, latitude);
    }
}
