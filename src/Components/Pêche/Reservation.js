import React from "react";
import "../../Styles/Pêche/Reservation.css";
import imgReservation from "../../Assets/etang-reservation.jpg";
import contratPDF from "../../Assets/Contrat de réservation.pdf"; // Chemin vers votre fichier PDF

function handleDownload() {
  // Crée un lien temporaire
  const link = document.createElement('a');
  link.href = contratPDF;
  link.download = 'contrat.pdf';
  // Déclenche le téléchargement
  document.body.appendChild(link);
  link.click();
  // Nettoie le lien temporaire
  document.body.removeChild(link);
}

function Reservation() {
  return (
    <div className="reservation-container">
      <div className="background-container">
        <div className="centered-title">
          <h1 className="title-etang">Les réservations d'étang</h1>
        </div>
        <div className="etang">
          <div className="img-reservation">
            <img src={imgReservation} alt="Etang Bouriche" />
          </div>
          <div className="content">
            <div className="left-column">
              <h2>Petit étang</h2>
              <p>
                (maxi 20 pêcheurs) : 49Kg dont 3,400Kg offert = 387,60€&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Remise
                de 28,90€ T.T.C</strong>
              </p>
              <p>
                (maxi 20 pêcheurs) : 65,5Kg dont 5,340Kg offert = 511,35€&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Remise
                de 45,39€ T.T.C</strong>
              </p>
            </div>
            <div className="left-column">
              <h2>Moyen étang</h2>
              <p>
                (maxi 40 pêcheurs) : 65,5Kg dont 5,340Kg offert = 511,35€&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Remise
                de 45,39€ T.T.C</strong>
              </p>
              <p>
                (maxi 40 pêcheurs) : 80,5Kg dont 7,100Kg offert = 623,85€&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Remise
                de 60,35€ T.T.C</strong>
              </p>
            </div>
            <div className="left-column">
              <h2>Grand étang</h2>
              <p>
                (maxi 50 pêcheurs) : 104Kg dont 10Kg offert = 799,00€&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Remise de
                85€ T.T.C</strong>
              </p>
            </div>
            <br />
            <br />
            <div className="center-contrat">
              <em>
                <strong>
                  <p>
                    Toute réservation fera l’objet d’un contrat et d’un<br /> acompte
                    dans les 15 jours suivant le choix de la date.
                  </p>
                </strong>
              </em>
              <em>
                <strong>
                  <p>
                    Nous demandons à chaque responsable de groupe de veiller à ce
                    que <br />
                    l’endroit reste propre à la fin de la journée de pêche.
                  </p>
                </strong>
              </em>
              <button onClick={handleDownload} className="btn-telecharger">
                Télécharger le contrat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
