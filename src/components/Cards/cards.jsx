import "./cards.scss";
import logements from "../../database/logement.json";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div className="containerCards">
      {/* Itération sur chaque logement pour créer une carte pour chacun */}
      {logements.map((logement) => (
        <div className="card" key={logement.id}>
          {/* Création de la route de la card selon son id */}
          <Link to={`/housing/${logement.id}`}>
            <img
              className="card__image"
              src={logement.cover}
              alt={logement.title}
            />
            <div className="card__layer">
              <p className="card__text">{logement.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
