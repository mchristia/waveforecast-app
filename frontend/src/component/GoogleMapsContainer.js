import {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import ListItem from "./ListItem";
import React, {useState} from "react";
import styled from "styled-components/macro";
import {Link} from "react-router-dom";
import TagFavourites from "../service/TagFavourites";

const libraries = ["places"];

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

export default function GoogleMapsContainer({center, surfSpots, onMapLoad, setFavouriteSpots, favouriteSpots, fromFavouritePage}){

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const mapContainerStyle = {
        width:"100vw",
        height: "100vh"
    };

    const [selected, setSelected] = useState(null);

    if(loadError) return "Error loading Maps";
    if(!isLoaded) return "Loading Maps";

    return(
        <>
        <Wrapper>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
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
                <Marker />
                {selected ? (
                    <InfoWindow className="infoWindow" position={{
                        lat: parseFloat(selected.spotLocationDetails.latitude),
                        lng: parseFloat(selected.spotLocationDetails.longitude)
                    }} onCloseClick={()=> {
                        setSelected(null);

                    }}>
                        <TagFavourites spot={selected} favouriteSpots={favouriteSpots}
                                       setFavouriteSpots={setFavouriteSpots}
                                       fromFavouritePage={fromFavouritePage}

                        />
                    </InfoWindow>
                ) : null}
            </GoogleMap>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
`