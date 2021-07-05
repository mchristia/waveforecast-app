import {rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";
import {addToFavourites, removeFromFavourites} from "../service/surfSpotDataService";
import React, {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import styled from "styled-components/macro";


export default function ListItem({spot, favourite, setFavouriteSpots, fromFavouritePage}){
    const {token} = useContext(AuthContext)
    const [isFavourite, setIsFavourite] = useState(favourite)
    const currentSurfData = rightTimeToShowCurrentTemp(spot)


    function handleAdd() {
        addToFavourites(spot.id, token).then(() => setIsFavourite(  true))
    }
    function handleRemove() {
        removeFromFavourites(spot.id, token)
            .then((item) => {
                setIsFavourite(false)
                if(fromFavouritePage){
                   setFavouriteSpots(item)
                }
            })
            .catch(error => console.error(error))
    }

    return(
        <Wrapper >
            <div className="content" >
                <Link className="link" to={{
                pathname: "/" + spot.id,
                state: {favourite: isFavourite}
            }}>
                    <div >
                        <div className="title"  >
                            <div className="title" >
                                {spot.spotLocationDetails.name}
                            </div>
                        </div>
                        <div className="subtitle" >
                            <p className="text">
                                {spot.spotLocationDetails.continent}, {spot.spotLocationDetails.country}, {spot.spotLocationDetails.region}
                            </p>
                        </div>
                        <div className="databox" >
                            <div>
                                <p>
                                    Air: {currentSurfData?.airTemperature.sg} °C
                                </p>
                            </div>
                            <div>
                                <p>
                                    Water: {currentSurfData?.waterTemperature.sg} °C
                                </p>
                            </div>
                            <div>
                                <p>
                                    {currentSurfData?.swellHeight.sg} m
                                </p>
                            </div>
                            <div>
                                <p>
                                    {currentSurfData?.swellPeriod.sg} s
                                </p>
                            </div>
                            <div>
                                <p>
                                    {currentSurfData?.windSpeed.sg} km/h
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="buttons">
                {!isFavourite && <button className="add" onClick={handleAdd}>
                    <StarOutlineIcon/>
                </button>}
                {isFavourite && <button className="remove" onClick={handleRemove}>
                    <StarIcon/>
                </button>}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div `
      text-decoration: none;
      min-width: 200px;
      min-height: 40px;
      background-color: lightblue;
      border-radius: 5px;
        
      .content {
        padding: 8px;
        margin: 1px;
        background-color: transparent;
        
      }
      .link{
        text-decoration: none;
      }
      .title {
        text-align: center;
      }
      .subtitle{
        text-align: center;
        margin: 0;
        padding: 0;
       } 
      .databox{
        display: flex;
        text-align: center ;
        justify-content: space-between;
        flex-wrap: wrap;
        font-size: 12px;
      }
      .weather{
        display: flex;
        flex-direction: column;

      }
      .text{
        font-size: 11px ;
        margin: 0;
        padding: 0;
      }
      .buttons {
        display: flex;
        justify-content: flex-end;

      }
      .add{
        align-self: flex-start;
        background-color: transparent;
        border: none;
      }
      .remove{
        align-self: flex-end ;
        background-color: transparent;
        border: none;
      }
    `
