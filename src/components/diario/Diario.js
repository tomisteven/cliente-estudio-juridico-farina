import React from "react";
import "./Diario.css";
import noticias from "../Data/Noticias";


export default function Diario() {
    const handleRedirect = (slug) => {
        window.location.href = `/diario/${slug}`;
      };
  return (
    <div className="container-diario">
      <h1>Todas las noticias</h1>
      {noticias.map((noticia) => (
        <div key={noticia.id} className="cont-noticia-diario">
          <img
            src={noticia.imagen}
            alt={noticia.titulo}
            className="imagen-noticia-diario"
          />
          <div className="info-noticia-diario">
            <h2>{noticia.titulo}</h2>
            <p>{noticia.fecha}</p>
            <button
              onClick={() => handleRedirect(noticia.slug)}
              className="boton-noticia-diario"
            >
              Leer más
            </button>
          </div>
        </div>
      )).reverse()}
    </div>
  );
}
