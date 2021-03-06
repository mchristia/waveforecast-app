import styled from "styled-components/macro";
import SpotList from "../component/SpotList";
import useFavourites from "../hooks/useFavourites";
import useFilter from "../hooks/useFilter";
import SurfSpotFilter from "../component/SurfSpotFilter";
import React from "react";

export default function FavouritesPage(){

    const {favourites, setFavourites} = useFavourites();
    const fromFavouritePage = true;
    const {handleChangeCountry,
        handleChangeContinent,
        continents,
        countries,
        filterCountry,
        filterContinent} = useFilter(favourites);
    const title = "Your Favourites"

    return(
        <Wrapper>
                <SurfSpotFilter className="header" filterContinent={filterContinent}
                                filterCountry={filterCountry}
                                handleChangeContinent={handleChangeContinent}
                                handleChangeCountry={handleChangeCountry}
                                continents={continents}
                                countries={countries}
                                title={title}
                />

            <div>
               <SpotList surfSpots={favourites}
                         favouriteSpots={favourites}
                         setFavouriteSpots={setFavourites}
                         filterCountry={filterCountry}
                         filterContinent={filterContinent}
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
  
  .header{
      position: sticky;
      z-index: 3;
  }
  
`