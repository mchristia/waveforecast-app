import styled from "styled-components/macro";

export default function SpotItem({spot}){

    return(
        <Wrapper>
            <p>{spot.spotLocationDetails.name}</p>
            <p>{spot.spotLocationDetails.continent}</p>
            <p>{spot.spotLocationDetails.country}</p>
            <p>{spot.spotLocationDetails.region}</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: Arial;
      color: black;
      display: flex;
      flex-direction: column;
      background: lightblue;
      border: darkgrey 2px solid;
      border-radius: 6px;
      padding: 12px;
      margin: 12px;
      text-align: center;
`