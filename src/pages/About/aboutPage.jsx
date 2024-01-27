import "./aboutPage.scss";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Banner from "../../components/Banner/banner.jsx";
import paysageImage from "../../assets/paysage.png";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <Header />
      <Banner img={paysageImage} alt="image d'un paysage" text={""} />
      <Footer />
    </Fragment>
  );
}
