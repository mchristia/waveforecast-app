import React from "react";
import styled from "styled-components/macro";
import TagFavourites from "../service/TagFavourites";


export default function SpotList({surfSpots, favouriteSpots, setFavouriteSpots, filterCountry, filterContinent, fromFavouritePage}){


    if(filterContinent?.name === '' && filterCountry?.name === ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.map((spot) => {
                        return <li key={spot.id} textDecoration= "none" list-style-type="none">
                                     <TagFavourites spot={spot}
                                                    favouriteSpots={favouriteSpots}
                                                    setFavouriteSpots={setFavouriteSpots} fromFavouritePage={fromFavouritePage} hasShadow={true}/>
                        </li>
                    })}
                </ul>
            </Wrapper>
        )
    }else if(filterContinent?.name !== '' && filterCountry?.name === ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.filter((spot) => spot.spotLocationDetails.continent === filterContinent?.name).map((spot) => {

                           return <li key={spot.id} textDecoration= "none" list-style-type="none">
                            <TagFavourites spot={spot} favouriteSpots={favouriteSpots} setFavouriteSpot={setFavouriteSpots} fromFavouritePage={fromFavouritePage} hasShadow={true}/>
                           </li>

                    })}
                </ul>
            </Wrapper>
        )
    }else if(filterContinent?.name === '' && filterCountry?.name !== ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.filter((spot) => spot.spotLocationDetails.country === filterCountry?.name).map((spot) => {

                             return <li key={spot.id} textDecoration= "none" list-style-type="none">
                            <TagFavourites spot={spot} favouriteSpots={favouriteSpots} setFavouriteSpot={setFavouriteSpots} fromFavouritePage={fromFavouritePage} hasShadow={true}/>
                             </li>
                    })}
                </ul>
            </Wrapper>
        )
    }else{
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.filter((spot) => spot.spotLocationDetails.continent === filterContinent?.name
                        && spot.spotLocationDetails.country === filterCountry?.name).map((spot) =>{

                            return <li key={spot.id} textDecoration= "none" list-style-type="none">
                                <TagFavourites spot={spot} favouriteSpots={favouriteSpots} setFavouriteSpot={setFavouriteSpots} fromFavouritePage={fromFavouritePage} hasShadow={true}/>
                            </li>
                        }

                    )}
                </ul>
            </Wrapper>
        )
    }
}
const Wrapper = styled.div`
  
  ul{
    padding : 5px;
  }
  
  li{
    padding: 1%;
    margin-bottom: 2rem;
    background-color: transparent;
  }
  a{
    text-decoration: none;
  }
  
`