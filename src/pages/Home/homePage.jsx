import { Fragment } from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Banner from "../../components/Banner/banner.jsx";
import Cards from "../../components/Cards/cards.jsx";
import falaiseImage from "../../assets/falaise.png";
import "./homePage.scss";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Banner
        img={falaiseImage}
        alt="Falaises"
        text="Chez vous, partout et ailleurs"
      />
      <Cards />
      <Footer />
    </Fragment>
  );
}
