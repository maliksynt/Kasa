import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/homePage.jsx";
import About from "./pages/About/aboutPage.jsx";
import Housing from "./pages/Housing/housingPage.jsx";
import Error from "./pages/Error/errorPage.jsx";

export default function App() {
  return (
    <div className="main-container">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}
