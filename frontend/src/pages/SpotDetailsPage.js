import { useParams } from 'react-router-dom'
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import axios from "axios";
import {getSurfSpot} from "../service/surfSpotDataService";

export default function SpotDetailsPage(){
    const { id } = useParams();
    const [surfSpot, setSurfSpot] = useState();

    useEffect(() =>{
        getSurfSpot(id)
            .then(setSurfSpot)
            .catch(error => console.error(error))
    },[id])

    console.log(surfSpot?.surfData)
    const now = Date.now()
    console.log(new Date(now).toUTCString())


    function rightTimeToShowCurrentTemp () {
        console.log("in function")
        for(let i=0; i < surfSpot?.surfData.length; i++){
            if(i === 0 && (now < Date.parse(surfSpot?.surfData[i].time))){
                console.log(surfSpot?.surfData[0].time)
                return surfSpot?.surfData[0]
            }
            if(now < Date.parse(surfSpot?.surfData[i+1].time)){
                const a = Math.abs(now-Date.parse(surfSpot?.surfData[i].time))
                const b = Math.abs(now-Date.parse(surfSpot?.surfData[i+1].time))
                if(a < b){
                    console.log(surfSpot?.surfData[i].time)
                    return surfSpot?.surfData[i]
                }else{
                    console.log(surfSpot?.surfData[i+1].time)
                    return surfSpot?.surfData[i+1]
                }
            }

        }

    }

    return (
        <Wrapper>
            <section className="overview">
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
                       Wind Speed:
                    </label>
                    {rightTimeToShowCurrentTemp()?.windSpeed.sg}
               </div>
            </section>
            <section class="time01">
                placeholder
            </section>
             <section class="time02">
                    placeholder
             </section>
            <section class="time03">
                    placeholder
            </section>
            <section class="time04">
                placeholder
            </section>
            <section class="time05">
                placeholder
            </section>
            <section class="time06">
                placeholder
            </section>
            <section class="time07">
                placeholder
            </section>
            <section class="time08">
                placeholder
            </section>
</Wrapper>)
}

const Wrapper = styled.div`
  margin: 2px;
  padding: 5px;
  
  .overview{
    
  }
`