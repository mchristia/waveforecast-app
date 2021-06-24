import {Box, Button, CardActions, CardMedia, makeStyles, Paper, Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"
import red from '@material-ui/core/colors/red';
import {Link} from "react-router-dom";

// const useStyles = makeStyles(() => ({
//     root:{
//         minWidth: 275,
//         outlineColor: "bisque",
//         outlineWidth: 2,
//     }}))



    const useStyles = makeStyles( {
        root: {
            minWidth: 150,
            minHeight: 30,
            backgroundColor: "cadetblue"
        },

       box:{
            display:"inline",
           p:1,
           m:1

       },
        title: {
            border: 1,
            borderColor: "black"
        },
        pos: {
            marginBottom: 12,
        },
        wavedata:{

        },
        weather:{
            display: "flex",
            flexWrap: "nowrap"
        }
    });



export default function ListItem({spot}){
    const classes = useStyles();

    console.log(spot)

    return(
        <Card className={classes.root}  variant="outlined" >
            <CardContent>
                <Box className={classes.box} component="div" borderColor="primary.main">
                    <Typography className={classes.title} variant="h5" component="h1" gutterBottom>
                        {spot.spotLocationDetails.name}
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        {spot.spotLocationDetails.continent},
                        {spot.spotLocationDetails.country},
                        {spot.spotLocationDetails.region}
                    </Typography>
                </Box>
                <Box className={classes.box} component="div">
                    <Typography className={classes.wavedata} variant="body2" component="p">
                        <Box className={classes.weather}>
                            Alle daten
                        </Box>

                    </Typography>
                </Box>

            </CardContent>
            <CardActions>
                <Button size="small">Add to Favourites</Button>
            </CardActions>
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