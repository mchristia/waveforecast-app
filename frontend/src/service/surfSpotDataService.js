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

export const getFavourites = (token) =>{
    const config = ({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    console.log(token)
    return axios.get("/api/favourites/", config)
        .then(response => response.data)

}
