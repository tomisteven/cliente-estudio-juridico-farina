import React from "react";
import "./Noticias.css";
import castilla from "../../assets/castilla.jpg";
import diarioCapital from "../../assets/diariocapital.jpg";
import disertacion from "../../assets/disertacion.jpg";
import investigador from "../../assets/investigador.jpg";
import proyect from "../../assets/proyect.jpg";
import jurados from "../../assets/jurados.jpg";
import portacionarmas from "../../assets/portacionarmas.jpg";
import secretario from "../../assets/secretario.jpg";
import radio from "../../assets/radio.jpg";
import investigacion from "../../assets/investigacion.jpeg";
//import Carousel from "react-multi-carousel";

import { Carousel } from "react-responsive-carousel";

export default function Noticias() {
  const noticias = [
    {
      id: 1,
      titulo: "Castilla",
      descripcion:
        "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
      link: "https://www.instagram.com/p/CaShJ4ruQXB/",
      fecha: "22/02/2022",
      imagen: castilla,
    },
    {
      id: 2,
      titulo: "Diario Capital",
      descripcion:
        "El Dr. Julián Farina Balbi fue entrevistado por Diario Capital.24 sobre el caso “Jey Mammón”. En la nota el especialista aporta claridad sobre la discusión referente a Inocencia y Prescripción.",
      link: "https://capital24.com.ar/contenido/5836/el-caso-jey-mammon-podemos-decir-que-es-inocente",
      fecha: "24/04/2024",
      imagen: diarioCapital,
    },
    {
      titulo: "Diplomatura en Cibercrimen y Evidencia Digital",
      id: 3,
      descripcion:
        "En el marco de la Diplomatura en Cibercrimen y Evidencia Digital, organizada por el Colegio de la Abogacia de La Plata, el Dr. Julián Farina Balbi, en su calidad de docente, disertó sobre “Prueba, evidencia digital, y garantías”.",
      link: "En el marco de la Diplomatura en Cibercrimen y Evidencia Digital, organizada por el Colegio de la Abogacia de La Plata, el Dr. Julián Farina Balbi, en su calidad de docente, disertó sobre “Prueba, evidencia digital, y garantías”.",
      fecha: "02/06/2023",
      imagen: disertacion,
    },
    {
      id: 4,
      titulo: "Designacion de Investigador Titular de esa casa de Estudios",
      descripcion:
        "La Universidad del Este de la ciudad de La Plata formalizó la designación del Sr. Profesor Adjunto de Derecho Penal parte Especial, Dr. Julián Farina Balbi, como Investigador Titular de esa casa de Estudios.",
      link: "https://www.instagram.com/p/Cs9bsKJPAmI/?utm_source=ig_web_copy_link",
      fecha: "01/06/2023",
      imagen: investigador,
    },
    {
      titulo: "Jurados",
      descripcion:
        "La Asociación Argentina de Juicio por Jurados ha publicado en su sección de Doctrina, el aporte realizado por el Dr. Julián Farina Balbi, originalmente publicado en la Revista La Ley, sobre la relación entre Instrucciones Técnicas al Jurado y principio de imparcialidad en el sistema Acusatorio Adversarial.",
      id: 5,
      link: "https://www.juicioporjurados.org/p/blog-page.html",
      fecha: "20/03/2021",
      imagen: jurados,
    },
    {
      titulo: "Portacion de Armas de Guerra",
      descripcion:
        "En resonante caso caratulado como “Amenazas y Portación de Armas de Guerra”, seguido en base a hechos ocurridos en las afueras de la ciudad de La Plata, el Dr. Julián Farina Balbi representó al imputado en las jornadas de debate oral, obteniendo en sentencia firme su plena libertad.",
      link: "https://www.instagram.com/p/Cif8M1cvjX3/?utm_source=ig_web_copy_link",
      fecha: "14/09/2022",
      imagen: portacionarmas,
      id: 6,
    },
    {
      titulo: "Secretario a cargo de la Secretaria de Cibercrimen.",
      descripcion:
        "El Consejo Directivo del Colegio de la Abogacía de La Plata ha designado al Dr. Julián Farina Balbi como Secretario a cargo de la Secretaría de Cibercrimen y Evidencia Digital, en el marco del Instituto de Derecho Penal del prestigioso Colegio local.",
      link: "https://www.calp.org.ar/derecho-penal/",
      fecha: "29/08/2022",
      imagen: secretario,
      id: 7,
    },
    {
      titulo:
        "Disertación en la Presentación de Proyectos de Investigación 2024-2025",
      descripcion:
        "En el marco del inicio del ciclo de las actividades de investigación 2024-2025 de la Facultad de Derecho de la Universidad del Este, el Dr. Julián Farina Balbi presentó ante la comunidad universitaria el proyecto que lo tiene como director titulado “La Razonabilidad de la Duda en la Casación Bonaerense”, que apunta desde el estudio jurisprudencial del Tribunal Casatorio, determinar con precisión el uso que en la práctica se aplica sobre el estándar de condena conocido como más allá de toda duda razonable.  ",
      link: "",
      fecha: "05/07/2024 ",
      imagen: investigacion,
      id: 7,
    },
    {
      titulo: "Patrocinio Juridico en Cibercrimen y Evidencia Digital",
      descripcion:
        "El Dr. Julián Farina Balbi fué invitado a Radio FM La Redonda el pasado 6 de julio, donde explicó la importancia de contar con un patrocinio jurídico experto en materia de cibercrimen y evidencia digital. ",
      link: "https://www.instagram.com/reel/C84XZ1IsofT/?utm_source=ig_web_copy_link",
      fecha: "14/07/2024 ",
      imagen: radio,
      id: 8,
    },
    {
      titulo: "Innocence Project Argentina",
      descripcion:
        "una de las Ong más importantes y reconocidas a nivel mundial en la lucha contra las condenas a inocentes  y abusos del poder penal, recibió al Dr. Julián Farina Balbi para que expusiera y explicara en modo de Seminario a sus integrantes, las conclusiones de su investigación en materia de prueba penal ",
      link: "https://www.instagram.com/p/C9Pbcn2RKkh/?utm_source=ig_web_copy_link",
      fecha: "14/07/2024 ",
      imagen: proyect,
      id: 9,
    },
  ];

  return (
    <section id="blog">
      <h2 className="titulo-noticias">Noticias Destacadas</h2>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}
        thumbWidth={200}
        interval={5000}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                zIndex: "2000",

                backgroundColor: "rgba(0, 0, 0)",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontSize: "2rem",
              }}
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          )
        }
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                zIndex: "2",

                backgroundColor: "rgba(0, 0, 0)",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontSize: "2rem",
              }}
            >
              <i class="fas fa-chevron-left"></i>
            </button>
          )
        }
        className="container-noticias"
      >
        {noticias.map((noticia) => (
          <div key={noticia.id} className="cont-noticias">
            <div className="noticias-info">
              <h1>
                {noticia.titulo} - {noticia.fecha}
              </h1>

              <p className="info-p">{noticia.descripcion}</p>

              <button
                class="button"
                onClick={() => window.open(noticia.link, "_blank")}
              >
                <span class="button_lg">
                  <span class="button_sl"></span>
                  <span class="button_text">Ver Noticia</span>
                </span>
              </button>
            </div>
            <div className="noticias-img">
              <img
                className="img-noticia"
                src={noticia.imagen}
                alt={noticia.descripcion}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
