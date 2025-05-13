import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-scroll";


function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`navbar ${!isVisible ? "hidden" : ""}`}>
      <Link to="inicio" smooth={true} duration={500}>Inicio</Link>
      <Link to="quienes-somos" smooth={true} duration={500}>Quiénes Somos</Link>
      <Link to="cabanas" smooth={true} duration={500}>Cabañas</Link>
      <Link to="reservas" smooth={true} duration={500}>Reservas</Link>
      <Link to="contacto" smooth={true} duration={500}>Contacto</Link>
    </nav>
  );
}

export default Navbar;
