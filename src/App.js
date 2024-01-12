// App.js
import React from 'react';
import './App.css';
import Header from './Components/Pages/Accueil/Header.js';
import BannerAccueil from '../src/Assets/Pisciculture.jpg'
import { Banner } from './Components/Pages/Accueil/Banner.js';
import Article from './Components/Pages/Accueil/Article.js'; // Importez le composant Article

function App() {
  return (
    <div className="App">
      <header className="App-Accueil">
        <Header />
        <Banner image={BannerAccueil} />
        {/* Ajoutez d'autres composants et contenu ici */}
      </header>
      <Article />
    </div>
  );
}

export default App;