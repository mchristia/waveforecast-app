import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import styled from "styled-components"
import FavoriteIcon from '@material-ui/icons/Favorite';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExploreIcon from '@material-ui/icons/Explore';
import useSurfSpot from "../hooks/useSurfSpots";
import useFavourites from "../hooks/useFavourites";
import ListItem from "../component/ListItem";

export default function HomePage(){

    const {surfSpots} = useSurfSpot()
    const {favourites, setFavourites} = useFavourites();
    const random1 = Math.floor(Math.random() * surfSpots.length);
    const random2 = Math.random() * surfSpots.length;
    return(
        <Wrapper>
            <div>
                Wind und Wellen
            </div>
            <div>
                <Link className="link" to={"/search"}>
                    <Button className="spotList" variant="outlined" >
                        <FormatListBulletedIcon/>
                    </Button>
                </Link>
                <Link className="link" to={"/map"}>
                    <Button className="map" variant="outlined" >
                        <ExploreIcon/>
                    </Button>
                </Link>
                <Link className="link" to={"/user"} >
                    <Button className="favourites" variant="outlined" >
                        <FavoriteIcon/>
                    </Button>
                </Link>
            </div>
            <div>
                {/*{surfSpots ? <ListItem*/}
                {/*    fromFavouritePage={false}*/}
                {/*    setFavouriteSpots={setFavourites}*/}
                {/*    favourite={favourites}*/}
                {/*    spot={surfSpots[random1]}/> : null*/}
                {/*}*/}

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


  Button {
    border-radius: 50%;
    background-color: lightblue;
    border: none;

  }

  .link {
    text-decoration: none;
  }
`