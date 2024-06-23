import React from "react";
import "./ButtonsSociales.css";

export default function ButtonsSociales() {
  return (

      <div className="cont-buttons-sociales">
        <a
          href="https://www.facebook.com/estudiofarinabalbi"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a
          href="https://www.instagram.com/estudiofarinabalbi/"
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/estudiofarinaba"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/julian-farina-balbi-7a3b1b1b4/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

  );
}
