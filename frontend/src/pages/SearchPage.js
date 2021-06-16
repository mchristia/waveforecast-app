import SpotItem from "../component/SpotItem";
import styled from "styled-components/macro";
import {FormControl, InputLabel, makeStyles, Select} from "@material-ui/core";
import React from 'react';




export default function SearchPage({spots}){



        const classes = useStyles();
        const [state, setState] = React.useState({
            age: '',
            name: 'hai',
        });

        const handleChange = (event) => {
            const name = event.target.name;
            setState({
                ...state,
                [name]: event.target.value,
            });
        };

    return(
        <Wrapper>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Country</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>France</option>
                    <option value={20}>Portugal</option>
                    <option value={30}>Spain</option>
                </Select>
            </FormControl>
            <ul>
                {spots.map((spot) => (
                    <li>
                        <SpotItem spot ={spot}/>
                    </li>
                    ))}
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  ul{
    padding : 2px;
    
  }    
  li{
    padding: 2px;
    background-color: aqua;
    border: black solid 1px;
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