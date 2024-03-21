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
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Accueil/Information.css";

function Information() {
  return (
    <div className="banner-container">
      <div className="information">
        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faMugHot} className="info-icon" />
            <div className="info-text">
              <h3>Bar & Restaurant</h3>
              <p>
                Venez profitez d'un en-cas et d'une boisson en terasse ou autour
                des étangs. Vous pouvez aussi venir découvrir les délices de
                notre table d'hôte lors de notre rendez-vous mensuel.
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
                Vos fidèle compagnon sont les bienvenus a la pisciculture mais
                il doivent être tenus en laisse.
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
                Notre site est accessible à tous ! Un chemin est dédié aux
                Personnes à Mobilité Réduite pour accéder facilement à notre
                bar.
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faCreditCard} className="info-icon" />
            <div className="info-text">
              <h3>Moyens de Paiements</h3>
              <p>
                Nous acceptons les réglements en espèces ainsi qu'en carte
                bancaire avec un minimum de 10€.
              </p>
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-content">
            <FontAwesomeIcon icon={faTree} className="info-icon" />
            <div className="info-text">
              <h3>Aménagements</h3>
              <p>
                Des Tables de pique-nique, des barbecues ainsi que des abris en
                cas de pluie sont a votre disposition autour des
                écologiquetangs.
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
                Vous trouverez sur place tout le matériel de pêche dont vous
                pourrez avoir besoin, et nous proposons aussi de la truite fumée
                ou fraîche.
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
                Notre site dispose de deux toilettes dont un accessible aux
                personnes a mobilité réduite.
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
                compost.
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
