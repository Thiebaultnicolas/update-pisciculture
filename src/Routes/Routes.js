import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../Pages/Accueil.jsx';
import TableDhote from '../Components/Restauration/Bannerhote.js'; // Assurez-vous que le chemin est correct

function Path() {
    return (
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="table" element={<TableDhote />} />
            <Route path="snacking" element={<TableDhote />} />
        </Routes>
    );
}

export default Path;


