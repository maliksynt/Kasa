import React, { useState } from "react";
import "./slideShow.scss";
import nextArrow from "../../assets/nextArrow.svg";
import prevArrow from "../../assets/prevArrow.svg";

export default function SlideShow(props) {
  const housePictures = props.pictures;
  const length = housePictures.length;
  const houseTitle = props.title;

  const [currentPicture, setCurrentPicture] = useState(0);

  const nextPicture = () => {
    if (currentPicture === housePictures.length - 1) {
      return setCurrentPicture(0);
    }
    setCurrentPicture(currentPicture + 1);
  };
  const prevPicture = () => {
    if (currentPicture === 0) {
      return setCurrentPicture(housePictures.length - 1);
    }
    setCurrentPicture(currentPicture - 1);
  };
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
