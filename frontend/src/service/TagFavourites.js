import ListItem from "../component/ListItem";
import React from "react";

export default function TagFavourites({spot, favouriteSpots, setFavouriteSpots}){

    console.log(favouriteSpots)
    console.log(spot)

    function existsInFavourites(spot, favouriteSpots){
        if(favouriteSpots.length !== 0){
            console.log(favouriteSpots)
            for(let i=0; i < favouriteSpots.length; i++){
                if(favouriteSpots[i].id === spot.id){
                    return true;
                }
            }
        }
        return false
    }

    if (existsInFavourites(spot, favouriteSpots)) {
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


