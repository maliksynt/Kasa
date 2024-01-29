import "./aboutPage.scss";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Banner from "../../components/Banner/banner.jsx";
import Collapse from "../../components/Collapse/collapse.jsx";
import { collapseItems } from "./collapseItems.js";
import paysageImage from "../../assets/paysage.png";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <Header />
      <Banner img={paysageImage} alt="image d'un paysage" text={""} />
      <main className="collapse-container">
        {collapseItems.map((item, id) => {
          return (
            <Collapse
              title={item.title}
              description={item.description}
              key={id}
            />
          );
        })}
      </main>
      <Footer />
    </Fragment>
  );
}
