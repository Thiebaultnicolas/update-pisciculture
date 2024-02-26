import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../Pages/Accueil.jsx';
import TableDhote from '../Pages/Tabledhote.jsx'; // Assurez-vous que le chemin est correct
import Recettes from '../Pages/Recettes.jsx'; // Assurez-vous que le chemin est correct

function Path() {
    return (
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="table" element={<TableDhote />} />
            <Route path="snacking" element={<TableDhote />} />
            <Route path="recettes" element={<Recettes/>} />
        </Routes>
    );
}

export default Path;


