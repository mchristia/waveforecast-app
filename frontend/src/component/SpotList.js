import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components/macro";
import TagFavourites from "../service/TagFavourites";


export default function SpotList({surfSpots, favouriteSpots, setFavouriteSpots, filterCountry, filterContinent}){
console.log(favouriteSpots)
console.log(surfSpots)
console.log(favouriteSpots. includes(surfSpots[0]))


    if(filterContinent?.name === '' && filterCountry?.name === ''){
        console.log("1")
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.map((spot) =>
                       <TagFavourites spot={spot} favouriteSpots={favouriteSpots} setFavouriteSpot={setFavouriteSpots} />
                        // setListItem(spot, setFavouriteSpots, favouriteSpots)

                    )}
                </ul>
            </Wrapper>
        )
    }else if(filterContinent?.name !== '' && filterCountry?.name === ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.map((spot) => {
                        if (spot.spotLocationDetails.continent === filterContinent?.name) {
                           return <TagFavourites spot={spot} favouriteSpots={favouriteSpots} setFavouriteSpot={setFavouriteSpots} />

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
                             return <TagFavourites spot={spot} favouriteSpots={favouriteSpots} setFavouriteSpot={setFavouriteSpots} />

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
                            return <TagFavourites spot={spot} favouriteSpots={favouriteSpots} setFavouriteSpot={setFavouriteSpots} />

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