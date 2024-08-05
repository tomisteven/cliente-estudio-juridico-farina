import React from "react";
import "./ButtonsSociales.css";

export default function ButtonsSociales() {
  return (

      <div className="cont-buttons-sociales">
        <a
          href="https://www.facebook.com/julian.farinabalbi"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a
          href="https://www.instagram.com/julianfarinabalbi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          rel="noreferrer"
          target="_blank"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://x.com/drfarinabalbi"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>

  );
}
