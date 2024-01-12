import React, { useState } from "react";
import "../../../Styles/Header.css";
import NewLogoBleu from "../../../Assets/NewlogoBleu.png"; // Importez le nouveau logo bleu

function Header() {
  const [isHoveredPeche, setIsHoveredPeche] = useState(false); // État pour suivre le survol de "Pêche"
  const [isHoveredRestauration, setIsHoveredRestauration] = useState(false); // État pour suivre le survol de "Restauration"

  // Fonction pour gérer le survol de "Pêche"
  const handleHoverPeche = () => {
    setIsHoveredPeche(!isHoveredPeche); // Inverse l'état du survol
  };

  // Fonction pour gérer le survol de "Restauration"
  const handleHoverRestauration = () => {
    setIsHoveredRestauration(!isHoveredRestauration); // Inverse l'état du survol
  };

  return (
    <div className="header">
      <div className="header-content">
        <img src={NewLogoBleu} alt="Logo" className="new-logoBleu" />
        <ul>
          <li
            className={`dropdown ${isHoveredPeche ? "open" : ""}`}
            onMouseEnter={handleHoverPeche}
            onMouseLeave={handleHoverPeche}
          >
            Pêche
            <i
              className={`fas ${
                isHoveredPeche ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>{" "}
            <div className="dropdown-content">
              <a href="#">Demi-Journée</a>
              <a href="#">Journée</a>
              <a href="#">Réservation</a>
            </div>
          </li>
          <li
            className={`dropdown ${isHoveredRestauration ? "open" : ""}`}
            onMouseEnter={handleHoverRestauration}
            onMouseLeave={handleHoverRestauration}
          >
            Restauration
            <i
              className={`fas ${
                isHoveredRestauration ? "fa-chevron-up" : "fa-chevron-down"
              }`}
            ></i>{" "}
            <div className="dropdown-content">
              <a href="#">Snacking</a>
              <a href="#">Table d'hôte</a>
            </div>
          </li>
          <li>Notre Produit</li>
          <li>Recettes</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;