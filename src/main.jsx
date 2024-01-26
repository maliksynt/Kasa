import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.scss";
import Home from "./pages/Home/homePage.jsx";
import About from "./pages/About/aboutPage.jsx";
import Housing from "./pages/Housing/housingPage.jsx";
import Error from "./pages/Error/errorPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/housing" element={<Housing />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
