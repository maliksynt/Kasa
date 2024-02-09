import React from "react";
import "./houseDetails.scss";
import activeStar from "../../assets/star-active.png";
import inactiveStar from "../../assets/star-inactive.png";
import Collapse from "../Collapse/collapse.jsx";

export default function HouseDetails({ HouseDetails }) {
  // Calcul de la note de l'hôte et initialisation d'un tableau pour les étoiles
  const hostRate = HouseDetails.rating;
  const stars = [];

  // Boucle pour générer les étoiles actives et inactives basées sur la note de l'hôte
  for (let i = 0; i < 5; i++) {
    // Si l'indice de la boucle est inférieur à la note de l'hôte, on ajoute une étoile active
    if (i < hostRate) {
      stars.push(<img key={i} src={activeStar} alt="star" />);
    } else {
      // Sinon, on ajoute une étoile inactive
      stars.push(<img key={i} src={inactiveStar} alt="star" />);
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
          {HouseDetails.tags.map((tag, index) => (
            <span key={index} className="house-details__description__tags">
              {tag}
            </span>
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
        <Collapse
          key="description"
          title="Description"
          description={HouseDetails.description}
        />
        <Collapse
          key="equipments"
          title="Équipements"
          description={HouseDetails.equipments}
        />
      </div>
    </div>
  );
}
