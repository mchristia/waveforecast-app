import React from "react"
import {rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";
export default function DetailsHeader({surfSpot, currentSurfData}){

    const now = Date.now()
    //console.log(currentSurfData)
    return(
        <section>
            <div>
                {surfSpot?.spotLocationDetails.name}
                {surfSpot?.spotLocationDetails.continent}
                {surfSpot?.spotLocationDetails.country}
                {surfSpot?.spotLocationDetails.region}
            </div>
            <div>
                {new Date(now).toUTCString()}
            </div>
            <div>
                <p>
                    Ait Temperature: {currentSurfData?.airTemperature.sg}
                </p>

            </div>
            <div>
                <p>
                    Water Temperature: {currentSurfData?.waterTemperature.sg}
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
        </section>
    )
}