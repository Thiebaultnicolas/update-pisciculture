import React from 'react';
import "../../../Styles/Accueil/Banner.css";  // Assurez-vous d'importer correctement le fichier CSS
import NewLogo from "../../../Assets/Newlogo.png";  // Importez le nouveau logo

export function Banner({ image, titre }) {
  return (
    <div className="banner-accueil">
      <img src={image} alt='banniere accueil' className='imageBanniereAccueil' />
      <div className='logo-container'>
        <img src={NewLogo} alt='Logo' className='new-logo' />
      </div>
      <h1 className='title-banner-montain'>{titre}</h1>
    </div>
  );
}

export default Banner;