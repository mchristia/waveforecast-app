import React, {useCallback, useRef, useState} from "react";
import  { useLoadScript } from "@react-google-maps/api";
import styled from "styled-components/macro";
import {useHistory} from "react-router-dom"
import {geolocated} from "react-geolocated";
import GoogleMapsContainer from "../component/GoogleMapsContainer";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong"
import useSurfSpot from "../hooks/useSurfSpots";

const libraries = ["places"];

 function SearchMapPage( geoLocation ) {
     const {surfSpots} = useSurfSpot();
     const history = useHistory();
     const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
     });

     const center = {
         lat: geoLocation.coords ? geoLocation.coords.latitude : 50.9632238,
         lng: geoLocation.coords ? geoLocation.coords.longitude : 6.9369613
     }

    const mapRef = useRef();
    const onMapLoad = useCallback((map) =>{
        mapRef.current = map;
    },[]);

     const panTo = React.useCallback(({ lat, lng }) => {
         console.log("in panTo")
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
                        panTo({lat: center.lat, lng: center.lng,});
                    }}>
                    <CenterFocusStrongIcon/>

                </button>
                <button className="button2" onClick={() => {
                    history.push("/search");
                }}>
                    <ListAltIcon />
                </button>
            </div>
            <box className="map">
                <GoogleMapsContainer surfSpots={surfSpots} center={center} onMapLoad={onMapLoad}/>
            </box>
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
    background-image: linear-gradient(45deg, lightblue, yellow);
  }
  
  .button2{
    position: absolute;
    z-index: 2;
    top: 1rem;
    right: 2rem;
    background-image: linear-gradient(45deg, lightblue, yellow);
  }
  
  .map{
    display: flex;
    justify-content: center;
  }
  
  h1{
    position: absolute;
    top: 1rem;
    left:1rem;
    color: darkblue;
    z-index: 2;
    margin: 1px;
    padding: 1px;
    font-size: 1.5rem;
  }
`