import styled from "styled-components/macro";
import {Button, FormControl, InputLabel, makeStyles, Select} from "@material-ui/core";
import React, {useEffect, useState} from 'react';
import SpotList from "../component/SpotList";
import {Link} from "react-router-dom";
import useSurfSpot from "../hooks/useSurfSpots";
import useFavourites from "../hooks/useFavourites";
import useFilter from "../hooks/useFilter";

export default function SearchPage(){
    const {surfSpots} = useSurfSpot();
    const {favourites, setFavourites} = useFavourites();
    const {handleChangeCountry,
        handleChangeContinent,
        continents,
        countries,
        filterCountry,
        filterContinent} = useFilter(surfSpots);
    const classes = useStyles();

    return(
        <Wrapper >
            <div className="head">
            <section className="buttons">
                <div className="b1">
                    <Button component={Link} to={"/home"}>Back to Start</Button>
                </div>
                <div className="b2">
                    <Button component={Link} to={"/map"}>go to maps</Button>
                </div>
            </section>
            <div className="filter" >
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Continent</InputLabel>
                    <Select
                        native
                        value={filterContinent.name}
                        onChange={handleChangeContinent}
                        inputProps={{
                            name: 'name',
                            id: 'continent',
                        }}
                    >
                        <option aria-label="None" value="" />
                        {continents.map((continent) =>(<option value={continent}>{continent}</option>))}
                    </Select>
                </FormControl>
                <div>
                </div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Country</InputLabel>
                    <Select
                        native
                        value={filterCountry.name}
                        onChange={handleChangeCountry}
                        inputProps={{
                            name: 'name',
                            id: 'country',
                        }}
                    >
                        <option aria-label="None" value="" />
                        {countries.map((country) =>(<option value={country}>{country}</option>))}
                    </Select>
                </FormControl>
            </div>
            </div>
            <div>
                <SpotList surfSpots={surfSpots}
                          favouriteSpots={favourites}
                          setFavouriteSpots={setFavourites}
                          filterContinent={filterContinent}
                          filterCountry={filterCountry}/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  
  FormControll{
    border: darkblue solid 1px;
  }
  .head{
    position: sticky;
    top:0;
    z-index: 2;
    background-color: white;
  }
  .filter{
    display: flex;
    justify-content: space-around;
  }
  .buttons{
    display: flex;
    justify-content: space-between;
  }
  .b1{
    margin: 5px;
    border: solid black 1px;
    border-radius: 3px;
    background-image: linear-gradient(45deg, lightblue, yellow);
  }
  .b2{
    margin: 5px;
    border: solid black 1px;
    border-radius: 3px;
    background-image: linear-gradient(45deg, lightblue, yellow);
  }
`

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));