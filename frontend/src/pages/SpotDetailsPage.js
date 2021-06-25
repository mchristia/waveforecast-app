import { useParams } from 'react-router-dom'
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import {getSurfSpot} from "../service/surfSpotDataService";
import DetailsHeader from "../component/DetailsHeader";
import DetailTable from "../component/DeatailsTable";

export default function SpotDetailsPage(){
    const { id } = useParams();
    const [surfSpot, setSurfSpot] = useState();

    useEffect(() =>{
        getSurfSpot(id)
            .then(setSurfSpot)
            .catch(error => console.error(error))
    },[id])

    const now = Date.now()
    console.log(surfSpot)


    function rightTimeToShowCurrentTemp () {
        if(now < Date.parse(surfSpot?.surfData[1].time)){
            const a = Math.abs(now-Date.parse(surfSpot?.surfData[0].time))
            const b = Math.abs(now-Date.parse(surfSpot?.surfData[1].time))
            if(a < b){
                console.log(surfSpot?.surfData[0])
                return surfSpot?.surfData[0]
            }else{
                console.log(surfSpot?.surfData[0])
                return surfSpot?.surfData[1]
            }
        }

    }
    return (
        <Wrapper>
            <div className="overview">
                <DetailsHeader  surfSpot={surfSpot}
                               rightTimeToShowCurrentTemp={rightTimeToShowCurrentTemp}
                               now={now}
                />
            </div>
            <section className="table">
                <DetailTable surfSpot={surfSpot} />
            </section>
</Wrapper>)
}

const Wrapper = styled.div`
  margin: 2px;
  padding: 5px;

  .overview{
    padding: 1%;
    
  }
  
  .table{
    margin-top: 2%;
  }
`