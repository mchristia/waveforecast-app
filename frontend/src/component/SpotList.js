import SpotItem from "./SpotItem";
import React, {useState} from "react";
import styled from "styled-components/macro";

export default function SpotList({spots, filterCountry}){
    const [filter, setFilter] = useState({
        country :"",
        continent : "",
        region : "",
        }
    )

    return (
        <Wrapper>
            <ul>
                {spots.map((spot) => (
                    <li>
                        <SpotItem spot ={spot}/>
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
  li{
    padding: 2px;
    background-color: aqua;
    border: black solid 1px;
  }
`