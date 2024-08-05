import React from "react";
import "./Header.css";
import logo from "../../assets/logooficial.png";

export default function Header() {
  return (
    <header>
      <div class="container">
        <div class="container-2">
          <div class="logo">
             <img src={logo} alt="Abogado penalista en la ciudad de la plata con amplia experiencia" />
          </div>
          <nav>
            <ul className="header-ul">
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#acercade">Perfil</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#estudio">Estudio</a>
              </li>
              <li>
                <a href="#blog">Articulos</a>
              </li>
              <li>
                <button className="btn-header-wapp" onClick={() => {
            window.location.href = "https://wa.link/36t96j";
          }}>Chatear WhatsApp </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
