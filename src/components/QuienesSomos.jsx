import React, { useRef, useEffect, useState } from "react";
import "./quienesSomos.css";

function QuienesSomos() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
  const currentRef = containerRef.current;  // guardo en variable local
  const observer = new IntersectionObserver(
    ([entry]) => {
      setVisible(entry.isIntersecting);
    },
    { threshold: 0.5 }
  );

  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    if (currentRef) {
      observer.unobserve(currentRef);
    }
  };
}, []);


  return (
    <section ref={containerRef} className="quienes-somos-container"style={{height: "100vh"}}>
      <div className={`text-left ${visible ? "slide-in-left" : "slide-out-left"}`}>
          <p>Anita Apart es un acogedor complejo de departamentos situado a solo 500 metros del centro, en un barrio tranquilo que invita a la relajación.</p>
          <p> Disfruta de vistas panorámicas desde nuestro jardín y piscina, el lugar perfecto para desconectarte y renovar energías durante tus vacaciones.</p>
          <p>Nuestro alojamiento es perfecto para parejas y familias con niños, con un amplio parque que incluye juegos de plaza y espacios verdes para el disfrute de todos.</p>
          <p>Contamos con dos unidades equipadas con cocina-comedor, habitación, baño, aire acondicionado y calefacción eléctrica, diseñadas para alojar de 2 a 6 personas.</p>
          <p>Además, ofrecemos servicio de blancos y amenities para mayor comodidad. </p>
      </div>
      <div className={`text-right ${visible ? "slide-in-right" : "slide-out-right"}`}>
          <p>Disponemos de estacionamiento techado y privado para nuestros huéspedes.</p>
          <p>El barrio es muy tranquilo, a pesar de estar cerca del centro.</p>
          <p>A solo dos cuadras encontrarás un almacén y despensa para tus compras diarias.</p>
          <p>Caminando 500 metros llegarás a la calle principal del centro viejo, donde descubrirás una variedad de comercios, restaurantes regionales y el famoso cucú.</p>
          <p>Sumando dos cuadras más, alcanzarás el puente central que desemboca en la peatonal del centro nuevo.</p>
          <p>Nos comprometemos a brindar una atención personalizada y un servicio de calidad para que tu estadía sea inolvidable.</p>
      </div>
    </section>
  );
}

export default QuienesSomos;
