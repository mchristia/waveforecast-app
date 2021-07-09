import {useContext, useEffect, useState} from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";


export default function useSurfSpot(){
    const [surfSpots, setSurfSpots] = useState([])
    const {token} = useContext(AuthContext)



    useEffect(() => {
        const header = ({
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        if(token){
            axios.get("/api/surfspots/all", header)
                .then((response) => response.data)
                .then(data => setSurfSpots(data))
                .catch(error => console.error(error))
        }

    }, [token]);

    return {surfSpots, token}
}