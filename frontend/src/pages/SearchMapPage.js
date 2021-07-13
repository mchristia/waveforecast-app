import React, {useCallback, useRef} from "react";
import  { useLoadScript } from "@react-google-maps/api";
import styled from "styled-components/macro";
import {useHistory, useLocation} from "react-router-dom"
import {geolocated} from "react-geolocated";
import GoogleMapsContainer from "../component/GoogleMapsContainer";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong"
import FavoriteIcon from '@material-ui/icons/Favorite';
import useSurfSpot from "../hooks/useSurfSpots";
import useFavourites from "../hooks/useFavourites";




const libraries = ["places"];

 function SearchMapPage( geoLocation ) {


     const spotLocation = useLocation()
     const {surfSpots} = useSurfSpot();
     const {favourites, setFavourites} = useFavourites();
     const history = useHistory();
     const fromFavouritePage = false;

     const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
     });

    let currentLocation = {
        lat: spotLocation.state?.lat ? parseFloat(spotLocation.state.lat): 0,
        lng: spotLocation.state?.lng ? parseFloat(spotLocation.state.lng): 0
    }

     const center = () => {
         if(currentLocation.lat === 0){
           return {
               lat: geoLocation.coords ? geoLocation.coords.latitude : 50.9632238,
               lng: geoLocation.coords ? geoLocation.coords.longitude : 6.9369613
           }
         }else{
           return{
               lat: parseFloat(spotLocation.state.lat),
               lng: parseFloat(spotLocation.state.lng)
           }
         }
     }


    const mapRef = useRef();
    const onMapLoad = useCallback((map) =>{
        mapRef.current = map;
    },[]);

     const panTo = React.useCallback(({ lat, lng }) => {
         mapRef.current.panTo({ lat, lng });
         mapRef.current.setZoom(12);
     }, []);

    if(loadError) return "Error loading Maps";
    if(!isLoaded) return "Loading Maps";


    return(
        <Wrapper>
            <div className="header">
                <h1>Surf Spots</h1>
                <button className="button1"
                    onClick={() => {
                        currentLocation = {
                            lat: 0,
                            lng: 0
                        }
                        panTo(center());
                    }}>
                    <CenterFocusStrongIcon />

                </button>
                <button className="button2" onClick={() => {
                    history.push("/user");
                }}>
                    <FavoriteIcon />
                </button>
                <button className="button3" onClick={() => {
                    history.push("/search");
                }}>
                    <ListAltIcon />
                </button>
            </div>
            <div className="map">
                <GoogleMapsContainer surfSpots={surfSpots}
                                     center={center()}
                                     onMapLoad={onMapLoad}
                                     favouriteSpots={favourites}
                                     setFavouriteSpots={setFavourites}
                                     fromFavouritePage={fromFavouritePage}
                />
            </div>
        </Wrapper>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
        watchPosition: true,
    },
    userDecisionTimeout: 5000,
})(SearchMapPage);

const Wrapper = styled.div`
  
  .button1{
    position: absolute;
    top: 1rem;
    left: 50%;
    z-index: 2;
    background-color: transparent;
    border: none;
  }
  
  .button2{
    position: absolute;
    z-index: 2;
    top: 1rem;
    right: 5.5rem;
    background-color: transparent;
    border: none;
  }
  .button3{
    position: absolute;
    z-index: 2;
    top: 1rem;
    right: 2rem;
    background-color: transparent;
    border: none;
  }
  
  .map{
    display: flex;
    justify-content: center;
  }
  
  h1{
    font-family: "Bradley Hand";
    position: absolute;
    top: 1rem;
    left:1rem;
    color: lightblue;
    text-shadow: 0 0 5px black;
    z-index: 2;
    margin: 1px;
    padding: 1px;
    font-size: 1.5rem;
    text-shadow: black;
  }
`