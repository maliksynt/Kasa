import logoKasaFooter from "../../assets/logoKasaFooter.png";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__image" src={logoKasaFooter} alt="" />
      <p className="footer__text">
        © 2020 Kasa. All
        <br className="hide" /> rights reserved
      </p>
    </footer>
  );
}
