import React from 'react';
import Banner from '../Accueil/Banner.js';
import RecetteBanner from '../../Assets/Bannerrecette.jpeg';
import "../../Styles/Recettes/Recettes.css";

function Bannerrecette () {
  
    return (
      <>
        <Banner image={RecetteBanner} titre="Titre de la Recette" showLogo={false} showGradient={false} className="banner-tabledhote Banner-Recette" />
        
      
        {/* Ajoutez le reste de votre contenu pour le composant Tabledhote ici */}
      </>
    );
  }
  
  export default Bannerrecette;