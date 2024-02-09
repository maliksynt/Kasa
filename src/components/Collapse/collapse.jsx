import "./collapse.scss";
import { useRef, useState } from "react";
import Arrow from "../../assets/arrow.svg";

export default function Collapse({ title, description }) {
  // Déclaration des états avec useState pour contrôler l'état actif, la hauteur et la rotation de l'icône
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null); // Utilisation de useRef pour accéder au contenu de l'accordéon

  const toggleAccordion = () => {
    // Fonction pour basculer l'état de l'accordéon
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  return (
    <main className="container">
      <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{title}</p>
          <img src={Arrow} alt="arrow" className={`${setRotate}`} />
        </button>
        <div
          className="accordion__content"
          ref={content}
          style={{ maxHeight: `${setHeight}` }} // Contenu de l'accordéon avec hauteur dynamique
        >
          <div className="accordion__text">
            {Array.isArray(description) ? ( // Gestion de la description, qui peut être un array ou un string
              description.map((item, index) => (
                <div style={{ margin: 0 }} key={index}>
                  {item}
                </div>
              ))
            ) : (
              <p style={{ margin: 0 }}>{description}</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
