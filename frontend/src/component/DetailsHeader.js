import React, {useContext, useState} from "react"
import {getDirection, rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";
import styled from "styled-components/macro";
import ListAltIcon from "@material-ui/icons/ListAlt";
import {Link, useHistory, useLocation} from "react-router-dom"
import {addToFavourites, removeFromFavourites} from "../service/surfSpotDataService";
import AuthContext from "../context/AuthContext";
import useFavourites from "../hooks/useFavourites";
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import {
    BiWater,
    FaTemperatureLow,
    GiEchoRipples,
    GiWindsock,
    IoWaterOutline,
    MdTimer,
    RiWindyFill,
    AiFillStar,
    AiOutlineStar
} from "react-icons/all";
import {Button} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExploreIcon from "@material-ui/icons/Explore";


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
            <section className="buttons">
                <div>
                    <h2>{surfSpot?.spotLocationDetails.name}</h2>
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
            <div className="subtitle">
                <div>
                    <p className="p1">{surfSpot?.spotLocationDetails.continent}, {surfSpot?.spotLocationDetails.country}, {surfSpot?.spotLocationDetails.region}</p>
                </div>
                <div>
                    <p className="p2">{new Date(now).toLocaleTimeString(navigator.language, {
                        hour: '2-digit',
                        minute:'2-digit'
                    })}</p>
                </div>
            </div>
            {/*<div className="title">*/}
            {/*    <h2>{surfSpot?.spotLocationDetails.name}</h2>*/}
            {/*    <button className="button2" onClick={() => {*/}
            {/*        history.push({pathname:"/map",*/}
            {/*        state:{lat: surfSpot.spotLocationDetails.latitude,*/}
            {/*        lng: surfSpot.spotLocationDetails.longitude}});*/}
            {/*    }}>*/}
            {/*        <ListAltIcon />*/}
            {/*    </button>*/}
            {/*    /!*<button className="button2" onClick={() => {*!/*/}
            {/*    /!*    history.push("/search");*!/*/}
            {/*    /!*}}>*!/*/}
            {/*    /!*    <ListAltIcon />*!/*/}
            {/*    /!*</button>*!/*/}
            {/*    <div className="subtitle">*/}
            {/*        <div>*/}
            {/*            <p className="p1">{surfSpot?.spotLocationDetails.continent}, {surfSpot?.spotLocationDetails.country}, {surfSpot?.spotLocationDetails.region}</p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*        <p className="p2">{new Date(now).toLocaleTimeString(navigator.language, {*/}
            {/*            hour: '2-digit',*/}
            {/*            minute:'2-digit'*/}
            {/*        })}</p>*/}
            {/*    </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <section className="body">
                <div className="body-left">
                    <div className="airTemp">
                        <div>
                            <FaTemperatureLow size={20}/>

                        </div>
                        <p>
                            {currentSurfData?.airTemperature.sg} °C
                        </p>
                    </div >
                    <div className="waterTemp">
                        <div >
                            <IoWaterOutline size={20}/>
                        </div>
                        <p>
                            {currentSurfData?.waterTemperature.sg} °C
                        </p>
                    </div>
                    <div className="waveDir">
                        <div >
                            <GiEchoRipples size={20}/>
                        </div>
                        <p>
                            {getDirection(currentSurfData?.swellDirection.sg)}
                        </p>
                    </div>

                    <div className="height">
                        <div>
                            <BiWater size={20}/>
                        </div>
                        <p>
                            {currentSurfData?.swellHeight.sg} m
                        </p>
                    </div>

                </div>
                <div className="body-right">
                    <div className="period">
                        <div>
                            <MdTimer size={20}/>
                        </div>
                        <p>
                            {currentSurfData?.swellPeriod.sg} s
                        </p>
                    </div>
                    <div className="windDir">
                        <div>
                            <GiWindsock size={20}/>
                        </div>
                        <p>
                            {getDirection(currentSurfData?.windDirection.sg)}
                        </p>
                    </div>
                    <div className="wind">
                        <div >
                            <RiWindyFill size={20}/>
                        </div>
                        <p>
                        {currentSurfData?.windSpeed.sg} km/h
                    </p>
                    </div>
                </div>
                {!isFavourite &&
                    <button className="add-re-bu" onClick={handleAdd}>
                        <AiOutlineStar size={30}/>
                    </button>}
                {isFavourite &&
                    <button className="add-re-bu" onClick={handleRemove}>
                        <AiFillStar size={30}/>
                    </button>}
            </section>

        </Wrapper>
    )
}

const Wrapper = styled.section`
  position: relative;
  background-color: lightblue;
  border-top-right-radius: 2%;
  border-top-left-radius: 2%;

  h2 {
    position: sticky;
    z-index: 3;
    margin: 2px;
  }

  .head {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  .filter {
    display: flex;
    justify-content: space-around;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem 1rem 0;
  }

  .b1 {
    margin: 2px;
    border-radius: 3px;
    background-color: transparent;
  }

  .b2 {
    margin: 2px;
    border-radius: 3px;
    background-color: transparent;
  }

  .b3 {
    margin: 2px;
    border-radius: 3px;
    background-color: transparent;
  }

  .title {
    padding-top: 2px;
  }

  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .p1 {
    text-align: end;
    padding-left: 0.5rem;
    margin-top: 0;
  }

  .p2 {
    padding-right: 0.5rem;
    font-size: 14px;
    margin-top: 0;
  }

  .body {
    display: flex;
    justify-content: space-around;
    padding-bottom: 1rem;

  }

  .body-left {
    display: flex;
    flex-flow: column;
    font-size: 14px;

    p {
      padding: 1px;
      margin: 2px;
    }

  }

  .body-right {
    display: flex;
    flex-flow: column;
    font-size: 14px;

    p {
      padding: 1px;
      margin: 2px;
    }
  }

  .airTemp {
    display: flex;

    div {
      margin-left: 1em;
      margin-right: 1em;
    }
  }

  .waterTemp {
    display: flex;

    div {
      margin-left: 1em;
      margin-right: 1em;
    }
  }

  .waveDir {
    display: flex;

    div {
      margin-left: 1em;
      margin-right: 1em;
    }
  }

  .height {
    display: flex;

    div {
      margin-left: 1em;
      margin-right: 1em;
    }
  }

  .period {
    display: flex;

    div {
      margin-left: 1em;
      margin-right: 1em;
    }
  }

  .windDir {
    display: flex;

    div {
      margin-left: 1em;
      margin-right: 1em;
    }
  }

  .wind {
    display: flex;

    div {
      margin-left: 1em;
      margin-right: 1em;
    }
  }

  .body.p {
    padding: 0px;
    margin: 0px;
  }

  .button2 {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-color: transparent;
    border: none;
  }

  .add-remove {
    display: flex;
    justify-content: flex-end;
    
  }

  .add-re-bu {
    position: absolute;
    right: 0.5rem;
    top: 12rem;
    background-color: transparent;
    border: none;
  }
`