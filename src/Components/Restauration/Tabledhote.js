import React from 'react';
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
      <div className="centered-section">
        <h2>Notre table d'hôte</h2>
        <p className='description-repas'>
          Nous vous accueillons pour vos repas de groupes, de 10 à 80 personnes. <br></br> 
          Nous sommes ouverts à la restauration toute l'année, uniquement sur réseravtion. <br></br> 
          <br></br> 
          <strong>Depuis 2024, nous vous proposons égalerment Les midi à la table du Claireau, pour des repas individuel ouverts à tous.</strong> <br></br>
          Une fois par mois, seul ou accompagné, vous pourrez venir passer un agréable moment à notre table. <br></br>
          Les dates et menus sont à retrouver sur la page d'accueil, dans l'onglet "événements à venir" <br></br>
        </p>
      
      </div>

      <div className="menu-images-container">
        <div className="menu-item">
          <h3>Formule 1 </h3>
          <img src={MenuImage1} alt="Menu 1" className="menu-image" />
          <button className="download-button-table" onClick={() => handleDownload(MenuImage1)}>
            Télécharger le menu
          </button>
        </div>

        <div className="menu-item">
          <h3>Formule 2</h3>
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