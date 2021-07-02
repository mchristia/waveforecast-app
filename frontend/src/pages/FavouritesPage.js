import ListItem from "../component/ListItem";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import {getFavourites} from "../service/surfSpotDataService";
import SpotList from "../component/SpotList";

export default function FavouritesPage(){

    const {token} = useContext(AuthContext)
    const [favourites, setFavourites] = useState([]);

    console.log(token)
    useEffect( () => {
            getFavourites(token)
                .then(data => {
                    setFavourites(data);
                })
    }, [])


    return(
        <div>
            <div>
               <p>Hallo, bin ich noch wach?</p>
            </div>
            <div>
               <p>Hallo, bin ich noch wach?</p>
            </div>
            <div>
               <SpotList surfSpots={favourites}
                         filterCountry={{name: ''}}
                         filterContinent={{name: ''}}/>
            </div>
        </div>
    )

}