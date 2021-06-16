package de.neuefische.backend.repository;

import org.springframework.stereotype.Repository;
import java.util.ArrayList;


@Repository
public class SurfSpotRepo {

    private List<SurfSpot> spotList = new ArrayList<>() {
    }


    public List<SurfSpot> getAllSurfSpots() {
        return spotList;
    }
}
