import {Box, makeStyles, Typography, ThemeProvider} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"
import {rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";
import {addToFavourites, removeFromFavourites} from "../service/surfSpotDataService";
import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import {Link} from "react-router-dom";
import useFavourites from "../hooks/useFavourites";

    const useStyles = makeStyles({
        root: {
            minWidth: 150,
            minHeight: 30,
            background: "linear-gradient(45deg, lightblue, yellow)",
        },
        content: {
            padding: 8,
            margin: 1,
        },
       title: {
           textAlign: "center",
       },
        subtitle:{
            textAlign: "center",
            margin: 0,
            padding: 0,

        },
        databox:{
            display: "flex",
            textAlign: "center" ,
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: 12,
        },
        weather:{
            display: "flex",
           flexDirection: "column"

        },
        text:{
            fontSize: 11 ,
          margin: 0,
          padding: 0,

        },
        buttons: {
            display: "flex",

        },
        add:{
            alignSelf: "flex-start",
        },
        remove:{
            alignSelf: "flex-end" ,
        }
    });

export default function ListItem({spot, favourite, setFavouriteSpots}){
    const classes = useStyles();
    const {token} = useContext(AuthContext)
    const [isFavourite, setIsFavourite] = useState(favourite)
    console.log(isFavourite)
    const currentSurfData = rightTimeToShowCurrentTemp(spot)
    console.log(currentSurfData)

    function handleAdd() {
        addToFavourites(spot.id, token).then(() => setIsFavourite(  true))
    }
    function handleRemove() {
        removeFromFavourites(spot.id, token)
            .then((item) => setFavouriteSpots(item))
            .then(() => setIsFavourite(false))
    }

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content} >
                <Link to={{
                pathname: "/" + spot.id,
                state: {favourite: isFavourite}
            }}>
                    <Box  borderColor="black">
                        <Box className={classes.title}  >
                            <Typography className={classes.title} variant="h5" component="h1">
                                {spot.spotLocationDetails.name}
                            </Typography>
                        </Box>
                        <Box className={classes.subtitle} >
                            <p className={classes.text}>
                                {spot.spotLocationDetails.continent}, {spot.spotLocationDetails.country}, {spot.spotLocationDetails.region}
                            </p>
                        </Box>
                        <Box className={classes.databox} >
                            <div>
                                <p>
                                    Air: {currentSurfData?.airTemperature.sg} °C
                                </p>
                            </div>
                            <div>
                                <p>
                                    Water: {currentSurfData?.waterTemperature.sg} °C
                                </p>
                            </div>
                            <div>
                                <p>
                                    {currentSurfData?.swellHeight.sg} m
                                </p>
                            </div>
                            <div>
                                <p>
                                    {currentSurfData?.swellPeriod.sg} s
                                </p>
                            </div>
                            <div>
                                <p>
                                    {currentSurfData?.windSpeed.sg} km/h
                                </p>
                            </div>
                        </Box>
                    </Box>
                </Link>
            </CardContent>
            <Box className={classes.buttons} >
            {!isFavourite && <button className={classes.add} onClick={handleAdd}>
                add to favourites
            </button>}
            {isFavourite && <button className={classes.remove} onClick={handleRemove}>
                remove from favourites
            </button>}
        </Box>
        </Card>

    )
}
//
// const Wrapper = styled.div`
//     font-family: Arial;
//       color: black;
//       display: flex;
//       flex-direction: column;
//       background: lightblue;
//       border: darkgrey 2px solid;
//       border-radius: 6px;
//       padding: 12px;
//       margin: 12px;
//       text-align: center;
// `