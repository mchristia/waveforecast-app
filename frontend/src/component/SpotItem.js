import styled from "styled-components/macro";

export default function SpotItem({spot}){
    return(
        <Wrapper>
            <p>
                {spot.name}
            </p>
            <p>
                {spot.geography.continent}
            </p>
            <p>
                {spot.geography.country}
            </p>
            <p>
                {spot.geography.region}
            </p>
            <p>
                {spot.geography.longitude}
            </p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: Arial;
      color: black
`