import React, {useCallback, useRef, useState} from "react";
import  {GoogleMap, Marker,useLoadScript} from "@react-google-maps/api";
import styled from "styled-components/macro";

const libraries = ["places"];
const options = {
    disableDefaultUI: true,
    zoomControl: true,

};

export default function SearchMapPage() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const [markers, setMarkers] = useState([])

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

    if(loadError) return "Error loading Maps";
    if(!isLoaded) return "Loading Maps";
    console.log(React.version)
    const mapContainerStyle = {
        width:"100vw",
        height: "100vh"
    };
    const center = {
        lat:43.95339608383859,
        lng:-1.3642210235940333
    };
    return(
        <Wrapper>
            <h1>Surf Spots</h1>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers.map((marker) =>(
                    <Marker key={marker.lat} position={{lat: marker.lat, lng: marker.lng}}/>
                ))}
            </GoogleMap>
        </Wrapper>
    )
}
const Wrapper = styled.div`

    h1{
      position: absolute;
      top: 1rem;
      left:1rem;
      color: darkblue;
      z-index: 2;
      margin: 0;
      padding: 0;
      font-size: 1.5rem;
    }
`