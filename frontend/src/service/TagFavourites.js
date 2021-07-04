import ListItem from "../component/ListItem";
import React from "react";

export default function TagFavourites({spot, favouriteSpots, setFavouriteSpots}){

    function existsInFavourites(spot, favouriteSpots){
        if(favouriteSpots.length !== 0){

            for(let i=0; i < favouriteSpots.length; i++){
                if(favouriteSpots[i].id === spot.id){
                    return true;
                }
            }
        }
        return false
    }

    if (existsInFavourites(spot, favouriteSpots)) {

        return <ListItem key={spot.id}
                         spot={spot}
                         favourite={true}
                         setFavouriteSpots={setFavouriteSpots}/>

    } else {

        return <ListItem key={spot.id}
                         spot={spot}
                         favourite={false}
                         setFavouriteSpots={setFavouriteSpots}/>

    }
}




