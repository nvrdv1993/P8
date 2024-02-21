import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Data from "../Data/data.json";
import starColor from "../assets/star_color.png";
import starGrey from "../assets/star_grey.png";

// Définition du composant fonctionnel pour afficher les détails d'un logement sélectionné
const Logement = () => {
  // Extraction des paramètres de l'URL
  const {id} = useParams()

  // Utilisation de la fonction navigate de React Router pour la navigation programmatique
  const navigate = useNavigate();

  const selectedItem = Data.find((item) => item.id === id);

 //
  // useEffect pour gérer les cas où l'élément sélectionné n'est pas trouvé
  useEffect(() => {
    console.log("Élément sélectionné :", selectedItem);
    if (!selectedItem) {
      navigate("error"); 
    }
    // eslint-disable-next-line
  }, [selectedItem]);
  

  if (selectedItem) {
    // Destructuration des propriétés de l'élément sélectionné
    const { pictures, title, location, host, tags, rating, description, equipments } = selectedItem;

    // Conversion de la note en un nombre
    const ratingNumber = parseInt(rating);

   // Génération d'un tableau d'images d'étoiles en fonction de la note
const stars = Array.from({ length: 5 }, (_, index) => (
  <img
    key={index}
    src={index < ratingNumber ? starColor : starGrey}
    alt={index < ratingNumber ? "étoile" : "étoile-vide"}
    className="star" // Ajout de la classe star
  ></img>
));


    return (
      <div>
        <Header />
        <section className="LogementContent">
          <Carrousel imagesList={pictures} />

          <div className="titleLogementHostStars">
            <div className="titleLogement">
              <div>
                <h1>{title}</h1>
                <p>{location}</p>
              </div>
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="hostStars">
              <div className="host">
                <p>{host.name}</p>
                <img src={host.picture} alt={host.name} />
              </div>
              <div>{stars}</div>
            </div>
          </div>
          <div className="LogementCollapse">
            <Collapse title="Description" content={description} />
            <Collapse
              title="Équipements"
              content={
                <ul>
                  {equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  } else {
    return null; 
  }
};

export default Logement;
