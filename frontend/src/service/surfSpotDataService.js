import axios from "axios";


export const getSurfSpot = (id, token) =>{
    const header = ({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    axios.get("/api/surfspots/id/"+id, header)
        .then((response) => response.data)
}
