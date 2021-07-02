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
                <Button className="spotList" variant="outlined" component={Link} to={"/search"} >Look for Spots here</Button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .spotList{
      background-image: linear-gradient(45deg, lightblue, yellow);
    }
`