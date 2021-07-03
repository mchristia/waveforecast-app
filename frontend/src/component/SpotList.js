import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components/macro";
import {Link} from "react-router-dom";

export default function SpotList({surfSpots, favouriteSpots, setFavouriteSpots, filterCountry, filterContinent}){
console.log(favouriteSpots)
console.log(surfSpots)
console.log(favouriteSpots. includes(surfSpots[0]))

    function existsInFavourites(spot){
        for(let i=0; i < favouriteSpots.length; i++){
            if(favouriteSpots[i].id === spot.id){
                return true;
            }
        }
        return false
    }

    if(filterContinent?.name === '' && filterCountry?.name === ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots?.map((spot) => {
                        if (existsInFavourites(spot)) {
                            return <li>
                                <ListItem key={spot.id} spot={spot} favourite={true} setFavouriteSpopts={setFavouriteSpots}/>
                            </li>
                        } else {
                            return <li>
                                    <ListItem key={spot.id} spot={spot} favourite={false} setFavouriteSpopts={setFavouriteSpots}/>
                            </li>
                        }
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
                            return (
                                <li>
                                    <Link to={"/" + spot.id}>
                                        <ListItem key={spot.id} spot={spot}/>
                                    </Link>
                                </li>
                            )
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
                            return (
                                <li>
                                    <Link to={"/" + spot.id}>
                                        <ListItem key={spot.id} spot={spot}/>
                                    </Link>
                                </li>
                            )
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
                            return (
                                <li>
                                    <Link to={"/" + spot.id}>
                                        <ListItem key={spot.id} spot={spot}/>
                                    </Link>
                                </li>
                            )
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