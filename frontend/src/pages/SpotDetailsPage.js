import { useParams } from 'react-router-dom';
import styled from "styled-components/macro";
import {useEffect, useState} from "react";
import {getSurfSpot} from "../service/surfSpotDataService";
import DetailsHeader from "../component/DetailsHeader";
import DetailTable from "../component/DeatailsTable";
import {rightTimeToShowCurrentTemp} from "../service/surfSpotCalculationService";

export default function SpotDetailsPage(){
    const { id } = useParams();
    const [surfSpot, setSurfSpot] = useState();

    useEffect(() =>{
        getSurfSpot(id)
            .then(setSurfSpot)
            .catch(error => {
                console.error(error);
            })
    },[id])

    if(surfSpot){
        return (
            <Wrapper>
                <div className="overview">
                    <DetailsHeader  surfSpot={surfSpot} />
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