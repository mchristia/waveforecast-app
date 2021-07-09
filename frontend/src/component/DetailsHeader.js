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
                <button className="button2" onClick={() => {
                    history.push("/search");
                }}>
                    <ListAltIcon />
                </button>
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
            </div>
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
    justify-content: center;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .p1{
    text-align: end;
  }
  
  .p2{
    position: absolute;
    right: 1rem;
    text-align: end;
  }
  .body{
    display: flex;
   justify-content: space-around;
    padding-bottom: 1rem;
    
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
  
  .airTemp{
    display: flex;
    div{
      margin-left: 1em;
      margin-right: 1em;
    }
  }
  
  .waterTemp{
    display: flex;
    div{
      margin-left: 1em;
      margin-right: 1em;
    }
  }
  
  .waveDir{
    display: flex;
    div{
      margin-left: 1em;
      margin-right: 1em;
    }
  }
  
  .height{
    display: flex;
    div{
      margin-left: 1em;
      margin-right: 1em;
    }
  }
  
  .period{
    display: flex;
    div{
      margin-left: 1em;
      margin-right: 1em;
    }
  }
  
  .windDir{
    display: flex;
    div{
      margin-left: 1em;
      margin-right: 1em;
    }
  }
  
  .wind{
    display: flex;
    div{
      margin-left: 1em;
      margin-right: 1em;
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
    background-color: transparent;
    border: none;
  }
 
  .add-remove{
    display: flex;
    justify-content: flex-end;
   
    
  }
  .add-re-bu{
    position: absolute;
    right: 0.5rem;
    top: 11.5rem;
    background-color: transparent; 
    border: none;
  }
`