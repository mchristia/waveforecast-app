import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import styled from "styled-components"
import FavoriteIcon from '@material-ui/icons/Favorite';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ExploreIcon from '@material-ui/icons/Explore';

export default function HomePage(){

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
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-image: url("/images/background-picture.png");
  height: 100%;
  background-size: cover;                      
  background-repeat: no-repeat;
  background-position: -367px;


  Button {
    border-radius: 50%;
    background-image: linear-gradient(45deg, lightblue, yellow);

  }

  .link {
    text-decoration: none;
  }
`