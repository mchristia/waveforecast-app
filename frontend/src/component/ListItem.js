import {Box, Button, CardActions, CardMedia, makeStyles, Paper, Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"
import {rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";

    const useStyles = makeStyles( {
        root: {
            minWidth: 150,
            minHeight: 30,
            backgroundColor: "cadetblue",
        },
        content: {
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gridTemplateRows: "repeat(2,1fr)",

        },
       box: {
            gridColumnStart: 1,
           gridColumnEnd: 6,
           gridRowStart: 1,
           gridRowEnd: 2,

       },
        box2:{
            gridColumnStart: 6,
            gridColumnEnd: 9,
            gridRowStart: 1,
            gridRowEnd: 3,

        },

        box3:{
            gridColumnStart: 1,
            gridColumnEnd: 5,
            gridRowStart: 2,
            gridRowEnd: 3,
        },
        title: {

        },
        pos: {
            marginBottom: 1,
        },
        wavedata:{

        },
        weather:{
            display: "flex",
           flexDirection: "column"

        },
        text:{
          margin: 1,
          textAlign: "start",

        }
    });

export default function ListItem({spot}){
    const classes = useStyles();

    console.log(spot)
    const currentSurfData = rightTimeToShowCurrentTemp(spot)
    console.log(currentSurfData)

    return(
        <Card className={classes.root} variant="outlined">
        <CardContent>
        <Box className={classes.content}  borderColor="black">
            <Box className={classes.box} component="div" borderColor="black" >
                <Typography className={classes.title} variant="h5" component="h1">
                    {spot.spotLocationDetails.name}
                </Typography>
            </Box>
            <Box className={classes.box2} sx={{gridRow:"span 2", gridColumn: "span 1",}}>
                <Box className={classes.weather}>
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
            <Box className={classes.box3} sx={{gridRow: 2/3, gridColumn: 1/3,}} component="div">
                <p className={classes.text}>
                    {spot.spotLocationDetails.continent}, {spot.spotLocationDetails.country}, {spot.spotLocationDetails.region}
                </p>
            </Box>
        </Box>
        </CardContent>
        </Card>
        // <Card className={classes.root}  variant="outlined" >
        //
        //     <CardContent >
        //         <Box sx={{display: "gird", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(2,1fr)",}}>
        //         <Box sx={{ gridRow: "span 3", color: 'white',}} component="div" borderColor="primary.main" >
        //             <Typography className={classes.title} variant="h5" component="h1" gutterBottom>
        //                 {spot.spotLocationDetails.name}
        //             </Typography>
        //         </Box>
        //         <Box sx={{gridRow:"span 2", gridColumn: "span 1",}}>
        //             <Typography className={classes.pos} color="textSecondary">
        //                 <Box className={classes.weather}>
        //                     <div>
        //                         <p>
        //                             Air: {currentSurfData?.airTemperature.sg} °C
        //                         </p>
        //
        //                     </div>
        //                     <div>
        //                         <p>
        //                            Water: {currentSurfData?.waterTemperature.sg} °C
        //                         </p>
        //                     </div>
        //                     <div>
        //                         <p>
        //                             {currentSurfData?.swellHeight.sg} m
        //                         </p>
        //                     </div>
        //                     <div>
        //                         <p>
        //                             {currentSurfData?.swellPeriod.sg} s
        //                         </p>
        //                     </div>
        //                     <div>
        //                         <p>
        //                             {currentSurfData?.windSpeed.sg} km/h
        //                         </p>
        //                     </div>
        //                 </Box>
        //
        //             </Typography>
        //         </Box>
        //         <Box sx={{gridRow: 2/3, gridColumn: 1/3,}} component="div">
        //             <Typography className={classes.wavedata} component="p">
        //                 <p className={classes.text}>
        //                     {spot.spotLocationDetails.continent}, {spot.spotLocationDetails.country}, {spot.spotLocationDetails.region}
        //                 </p>
        //
        //
        //             </Typography>
        //         </Box>
        //         </Box>
        //     </CardContent>
        //
        //     <CardActions>
        //         <Button size="small">Add to Favourites</Button>
        //     </CardActions>
        // </Card>
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