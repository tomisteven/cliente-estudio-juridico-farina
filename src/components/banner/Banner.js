import React from "react";
import "./Banner.css";
import Slider from "react-slick";

export default function Banner() {
  var settings = {
    dots: false,
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
        <h1>Urgencias en Ciudad de La Plata, Dr Farina Balbi</h1>
      </div>
      <div>
        <h2>Estudio Juridico Penal</h2>
      </div>
      <div>
        <h2>Abogado Especialista en Derecho Penal</h2>
      </div><div>
        <h2>Abogado Penalista en CABA - Fuero Federal</h2>
      </div>
      <div>
        <h1>Excarcelaciones - Prision Preventiva - Eximision de Prision - Asesoramiento en Comisaria </h1>
      </div>
      <div>
        <h2>Audiencias - Investigacion Penal - Juicio Oral - Juicio por Jurados</h2>
      </div>
      <div>
        <h2>Recurso de Apelacion - Recurso de Casacion - Delitos de Genero - Falsas Denuncias</h2>
      </div>
    </Slider>
  );
}
