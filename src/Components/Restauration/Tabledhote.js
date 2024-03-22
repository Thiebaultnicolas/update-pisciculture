import React from 'react';
import Banner from '../Accueil/Banner.js';
import TabledhoteBanner from '../../Assets/Salle2.jpg';
import MenuImage1 from '../../Assets/Menu16.jpg'; // Importez la première image du menu
import MenuImage2 from '../../Assets/Menu20.jpg'; // Importez la deuxième image du menu
import "../../Styles/Restauration/Tabledhote.css";

function Bannerhote() {
  const handleDownload = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'menu_image.jpg'; // Nom du fichier à télécharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Banner image={TabledhoteBanner} titre="Titre de la table d'hôte" showLogo={false} showGradient={false} className="banner-tabledhote" />
      
      <div className="centered-section">
        <h2>Titre de la section</h2>
        <p>
          La pisciculture du Claireau est située dans l’Eure (27) dans le
          village <br></br> de Appeville dit Annebault entre Rouen et Le
          Havre. Notre site se trouve <br></br> au cœur de la vallée de
          Becquerel et est bordé par la forêt domaniale de <br></br> Montfort
          sur Risle. Classée Natura 2000, de nombreuses espèces animales
          <br></br> et végétales cohabitent.
        </p>
        <p>
          L’activité comprend la production, la pêche, le laboratoire de
          fumage,
          <br></br>
          la restauration et l’accueil du public. L’atelier fumage a été
          repensé<br></br> et restructuré afin de répondre aux normes
          européennes. La pisciculture<br></br> compte 5 bassins d’alevinage,
          10 bassins de grossissement et 3 étangs<br></br> destinés à la
          pêche.
        </p>
        <p>
          L’ensemble du site est alimenté par une source, le Clérot. La
          qualité de l’eau,<br></br> l’alimentation et toute l’attention
          apportée au respect du cycle de grossissement<br></br> des truites
          sont un gage de qualité. Depuis de nombreuses années, notre
          spécialité<br></br> la truite fumée est reconnue et est très
          appréciée de nos clients pour sa qualité<br></br>gustative.
        </p>
      </div>

      <div className="menu-images-container">
        <div className="menu-item">
          <h3>Sous-titre du menu 1</h3>
          <img src={MenuImage1} alt="Menu 1" className="menu-image" />
          <button className="download-button-table" onClick={() => handleDownload(MenuImage1)}>
            Télécharger le menu
          </button>
        </div>

        <div className="menu-item">
          <h3>Sous-titre du menu 2</h3>
          <img src={MenuImage2} alt="Menu 2" className="menu-image" />
          <button className="download-button-table" onClick={() => handleDownload(MenuImage2)}>
            Télécharger le menu
          </button>
        </div>
      </div>

      {/* Ajoutez le reste de votre contenu pour le composant Tabledhote ici */}
    </>
  );
}

export default Bannerhote;