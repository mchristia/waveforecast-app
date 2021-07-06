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
    RiWindyFill
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
                    <p className="p1">{surfSpot?.spotLocationDetails.continent}, {surfSpot?.spotLocationDetails.country}, {surfSpot?.spotLocationDetails.region}</p>
                    <p className="p2">{new Date(now).toLocaleTimeString(navigator.language, {
                        hour: '2-digit',
                        minute:'2-digit'
                    })}</p>
                </div>
            </div>
            <section className="body">
                <div className="body-left">
                    <div>
                        <FaTemperatureLow size={20}/> {currentSurfData?.airTemperature.sg}

                    </div>
                    <div>
                        <IoWaterOutline size={20}/> {currentSurfData?.waterTemperature.sg}

                    </div>
                    <div>
                       <GiEchoRipples size={20}/> {getDirection(currentSurfData?.swellDirection.sg)}

                    </div>
                    <div>
                        <BiWater size={20}/> {currentSurfData?.swellHeight.sg}

                    </div>
                </div>
                <div className="body-right">
                    <div>
                        <MdTimer size={20}/> {currentSurfData?.swellPeriod.sg}

                    </div>
                    <div>
                        <GiWindsock size={20}/>{getDirection(currentSurfData?.windDirection.sg)}

                    </div>
                    <div>
                        <RiWindyFill size={20}/> {currentSurfData?.windSpeed.sg}

                    </div>
                </div>
            </section>
            <div className="add-remove">
                {!isFavourite &&
                <button className="add-re-bu" onClick={handleAdd}>
                    <StarOutlineIcon/>
                </button>}
                {isFavourite &&
                <button className="add-re-bu" onClick={handleRemove}>
                    <StarIcon/>
                </button>}
            </div>
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
    justify-content: flex-end;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .p1{
    flex-grow: 1;
    text-align: end;
  }
  
  .p2{
    flex-grow: 1;
    text-align: end;
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
    background-color: transparent;
    border: none;
  }
 
  .add-remove{
    display: flex;
    justify-content: flex-end;
   
    
  }
  .add-re-bu{
    background-color: transparent; 
    border: none;
  }
`