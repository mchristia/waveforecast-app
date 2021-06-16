package de.neuefische.backend.service;

import de.neuefische.backend.repository.SurfSpotRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SurfSpotService {

    private final SurfSpotRepo surfSpotRepo;

    @Autowired
    public SurfSpotService(SurfSpotRepo surfSpotRepo){
        this.surfSpotRepo = surfSpotRepo;
    }

    public List<SurfSpot> getAllSurfSpots() {
        return surfSpotRepo.getAllSurfSpots();
    }
}
