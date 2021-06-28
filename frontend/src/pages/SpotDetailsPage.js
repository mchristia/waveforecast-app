import { useParams } from 'react-router-dom';
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import {getSurfSpot} from "../service/surfSpotDataService";
import DetailsHeader from "../component/DetailsHeader";
import DetailTable from "../component/DeatailsTable";
// import {rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";

export default function SpotDetailsPage(){
    const { id } = useParams();
    const [surfSpot, setSurfSpot] = useState();

    useEffect(() =>{
        console.log(id)
        getSurfSpot(id)
            .then((item) => {
                setSurfSpot(item);
                console.log(item);
            })
            .catch(error => {
                console.error(error);
                console.log(id);
            })
    },[id])
    const now = Date.now()
    console.log(surfSpot)

    // const currentSurfData = (surfSpot) => {
    //     for(let i=0; i < surfSpot.surfData.length; i ++){
    //
    //         if (now < Date.parse(surfSpot?.surfData[i+1].time)) {
    //
    //             const a = Math.abs(now - Date.parse(surfSpot?.surfData[i].time))
    //             const b = Math.abs(now - Date.parse(surfSpot?.surfData[i +1].time))
    //
    //             if (a < b) {
    //                 return surfSpot?.surfData[i]
    //             } else {
    //                 return surfSpot?.surfData[i+1]
    //             }
    //         }
    //     }
    //
    // }

    if(surfSpot){
        return (
            <Wrapper>
                <div className="overview">
                    <DetailsHeader  surfSpot={surfSpot}
                                    currentSurfData={surfSpot.surfData[0]}
                    />
                </div>
                <section className="table">
                    <DetailTable surfSpot={surfSpot} />
                </section>
            </Wrapper>)
    }else{
        return <div>
            no data
        </div>
    }

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