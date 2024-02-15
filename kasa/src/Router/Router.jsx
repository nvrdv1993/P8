import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error from "../pages/Error";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={<RouterContent component={<Home />} />}
        />
        <Route
          path="/about"
          element={<RouterContent component={<About />} />}
        />
        <Route
          path="/logement"
          element={<RouterContent component={<Logement />} />}
        />
        <Route path="*" element={<RouterContent component={<Error />} />} />
      </Routes>
    </BrowserRouter>
  );
}

function RouterContent({ component }) {
  const location = useLocation();

  useEffect(() => {
    // Met à jour le titre de l'onglet en fonction de la route
    document.title = `Kasa - ${location.pathname.slice(1) || "Home"}`;
  }, [location]);

  return <>{component}</>;
}
