package de.neuefische.backend.repository;

import de.neuefische.backend.model.SurfSpot;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;


@Repository
public class SurfSpotRepo {

    private SpotLocationDetailsRepo locationDetailsRepo = new SpotLocationDetailsRepo();
    private List<SurfSpot> spotList = new ArrayList<>();


    public List<SurfSpot> getAllSurfSpots() {
        return spotList;
    }

    public void addSurfSpot(SurfSpot surfSpot){
        spotList.add(surfSpot);

    }

    public List<SurfSpot> getSpotList(){
        for(int i=0; i<locationDetailsRepo.getLocationDetails().size(); i++){
            spotList.add(new SurfSpot(locationDetailsRepo.getLocationDetails().get(i)));
        }
        return spotList;
    }
}
