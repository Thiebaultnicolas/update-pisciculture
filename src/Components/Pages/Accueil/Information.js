// Information.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faDog,
  faWheelchair,
  faTree,
  faFish,
  faRestroom,
  faSquareParking,
  faTrash, 
} from "@fortawesome/free-solid-svg-icons";
import { faMugHot, faGripLines  } from "@fortawesome/free-solid-svg-icons";
import "../../../Styles/Accueil/Information.css";

function Information() {
  return (
    <div className="banner-container">
      <div className="centered-icon">
      <FontAwesomeIcon icon={faGripLines} className="centered-icon" />
      </div>
      <div className="information">
        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faMugHot} className="info-icon" />
            <div className="info-text">
              <h3>Bar</h3>
              <p>
                Dégustez un en-cas rapide ou savourez une boisson sur place. Trouvez
                également tout l'équipement de pêche dont vous avez besoin.
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faDog} className="info-icon" />
            <div className="info-text">
              <h3>Chiens</h3>
              <p>
                Profitez de notre site en compagnie de votre fidèle compagnon,
                les chiens sont les bienvenus sans laisse, mais veuillez rester
                attentifs à leur comportement.
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faWheelchair} className="info-icon" />
            <div className="info-text">
              <h3>PMR</h3>
              <p>
                Notre site est accessible à tous ! Profitez d'un chemin dédié
                aux Personnes à Mobilité Réduite pour accéder facilement à notre
                bar.
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faCreditCard} className="info-icon" />
            <div className="info-text">
              <h3>Mode de Paiement</h3>
              <p>
                Nous acceptons les espèces ainsi que la carte bancaire.
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faTree} className="info-icon" />
            <div className="info-text">
              <h3>Aire de pique-nique ombragée</h3>
              <p>
                Profitez de plusieurs aires de pique-nique en bord d'étang
                équipées de tables, barbecues et abris en cas de pluie.
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faFish} className="info-icon" />
            <div className="info-text">
              <h3>Vente sur Place</h3>
              <p>
                Découvrez notre offre de vente sur place, où nous proposons des
                truites fumées ou fraîches, disponibles sur demande.
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faRestroom} className="info-icon" />
            <div className="info-text">
              <h3>Sanitaires</h3>
              <p>
                Notre site dispose de deux toilettes dont un 
                accessible aux personnes a mobilité réduite.
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faSquareParking} className="info-icon" />
            <div className="info-text">
              <h3>Parking</h3>
              <p>
                Notez qu'il n'y a pas de parking dédié, mais vous avez la
                possibilité de vous garer autour des étangs pour faciliter votre
                visite.
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faTrash} className="info-icon" />
            <div className="info-text">
              <h3>Propretés</h3>
              <p>
                Contribuez à maintenir notre site propre en utilisant les
                poubelles de tri disponibles. Nous disposons de containers pour
                le recyclage, les ordures ménagères, le verre, et même un
                compost, assurant ainsi une gestion écologique des déchets sur
                place.
              </p>
            </div>
          </div>
        </div>

        {/* Répétez ces blocs pour chaque information */}
      </div>
    </div>
  );
}

export default Information;
