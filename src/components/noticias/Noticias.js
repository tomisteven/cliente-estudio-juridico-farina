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
import edificio from "../../assets/edificio.jpeg";
import lizy from "../../assets/lizy.jpeg";
import libro from "../../assets/libro.jpeg";

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
    {
      titulo: "Obtención del Título de Magister en Derecho Penal ",
      descripcion:
        "El Dr. Julián Faria Balbi, defendió su tesis con la mayor calificación ante el prestigioso jurado constituido por los Dres. Leonardo Filippini, Carolina Maglione y Agustina Emiliossi en la Universidad de Palermo, obteniendo el título de Magister en Derecho Penal y la distinción SUMA CUM LAUDE.",
      link: "",
      fecha: "24/07/2024 ",
      imagen: titulo,
      id: 10,
    },
    {
      titulo: "Secretario del Instituto de Derecho Penal",
      descripcion:
        "El Dr. Julian Farina Balbi, ha sido distinguido como autoridad del Area Académica del Colegio de Abogado de La Plata, como Secretario del Instituto de Derecho Penal, a cargo de la Secretaría de Cibercrimen.",
      link: "https://www.calp.org.ar/derecho-penal/",
      fecha: "14/09/2024 ",
      imagen: autoridad,
      id: 11,
    },
    {
      titulo: "Disertación en la Universidad Católica de La Plata",
      descripcion:
        "La Universidad Católica de La Plata ha invitado al Dr. Julián Farina Balbi a disertar en la VIII Diplomatura Internacional de Derecho Penal. La exposición a realizarse el 7 de noviembre de 2024 se titula “Evidencia Digital y Admisibilidad Probatoria a la luz de la teoría del caso”. Es un verdadero honor participar de tan prestigioso evento.",
      link: "https://www.ucalp.edu.ar/viii-diplomatura-internacional-en-derecho-penal/",
      fecha: "21/10/2024 ",
      imagen: disertacion2,
      id: 12,
    },
    {
      titulo:
        "Instructor del cuerpo de Instrucción de la Secretaría Permanente del Jurado de Enjuiciamiento de Magistrados y Funcionarios de la Pcia. De Buenos Aires",
      descripcion:
        "El Dr. Julián Farina Balbi, en su calidad de Instructor del cuerpo de Instrucción de la Secretaría Permanente del Jurado de Enjuiciamiento de Magistrados y Funcionarios de la Pcia. De Buenos Aires, participó en el Salón Dorado del Honorable Senado provincial, en el marco de su función, de la audiencia de admisión de la acusación.",
      link: "",
      fecha: "21/10/2024 ",
      imagen: instructor,
      id: 13,
    },
    {
      titulo: " Derecho penal y prueba pericial",
      descripcion:
        "El Dr. Juliàn Farina Balbi participó como disertante de la Jornada sobre prueba pericial en el proceso penal y civil. En ese marco aportó reflexiones desde la práctica de la defensa penal y el trabajo del abogado penalista en relaciòn a las pericias. ",
      link: "https://www.calp.org.ar/events/pericias-mecanicas-e-informaticas-perspectivas-penal-y-civil/",
      fecha: "13/12/2024 ",
      imagen: pruebapericial,
      id: 14,
    },
    {
      titulo: "Falsas denuncias en el proceso penal",
      descripcion:
        "El Dr. Farina Balbi ha sido convocado por El Analista a disertar sobre derecho penal y falsas denuncias",
      link: "https://elanalista.com.ar/asuntos-academicos/",
      fecha: "07/02/2025",
      imagen: analista,
      id: 15,
    },
    {
      titulo:
        "El Estudio Jurídico Penal abre nuevas oficinas en la Ciudad de la Plata",
      descripcion:
        "En este 2025 inaguramos un espacio nuevo y renovado en Plaza Paso Nro 159 de la ciudad de la plata. Nuestro estudio Juridico Penal, cuenta con nuevas oficinas para atender todas las consultas penales en pleno centro de la ciudad",
      link: "https://www.google.com/maps/place/Pl.+Paso+159+Piso+5to.+%E2%80%9CB,+B1900+La+Plata,+Provincia+de+Buenos+Aires/@-34.9164618,-57.9607995,3a,75y,119.84h,102.84t/data=!3m7!1e1!3m5!1s-b-LK9spJLznwQWGtkoy4g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-12.842077813937863%26panoid%3D-b-LK9spJLznwQWGtkoy4g%26yaw%3D119.83531932747559!7i16384!8i8192!4m13!1m7!3m6!1s0x95a2e634a32c953f:0x69b24e7686cd3513!2sPl.+Paso+159+Piso+5to.+%E2%80%9CB,+B1900+La+Plata,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.9164745!4d-57.9604985!3m4!1s0x95a2e634a32c953f:0x69b24e7686cd3513!8m2!3d-34.9164745!4d-57.9604985?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoASAFQAw%3D%3D",
      fecha: "",
      imagen: edificio,
      id: 16,
    },
    {
      titulo:
        "Derecho Penal y casos mediaticos; Entrevista al Dr. Juliàn Farina Balbi",
      descripcion:
        "El Dr. Julián Farina Balbi fué entevistado en Diario Capital 24 sobre el derech penal y los casos mediaticos. En este caso, el abogado penalista explicó la situación penal del caso Viviana Canosa y Lizy Tagliani, en relación a los delitos de falsa denuncia, calumnia e injurias.",
      link: "https://estudiofarinabalbi.com/diario/canosa-vs-lizy-tagliani",
      fecha: "",
      imagen: lizy,
      id: 17,
    },
    {
      titulo:
        "El Dr. Farina Balbi publicó nuevo libro en materia penal",
      descripcion:
        "En noviembre de 2025 ha sido publicado por la prestigiosa editorial Ad Hoc el nuevo libro del Dr. Farina Balbi titulado `El peso de la prueba como grantía`. La obra aporta herramientas fundamentales para tabajar con la prueba en los proceso penales, y asesgurar estándares mínimos de racionalidad en las decisiones. Podes adquirirlo en la pagina de la editorial con evio gratis a todo el pais",
      link: "https://editorialadhoc.com/producto/el-peso-de-la-prueba-como-garantia/",
      fecha: "01/12/2025",
      imagen: libro,
      id: 18,
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
        {noticias
          .map((noticia) => (
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
          ))
          .reverse()}
      </Carousel>
    </section>
  );
}
