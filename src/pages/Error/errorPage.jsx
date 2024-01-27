// import { Fragment } from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import "./errorPage.scss";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <Header />
      <main className="main">
        <h1>404</h1>
        <h2>
          Oups! La page que <br className="hide" /> vous demandez n'existe pas.
        </h2>
        <Link to="/">
          <p>Retourner à l'accueil</p>
        </Link>
      </main>
      <Footer />
    </>
  );
}
