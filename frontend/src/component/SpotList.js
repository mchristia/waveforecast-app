import ListItem from "./ListItem";
import React, {useState} from "react";
import styled from "styled-components/macro";
import {Link, NavLink} from "react-router-dom";

export default function SpotList({filterCountry, surfSpots}){
    const [filter, setFilter] = useState({
        country :"",
        continent : "",
        region : "",
        }
    )

    return (
        <Wrapper>
            <ul>
                {surfSpots.map((spot) => (
                    <a href={"/"+spot.id} >
                        <li>
                            <ListItem spot ={spot} />
                        </li>
                    </a>
                ))}
            </ul>
        </Wrapper>
    )
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