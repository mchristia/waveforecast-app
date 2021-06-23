import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export default function HomePage(){


    return(
        <div>
            <p>
                Wind und Wellen
            </p>
            <div>
                <Button variant="outlined" component={Link} to={"/search"} >Look for Spots here</Button>
            </div>

        </div>
    )
}