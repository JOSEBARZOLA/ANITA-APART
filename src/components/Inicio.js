import React from 'react';
import imgFondo from '../Images/Img-01.jpg'; // Asegurate que la ruta sea correcta

function Inicio() {
  return (
    <section className="inicio">
      <img src={imgFondo} alt="Fondo Anita Apart" className="imagen-fondo" />
      <div className="texto-superpuesto">
        <h1>ANITA APART</h1>
        <p>Tu lugar en Villa Carlos Paz</p>
      </div>
    </section>
  );
}

export default Inicio;
