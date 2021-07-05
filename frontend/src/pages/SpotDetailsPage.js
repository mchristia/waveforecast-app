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

  background-image: url("/images/app-logo-above1.png");
  height: 100%;
  overflow-y: auto;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  margin: 1px;
  padding: 1px;

  .overview{
    padding: 1%;
  }
  
  .table{
    margin-top: 2%;
  }
`