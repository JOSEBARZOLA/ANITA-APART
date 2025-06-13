import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  // Estado para controlar la visibilidad del navbar al hacer scroll
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Estado para el menú hamburguesa en dispositivos móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
  const scrollY = window.scrollY;

  // Si el desplazamiento hacia abajo es mayor que un valor determinado (por ejemplo, 100px), se oculta el navbar
  if (scrollY > lastScrollY && scrollY > 100) {  // Cambia 100 por el valor que desees
    setIsVisible(false);
  } else if (scrollY < lastScrollY) {
    setIsVisible(true);
  }

  setLastScrollY(scrollY);
}, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú hamburguesa
  };

  return (
    <nav className={`navbar ${!isVisible ? "hidden" : ""}`}>
      {/* Menú hamburguesa para dispositivos móviles */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menú de navegación */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><Link to="inicio" smooth={true} duration={500}>Inicio</Link></li>
        <li><Link to="quienes-somos" smooth={true} duration={500}>Quiénes Somos</Link></li>
        <li><Link to="cabanas" smooth={true} duration={500}>Cabañas</Link></li>
        <li><Link to="reservas" smooth={true} duration={500}>Reservas</Link></li>
        <li><Link to="contacto" smooth={true} duration={500}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
