import ListItem from "./ListItem";
import React, {useState} from "react";
import styled from "styled-components/macro";
import {Link} from "react-router-dom";

export default function SpotList({filterCountry, surfSpots, filterContinent}){


    if(filterContinent?.name === '' && filterCountry?.name === ''){
        return (
            <Wrapper>
                <ul>
                    {surfSpots.map((spot) => (
                        <li>
                            <Link to={"/" + spot.id}>
                                <ListItem key={spot.id} spot={spot}/>
                            </Link>
                        </li>
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
                    {surfSpots.map((spot) => {
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
                    {surfSpots.map((spot) => {
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