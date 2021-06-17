package de.neuefische.backend.repository;

import de.neuefische.backend.model.SurfSpot;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;


@Repository
public class SurfSpotRepo {

    private List<SurfSpot> spotList = new ArrayList<>();


    public List<SurfSpot> getAllSurfSpots() {
        return spotList;
    }

    public void addSurfSpot(SurfSpot surfSpot){
        spotList.add(surfSpot);

    }
}
