import logoKasaFooter from "../../assets/logoKasaFooter.png";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoKasaFooter} alt="" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
