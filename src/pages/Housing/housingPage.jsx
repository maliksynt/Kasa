import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import logements from "../../database/logement.json";
import SlideShow from "../../components/SlideShow/slideShow.jsx";
import HouseDetails from "../../components/HouseDetails/houseDetails.jsx";
import "./housingPage.scss";

export default function Housing() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return (
      <>
        <Navigate to="/error" />
      </>
    );
  }
  return (
    <>
      <Header />
      <main className="main">
        <SlideShow pictures={logement.pictures} title={logement.title} />
        <HouseDetails HouseDetails={logement} />
      </main>
      <Footer />
    </>
  );
}
