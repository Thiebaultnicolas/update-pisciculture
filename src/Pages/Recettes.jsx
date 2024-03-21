import React from 'react';
import BannerRecette from '../Components/Recettes/Bannerrecette';
import CarrouselRecette from '../Components/Recettes/CarousselRecette';


function Accueil() {
    return (
        <>
            <BannerRecette/>
            <CarrouselRecette/>
            {/* Ajoutez d'autres composants et contenu ici */}
        </>
    );
}

export default Accueil;