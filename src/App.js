// App.js
import React from 'react';
import './App.css';
import Footer from '../src/Components/Accueil/Footer.js';
import Header from '../src/Components/Accueil/Header.js';
import Path from './Routes/Routes.js';


function App() {
    return (
        <div className="App">
            <header className="App-Accueil">
                <Header />
            </header>
            <Path />
            <Footer />
        </div>
    );
}

export default App;