import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../Pages/Accueil.jsx';
import Illustration from '../Components/imgPageTravaux.js';
import Recettes from '../Pages/Recettes.jsx';
import Tarif from '../Pages/Tarif.jsx';
import Tabledhote from '../Pages/Tabledhote.jsx';
import Reservation from '../Pages/Reservation.jsx';


function Path() {
    return (
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="Recettes" element={<Recettes />} />
            <Route path="Tarif" element={<Tarif />} />
            <Route path="Reservation" element={<Reservation/>} />
            <Route path="Tabledhote" element={<Tabledhote />} />
            <Route path="Travaux" element={<Illustration />} />
        </Routes>
    );
}

export default Path;


