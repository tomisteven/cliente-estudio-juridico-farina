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

const noticias = [
  {
    id: 1,
    titulo: "Castilla",
    descripcion:
      "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    link: "https://www.instagram.com/p/CaShJ4ruQXB/",

    fecha: "22/02/2022",
    imagen: castilla,
    slug : "universidad-de-castilla-la-mancha"
  },
  {
    id: 2,
    titulo: "Diario Capital",
    descripcion:
      "El Dr. Julián Farina Balbi fue entrevistado por Diario Capital.24 sobre el caso “Jey Mammón”. En la nota el especialista aporta claridad sobre la discusión referente a Inocencia y Prescripción.",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    link: "https://capital24.com.ar/contenido/5836/el-caso-jey-mammon-podemos-decir-que-es-inocente",
    fecha: "24/04/2024",
    imagen: diarioCapital,
    slug : "caso-jey-mammon-claridad-sobre-la-discusion-referente-a-inocencia-y-prescripcion"


  },
  {
    titulo: "Diplomatura en Cibercrimen y Evidencia Digital",
    id: 3,
    descripcion:
      "En el marco de la Diplomatura en Cibercrimen y Evidencia Digital, organizada por el Colegio de la Abogacia de La Plata, el Dr. Julián Farina Balbi, en su calidad de docente, disertó sobre “Prueba, evidencia digital, y garantías”.",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    link: "En el marco de la Diplomatura en Cibercrimen y Evidencia Digital, organizada por el Colegio de la Abogacia de La Plata, el Dr. Julián Farina Balbi, en su calidad de docente, disertó sobre “Prueba, evidencia digital, y garantías”.",
    fecha: "02/06/2023",
    imagen: disertacion,
    slug : "diplomatura-en-cibercrimen-y-evidencia-digital"
  },
  {
    id: 4,
    titulo: "Designacion de Investigador Titular de esa casa de Estudios",
    descripcion:
      "La Universidad del Este de la ciudad de La Plata formalizó la designación del Sr. Profesor Adjunto de Derecho Penal parte Especial, Dr. Julián Farina Balbi, como Investigador Titular de esa casa de Estudios.",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    link: "https://www.instagram.com/p/Cs9bsKJPAmI/?utm_source=ig_web_copy_link",
    fecha: "01/06/2023",
    imagen: investigador,
    slug : "designacion-de-investigador-titular-de-esa-casa-de-estudios"

  },
  {
    titulo: "Jurados",
    descripcion:
      "La Asociación Argentina de Juicio por Jurados ha publicado en su sección de Doctrina, el aporte realizado por el Dr. Julián Farina Balbi, originalmente publicado en la Revista La Ley, sobre la relación entre Instrucciones Técnicas al Jurado y principio de imparcialidad en el sistema Acusatorio Adversarial.",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    id: 5,
    link: "https://www.juicioporjurados.org/p/blog-page.html",
    fecha: "20/03/2021",
    imagen: jurados,
    slug : "aporte-a-la-asociacion-argentina-de-juicio-por-jurados"


  },
  {
    titulo: "Portacion de Armas de Guerra",
    descripcion:
      "En resonante caso caratulado como “Amenazas y Portación de Armas de Guerra”, seguido en base a hechos ocurridos en las afueras de la ciudad de La Plata, el Dr. Julián Farina Balbi representó al imputado en las jornadas de debate oral, obteniendo en sentencia firme su plena libertad.",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    link: "https://www.instagram.com/p/Cif8M1cvjX3/?utm_source=ig_web_copy_link",
    fecha: "14/09/2022",
    imagen: portacionarmas,
    id: 6,
    slug : "portacion-de-armas-de-guerra"
  },
  {
    titulo: "Secretario a cargo de la Secretaria de Cibercrimen.",
    descripcion:
      "El Consejo Directivo del Colegio de la Abogacía de La Plata ha designado al Dr. Julián Farina Balbi como Secretario a cargo de la Secretaría de Cibercrimen y Evidencia Digital, en el marco del Instituto de Derecho Penal del prestigioso Colegio local.",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    link: "https://www.calp.org.ar/derecho-penal/",
    fecha: "29/08/2022",
    imagen: secretario,
    id: 7,
    slug : "secretaio-a-cargo-de-la-secretaria-de-cibercrimen"

  },
  {
    titulo:
      "Disertación en la Presentación de Proyectos de Investigación 2024-2025",
    descripcion:
      "En el marco del inicio del ciclo de las actividades de investigación 2024-2025 de la Facultad de Derecho de la Universidad del Este, el Dr. Julián Farina Balbi presentó ante la comunidad universitaria el proyecto que lo tiene como director titulado “La Razonabilidad de la Duda en la Casación Bonaerense”, que apunta desde el estudio jurisprudencial del Tribunal Casatorio, determinar con precisión el uso que en la práctica se aplica sobre el estándar de condena conocido como más allá de toda duda razonable.  ",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    link: "",
    fecha: "05/07/2024 ",
    imagen: investigacion,
    id: 7,
    slug : "disertacion-en-la-presentacion-de-proyectos-de-investigacion-2024-2025"

  },
  {
    titulo: "Patrocinio Juridico en Cibercrimen y Evidencia Digital",
    descripcion:
      "El Dr. Julián Farina Balbi fué invitado a Radio FM La Redonda el pasado 6 de julio, donde explicó la importancia de contar con un patrocinio jurídico experto en materia de cibercrimen y evidencia digital. ",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    link: "https://www.instagram.com/reel/C84XZ1IsofT/?utm_source=ig_web_copy_link",
    fecha: "14/07/2024 ",
    imagen: radio,
    id: 8,
    slug : "patrocinio-juridico-en-cibercrimen-y-evidencia-digital"

  },
  {
    titulo: "Innocence Project Argentina",
    descripcion:
      "una de las Ong más importantes y reconocidas a nivel mundial en la lucha contra las condenas a inocentes  y abusos del poder penal, recibió al Dr. Julián Farina Balbi para que expusiera y explicara en modo de Seminario a sus integrantes, las conclusiones de su investigación en materia de prueba penal ",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    link: "https://www.instagram.com/p/C9Pbcn2RKkh/?utm_source=ig_web_copy_link",
    fecha: "14/07/2024 ",
    imagen: proyect,
    id: 9,
    slug : "innocence-project-argentina"

  },
  {
    titulo: "Obtención del Título de Magister en Derecho Penal ",
    descripcion:
      "El Dr. Julián Faria Balbi, defendió su tesis con la mayor calificación ante el prestigioso jurado constituido por los Dres. Leonardo Filippini, Carolina Maglione y Agustina Emiliossi en la Universidad de Palermo, obteniendo el título de Magister en Derecho Penal y la distinción SUMA CUM LAUDE.",
      subDescripcion: "La Universidad de Castilla La Mancha (Toledo, España), reconoció al Dr. Julián Farina Balbi como “Especialista en Prueba Penal” y extendió la invitación para formalizar una investigación autónoma por el profesional en su sede en Toledo.",
    link: "",
    fecha: "24/07/2024 ",
    imagen: titulo,
    id: 10,
    slug : "obtencion-del-titulo-de-magister-en-derecho-penal"
  },
  {
    titulo: "Secretario del Instituto de Derecho Penal",
    tituloTexto: "Designación como Secretario del Instituto de Derecho Penal",
    descripcion:
      "El Dr. Julian Farina Balbi, ha sido distinguido como autoridad del Area Académica del Colegio de Abogado de La Plata, como Secretario del Instituto de Derecho Penal, a cargo de la Secretaría de Cibercrimen.",
    link: "https://www.calp.org.ar/derecho-penal/",
    subTitulo: "Culpa esse nesciunt, officiis earum deserunt",
    subDescripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aliquid vel, velit dicta, nostrum dolores dolor alias, nihil itaque placeat reiciendis? Magnam veritatis deserunt corporis ad sequi incidunt adipisci facere. Mollitia, illo voluptatum placeat optio quae necessitatibus modi, eos, praesentium minima nihil eveniet. Quasi, accusamus, nobis voluptatibus dolor eius non suscipit doloribus optio, tempore harum reiciendis obcaecati at nostrum fuga! Sint nam ipsam, alias excepturi omnis laboriosam ad dolore incidunt perferendis cupiditate tempora accusantium nihil necessitatibus eum porro commodi veritatis ipsum accusamus dicta. Asperiores, vel ipsam! Nihil doloribus sapiente impedit! Culpa esse nesciunt, officiis earum deserunt, quidem repellendus fugit, nisi veniam dolore praesentium asperiores laboriosam inventore beatae doloremque? Voluptate alias qui, quas magni ad laboriosam quo maxime laborum modi temporibus? ",
    imagen: autoridad,
    id: 11,
    slug : "secretario-del-instituto-de-derecho-penal"
  },
];

export default noticias;
