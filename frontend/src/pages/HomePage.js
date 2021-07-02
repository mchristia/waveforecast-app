import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import styled from "styled-components"

export default function HomePage(){

    return(
        <Wrapper>
            <p>
                Wind und Wellen
            </p>
            <div>
                <Link to={"/search"}>
                    <Button className="spotList" variant="outlined" >Look for Spots here</Button>
                </Link>
                <Link to={"/user"} >
                    <Button className="favourites" variant="outlined" >See Favourites here</Button>
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    Button{
      background-image: linear-gradient(45deg, lightblue, yellow);
    }
`