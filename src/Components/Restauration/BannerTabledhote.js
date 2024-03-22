import React from 'react';
import Banner from '../Accueil/Banner.js';
import BannerTabledhote from '../../Assets/Salle2.jpg';
import "../../Styles/Restauration/Bannertabledhote.css";

function Bannertabledhote () {
  
    return (
      <>
        <Banner image={BannerTabledhote} showLogo={false} showGradient={false} className=" Banner-Tabledhote" />
        
      
        {/* Ajoutez le reste de votre contenu pour le composant Tabledhote ici */}
      </>
    );
  }
  
  export default Bannertabledhote;