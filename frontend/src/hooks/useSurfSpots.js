import {useEffect, useState} from "react";
import axios from "axios";


export default function useSurfSpot(token){
    const [surfSpots, setSurfSpots] = useState([])
    const header = ({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    useEffect(() => {
        if(token){
            axios.get("/api/surfspots/all", header)
                .then((response) => response.data)
                .then(data => setSurfSpots(data))
                .catch(error => console.error(error))
        }

    }, [token]);

    return {surfSpots}
}