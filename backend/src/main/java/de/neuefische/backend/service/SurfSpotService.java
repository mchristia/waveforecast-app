package de.neuefische.backend.service;

import de.neuefische.backend.model.SurfSpot;
import de.neuefische.backend.repository.SurfSpotRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;

import java.util.List;

@Service
public class SurfSpotService {

    private final SurfSpotRepo surfSpotRepo;
    private final SGApiService sgApiService;

    @Autowired
    public SurfSpotService(SurfSpotRepo surfSpotRepo, SGApiService sgApiService){
        this.surfSpotRepo = surfSpotRepo;
        this.sgApiService= sgApiService;
    }

    @PostConstruct
    @Scheduled(fixedRate = (24*60*60*1000), fixedDelay =(60*1000))
    public void loadSpotData(){
        for(SurfSpot spot : surfSpotRepo.findAll()){
            SurfSpot surfSpotWithSGData = sgApiService.getSGData(spot.getSpotLocationDetails().getLongitude(),
                    spot.getSpotLocationDetails().getLatitude());
            if(surfSpotWithSGData.getSurfData() == null){
                return;
            }else{
                surfSpotRepo.save(surfSpotWithSGData);
            }

        }
    }
    public List<SurfSpot> getAllSurfSpots() {
        return surfSpotRepo.findAll();
    }

    public void addSGDataToSurfSpot(SurfSpot surfSpot){
        surfSpotRepo.save(surfSpot);
    }

    public SurfSpot findSurfSpotById(String id){
        return surfSpotRepo.findSurfSpotById(id);
    }


}
