import React from 'react';
import Banner from '../Accueil/Banner.js';
import TarifBanner from '../../Assets/pêche.jpeg';
import "../../Styles/Pêche/BannerTarif.css";

function BannerTarif () {
  
    return (
      <>
        <Banner image={TarifBanner}  showLogo={false} showGradient={false} className="  Banner-Tarif" />
        
      
        {/* Ajoutez le reste de votre contenu pour le composant Tabledhote ici */}
      </>
    );
  }
  
  export default BannerTarif;