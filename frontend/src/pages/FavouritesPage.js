import ListItem from "../component/ListItem";
import axios from "axios";
import {useContext, useEffect} from "react";
import AuthContext from "../context/AuthContext";
import {getFavourites} from "../service/surfSpotDataService";

export default function FavouritesPage(){

    // const {token} = useContext(AuthContext)
    //
    // console.log(token)
    // useEffect( () => {
    //     if(token){
    //         getFavourites(token)
    //             .then(data => console.log(data))
    //     }
    // }, [token])

    return(
        <div>
           <p>Hallo, bin ich noch wach?</p>
        </div>
    )
}