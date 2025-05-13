import React from "react";
import { Element } from "react-scroll";
import Inicio from "./components/Inicio";
import QuienesSomos from "./components/QuienesSomos";
import Cabanas from "./components/Cabañas";
import Reservas from "./components/Reservas";
import Contacto from "./components/Contacto";
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Element name="inicio"><Inicio /></Element>
      <Element name="quienes-somos"><QuienesSomos /></Element>
      <Element name="cabanas"><Cabanas /></Element>
      <Element name="reservas"><Reservas /></Element>
      <Element name="contacto"><Contacto /></Element>
      <Footer />
    </div>
  );
}
export default App;
