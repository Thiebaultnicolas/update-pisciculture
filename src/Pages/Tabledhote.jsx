import React from 'react';
import Tabledhote from '../Components/Restauration/Tabledhote';
import Bannertabledhote from '../Components/Restauration/BannerTabledhote';


function Accueil() {
    return (
        <>
        <Bannertabledhote/>
        <Tabledhote/>
            {/* Ajoutez d'autres composants et contenu ici */}
        </>
    );
}

export default Accueil;