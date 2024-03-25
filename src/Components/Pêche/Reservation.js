import React from "react";
import "../../Styles/Pêche/Reservation.css";
import imgReservation from "../../Assets/etang-reservation.jpg";

function Reservation() {
  return (
    <div className="reservation-container">
      <div className="centered-title">
        <h1 className="title-etang">Les réservations d'étang</h1>
      </div>
      <div className="etang">
        <div className="content">
          <div className="left-column">
            <h2>Petit étang</h2>
            <p>
              {" "}
              (maxi 20 pêcheurs) : 49Kg dont 3,400Kg offert = 387,60€ Remise de
              28,90€ T.T.C
            </p>
            <p>
              {" "}
              (maxi 20 pêcheurs) : 65,5Kg dont 5,340Kg offert = 511,35€ Remise
              de 45,39€ T.T.C
            </p>
          </div>
          <div className="left-column">
            <h2>Moyen étang</h2>
            <p>
              (maxi 40 pêcheurs) : 65,5Kg dont 5,340Kg offert = 511,35€ Remise
              de 45,39€ T.T.C
            </p>
            <p>
              (maxi 40 pêcheurs) : 80,5Kg dont 7,100Kg offert = 623,85€ Remise
              de 60,35€ T.T.C
            </p>
          </div>npm run start
          
          <div className="left-column">
            <h2>Grand étang</h2>
            <p>
              {" "}
              (maxi 50 pêcheurs) : 104Kg dont 10Kg offert = 799,00€ Remise de
              85€ T.T.C
            </p>
          </div>
        </div>
        <div className="img-reservation">
          <img src={imgReservation} alt="Etang Bouriche" />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
