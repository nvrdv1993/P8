import React, { useState } from "react";
import PropTypes from "prop-types";

const Carrousel = ({ imagesList }) => {
  // Utilisation de useState pour gérer l'index de l'image actuellement affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour afficher l'image suivante dans le carrousel
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesList.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour afficher l'image précédente dans le carrousel
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesList.length - 1 : prevIndex - 1
    );
  };

  // Rendu du composant Carrousel
  return (
    <div className="carrousel">
      {/* Affichage des boutons de navigation si le carrousel a plus d'une image */}
      {imagesList.length > 1 && (
        <>
          <button onClick={prevImage}>&lt;</button>
          {/* Affichage de l'image actuelle */}
          <img
            src={imagesList[currentImageIndex]}
            alt={`image ${currentImageIndex + 1}`}
          />
          {/* Affichage du bouton de navigation vers l'image suivante */}
          <button onClick={nextImage} className="right">&gt;</button>
          {/* Affichage du numéro de l'image actuelle sur le nombre total d'images */}
          {imagesList.length > 1 && (
            <p>
              {currentImageIndex + 1}/{imagesList.length}
            </p>
          )}
        </>
      )}
      {/* Affichage de l'image unique si le carrousel a une seule image */}
      {imagesList.length === 1 && (
        <img src={imagesList[0]} alt="single-image" />
      )}
    </div>
  );
};

// Définition des types attendus pour les propriétés
Carrousel.propTypes = {
  imagesList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
