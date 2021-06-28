import {useEffect, useState} from "react";
import axios from "axios";

export default function useSurfSpot(){
    const [surfSpots, setSurfSpots] = useState([])

     useEffect(() => {
        axios.get("/api/surfspots/all")
            .then((response) => response.data)
            .then(data => setSurfSpots(data))
            .catch(error => console.error(error))
    }, []);

    return {surfSpots}
}