import React, { useEffect, useState } from 'react';
import "./Inicio.css";

// Importa tus imágenes de la carpeta 'inicio'
import img1 from '../Images/inicio/frente_01.jpg';
import img2 from '../Images/inicio/frente_02.jpg';
import img3 from '../Images/inicio/frente_03.jpg';
import img4 from '../Images/inicio/patio_01.jpg';
import img5 from '../Images/inicio/patio_02.jpg';
import img6 from '../Images/inicio/cochera_01.jpg';
import img7 from '../Images/inicio/pileta_01.jpg';
import img8 from '../Images/inicio/pileta_02.jpg';
// Podés seguir agregando más si querés
import logo from "../Images/logo.png";

const images = [img1, img2, img3,img4,img5,img6,img7,img8];

function Inicio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="inicio">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`imagen-fondo ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      {/* LOGO CON TRANSICIÓN Y VISIBILIDAD CONTROLADA */}
      <div
        className={`logo-superpuesto ${
          [3, 4].includes(currentIndex) ? 'hidden' : 'visible'
        }`}
      >
        <img src={logo} alt="Logo Anita Apart" />
      </div>
    </section>
  );
}

export default Inicio;