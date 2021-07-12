package de.neuefische.backend.service;

import de.neuefische.backend.model.SurfSpot;
import de.neuefische.backend.repository.SurfSpotRepo;
import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.repository.AppUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class FavouritesService {

    private final AppUserRepo appUserRepo;
    private final SurfSpotRepo surfSpotRepo;

    @Autowired
    public FavouritesService(AppUserRepo appUserRepo, SurfSpotRepo surfSpotRepo) {
        this.appUserRepo = appUserRepo;
        this.surfSpotRepo = surfSpotRepo;
    }

    public List<SurfSpot> getAllFavourites(String id) {
        AppUser response = appUserRepo.findById(id).get();
        System.out.println(response);
        return response.getListOfFavourites();
    }

    public SurfSpot addToFavourites(String name, String id) {
        SurfSpot spotToAdd = surfSpotRepo.findSurfSpotById(id);

        if(spotToAdd != null){
            AppUser user = appUserRepo.findById(name).get();
            List<SurfSpot> listOfFavourites = user.getListOfFavourites();
            if(listOfFavourites.contains(spotToAdd)){
                return new SurfSpot();
            }else{
                listOfFavourites.add(spotToAdd);
                user.setListOfFavourites(listOfFavourites);
                appUserRepo.save(user);
                return spotToAdd;
            }
        }
        else {throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Something went wrong");}
    }

    public List<SurfSpot> deleteById(String name, String id) {
        SurfSpot spotToDelete = surfSpotRepo.findSurfSpotById(id);
        AppUser user = appUserRepo.findById(name).get();
        List<SurfSpot> listOfFavourites= user.getListOfFavourites();

        if(listOfFavourites.contains(spotToDelete)){
            listOfFavourites.remove(spotToDelete);
            user.setListOfFavourites(listOfFavourites);
            appUserRepo.save(user);
        }
        return listOfFavourites;
    }
}
