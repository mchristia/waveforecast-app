import styled from "styled-components/macro";

export default function SpotItem({spot}){

    console.log(spot.spotLocationDetails.id)
// Now put all the data in the item!
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
      color: black
`