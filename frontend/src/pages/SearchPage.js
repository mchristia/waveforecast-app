import styled from "styled-components/macro";
import React from 'react';
import SpotList from "../component/SpotList";
import useSurfSpot from "../hooks/useSurfSpots";
import useFavourites from "../hooks/useFavourites";
import useFilter from "../hooks/useFilter";
import SurfSpotFilter from "../component/SurfSpotFilter";

export default function SearchPage(){

    const {surfSpots} = useSurfSpot();
    const {favourites, setFavourites} = useFavourites();
    const fromFavouritePage = false;
    const {handleChangeCountry,
        handleChangeContinent,
        continents,
        countries,
        filterCountry,
        filterContinent} = useFilter(surfSpots);
    const title = "Look for Spots";

    return(
        <Wrapper >

            <SurfSpotFilter filterContinent={filterContinent}
                            filterCountry={filterCountry}
                            handleChangeContinent={handleChangeContinent}
                            handleChangeCountry={handleChangeCountry}
                            continents={continents}
                            countries={countries}
                            title={title}
            />
            <div>
                <SpotList surfSpots={surfSpots}
                          favouriteSpots={favourites}
                          setFavouriteSpots={setFavourites}
                          filterContinent={filterContinent}
                          filterCountry={filterCountry}
                          fromFavouritePage={fromFavouritePage}
                />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  
  h3{
    position: sticky;
    z-index: 3;
  
`
