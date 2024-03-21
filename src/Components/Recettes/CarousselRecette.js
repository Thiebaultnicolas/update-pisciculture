import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
import "../../Styles/Recettes/CarousselRecette.css";

function CarousselRecette() {
  const [carouselIndex, setCarouselIndex] = useState(0);

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
  ]; // Ajoutez d'autres images selon vos besoins

  useEffect(() => {
    if (carouselIndex >= images.length) {
      setCarouselIndex(0);
    }
    if (carouselIndex < 0) {
      setCarouselIndex(images.length - 1);
    }
  }, [carouselIndex, images.length]);

  const handleDownload = (imageUrl, imageName) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="carrousel-recette-container"
      style={{ backgroundImage: `url(${BackgroundRecette})` }}
    >
      <div className="carrousel-content">
        <h2>Titre du Carrousel</h2>
        <h3>Sous-titre du Carrousel</h3>
        <p>Texte lorem...</p>
      </div>
      <Carousel
        selectedItem={carouselIndex}
        onChange={(index) => setCarouselIndex(index)}
        infiniteLoop={true}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Recette ${index + 1}`} />
            <button
              className="download-button"
              onClick={() => handleDownload(image, `Recette_${index + 1}.png`)}
            >
              Télécharger
            </button>
          </div>
        ))}
      </Carousel>
      {images.length > 1 && (
        <span className="nombre_image">
          {carouselIndex + 1}/{images.length}
        </span>
      )}
    </div>
  );
}

export default CarousselRecette;
