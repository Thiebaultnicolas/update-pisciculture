import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faFishFins } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Accueil/Article.css";
import EtangBouriche from "../../Assets/EtangBouriche.jpg";
import EvenementWindows from "./EvenementWindows"; // Assurez-vous que le chemin est correct

function Article() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleButtonHover = () => {
    // Logique de survol (si nécessaire)
  };

  const confettiAnimation = "confetti-container"; // Définissez votre animation

  return (
    <div className="article">
      <h2>La Pisciculture du Claireau</h2>
      <h3>Vivez une journée de pêche mémorable en Normandie</h3>
      <div className="article-content">
        <div className="présentation">
          <p>
            La pisciculture du Claireau est située dans l’Eure (27) dans le
            village <br /> de Appeville dit Annebault entre Rouen et Le
            Havre. Notre site se trouve <br /> au cœur de la vallée de
            Becquerel et est bordé par la forêt domaniale de <br /> Montfort
            sur Risle. Classée Natura 2000, de nombreuses espèces animales
            <br /> et végétales cohabitent.
          </p>
          <p>
            L’activité comprend la production, la pêche, le laboratoire de
            fumage,
            <br />
            la restauration et l’accueil du public. L’atelier fumage a été
            repensé<br /> et restructuré afin de répondre aux normes
            européennes. La pisciculture<br /> compte 5 bassins d’alevinage,
            10 bassins de grossissement et 3 étangs<br /> destinés à la
            pêche.
          </p>
          <p>
            L’ensemble du site est alimenté par une source, le Clérot. La
            qualité de l’eau,<br /> l’alimentation et toute l’attention
            apportée au respect du cycle de grossissement<br /> des truites
            sont un gage de qualité. Depuis de nombreuses années, notre
            spécialité<br /> la truite fumée est reconnue et est très
            appréciée de nos clients pour sa qualité<br /> gustative.
          </p>
          <div className="Button-evenements">
            <button onClick={handleButtonClick} onMouseOver={handleButtonHover}>
              Événements à venir
              <div className={confettiAnimation}>
                <div className={`fish-container`}>
                  <FontAwesomeIcon icon={faFish} className="fish" />
                  <FontAwesomeIcon icon={faFishFins} className="fish fish-second" />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="article-image">
          <img src={EtangBouriche} alt="Etang Bouriche" />
        </div>
      </div>
      <EvenementWindows show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Article;
