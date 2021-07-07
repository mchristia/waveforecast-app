import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import styled from "styled-components"
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExploreIcon from '@material-ui/icons/Explore';
import useSurfSpot from "../hooks/useSurfSpots";
import useFavourites from "../hooks/useFavourites";
import ListItem from "../component/ListItem";
import ListAltIcon from "@material-ui/icons/ListAlt";
import React from "react";

export default function HomePage(){

    const {surfSpots} = useSurfSpot()
    const {favourites, setFavourites} = useFavourites();
    const random1 = Math.floor(Math.random() * surfSpots.length);

    console.log(surfSpots[random1])
    return(
        <Wrapper>
            <section className="header">
                <div>
                    <h3>Aloha Forecast</h3>
                </div>
                <div className="b1">
                    <Button component={Link} to={"/search"}>
                        <ListAltIcon/>
                    </Button>
                </div>
                <div className="b2">
                        <Button component={Link} to={"/user"}>
                            <FavoriteIcon/>
                        </Button>
                </div>
                <div className="b3">
                    <Button component={Link} to={"/map"}>
                        <ExploreIcon/>
                    </Button>
                </div>
            </section>

            <div className="preview1">
                {surfSpots?.length > 0 ?
                    <ListItem
                        fromFavouritePage={false}
                        setFavouriteSpots={setFavourites}
                        favourite={favourites}
                        spot={surfSpots[random1]}/>

                : null
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-image: url("/images/app-logo-above1.png");
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px 1rem 1rem;
    background-color: lightblue;
  }

  .preview1 {
    margin-top: 35%;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    -webkit-box-shadow: 2px 4px 22px 7px rgba(0,0,0,0.83);
    box-shadow: 2px 4px 22px 2px rgba(0,0,0,0.83);
    
  }

  .link {
    text-decoration: none;
  }
`