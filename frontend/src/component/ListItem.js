import {rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";
import {addToFavourites, removeFromFavourites} from "../service/surfSpotDataService";
import React, {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";
import styled from "styled-components/macro";
import {
    BiWater,
    FaTemperatureLow,
    IoWaterOutline,
    MdTimer,
    RiWindyFill,
    AiFillStar,
    AiOutlineStar
} from "react-icons/all";


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
                                <FaTemperatureLow size={20}/> {currentSurfData?.airTemperature.sg} °C

                            </div>
                            <div>
                                <IoWaterOutline size={20}/> {currentSurfData?.waterTemperature.sg} °C

                            </div>
                            <div>
                                <BiWater size={20}/> {currentSurfData?.swellHeight.sg} m

                            </div>
                            <div>
                                <MdTimer size={20}/>{currentSurfData?.swellPeriod.sg} s

                            </div>
                            <div>
                                <RiWindyFill size={20}/>{currentSurfData?.windSpeed.sg} km/h

                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="buttons">
                {!isFavourite && <button className="add" onClick={handleAdd}>
                    <AiOutlineStar size={30}/>
                </button>}
                {isFavourite && <button className="remove" onClick={handleRemove}>
                    <AiFillStar size={30}/>
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
  color: black;

  .content {
    padding: 8px;
    margin: 1px;
    background-color: transparent;

  }

  .link {
    text-decoration: none;
    color: black;
  }

  .title {
    text-align: center;
    font-size: 20px;
  }

  .subtitle {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .databox {
    display: flex;
    text-align: center;
    justify-content: space-around;
    align-content: space-between;
    flex-wrap: wrap;
    font-size: 12px;
    

    div {
      padding: 8px 1rem;
    }

  }

  .text {
    font-size: 11px;
    margin: 0;
    padding: 0;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;

  }

  .add {
    align-self: flex-start;
    background-color: transparent;
    border: none;
  }

  .remove {
    align-self: flex-end;
    background-color: transparent;
    border: none;
  }
`
