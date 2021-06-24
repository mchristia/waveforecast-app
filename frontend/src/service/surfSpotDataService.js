import axios from "axios";


export const getSurfSpot = (id) =>
    axios.get("/api/surfspots/id/"+id)
        .then((response) => response.data)