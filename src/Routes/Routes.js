import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import TableDhote from '../Components/Pages/Restauration/Tabledhote.js'; // Assurez-vous que le chemin est correct

function Path() {
  return (
    <BrowserRouter >
          <Routes>
              <Route path="table/:id" element={<TableDhote/>} />
          </Routes>
    </BrowserRouter >
  )
}

export default Path


