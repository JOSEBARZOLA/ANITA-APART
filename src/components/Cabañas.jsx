import React, { useState, useEffect } from "react";
import "./Cabañas.css";

// Importa acá las imágenes de cada cabaña (asegurate la ruta)
import cabana01_img1 from "../Images/cabana_01/frenteDto_01.jpg";
import cabana01_img2 from "../Images/cabana_01/cocina_01.jpg";
import cabana01_img3 from "../Images/cabana_01/cocina_02.jpg";
import cabana01_img4 from "../Images/cabana_01/comedor_01.jpg";
import cabana01_img5 from "../Images/cabana_01/comedor_02.jpg";
import cabana01_img6 from "../Images/cabana_01/habitacion_01.jpg";
import cabana01_img7 from "../Images/cabana_01/habitacion_02.jpg";
import cabana01_img8 from "../Images/cabana_01/bano_01.jpg";
import cabana01_img9 from "../Images/cabana_01/bano_02.jpg";

import cabana02_img1 from "../Images/cabana_02/frenteDpto.jpg";
import cabana02_img2 from "../Images/cabana_02/coComedor_01.jpg";
import cabana02_img3 from "../Images/cabana_02/coComedor_02.jpg";
import cabana02_img4 from "../Images/cabana_02/coComedor_03.jpg";
import cabana02_img5 from "../Images/cabana_02/habitacion.jpg";
import cabana02_img6 from "../Images/cabana_02/baño_01.jpg";
import cabana02_img7 from "../Images/cabana_02/baño_02.jpg";
import cabana02_img8 from "../Images/cabana_02/baño_03.jpg";

const cabana1Images = [
  cabana01_img1,
  cabana01_img2,
  cabana01_img3,
  cabana01_img4,
  cabana01_img5,
  cabana01_img6,
  cabana01_img7,
  cabana01_img8,
  cabana01_img9,
];

const cabana2Images = [
  cabana02_img1,
  cabana02_img2,
  cabana02_img3,
  cabana02_img4,
  cabana02_img5,
  cabana02_img6,
  cabana02_img7,
  cabana02_img8,
];

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-imagenes">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Imagen ${i + 1}`}
          className={`slider-img ${i === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default function Cabanas() {
  return (
    <section className="cabanas-wrapper">
      <div className="cabanas-section">
        <div className="titulo-wrapper">
          <h2 className="titulo-cabanas">Nuestras Cabañas</h2>
        </div>

        <div className="cabana-card slide-in-left">
          <div className="slider-imagenes">
            <Slider images={cabana1Images} />
          </div>
          <div className="descripcion-cabana">
            <h3>Cabaña 1</h3>
            <p>Esta es una acogedora cabaña ideal para descansar...</p>
            <p>Con espacios amplios y luminosos, perfecta para familias...</p>
            <ul>
              <li>WiFi gratuito</li>
              <li>Aire acondicionado</li>
              <li>Cocina equipada</li>
              <li>Estacionamiento privado</li>
            </ul>
          </div>
        </div>

        <div className="cabana-card slide-in-right">
          <div className="slider-imagenes">
            <Slider images={cabana2Images} />
          </div>
          <div className="descripcion-cabana">
            <h3>Cabaña 2</h3>
            <p>Esta cabaña ofrece un ambiente cálido y cómodo...</p>
            <p>Ideal para parejas o familias que buscan relajarse...</p>
            <ul>
              <li>Calefacción eléctrica</li>
              <li>Jardín privado</li>
              <li>Parrilla</li>
              <li>Servicio de blancos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}