import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error from "../pages/Error";

// Composant principal du router
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirection par défaut vers la page d'accueil */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Route pour la page d'accueil */}
        <Route path="/home" element={<Home />} />
        {/* Route pour la page à propos */}
        <Route path="/about" element={<About />} />
        {/* Route pour la page de logement avec un paramètre d'ID */}
        <Route
  path="/logement/:id"
  element={<RouterContent component={<Logement />} />}
/>
        {/* Route par défaut en cas d'URL inconnue */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// Composant qui met à jour le titre de la page en fonction de l'URL
function RouterContent({ component }) {
  const location = useLocation();

  useEffect(() => {
    document.title = `Kasa - ${location.pathname.slice(1) || "Home"}`;
  }, [location]);

  return <>{component}</>;
}
