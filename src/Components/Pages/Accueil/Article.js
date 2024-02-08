// Import des dépendances
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faFishFins  } from "@fortawesome/free-solid-svg-icons";
import "../../../Styles/Accueil/Article.css";
import EtangBouriche from "../../../Assets/EtangBouriche.jpg";

// Définition du composant Article
function Article() {
  // État pour gérer la visibilité des confettis
  const [confettiVisible, setConfettiVisible] = useState(false);

  // Gestion du clic sur le bouton
  const handleButtonClick = () => {
    // Logique pour gérer le clic sur le bouton (vous pouvez ajouter la redirection ici)
    console.log("Redirigez vers la nouvelle page React");
  };

  // Gestion du survol du bouton
  const handleButtonHover = () => {
    // Mettez à jour l'état pour rendre les confettis visibles au survol
    setConfettiVisible(true);
    // Vous pouvez également ajouter d'autres logiques ici si nécessaire
  };

  // Classe CSS pour l'animation des confettis
  const confettiAnimation = confettiVisible
    ? "confetti-container visible"
    : "confetti-container";

  // Rendu du composant
  return (
    <div className="article">
      <h2>La Pisciculture du Claireau</h2>
      <h3>Vivez une journée de pêche mémorable en Normandie</h3>
      <div className="article-content">
        <div className="présentation">
          <p>
            La pisciculture du Claireau est située dans l’Eure (27) dans le
            village <br></br> de Appeville dit Annebault entre Rouen et Le
            Havre. Notre site se trouve <br></br> au cœur de la vallée de
            Becquerel et est bordé par la forêt domaniale de <br></br> Montfort
            sur Risle. Classée Natura 2000, de nombreuses espèces animales
            <br></br> et végétales cohabitent.
          </p>
          <p>
            L’activité comprend la production, la pêche, le laboratoire de
            fumage,
            <br></br>
            la restauration et l’accueil du public. L’atelier fumage a été
            repensé<br></br> et restructuré afin de répondre aux normes
            européennes. La pisciculture<br></br> compte 5 bassins d’alevinage,
            10 bassins de grossissement et 3 étangs<br></br> destinés à la
            pêche.
          </p>
          <p>
            L’ensemble du site est alimenté par une source, le Clérot. La
            qualité de l’eau,<br></br> l’alimentation et toute l’attention
            apportée au respect du cycle de grossissement<br></br> des truites
            sont un gage de qualité. Depuis de nombreuses années, notre
            spécialité<br></br> la truite fumée est reconnue et est très
            appréciée de nos clients pour sa qualité<br></br>gustative.
          </p>
          <div className="Button-evenements">
            <button onClick={handleButtonClick} onMouseOver={handleButtonHover}>
              Événements à venir
              <div className={confettiAnimation}>
                {/* Ajoute la classe 'fish-container' ici */}
                <div className={`fish-container`}>
                  {/* Utilise le composant FontAwesomeIcon avec l'icône de poisson */}
                  <FontAwesomeIcon icon={faFish} className="fish" />
                  <FontAwesomeIcon icon={faFishFins} className="fish fish-second"/>
                 
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="article-image">
          <img src={EtangBouriche} alt="Etang Bouriche" />
        </div>
      </div>
    </div>
  );
}

// Export du composant Article
export default Article;
