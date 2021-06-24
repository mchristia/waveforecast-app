import React, {useCallback, useRef, useState} from "react";
import  {GoogleMap, InfoWindow,InfoBox, Marker, useLoadScript} from "@react-google-maps/api";
import styled from "styled-components/macro";
import useSurfSpot from "../hooks/useSrufSpots";
import ListItem from "../component/ListItem";
import {getGeodode, getLatLng} from "use-places-autocomplete"


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
    // const {surfSpots} = useSurfSpot();

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

    if(loadError) return "Error loading Maps";
    if(!isLoaded) return "Loading Maps";
    console.log(React.version)
    console.log(selected)

    const mapContainerStyle = {
        width:"100vw",
        height: "100vh"
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