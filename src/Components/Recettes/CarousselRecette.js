import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Recettes/CarousselRecette.css";
import BackgroundRecette from "../../Assets/BackgroundRecette.jpg";
import Recette1 from "../../Assets/Recette1.png";
import Recette2 from "../../Assets/Recette2.png";
import Recette3 from "../../Assets/Recette3.png";
import Recette4 from "../../Assets/Recette4.png";
import Recette5 from "../../Assets/Recette5.png";
import Recette6 from "../../Assets/Recette6.png";
import Recette7 from "../../Assets/Recette7.png";
import Recette8 from "../../Assets/Recette8.png";
import Recette9 from "../../Assets/Recette9.png";
import Recette10 from "../../Assets/Recette10.png";
import Recette11 from "../../Assets/Recette11.png";
import Recette12 from "../../Assets/Recette12.png";
import Recette13 from "../../Assets/Recette13.png";
import Recette14 from "../../Assets/Recette14.png";

const images = [
  Recette1,
  Recette2,
  Recette3,
  Recette4,
  Recette5,
  Recette6,
  Recette7,
  Recette8,
  Recette9,
  Recette10,
  Recette11,
  Recette12,
  Recette13,
  Recette14,
];

const CarousselRecette = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  

  useEffect(() => {
    if (carouselIndex >= images.length) {
      setCarouselIndex(0);
    }
    if (carouselIndex < 0) {
      setCarouselIndex(images.length - 1);
    }
  }, [carouselIndex]);

  const downloadImage = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `recette_${carouselIndex + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="carrousel-background" style={{ backgroundImage: `url(${BackgroundRecette})` }}>
      <div className="carrousel-recette-container">
        <div className="carrousel-content">
          <h2 className="titre-recette">Nous vous partageons nos recettes</h2>
          {/* Bouton de téléchargement */}
      <button onClick={() => downloadImage(images[carouselIndex])} className="download-button">
        Télécharger
      </button>
        </div>
        <div className="galerie">
          {images.length > 1 && (
            <div
              onClick={() => setCarouselIndex(carouselIndex - 1)}
              className="galerie_boutton_left"
              aria-label="boutton de défilement"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          )}
  
          <img
            src={images[carouselIndex]}
            alt={`Recette ${carouselIndex + 1}`}
            className="galerieimg"
          />
  
          {images.length > 1 && (
            <div
              onClick={() => setCarouselIndex(carouselIndex + 1)}
              className="galerie_boutton_right"
              aria-label="boutton de défilement"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          )}
  
        </div>
  
        {images.length > 1 && (
          <span className="nombre_image">
            {carouselIndex + 1}/{images.length}
          </span>
        )}
      </div>
  
      
    </div>
  );
};

export default CarousselRecette;
