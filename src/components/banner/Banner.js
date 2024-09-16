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
    <section aria-label="Slider de servicios legales">
      <Slider className="cont-banner" {...settings}>
        <div>
          <h1>Derecho Penal</h1>
          <p>
            Especialistas en derecho penal con amplia experiencia en juicios.
          </p>
        </div>
        <div>
          <h2>Abogado Penalista en La Plata</h2>
          <p>Asesoramiento legal en casos penales en la ciudad de La Plata.</p>
        </div>
        <div>
          <h2>Estudio Jurídico Penal en La Plata</h2>
          <p>Ofrecemos servicios legales especializados en derecho penal.</p>
        </div>
        <div>
          <h2>Abogado Especialista en Derecho Penal</h2>
          <p>
            Expertos en la defensa y representación en casos de derecho penal.
          </p>
        </div>
        <div>
          <h3>Abogado Penalista - Delitos Sexuales</h3>
          <p>
            Defensa especializada en casos de delitos sexuales y violencia de
            género.
          </p>
        </div>
        <div>
          <h3>Abogado Penalista - Falsas Denuncias</h3>
          <p>Protección legal en casos de acusaciones falsas y difamación.</p>
        </div>
        <div>
          <h3>Abogado Penalista en Buenos Aires</h3>
          <p>
            Servicios legales de defensa penal en Buenos Aires y alrededores.
          </p>
        </div>
        <div>
          <h2>Abogado Penalista en CABA</h2>
          <p>
            Atención a casos de derecho penal en la Ciudad Autónoma de Buenos
            Aires.
          </p>
        </div>
        <div>
          <h3>Abogado Penalista - Robos</h3>
          <p>
            Defensa legal en casos de robo y hurto con un equipo experimentado.
          </p>
        </div>
        <div>
          <h3>Abogado Penalista - Cibercrimen y Ciberestafas</h3>
          <p>Especialistas en delitos informáticos y fraudes digitales.</p>
        </div>
        <div>
          <h3>Estudio Jurídico Penal</h3>
          <p>
            Bufete con amplia experiencia en derecho penal y defensas complejas.
          </p>
        </div>
        <div>
          <h3>Juicio por Jurados</h3>
          <p>
            Asesoría y representación en juicios por jurados en casos penales.
          </p>
        </div>
      </Slider>
    </section>
  );
}
