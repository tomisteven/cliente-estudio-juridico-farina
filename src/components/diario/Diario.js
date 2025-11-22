import React from "react";
import { Helmet } from "react-helmet-async";
import "./Diario.css";
import noticias from "../Data/Noticias";


export default function Diario() {
  const handleRedirect = (slug) => {
    window.location.href = `/diario/${slug}`;
  };
  return (
    <>
      <Helmet>
        <title>Blog Jurídico - Artículos de Derecho Penal | Fariña Balbi</title>
        <meta name="description" content="Artículos y análisis sobre derecho penal, falsas denuncias, delitos sexuales y casos jurídicos relevantes en Argentina por el Dr. Julian Farina Balbi." />
        <link rel="canonical" href="https://www.estudiofarinabalbi.com/diario" />
        <meta property="og:title" content="Blog Jurídico - Artículos de Derecho Penal" />
        <meta property="og:url" content="https://www.estudiofarinabalbi.com/diario" />
        <meta property="og:type" content="website" />
      </Helmet>
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
    </>
  );
}
