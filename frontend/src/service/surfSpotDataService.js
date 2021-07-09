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

    return axios.post("/api/favourites/add", {id}, config)
        .then((response) => response.data)

}

export const removeFromFavourites = (id, token) =>{
    const config = ({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return axios.delete("/api/favourites/delete/"+id, config)
        .then((response) => response.data)
}
