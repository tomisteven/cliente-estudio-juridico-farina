import React from "react";
import "./Header.css";
import logo from "../../assets/logooficial.png";

export default function Header() {
  return (
    <header>
      <div class="container">
        <div class="container-2">
          <div class="logo">
             <img src={logo} alt="Logo" />
          </div>
          <nav>
            <ul className="header-ul">
              <li>
                <a href="#d">Inicio</a>
              </li>
              <li>
                <a href="#d">Acerca de</a>
              </li>
              <li>
                <a href="#d">Servicios</a>
              </li>
              <li>
                <a href="#d">Contacto</a>
              </li>
              <li>
                <a href="#d">Blog</a>
              </li>
              <li>
                <button className="btn-header-wapp" onClick={() => {
            window.location.href = "https://wa.link/36t96j";
          }}>Chatear Whatss App </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
