// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../../Styles/Accueil/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-block">
        <div className="footer-text">
          <h4>VENEZ JUSQU'À NOUS</h4>
          <p>
            La Pisciculture du Claireau <br></br>Le Moulin Becquerel <br></br>
            27290 Appeville-Annebault<br></br>
            <br></br>
            Coordonnées GPS:<br></br>
            latitude : 49.2945909<br></br>
            longitude : 0.6648649999999634
          </p>
        </div>
      </div>

      <div className="footer-block">
        <div className="footer-text">
          <h4>QUAND NOUS TROUVER</h4>
          <p>
            La Pisciculture du Claireau vous accueille tout<br></br>
            au long de l'année avec des horaires adaptés<br></br> aux saisons.
            <br></br>
            <br></br>
            Du 1er mars au 30 septembre : 7h30 - 18h30 tous les jours.
            <br></br>
            1er octobre au 29 février : 7h30 - 17h30,<br></br> sauf les
            mercredis et dimanches.
          </p>
        </div>
      </div>

      <div className="column-footer">
        <div className="footer-block">
          <div className="footer-text">
            <h4>CONTACTEZ NOUS</h4>
            <p>
              Par mail : le.claireau@gmail.com<br></br>
              Par téléphone : 09 66 91 06 15 au 02
            </p>
          </div>
        </div>

        <div className="footer-block">
          <div className="footer-text">
            <h4>SUIVEZ NOUS</h4>
            <a
              href="https://www.facebook.com/piscicultureduclaireau?locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="Facebook-icon" />
            </a>
            <a
              href="https://www.instagram.com/piscicultureduclaireau/?img_index=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="Instagram-icon" />
            </a>
            <p>N° SIRET : 524 050 127 00017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;