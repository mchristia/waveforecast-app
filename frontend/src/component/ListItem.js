import { rightTimeToShowCurrentTemp } from "../service/surfSpotCalculationService";
import {
  addToFavourites,
  removeFromFavourites,
} from "../service/surfSpotDataService";
import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import {
  BiWater,
  FaTemperatureLow,
  IoWaterOutline,
  MdTimer,
  RiWindyFill,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/all";

export default function ListItem({
  spot,
  favourite,
  setFavouriteSpots,
  fromFavouritePage,
  hasShadow,
}) {
  const { token } = useContext(AuthContext);
  const [isFavourite, setIsFavourite] = useState(favourite);
  const currentSurfData = rightTimeToShowCurrentTemp(spot);

  function handleAdd() {
    addToFavourites(spot.id, token).then(() => setIsFavourite(true));
  }
  function handleRemove() {
    removeFromFavourites(spot.id, token)
      .then((item) => {
        setIsFavourite(false);
        if (fromFavouritePage) {
          setFavouriteSpots(item);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <Wrapper className={hasShadow ? "shadow" : ""}>
      <div className="content">
        <Link
          className="link"
          to={{
            pathname: "/" + spot.id,
            state: { favourite: isFavourite },
          }}
        >
          <div>
            <div className="title">
              <div className="title">{spot.spotLocationDetails.name}</div>
            </div>
            <div className="subtitle">
              <p className="text">
                {spot.spotLocationDetails.continent},{" "}
                {spot.spotLocationDetails.country},{" "}
                {spot.spotLocationDetails.region}
              </p>
            </div>
            <div className="databox">
              <div className="airTemp">
                <div>
                  <FaTemperatureLow size={20} />
                </div>
                <p>{currentSurfData?.airTemperature.sg.toFixed(1)} °C</p>
              </div>
              <div className="waterTemp">
                <div>
                  <IoWaterOutline size={20} />
                </div>
                <p>{currentSurfData?.waterTemperature.sg.toFixed(1)} °C</p>
              </div>
              <div className="height">
                <div>
                  <BiWater size={20} />
                </div>
                <p>{currentSurfData?.swellHeight.sg.toFixed(1)} m</p>
              </div>
              <div className="period">
                <div>
                  <MdTimer size={20} />
                </div>
                <p>{Math.round(currentSurfData?.swellPeriod.sg)} s</p>
              </div>
              <div className="wind">
                <div>
                  <RiWindyFill size={20} />
                </div>
                <p>{Math.round(currentSurfData?.windSpeed.sg)} km/h</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="buttons">
        {!isFavourite && (
          <button className="add" onClick={handleAdd}>
            <AiOutlineStar size={30} />
          </button>
        )}
        {isFavourite && (
          <button className="remove" onClick={handleRemove}>
            <AiFillStar size={30} />
          </button>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-decoration: none;
  min-width: 200px;
  min-height: 40px;
  background-color: lightblue;
  border-radius: 10px;
  color: black;

  &.shadow {
    -webkit-box-shadow: 2px 4px 22px 7px rgba(0, 0, 0, 0.83);
    box-shadow: 2px 4px 22px 2px rgba(0, 0, 0, 0.83);
  }
  .content {
    margin: 1px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.75rem;
  }

  .link {
    text-decoration: none;
    color: black;
  }

  .title {
    text-align: center;
    font-size: 24px;
  }

  .subtitle {
    text-align: center;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 12px;
  }

  .databox {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: 14px;
  }

  .airTemp {
    display: flex;

    div {
      align-self: center;
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
    p {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
  }

  .waterTemp {
    display: flex;

    div {
      align-self: center;
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
    p {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
  }

  .period {
    display: flex;

    div {
      align-self: center;
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
    p {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
  }

  .height {
    display: flex;

    div {
      align-self: center;
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
    p {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
  }

  .wind {
    display: flex;

    div {
      align-self: center;
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
    p {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
  }

  .text {
    font-size: 11px;
    margin: 0;
    padding: 0;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
  }

  .add {
    align-self: flex-start;
    background-color: transparent;
    border: none;
  }

  .remove {
    align-self: flex-end;
    background-color: transparent;
    border: none;
  }
`;
