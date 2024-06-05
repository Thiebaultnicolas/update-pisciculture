import React from 'react';
import programme from "../../Assets/programme.pdf";
import programmeEte from "../../Assets/Programme-ete.jpg";
import BackgroundRecette from "../../Assets/BackgroundRecette.jpg";
import "../../Styles/Accueil/Evenement.css";

export default function EvenementWindows({ show, onClose }) {
  if (!show) {
    return null;
  }

  const handleDownload = () => {
    // Crée un lien temporaire
    const link = document.createElement('a');
    link.href = programme;
    link.download = 'programme.pdf';
    // Déclenche le téléchargement
    document.body.appendChild(link);
    link.click();
    // Nettoie le lien temporaire
    document.body.removeChild(link);
  };

  return (
    <div className='modal-overlay' onClick={onClose}>
        <img src={programmeEte} alt="Programme événement de l'été" />
      </div>
    
  );
}
