import React from "react"
export default function DetailsHeader({surfSpot, rightTimeToShowCurrentTemp, now}){
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
                <label>
                    Ait Temperature:
                </label>
                {rightTimeToShowCurrentTemp()?.airTemperature.sg}
            </div>
            <div>
                <label>
                    Water Temperature:
                </label>
                {rightTimeToShowCurrentTemp()?.waterTemperature.sg}
            </div>
            <div>
                <label>
                    Wave Direction:
                </label>
                {rightTimeToShowCurrentTemp()?.waveDirection.sg}
            </div>
            <div>
                <label>
                    Wave Height:
                </label>
                {rightTimeToShowCurrentTemp()?.waveHeight.sg}
            </div>
            <div>
                <label>
                    Wave Period:
                </label>
                {rightTimeToShowCurrentTemp()?.wavePeriod.sg}
            </div>
            <div>
                <label>
                    Wind Direction:
                </label>
                {rightTimeToShowCurrentTemp()?.windDirection.sg}
            </div>
            <div>
                <label>
                    Wind Speed:" "{rightTimeToShowCurrentTemp()?.windSpeed.sg}
                </label>
            </div>
        </section>
    )
}