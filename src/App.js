// App.js
import React from 'react';
import './App.css';
import Header from './Components/Pages/Accueil/Header.js';
import BannerAccueil from '../src/Assets/Pisciculture.jpg'
import { Banner } from './Components/Pages/Accueil/Banner.js';
import Article from './Components/Pages/Accueil/Article.js'; 
import Information from './Components/Pages/Accueil/Information.js';
import Footer from './Components/Pages/Accueil/Footer'; 
import Path from '../src/Routes/Routes.js'; // Assurez-vous que le chemin est correct

function App() {
  return (
    <div className="App">
      <header className="App-Accueil">
        <Header />
        <Path />
      </header>
        <Banner image={BannerAccueil} />
        {/* Ajoutez d'autres composants et contenu ici */}
      <Article />
      <Information />
      <Footer />
    </div>
  );
}

export default App;