import React from 'react';
import BannerAccueil from '../Assets/Pisciculture.jpg';
import Article from '../Components/Accueil/Article.js';
import Banner from '../Components/Accueil/Banner.js';
import Information from '../Components/Accueil/Information.js';

function Accueil() {
    return (
        <>
            <Banner image={BannerAccueil} />
            {/* Ajoutez d'autres composants et contenu ici */}
            <Article />
            <Information />
        </>
    );
}

export default Accueil;