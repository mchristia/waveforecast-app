import {Box, makeStyles, Typography, ThemeProvider} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"
import {rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";

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

        }
    });

export default function ListItem({spot}){
    const classes = useStyles();

    console.log(spot)
    const currentSurfData = rightTimeToShowCurrentTemp(spot)
    console.log(currentSurfData)

    return(
        <Card className={classes.root} variant="outlined">

        <CardContent className={classes.content} >
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
        </CardContent>
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