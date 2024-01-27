import logoKasa from "../../assets/logoKasa.png";
import "./header.scss";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logoKasa} alt="Kasa" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
