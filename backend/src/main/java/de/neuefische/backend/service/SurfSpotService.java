package de.neuefische.backend.service;

import de.neuefische.backend.model.SurfSpot;
import de.neuefische.backend.repository.SurfSpotRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    public void addSurfSpot(SurfSpot surfSpot){
        surfSpotRepo.addSurfSpot(surfSpot);
    }

    public List<SurfSpot> getSpotList(){
        return surfSpotRepo.getSpotList();
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
