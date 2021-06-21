import styled from "styled-components/macro";
import {FormControl, InputLabel, makeStyles, Select} from "@material-ui/core";
import React, {useEffect, useState} from 'react';
import SpotList from "../component/SpotList";
import axios from "axios";




export default function SearchPage(){

        const classes = useStyles();
        const [filterCountry, setFilterCountry] = React.useState({
            name: '',
        });

        const [surfSpots, setSurfSpots] = useState([])

        const handleChangeCountry = (event) => {
            const name = event.target.name;
            setFilterCountry({
                ...filterCountry,
                [name]: event.target.value,
            });

        };

    useEffect(() => {
        axios.get("/api/surfspots/all")
            .then((response) => response.data)
            .then(data => setSurfSpots(data))
            .catch(error => console.error(error))
    }, [])


    return(
        <Wrapper>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Country</InputLabel>
                <Select
                    native
                    value={filterCountry.name}
                    onChange={handleChangeCountry}
                    inputProps={{
                        name: 'name',
                        id: 'age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={"France"}>France</option>
                    <option value={"Portugal"}>Portugal</option>
                    <option value={"Spain"}>Spain</option>
                </Select>
            </FormControl>
            <div>
                <SpotList surfSpots={surfSpots}  filterCountry={filterCountry}/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  ul{
    padding : 2px;
    
  }
  
  FormControll{
    border: darkblue solid 1px;
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