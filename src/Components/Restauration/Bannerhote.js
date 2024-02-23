// Tabledhote.js
import React from 'react';
import Banner from '../Accueil/Banner.js';
import TabledhoteBanner from '../../Assets/Salle2.jpg'; // Importez la nouvelle image pour le composant Tabledhote
import "../../Styles/Restauration/Bannerhote.css";

function Bannerhote() {
  return (
    <>
      <Banner image={TabledhoteBanner} titre="Titre de la table d'hôte" showLogo={false} showGradient={false} className="banner-tabledhote" />
      {/* Ajoutez le reste de votre contenu pour le composant Tabledhote ici */}
    </>
  );
}

export default Bannerhote;