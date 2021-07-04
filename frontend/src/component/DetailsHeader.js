import React, {useContext, useState} from "react"
import {getDirection, rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";
import styled from "styled-components/macro";
import ListAltIcon from "@material-ui/icons/ListAlt";
import {useHistory, useLocation} from "react-router-dom"
import {addToFavourites, removeFromFavourites} from "../service/surfSpotDataService";
import AuthContext from "../context/AuthContext";
import useFavourites from "../hooks/useFavourites";
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

export default function DetailsHeader({surfSpot, id}){

    const favourite = useLocation()
    const {token} = useContext(AuthContext)
    const {favourites, setFavourites} = useFavourites();
    const history = useHistory();
    const now = Date.now()
    const currentSurfData = rightTimeToShowCurrentTemp(surfSpot)
    const [isFavourite, setIsFavourite] = useState(favourite.state.favourite)

    console.log(favourite.state.favourite)
    console.log(isFavourite)
    function handleAdd() {
        addToFavourites(id, token).then(() => setIsFavourite(true))
    }
    function handleRemove() {
        console.log(favourites)
        removeFromFavourites(id, token)
            .then((item) => setFavourites(item))
            .then(() => setIsFavourite(false))
    }

    return(
        <Wrapper>
            <div className="title">
                <h2>{surfSpot?.spotLocationDetails.name}</h2>
                <div>
                    <img src="/frontend/src/img/app-icon.jpg" alt="icon" width="15px" height="15px"/>
                </div>
                <button className="button2" onClick={() => {
                    history.push("/search");
                }}>
                    <ListAltIcon />
                </button>
                <div className="subtitle">
                    <p>{surfSpot?.spotLocationDetails.continent}, {surfSpot?.spotLocationDetails.country}, {surfSpot?.spotLocationDetails.region}</p>
                    <p>{new Date(now).toLocaleTimeString(navigator.language, {
                        hour: '2-digit',
                        minute:'2-digit'
                    })}</p>
                </div>

            </div>
            <section className="body">
                <div className="body-left">
                    <div>
                        <p>
                            Air: {currentSurfData?.airTemperature.sg}
                        </p>
                    </div>
                    <div>
                        <p>
                            Water: {currentSurfData?.waterTemperature.sg}
                        </p>
                    </div>
                    <div>
                        <p>
                            Wave Direction:  {getDirection(currentSurfData?.swellDirection.sg)}
                        </p>
                    </div>
                    <div>
                        <p>
                            Wave Height: {currentSurfData?.swellHeight.sg}
                        </p>
                    </div>
                </div>
                <div className="body-right">
                    <div>
                        <p>
                            Wave Period: {currentSurfData?.swellPeriod.sg}
                        </p>
                    </div>
                    <div>
                        <p>
                            Wind Direction: {getDirection(currentSurfData?.windDirection.sg)}
                        </p>
                    </div>
                    <div>
                        <p>
                            Wind Speed: {currentSurfData?.windSpeed.sg}
                        </p>
                    </div>
                </div>
            </section>
            <div className="add-remove">
                {!isFavourite &&
                <button onClick={handleAdd}>
                    <StarOutlineIcon/>
                </button>}
                {isFavourite &&
                <button onClick={handleRemove}>
                    <StarIcon/>
                </button>}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  border-bottom: black solid 2px;
  background-image: linear-gradient(45deg, lightblue, yellow);
  border-top-right-radius: 2%;
  border-top-left-radius: 2%;
  
  .title{
    padding-top: 2px;
    
  }
  
  h2{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
  
  .subtitle{
    display: flex;
    justify-content: space-between ;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .body{
    display: flex;
   justify-content: space-around;
    
  }
  
  .body-left{
    display: flex;
    flex-flow: column ;
    font-size: 14px;
    p{
      padding: 1px;
      margin: 2px;
    }
    
  }
  
  .body-right{
    display: flex;
    flex-flow: column ;
    font-size: 14px;
    p{
      padding: 1px;
      margin: 2px;
    }
  }
  .body.p{
    padding: 0px;
    margin: 0px;
  }
  
  .button2{
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  img{
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
  }
  .add-remove{
    display: flex;
    justify-content: flex-end;
  }
`