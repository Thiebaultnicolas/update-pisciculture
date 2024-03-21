import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../Pages/Accueil.jsx';
import Illustration from '../Pages/Tabledhote.jsx';


function Path() {
    return (
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="Travaux" element={<Illustration />} />
        </Routes>
    );
}

export default Path;


