// Cabanas.jsx
import React, { useState, useEffect, useRef } from "react";

import "./Cabanas.css";

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
    }, 6000);
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
 const cabana1Ref = useRef(null);
  const cabana2Ref = useRef(null);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const ref1 = cabana1Ref.current;
    const ref2 = cabana2Ref.current;

    const observer1 = new IntersectionObserver(
      ([entry]) => setVisible1(entry.isIntersecting),
      { threshold: 0.8 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => setVisible2(entry.isIntersecting),
      { threshold: 0.8 }
    );

    if (ref1) observer1.observe(ref1);
    if (ref2) observer2.observe(ref2);

    return () => {
      if (ref1) observer1.unobserve(ref1);
      if (ref2) observer2.unobserve(ref2);
    };
  }, []);

  return (
    <section className="cabanas-wrapper">
      <div className="cabanas-section">
        <div className="titulo-wrapper">
          <h2 className="titulo-cabanas">Nuestras Cabañas</h2>
        </div>
        <div
          ref={cabana1Ref}
          className={`cabana-card ${visible1 ? "slide-in-right" : "hidden-to-left"}`}
        >
          <Slider images={cabana1Images} />
          <div className="descripcion-cabana">
            <h3>Cabaña 1</h3>
            <p>Esta cabaña ofrece espacios cómodos y totalmente equipados, ideales para grupos de hasta 6 personas.</p> 
            <ul>
              <li><strong>Cocina:</strong>Heladera, microondas, cocina de 4 hornallas con horno, vajilla y utensilios para 6 personas, ollas para cocinar.</li>
              <li><strong>Baño:</strong>Incluye jabón líquido para manos, dos jabones individuales y dos rollos de papel higiénico.</li>
              <li><strong>Habitación:</strong>Una cama matrimonial, aire acondicionado frío/calor.</li>
              <li><strong>Comedor:</strong>Dos camas marineras, calefactor eléctrico de vitroconvección y ventilador de techo.</li>
              <li><strong>Servicio de blancos:</strong>Sábanas, cubrecamas y juego de toalla/toallón por persona.</li>
              <li><strong>Entretenimiento:</strong>Smart TV con conexión a internet wifi.</li>
            </ul>
          </div>
        </div>
        <div ref={cabana2Ref} className={`cabana-card ${visible2 ? "slide-in-left" : "hidden-to-right"}`}>
          <Slider images={cabana2Images} />
          <div className="descripcion-cabana">
            <h3>Cabaña 2</h3>
            <p>Ideal para familias pequeñas o parejas, esta cabaña combina calidez y funcionalidad.</p>
            <ul>
              <li><strong>Cocina:</strong>Heladera, microondas, cocina eléctrica de 2 hornallas con horno, vajilla y utensilios para 4 personas, ollas para cocinar.</li>
              <li><strong>Baño:</strong>Incluye jabón líquido para manos, dos jabones individuales y dos rollos de papel higiénico.</li>
              <li><strong>Habitación:</strong>Cama matrimonial, estufa eléctrica y ventilador de pie.</li>
              <li><strong>Comedor:</strong>Cama marinera, calefactor eléctrico de vitroconvección y aire acondicionado frío.</li>
              <li><strong>Servicio de blancos:</strong>Sábanas, cubrecamas y juego de toalla/toallón por persona.</li>
              <li><strong>Entretenimiento:</strong>Smart TV con conexión a internet wifi.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
