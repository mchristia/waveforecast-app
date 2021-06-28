import React, {useCallback, useRef, useState} from "react";
import  {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import styled from "styled-components/macro";
import ListItem from "../component/ListItem";
import {getGeodode, getLatLng} from "use-places-autocomplete"
import {useHistory} from "react-router-dom"

const libraries = ["places"];
const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

const center = {
    lat:50.9632238,
    lng:6.9369613
}

export default function SearchMapPage({surfSpots}) {
    const history = useHistory();
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);

    const onMapClick = useCallback((event) =>{
        setMarkers((current) =>[...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }])
    }, []);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) =>{
        mapRef.current = map;
    },[]);

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    }, []);

    if(loadError) return "Error loading Maps";
    if(!isLoaded) return "Loading Maps";
    console.log(React.version)
    console.log(selected)

    const mapContainerStyle = {
        width:"100vw",
        height: "100vh"
    };
 function onButtonClick(){
     history.goBack();
 }


    return(
        <Wrapper>
            <h1>Surf Spots</h1>
            <Locate panTo={panTo}/>
            <button onClick={() => {
                history.goBack();
            }}>go back to list
            </button>

            <box className="map">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {surfSpots.map((spot) =>(
                    <Marker key={spot.spotLocationDetails.id}
                            position={{
                                lat: parseFloat(spot.spotLocationDetails.latitude),
                                lng: parseFloat(spot.spotLocationDetails.longitude)
                            }}
                            onClick={()=>{
                                setSelected(spot)
                            }}
                    />
                ))}
                {selected ? (
                    <InfoWindow position={{
                        lat: parseFloat(selected.spotLocationDetails.latitude),
                        lng: parseFloat(selected.spotLocationDetails.longitude)
                    }} onCloseClick={()=> {
                        setSelected(null);

                    }}>
                        <ListItem spot={selected}/>
                    </InfoWindow>
                ) : null}
            </GoogleMap>
            </box>
        </Wrapper>
    )
}

function Locate ({panTo}) {
    return (
        <button
            className="locate"
            onClick={() => {
                 navigator.geolocation.getCurrentPosition(
                (position) => {
                    panTo({
                        lat: position.cords.latitude,
                        lng: position.cords.longitude
                    });
             }, ()=>null);
        }}>
            find your position
        </button>
    )
}
const Wrapper = styled.div`

  .map{
    
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