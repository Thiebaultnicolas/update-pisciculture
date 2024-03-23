import React from 'react';
import Banner from '../Accueil/Banner.js';
import BannerReservation from '../../Assets/reservation.jpg';
import "../../Styles/Pêche/BannerReservation.css";

function Bannerreservation () {
  
    return (
      <>
        <Banner image={BannerReservation}  showLogo={false} showGradient={false} className=" Banner-reservation" />
        
      
        {/* Ajoutez le reste de votre contenu pour le composant Tabledhote ici */}
      </>
    );
  }
  
  export default Bannerreservation;