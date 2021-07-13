package de.neuefische.backend.controller;

import de.neuefische.backend.dto.AddToFavouritesDto;
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

    @PostMapping("/add")
    public SurfSpot addToFavourites(Principal principal, @RequestBody AddToFavouritesDto addDto){
        return favouritesService.addToFavourites(principal.getName(), addDto.getId());
    }

    @DeleteMapping("/delete/{id}")
    public List<SurfSpot> deleteAll(Principal principal, @PathVariable String id){
        return favouritesService.deleteById(principal.getName(), id);
    }

}
