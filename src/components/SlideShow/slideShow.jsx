import React, { useState } from "react";
import "./slideShow.scss";
import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";

export default function SlideShow(props) {
  // Initialisation des images du diaporama et du titre à partir des props.
  const housePictures = props.pictures;
  const length = housePictures.length;
  const houseTitle = props.title;

  // Gestion de l'image actuelle avec useState
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonctions pour passer à l'image suivante ou revenir au début si c'est la dernière
  const nextPicture = () => {
    if (currentPicture === length - 1) {
      return setCurrentPicture(0);
    }
    setCurrentPicture(currentPicture + 1);
  };

  // Fonctions pour passer à l'image précédente ou revenir à la dernière si c'est la première
  const prevPicture = () => {
    if (currentPicture === 0) {
      return setCurrentPicture(length - 1);
    }
    setCurrentPicture(currentPicture - 1);
  };

  // Rendu du diaporama avec gestion des boutons suivant/précédent et affichage de l'index de l'image actuelle.
  return (
    <div className="slider">
      <img
        className="slider__image"
        src={housePictures[currentPicture]}
        alt={houseTitle}
      />
      {length > 1 && (
        <div className="slider__nextBtn" onClick={nextPicture}>
          <img src={nextArrow} alt="Image suivante" />
        </div>
      )}
      {length > 1 && (
        <div className="slider__prevBtn" onClick={prevPicture}>
          <img src={prevArrow} alt="Image précédente" />
        </div>
      )}
      {length > 1 && (
        <div className="slider__index hide">
          <p>
            {currentPicture + 1}/{housePictures.length}
          </p>
        </div>
      )}
    </div>
  );
}
