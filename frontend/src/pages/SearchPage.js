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
            <SurfSpotFilter className="head" filterContinent={filterContinent}
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
  background-image: url("/images/app-logo-above1.png");
  height: 100%;
  overflow-y: auto;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
  .head{
    position: sticky;
    z-index: 3;
  
`
