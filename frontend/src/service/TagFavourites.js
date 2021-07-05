import ListItem from "../component/ListItem";
import React from "react";

export default function TagFavourites({spot, favouriteSpots, setFavouriteSpots, fromFavouritePage}){

    function existsInFavourites(spot, favouriteSpots) {
        if (favouriteSpots.length !== 0) {

            for (let i = 0; i < favouriteSpots.length; i++) {
                if (favouriteSpots[i].id === spot.id) {
                    return true;
                }
            }
        }
        return false
    }

    return <ListItem text-decoration="none" key={spot.id}
                     spot={spot}
                     favourite={existsInFavourites(spot, favouriteSpots)}
                     setFavouriteSpots={setFavouriteSpots}
                     fromFavouritePage={fromFavouritePage}
    />

}




