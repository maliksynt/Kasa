import React from "react";
import "./houseDetails.scss";
import activeStar from "../../assets/star-active.png";
import inactiveStar from "../../assets/star-inactive.png";
import Collapse from "../Collapse/collapse.jsx";

export default function HouseDetails({ HouseDetails }) {
  const equipments = HouseDetails.equipments.join("</br>");

  const hostRate = HouseDetails.rating;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < hostRate) {
      stars.push(<img src={activeStar} alt="star" />);
    } else {
      stars.push(<img src={inactiveStar} alt="star" />);
    }
  }
  return (
    <div className="house-details">
      <div className="house-details__content">
        <div className="house-details__description">
          <h2 className="house-details__description__title">
            {HouseDetails.title}
          </h2>
          <p>{HouseDetails.location}</p>
          {HouseDetails.tags.map((tag) => (
            <span className="house-details__description__tags">{tag}</span>
          ))}
        </div>
        <div className="house-details__host">
          <div className="house-details__host-infos">
            <p>{HouseDetails.host.name}</p>
            <img
              src={HouseDetails.host.picture}
              alt="Photo de l'hôte"
              className="house-details__host__picture"
            />
          </div>
          <div className="house-details__host__rating">{stars}</div>
        </div>
      </div>
      <div className="house-details__accordion">
        <Collapse title="Description" description={HouseDetails.description} />
        <Collapse title="Équipements" description={equipments} />
      </div>
    </div>
  );
}
