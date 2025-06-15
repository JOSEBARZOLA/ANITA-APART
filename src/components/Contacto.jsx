import React from "react";
import "./Contacto.css";
import fondoContacto from "../Images/sierrasVcp.jpg"; // Asegurate de tener la imagen

export default function Contacto() {
  return (
    <section className="contacto-wrapper" style={{ backgroundImage: `url(${fondoContacto})` }}>
      <div className="overlay">
        <h2 className="contacto-titulo">Contacto</h2>

        <form className="contacto-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Asunto" required />
          <textarea placeholder="Mensaje" rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>

        

        <div className="redes-card">
          <h3>Nuestras redes</h3>
          <div className="iconos-redes">
            {/* Reemplaza los # con los enlaces reales */}
            <a href="/" target="_blank" rel="noopener noreferrer">🌐</a>
            <a href="/" target="_blank" rel="noopener noreferrer">📘</a>
            <a href="/" target="_blank" rel="noopener noreferrer">📸</a>
          </div>
          <div className="contacto-info">
             <p><strong>Tel:</strong>+54 9 1234 567890</p>
             <p><strong>Email:</strong>contacto@tucabania.com</p>
          </div>
        </div>
      </div>

      <div className="ubicacion-card">
        <h3>¿Cómo llegar?</h3>
        <div className="mapa">
          {/* Pegá tu iframe de Google Maps aquí */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.877573609924!2d-64.51326298966713!3d-31.417498974153858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d670c8a100edd%3A0xf330cc30d787eacd!2sAnita%20Apart!5e0!3m2!1ses!2sar!4v1749966287944!5m2!1ses!2sar"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
