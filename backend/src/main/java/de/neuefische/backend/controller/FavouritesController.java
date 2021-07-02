package de.neuefische.backend.controller;

import de.neuefische.backend.model.SurfSpot;
import de.neuefische.backend.service.FavouritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/favourites")
public class FavouritesController {

    private final FavouritesService favouritesService;


    @Autowired
    public FavouritesController(FavouritesService favouritesService) {
        this.favouritesService = favouritesService;

    }

    @GetMapping()
    public List<SurfSpot> getAllFavourites(Principal principal){
      return favouritesService.getAllFavourites(principal.getName());
    }

    @PostMapping
    public SurfSpot addToFavourites(Principal principal, @RequestBody String id){
        return favouritesService.addToFavourites(principal.getName(), id);
    }

    @DeleteMapping()
    public List<SurfSpot> deleteAll(Principal principal, @RequestBody String id){
        return favouritesService.deleteById(principal.getName(), id);
    }

    @DeleteMapping("/all")
    public List<SurfSpot> deleteAll(Principal principal){
        return favouritesService.deleteAll(principal.getName());
    }

}
