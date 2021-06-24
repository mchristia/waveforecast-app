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

    console.log(surfSpot);
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

               </div>
                <div>

               </div>
                <div>

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