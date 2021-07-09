import { useParams } from 'react-router-dom';
import styled from "styled-components/macro";
import {useContext, useEffect, useState} from "react";
import {getSurfSpot} from "../service/surfSpotDataService";
import DetailsHeader from "../component/DetailsHeader";
import DetailTable from "../component/DeatailsTable";
import AuthContext from "../context/AuthContext";

export default function SpotDetailsPage(){
    const { id } = useParams();
    const [surfSpot, setSurfSpot] = useState();
    const {token} = useContext(AuthContext)

    console.log(token)
    useEffect(() =>{
        if(token){
            getSurfSpot(id, token)
                .then(setSurfSpot)
                .catch(error => {
                    console.error(error);
                })
        }

    },[id, token])

    if(surfSpot){
        return (
            <Wrapper>
                <div className="overview">
                    <DetailsHeader surfSpot={surfSpot} id={id}/>
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

  margin: 1px;
  padding: 1px;

  .overview{
    padding: 0;
  }
  
  .table{
    margin-top: 0;
  }
`