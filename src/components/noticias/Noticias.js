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
import titulo from "../../assets/titulo2.jpeg";
import autoridad from "../../assets/autoridad.jpeg";
import disertacion2 from "../../assets/disertacion.jpeg";
import instructor from "../../assets/instructor.jpeg";
import pruebapericial from "../../assets/pruebapericial.jpeg";
import analista from "../../assets/analista.jpeg";
import edificio from "../../assets/edificio.png";
import lizy from "../../assets/lizy.jpeg";
import libro2 from "../../assets/libro2.jpeg";
import diplomatura from "../../assets/diplomatura.jpeg";
import presentacionLibro from "../../assets/IMG_0234.jpg";
import asocacion from "../../assets/asociacion.jpeg";

import { Carousel } from "react-responsive-carousel";

export default function Noticias() {
  const noticias = [
    {
      id: 1,
      titulo: "Castilla",
      descripcion:
        "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como Especialista en Prueba Penal y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
      link: "https://www.instagram.com/p/CaShJ4ruQXB/",
      fecha: "22/02/2022",
      imagen: castilla,
    },
    {
      id: 2,
      titulo: "Diario Capital",
      descripcion:
        "El Dr. Julián Farina Balbi fue entrevistado por Diario Capital.24 sobre el caso Jey Mammon. En la nota el especialista aporta claridad sobre la discusión referente a Inocencia y Prescripción.",
      link: "https://capital24.com.ar/contenido/5836/el-caso-jey-mammon-podemos-decir-que-es-inocente",
      fecha: "24/04/2024",
      imagen: diarioCapital,
    },
    {
      titulo: "Diplomatura en Cibercrimen y Evidencia Digital",
      id: 3,
      descripcion:
        "En el marco de la Diplomatura en Cibercrimen y Evidencia Digital, organizada por el Colegio de la Abogacia de La Plata, el Dr. Julián Farina Balbi, en su calidad de docente, disertó sobre Prueba, evidencia digital, y garantías.",
      link: "",
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
        "En resonante caso caratulado como Amenazas y Portación de Armas de Guerra, seguido en base a hechos ocurridos en las afueras de la ciudad de La Plata, el Dr. Julián Farina Balbi representó al imputado en las jornadas de debate oral, obteniendo en sentencia firme su plena libertad.",
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
        "En el marco del inicio del ciclo de las actividades de investigación 2024-2025 de la Facultad de Derecho de la Universidad del Este, el Dr. Julián Farina Balbi presentó ante la comunidad universitaria el proyecto que lo tiene como director titulado La Razonabilidad de la Duda en la Casación Bonaerense.",
      link: "",
      fecha: "05/07/2024",
      imagen: investigacion,
      id: 8,
    },
    {
      titulo: "Patrocinio Juridico en Cibercrimen y Evidencia Digital",
      descripcion:
        "El Dr. Julián Farina Balbi fué invitado a Radio FM La Redonda el pasado 6 de julio, donde explicó la importancia de contar con un patrocinio jurídico experto en materia de cibercrimen y evidencia digital.",
      link: "https://www.instagram.com/reel/C84XZ1IsofT/?utm_source=ig_web_copy_link",
      fecha: "14/07/2024",
      imagen: radio,
      id: 9,
    },
    {
      titulo: "Innocence Project Argentina",
      descripcion:
        "Una de las ONG más importantes y reconocidas a nivel mundial en la lucha contra las condenas a inocentes y abusos del poder penal, recibió al Dr. Julián Farina Balbi para que expusiera en modo Seminario las conclusiones de su investigación en materia de prueba penal.",
      link: "https://www.instagram.com/p/C9Pbcn2RKkh/?utm_source=ig_web_copy_link",
      fecha: "14/07/2024",
      imagen: proyect,
      id: 10,
    },
    {
      titulo: "Obtención del Título de Magister en Derecho Penal",
      descripcion:
        "El Dr. Julián Farina Balbi, defendió su tesis con la mayor calificación ante el prestigioso jurado constituido por los Dres. Leonardo Filippini, Carolina Maglione y Agustina Emiliossi en la Universidad de Palermo, obteniendo el título de Magister en Derecho Penal y la distinción SUMA CUM LAUDE.",
      link: "",
      fecha: "24/07/2024",
      imagen: titulo,
      id: 11,
    },
    {
      titulo: "Secretario del Instituto de Derecho Penal",
      descripcion:
        "El Dr. Julian Farina Balbi, ha sido distinguido como autoridad del Área Académica del Colegio de Abogados de La Plata, como Secretario del Instituto de Derecho Penal, a cargo de la Secretaría de Cibercrimen.",
      link: "https://www.calp.org.ar/derecho-penal/",
      fecha: "14/09/2024",
      imagen: autoridad,
      id: 12,
    },
    {
      titulo: "Disertación en la Universidad Católica de La Plata",
      descripcion:
        "La Universidad Católica de La Plata ha invitado al Dr. Julián Farina Balbi a disertar en la VIII Diplomatura Internacional de Derecho Penal. La exposición se titula Evidencia Digital y Admisibilidad Probatoria a la luz de la teoría del caso.",
      link: "https://www.ucalp.edu.ar/viii-diplomatura-internacional-en-derecho-penal/",
      fecha: "21/10/2024",
      imagen: disertacion2,
      id: 13,
    },
    {
      titulo: "Instructor del Jurado de Enjuiciamiento de Magistrados",
      descripcion:
        "El Dr. Julián Farina Balbi, en su calidad de Instructor del cuerpo de Instrucción de la Secretaría Permanente del Jurado de Enjuiciamiento de Magistrados de la Pcia. de Buenos Aires, participó en el Salón Dorado del Honorable Senado provincial en la audiencia de admisión de la acusación.",
      link: "",
      fecha: "21/10/2024",
      imagen: instructor,
      id: 14,
    },
    {
      titulo: "Derecho penal y prueba pericial",
      descripcion:
        "El Dr. Julián Farina Balbi participó como disertante de la Jornada sobre prueba pericial en el proceso penal y civil. En ese marco aportó reflexiones desde la práctica de la defensa penal y el trabajo del abogado penalista en relación a las pericias.",
      link: "https://www.calp.org.ar/events/pericias-mecanicas-e-informaticas-perspectivas-penal-y-civil/",
      fecha: "13/12/2024",
      imagen: pruebapericial,
      id: 15,
    },
    {
      titulo: "Falsas denuncias en el proceso penal",
      descripcion:
        "El Dr. Farina Balbi ha sido convocado por El Analista a disertar sobre derecho penal y falsas denuncias.",
      link: "https://elanalista.com.ar/asuntos-academicos/",
      fecha: "07/02/2025",
      imagen: analista,
      id: 16,
    },
    {
      titulo:
        "El Estudio Jurídico Penal abre nuevas oficinas en La Plata",
      descripcion:
        "En este 2025 inauguramos un espacio nuevo y renovado en Plaza Paso Nro 159 de la ciudad de La Plata. Nuestro Estudio Jurídico Penal cuenta con nuevas oficinas para atender todas las consultas penales en pleno centro de la ciudad.",
      link: "https://www.google.com/maps/place/Farina+Balbi+%7C+Estudio+Jur%C3%ADdico+Penal/",
      fecha: "2025",
      imagen: edificio,
      id: 17,
    },
    {
      titulo:
        "Derecho Penal y casos mediáticos — Entrevista al Dr. Julián Farina Balbi",
      descripcion:
        "El Dr. Julián Farina Balbi fue entrevistado en Diario Capital 24 sobre el derecho penal y los casos mediáticos. En esta ocasión explicó la situación penal del caso Viviana Canosa y Lizy Tagliani en relación a los delitos de falsa denuncia, calumnia e injurias.",
      link: "https://estudiofarinabalbi.com/diario/canosa-vs-lizy-tagliani",
      fecha: "2025",
      imagen: lizy,
      id: 18,
    },
    {
      titulo: "El Dr. Farina Balbi publicó nuevo libro en materia penal",
      descripcion:
        "En noviembre de 2025 ha sido publicado por la prestigiosa editorial Ad Hoc el nuevo libro del Dr. Farina Balbi titulado \"El peso de la prueba como garantía\". La obra aporta herramientas fundamentales para trabajar con la prueba en los procesos penales y asegurar estándares mínimos de racionalidad en las decisiones.",
      link: "https://editorialadhoc.com/producto/el-peso-de-la-prueba-como-garantia/",
      fecha: "01/12/2025",
      imagen: libro2,
      id: 19,
    },
    {
      titulo:
        "Profesor Invitado en Diplomatura Internacional en Derecho Penal — UCALP",
      descripcion:
        "El Dr. Julian Farina Balbi ha sido distinguido por su participación como Profesor Invitado en la IX Diplomatura Internacional en Derecho Penal de la Universidad Católica de La Plata.",
      link: "https://www.ucalp.edu.ar/diplo-delito-caso-penal/",
      fecha: "11/12/2025",
      imagen: diplomatura,
      id: 20,
    },
    {
      titulo: "Presentación del libro 'El peso de la prueba como garantía'",
      descripcion:
        "El pasado 6 de mayo, el Dr. Julián Farina Balbi presentó su libro \"El peso de la prueba como garantía\" en la Biblioteca de Ciencias Penales de La Plata. Evento declarado de Interés Público por el Concejo Deliberante de la ciudad de La Plata.",
      link: "https://www.instagram.com/reels/DYFMbX_R-6q/",
      fecha: "06/05/2026",
      imagen: presentacionLibro,
      id: 21,
    },
    {
      titulo:
        "Disertación en la Asociación Argentina de Profesores de Derecho Procesal Penal",
      descripcion:
        "El Dr. Julián Farina Balbi ha sido invitado a disertar en la Asociación Argentina de Profesores de Derecho Procesal Penal sobre materia de prueba en el proceso penal. Es un reconocimiento académico de gran envergadura para el Director del Estudio.",
      link: "",
      fecha: "27/05/2026",
      imagen: asocacion,
      id: 22,
    },
  ];

  // Show newest first
  const noticiasReversed = [...noticias].reverse();

  const ArrowNext = ({ onClickHandler, hasNext, label }) =>
    hasNext ? (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="carousel-arrow carousel-arrow--next"
        aria-label="Siguiente noticia"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    ) : null;

  const ArrowPrev = ({ onClickHandler, hasPrev, label }) =>
    hasPrev ? (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="carousel-arrow carousel-arrow--prev"
        aria-label="Noticia anterior"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
    ) : null;

  return (
    <section id="blog" className="noticias-section">
      <div className="noticias-header">
        <span className="noticias-eyebrow">Actividad Reciente</span>
        <h2 className="noticias-title">Noticias Destacadas</h2>
        <div className="noticias-title-line"></div>
      </div>

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}
        interval={6000}
        transitionTime={600}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <ArrowNext onClickHandler={onClickHandler} hasNext={hasNext} label={label} />
        )}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <ArrowPrev onClickHandler={onClickHandler} hasPrev={hasPrev} label={label} />
        )}
        className="noticias-carousel"
      >
        {noticiasReversed.map((noticia) => (
          <div key={noticia.id} className="noticia-slide">
            {/* Image Panel */}
            <div className="noticia-img-panel">
              <img
                className="noticia-img"
                src={noticia.imagen}
                alt={noticia.titulo}
              />
              <div className="noticia-img-overlay"></div>
              {noticia.fecha && (
                <span className="noticia-fecha-badge">{noticia.fecha}</span>
              )}
            </div>

            {/* Info Panel */}
            <div className="noticia-info-panel">
              <div className="noticia-info-content">
                <div className="noticia-category-line">
                  <span className="noticia-category-dot"></span>
                  <span className="noticia-category-label">Estudio Farina Balbi</span>
                </div>
                <h3 className="noticia-slide-title">{noticia.titulo}</h3>
                <div className="noticia-info-divider"></div>
                <p className="noticia-slide-desc">{noticia.descripcion}</p>
                {noticia.link && (
                  <button
                    className="noticia-link-btn"
                    onClick={() => window.open(noticia.link, "_blank")}
                  >
                    <span>Ver Noticia</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
