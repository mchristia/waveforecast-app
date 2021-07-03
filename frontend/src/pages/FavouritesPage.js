import styled from "styled-components/macro";
import SpotList from "../component/SpotList";
import useFavourites from "../hooks/useFavourites";
import useFilter from "../hooks/useFilter";
import SurfSpotFilter from "../component/SurfSpotFilter";
import React from "react";

export default function FavouritesPage(){

    const {favourites, setFavourites} = useFavourites();
    const {handleChangeCountry,
        handleChangeContinent,
        continents,
        countries,
        filterCountry,
        filterContinent} = useFilter(favourites);

    return(
        <Wrapper>
            <div>
                <h3>Your Favourites</h3>
            </div>
            <div>
                <SurfSpotFilter filterContinent={filterContinent}
                                filterCountry={filterCountry}
                                handleChangeContinent={handleChangeContinent}
                                handleChangeCountry={handleChangeCountry}
                                continents={continents}
                                countries={countries}
                />
            </div>
            <div>
               <SpotList surfSpots={favourites}
                         favouriteSpots={favourites}
                         setFavouriteSpots={setFavourites}
                         filterCountry={{name: ''}}
                         filterContinent={{name: ''}}/>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
`