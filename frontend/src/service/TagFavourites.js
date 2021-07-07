import ListItem from "../component/ListItem";
import React from "react";
import styled from "styled-components/macro";

export default function TagFavourites({spot, favouriteSpots, setFavouriteSpots, fromFavouritePage}){

    function existsInFavourites(spot, favouriteSpots) {
        if (favouriteSpots.length !== 0) {

            for (let i = 0; i < favouriteSpots.length; i++) {
                if (favouriteSpots[i].id === spot.id) {
                    return true;
                }
            }
        }
        return false
    }

    return <Wrapper>
        <ListItem className="listitem" text-decoration="none" key={spot.id}
                  spot={spot}
                  favourite={existsInFavourites(spot, favouriteSpots)}
                  setFavouriteSpots={setFavouriteSpots}
                  fromFavouritePage={fromFavouritePage}
        />
    </Wrapper>
}

const Wrapper = styled.div`
    
      -webkit-box-shadow: 2px 4px 22px 7px rgba(0,0,0,0.83);
      box-shadow: 2px 4px 22px 2px rgba(0,0,0,0.83);
  
`




