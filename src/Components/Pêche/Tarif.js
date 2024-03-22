import React from 'react';
import BackgroundRecette from "../../Assets/BackgroundRecette.jpg";
import TarifPêche from "../../Assets/TarifPêche.png";
import "../../Styles/Pêche/Tarif.css";

function TarifPecheur() {
  return (
    <div className="carrousel-background" style={{ backgroundImage: `url(${BackgroundRecette})` }}>
      <div className="article-Tarif">
        <h2>Tarif pour les demi-journées et journées de pêche : </h2>
        <img src={TarifPêche} alt="Tarif Pêche" />
      </div>
    </div>
  );
}

export default TarifPecheur;
