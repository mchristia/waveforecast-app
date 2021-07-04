import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components/macro";
import TagFavourites from "../service/TagFavourites";


export default function SpotList({surfSpots, favouriteSpots, setFavouriteSpots, filterCountry, filterContinent}){


    if(filterContinent?.name === '' && filterCountry?.name === ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.map((spot) => {
                        return <li text-decoration= "none" list-style-type="none">
                                     <TagFavourites spot={spot}
                                                    favouriteSpots={favouriteSpots}
                                                    setFavouriteSpots={setFavouriteSpots}/>
                        </li>
                    })}
                </ul>
            </Wrapper>
        )
    }else if(filterContinent?.name !== '' && filterCountry?.name === ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.map((spot) => {
                        if (spot.spotLocationDetails.continent === filterContinent?.name) {
                           return <li text-decoration= "none" list-style-type="none">
                            <TagFavourites spot={spot} favouriteSpots={favouriteSpots} setFavouriteSpot={setFavouriteSpots} />
                           </li>
                        }
                    })}
                </ul>
            </Wrapper>
        )
    }else if(filterContinent?.name === '' && filterCountry?.name !== ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.map((spot) => {
                        if (spot.spotLocationDetails.country === filterCountry?.name) {
                             return <li text-decoration= "none" list-style-type="none">
                            <TagFavourites spot={spot} favouriteSpots={favouriteSpots} setFavouriteSpot={setFavouriteSpots} />
                             </li>
                        }
                    })}
                </ul>
            </Wrapper>
        )
    }else{
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.map((spot) => {
                        if (spot.spotLocationDetails.continent === filterContinent?.name
                            && spot.spotLocationDetails.country === filterCountry?.name) {
                            return <li text-decoration= "none" list-style-type="none">
                            <TagFavourites spot={spot} favouriteSpots={favouriteSpots} setFavouriteSpot={setFavouriteSpots} />
                            </li>
                        }
                    })}
                </ul>
            </Wrapper>
        )
    }
}
const Wrapper = styled.div`
  ul{
    padding : 2px;
  }
  
  li{
    padding: 1%
  }
  a{
    text-decoration: none;
  }
`