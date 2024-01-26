import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./main.css";
import Home from "./pages/Home/homeKasa.jsx";
import About from "./pages/About/aboutKasa.jsx";
import Housing from "./pages/Housing/housingKasa.jsx";
import Error from "./pages/Error/errorKasa.jsx";

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
