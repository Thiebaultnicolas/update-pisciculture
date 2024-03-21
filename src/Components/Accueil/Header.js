import React, { useState } from "react";
import "../../Styles/Accueil/Header.css";
import NewLogoBleu from "../../Assets/NewlogoBleu.png"; // Importez le nouveau logo bleu
import { Link } from "react-router-dom";

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
        <Link to={"/"}>
          <img src={NewLogoBleu} alt="Logo" className="new-logoBleu" />
        </Link>
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
              <Link to={"Travaux"}>
                <a href="#">Snacking</a>
              </Link>
              <Link to={"Travaux"}>
                <a href="#">Table d'hôte</a>
              </Link>
            </div>
          </li>
          <Link to={"Travaux"}>
          <li>Notre Produit</li>
          </Link>
          <Link  to={"Travaux"}>
          <li>Recettes</li>
          </Link>
          <Link to={"Travaux"}>
          <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
