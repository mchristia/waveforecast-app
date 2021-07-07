import {Button, FormControl, InputLabel, makeStyles, Select} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";
import ExploreIcon from '@material-ui/icons/Explore';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from "@material-ui/icons/ListAlt";
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function SurfSpotFilter({filterContinent,
                                           filterCountry,
                                           handleChangeContinent,
                                           handleChangeCountry,
                                           continents,
                                           countries,
                                           title}) {

    const classes = useStyles();

    return(
        <Wrapper className="head">
            <section className="buttons">
                <div>
                    <h3>{title}</h3>
                </div>
                <div className="b1">
                    <Button component={Link} to={"/home"}>
                    <HomeIcon/>
                    </Button>
                </div>
                <div className="b2">
                        {title === "Your Favourites" ?
                            <Button component={Link} to={"/search"}>
                                <ListAltIcon/>
                            </Button>
                                :
                            <Button component={Link} to={"/user"}>
                                <FavoriteIcon/>
                            </Button>}
                </div>
                <div className="b3">
                    <Button component={Link} to={"/map"}>
                        <ExploreIcon/>
                    </Button>
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
                        {countries.map((country) =>(<option key={country} value={country}>{country}</option>))}
                    </Select>
                </FormControl>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: lightblue;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 0;
  margin-right: 0;
  
  FormControll{
  //  border: darkblue solid 1px;
  }
  h3{
    position: sticky;
    z-index: 3;
    margin:2px;
  }
  .head{
    position: sticky;
    top:0;
    z-index: 2;
  }
  .filter{
    display: flex;
    justify-content: space-around;
  }
  .buttons{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem;
  }
  .b1{
    margin: 2px;
    border-radius: 3px;
    background-color: transparent;
  }
  .b2{
    margin: 2px;
    border-radius: 3px;
    background-color: transparent;
  }
  .b3{
    margin: 2px;
    border-radius: 3px;
    background-color: transparent;
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