import React from "react"
import {rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";
import styled from "styled-components/macro";
import ListAltIcon from "@material-ui/icons/ListAlt";
import {useHistory} from "react-router-dom"

export default function DetailsHeader({surfSpot}){

    const history = useHistory();
    const now = Date.now()
    const currentSurfData = rightTimeToShowCurrentTemp(surfSpot)

    return(
        <Wrapper>
            <div className="title">
                <h2>{surfSpot?.spotLocationDetails.name}</h2>
                <button className="button2" onClick={() => {
                    history.goBack();
                }}>
                    <ListAltIcon />
                </button>
                <div className="subtitle">
                    <p>{surfSpot?.spotLocationDetails.continent}, {surfSpot?.spotLocationDetails.country}, {surfSpot?.spotLocationDetails.region}</p>
                    <p>{new Date(now).toUTCString()}</p>
                </div>

            </div>
            <section className="body">
                <div className="body-left">
                    <div>
                        <p>
                            Air: {currentSurfData?.airTemperature.sg}
                        </p>
                    </div>
                    <div>
                        <p>
                            Water: {currentSurfData?.waterTemperature.sg}
                        </p>
                    </div>
                    <div>
                        <p>
                            Wave Direction:  {currentSurfData?.swellDirection.sg}
                        </p>
                    </div>
                    <div>
                        <p>
                            Wave Height: {currentSurfData?.swellHeight.sg}
                        </p>
                    </div>
                </div>
                <div className="body-right">
                    <div>
                        <p>
                            Wave Period: {currentSurfData?.swellPeriod.sg}
                        </p>
                    </div>
                    <div>
                        <p>
                            Wind Direction: {currentSurfData?.windDirection.sg}
                        </p>
                    </div>
                    <div>
                        <p>
                            Wind Speed: {currentSurfData?.windSpeed.sg}
                        </p>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  border-bottom: black solid 2px;
  background-image: linear-gradient(45deg, lightblue, yellow);
  border-top-right-radius: 2%;
  border-top-left-radius: 2%;
  
  .title{
    padding-top: 2px;
    
  }
  
  h2{
    text-align: center;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
  
  .subtitle{
    display: flex;
    justify-content: space-between ;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .body{
    display: flex;
   justify-content: space-between;
    
  }
  
  .body-left{
    display: flex;
    flex-flow: column ;
    font-size: 14px;
  }
  
  .body-right{
    display: flex;
    flex-flow: column ;
    font-size: 14px;
    
  }
  .body.p{
    padding: 0px;
    margin: 0px;
  }
  
  .button2{
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`