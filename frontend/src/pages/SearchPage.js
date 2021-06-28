import styled from "styled-components/macro";
import {Button, FormControl, InputLabel, makeStyles, Select} from "@material-ui/core";
import React, {useEffect, useState} from 'react';
import SpotList from "../component/SpotList";
import useSurfSpot from "../hooks/useSurfSpots";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";

export default function SearchPage({surfSpots}){

        const classes = useStyles();
        const [filterCountry, setFilterCountry] = useState({
            name: '',
        });

        const handleChangeCountry = (event) => {
            const name = event.target.name;
            setFilterCountry({
                ...filterCountry,
                [name]: event.target.value,
            });

        };

        console.log(surfSpots);

    const history = useHistory();
    function handleClick() {

        history.push("/map");
    }

    return(
        <Wrapper >
            <div>
                <Button component={Link} to={"/map"}>go to maps</Button>
            </div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Country</InputLabel>
                <Select
                    native
                    value={filterCountry.name}
                    onChange={handleChangeCountry}
                    inputProps={{
                        name: 'name',

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
  button{
    container:flex;
    flex-flow: row-reverse;
    
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