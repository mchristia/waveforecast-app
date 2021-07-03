import ListItem from "../component/ListItem";
import React from "react";

function existsInFavourites(spot, favouriteSpots){

    for(let i=0; i < favouriteSpots.length; i++){
        if(favouriteSpots[i].id === spot.id){
            return true;
        }
    }
    return false
}

export const setListItem = (spot, setFavouriteSpots, favouriteSpot) => {

    if (existsInFavourites(spot, favouriteSpot)) {
        console.log(true)
        return <li>
            <ListItem key={spot.id} spot={spot} favourite={true} setFavouriteSpopts={setFavouriteSpots}/>
        </li>
    } else {
        console.log(false)
        return <li>
            <ListItem key={spot.id} spot={spot} favourite={false} setFavouriteSpopts={setFavouriteSpots}/>
        </li>
    }
}