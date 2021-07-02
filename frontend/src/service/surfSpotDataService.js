import axios from "axios";


export const getSurfSpot = (id, token) =>{
    const config = ({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return axios.get("/api/surfspots/id/"+id, config)
        .then((response) => response.data)
}

export const addToFavourites = (id, token) =>{
    const config = ({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return axios.post("/api/favourites", {id}, config)
        .then(response => response.data)
        .then(data => console.log(data))
}
