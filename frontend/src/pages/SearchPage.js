import styled from "styled-components/macro";
import {Button, FormControl, InputLabel, makeStyles, Select} from "@material-ui/core";
import React, {useEffect, useState} from 'react';
import SpotList from "../component/SpotList";
import {Link} from "react-router-dom";

export default function SearchPage({surfSpots}){

    const classes = useStyles();
    const [filterContinent, setFilterContinent] = useState({
        name: '',
    });
    const [filterCountry, setFilterCountry] = useState({
        name: '',
    });

    const handleChangeContinent = (event) => {
        const name = event.target.name;
        setFilterContinent({...filterContinent, [name]: event.target.value,});
    };

    const handleChangeCountry = (event) => {
        const name = event.target.name;
        setFilterCountry({...filterCountry, [name]: event.target.value,});
    };

    console.log(surfSpots);


    let continents = [...new Set(surfSpots?.map(spot => spot.spotLocationDetails.continent))]
    let countries = [...new Set(surfSpots?.map(spot => spot.spotLocationDetails.country))]
    if(filterContinent.name !== ""){
        countries = [...new Set(surfSpots?.map((spot) => {
            if(spot.spotLocationDetails.continent === filterContinent.name)
             return spot.spotLocationDetails.country;
        }))]
    }
    console.log(filterContinent.name)
    console.log(countries)


    return(
        <Wrapper >
            <section className="head">
                <div className="b1">
                    <Button component={Link} to={"/"}>Back to Start</Button>
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

            <div>
                <SpotList surfSpots={surfSpots}
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
  .filter{
    display: flex;
    justify-content: space-around;
  }
  .head{
    display: flex;
    justify-content: space-between;
  }
  .b1{
    margin: 5px;
    border: solid black 1px;
    border-radius: 3px
  }
  .b2{
    margin: 5px;
    border: solid black 1px;
    border-radius: 3px;
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