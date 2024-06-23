import React from "react";
import "./Banner.css";
import Slider from "react-slick";

export default function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider className="cont-banner" {...settings}>
      <div>
        <h1>Derecho Penal</h1>
      </div>
      <div>
        <h1>Abogado Penalista En La Plata - Provincia de Buenos Aires </h1>
      </div>
      <div>
        <h1>Dr. Julian Farina Balbi</h1>
      </div>
      <div>
        <h1>Estudio Juridico Penal</h1>
      </div>
      <div>
        <h1>Abogado Especialista en Derecho Penal</h1>
      </div><div>
        <h1>Abogado Penalista en CABA - Fuero Federal</h1>
      </div>
      <div>
        <h1>Excarcelaciones - Prision Preventiva - Eximision de Prision - Asesoramiento en Comisaria </h1>
      </div>
      <div>
        <h1>Audiencias - Investigacion Penal - Juicio Oral - Juicio por Jurados</h1>
      </div>
      <div>
        <h1>Recurso de Apelacion - Recurso de Casacion - Delitos de Genero - Falsas Denuncias</h1>
      </div>
    </Slider>
  );
}
