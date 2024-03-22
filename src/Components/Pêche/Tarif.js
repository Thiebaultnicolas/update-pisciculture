import React from 'react';
import TarifPêche from "../../Assets/TarifPêche.png";
import "../../Styles/Pêche/Tarif.css";

function TarifPecheur() {
  return (
    <div className="carrousel-background">
      <div className="article-Tarif">
        <h2 className='titre-tarif'>Tarifs pour les demi-journées et journées de pêche</h2>
        <img src={TarifPêche} alt="Tarif Pêche" />
      </div>
    </div>
  );
}

export default TarifPecheur;
