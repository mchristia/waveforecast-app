import ListItem from "./ListItem";
import React, {useState} from "react";
import styled from "styled-components/macro";

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
                    <li>
                        <ListItem spot ={spot}/>
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}
const Wrapper = styled.div`
  ul{
    padding : 2px;
  }
`