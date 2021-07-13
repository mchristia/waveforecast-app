import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";


export default function useFavourites(){
    const {token} = useContext(AuthContext)
    const [favourites, setFavourites] = useState([]);


    useEffect(() => {
        const header = ({
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            axios.get("/api/favourites", header)
                .then(response => response.data)
                .then(data => setFavourites(data))
                .catch(error => console.error(error))

    }, [token])

    return {favourites, setFavourites}
}