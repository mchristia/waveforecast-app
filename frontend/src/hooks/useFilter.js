import {useState} from "react";

export default function useFilter(surfSpots){
    const [filterContinent, setFilterContinent] = useState({name: ''});
    const [filterCountry, setFilterCountry] = useState({name: ''});

    const handleChangeContinent = (event) => {
        const name = event.target.name;
        setFilterContinent({...filterContinent, [name]: event.target.value,});
    };

    const handleChangeCountry = (event) => {
        const name = event.target.name;
        setFilterCountry({...filterCountry, [name]: event.target.value,});
    };

    let continents = [...new Set(surfSpots?.map(spot => spot.spotLocationDetails.continent))]
    let countries = [...new Set(surfSpots?.map(spot => spot.spotLocationDetails.country))]

    if(filterContinent.name !== ""){
        countries = [...new Set(surfSpots?.map((spot) => {
            if(spot.spotLocationDetails.continent === filterContinent.name)
                return spot.spotLocationDetails.country;
        }))]
    }

    return {handleChangeContinent, handleChangeCountry, continents, countries,filterCountry, filterContinent}
}