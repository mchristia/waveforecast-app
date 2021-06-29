import React, {useCallback, useRef, useState} from "react";
import  {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import styled from "styled-components/macro";
import ListItem from "../component/ListItem";
import {useHistory} from "react-router-dom"
import {geolocated} from "react-geolocated";
import GoogleMapsContainer from "../component/GoogleMapsContainer";


const libraries = ["places"];

 function SearchMapPage({surfSpots}, geoLocation ) {

    const history = useHistory();
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

     const center = {
         lat: geoLocation.coords ? geoLocation.coords.latitude : 50.9632238,
         lng: geoLocation.coords ? geoLocation.coords.longitude : 6.9369613
     }

    const [selected, setSelected] = useState(null);

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
            <h1>Surf Spots</h1>
            <button
                className="locate"
                onClick={() => {
                    panTo({lat: center.lat, lng: center.lng,});
                }}>
                Back to current location
            </button>
            <button onClick={() => {
                history.goBack();
            }}>go back to list
            </button>

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
  display: flex;
  justify-content: center;
  
  a{
    text-decoration: none;
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