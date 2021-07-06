package de.neuefische.backend.service;

import de.neuefische.backend.model.SGSurfData;
import de.neuefische.backend.model.SurfSpot;
import de.neuefische.backend.repository.SurfSpotRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
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



    /***************** wie bekomme ich die Spots in die Datenbank? *********
     Hard reincode funktioniert nicht richtig, MongoDB bleibt beim hinzufügen hängen und es passiert nichts


     */


    /************************** SurfSpots mit allen Daten auslesen *********************************
    sobald Search Page geöffnet wird muss hier eine Abfrage der API erfolgen und die Daten in die Datenbank schreiben
    dafür:
    1. alle Spots aus der Datenbank in eine Liste schreiben
    2. aus dieser Liste für jeden Spot die Koordinaten heraus ziehen
    3. die Koordinaten an API senden
    4. antwort über den ObjectMapping service zu einem Surfspot zusammenfügen
    5. den neuen Spot mit API daten wieder in der Datenbank ablegen
    6. danach alle Spots mit daten zurück ans frontend
     */

}
