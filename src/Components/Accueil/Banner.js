import React from 'react';
import "../../Styles/Accueil/Banner.css";
import NewLogo from "../../Assets/Newlogo.png";

export function Banner({ image, titre, showLogo = true, showGradient = true, className }) {
  const bannerClass = `banner-accueil ${className ? className : ''} ${showGradient ? '' : 'no-gradient'}`;

  return (
    <div className={bannerClass}>
      {showLogo && (
        <div className='logo-container'>
          <img src={NewLogo} alt='Logo' className='new-logo' />
        </div>
      )}
      <img src={image} alt='banniere accueil' className={`imageBanniereAccueil ${className ? className : ''}`} />
      {showGradient && (
        <div className="gradient-overlay"></div>
      )}
      <h1 className='title-banner-montain'>{titre}</h1>
    </div>
  );
}

export default Banner;