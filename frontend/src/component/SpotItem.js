import styled from "styled-components/macro";
import {Card, CardContent, CardMedia, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({

}))

export default function SpotItem({spot}){
    const classes = useStyles();
    return(
        <Card component={Link} to={"/" + spot.spotLocationDetails.id}>
            <CardMedia/>
                <CardContent>
                    <div>
                        <p>{spot.spotLocationDetails.name}</p>
                        <p>{spot.spotLocationDetails.continent}</p>
                        <p>{spot.spotLocationDetails.country}</p>
                        <p>{spot.spotLocationDetails.region}</p>
                    </div>
                </CardContent>
        </Card>

    )
}

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