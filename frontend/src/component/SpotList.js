import ListItem from "./ListItem";
import React, {useState} from "react";
import styled from "styled-components/macro";

export default function SpotList({filterCountry, surfSpots, filterContinent}){


    if(filterContinent?.name === '' && filterCountry?.name === ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots.map((spot) => (
                     <a href={"/" + spot.id}>
                        <li>
                            <ListItem key={spot.id} spot={spot}/>
                        </li>
                    </a>
                    ))}
                </ul>
            </Wrapper>
        )
    }else if(filterContinent?.name !== '' && filterCountry?.name === ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots.map((spot) => {
                        if (spot.spotLocationDetails.continent === filterContinent?.name) {
                            return <a href={"/" + spot.id}>
                                <li>
                                    <ListItem key={spot.id} spot={spot}/>
                                </li>
                            </a>
                        }
                    })}
                </ul>
            </Wrapper>
        )
    }else if(filterContinent?.name === '' && filterCountry?.name !== ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots.map((spot) => {
                        if (spot.spotLocationDetails.country === filterCountry?.name) {
                            return <a href={"/" + spot.id}>
                                <li>
                                    <ListItem key={spot.id} spot={spot}/>
                                </li>
                            </a>
                        }
                    })}
                </ul>
            </Wrapper>
        )
    }else{
        return (
            <Wrapper>
                <ul>
                    {surfSpots.map((spot) => {
                        if (spot.spotLocationDetails.continent === filterContinent?.name
                            && spot.spotLocationDetails.country === filterCountry?.name) {
                            return <a href={"/" + spot.id}>
                                <li>
                                    <ListItem key={spot.id} spot={spot}/>
                                </li>
                            </a>
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