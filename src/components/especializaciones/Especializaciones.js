import React from "react";
import "./Especializaciones.css";
import Item from "./ItemEspecializacion/Item";
import balanza from "../../assets/balanza.png";
import jurado from "../../assets/jurado.png";
import ciber from "../../assets/cibercrimen.png";
import v from "../../assets/victima.png";
import sexual from "../../assets/sexual.png";
import carcel from "../../assets/carcel.png";
import propiedad from "../../assets/propiedad.png";
import personas from "../../assets/personas.png";
import estupefacientes  from "../../assets/estupefacientes.png";
import violencia from "../../assets/violencia.png";
import economia from "../../assets/economia.png";

export default function Especializaciones() {
  const especializaciones = [
    {
      nombre: "DEFENSAS PENALES INTEGRALES",
      descripcion:
        "Ofrecemos una defensa completa y absoluta a lo largo de todo el proceso ante todo tipo de delitos: Atención de urgencia en comisaria y detención, investigación preparatoria, juicio oral y recursos. Te aseguramos una defensa diseñada estratégicamente para explotar al máximo las posibilidades de tu caso.",
      icon: balanza,
    },
    {
      nombre: "REPRESENTACION DE VICTIMAS",
      descripcion:
        "Representamos integralmente tanto a familiares como víctimas de todo tipo de delitos. Tanto en el proceso penal como en el proceso civil y de familia, nuestro compromiso es  brindar una asesoramiento acabado que permita desde el trabajo en equipo y la confianza aportar material probatorio de peso y lograr así sentencias respetuosas de sus derechos. ",
      icon: v,
    },
    {
      nombre: "JUICIO POR JURADOS",
      descripcion:
        "Te asesoramos y litigamos en casos de juicio por jurados. Desde el ofrecimiento de prueba, la selección de los jurados y las jornadas de debate, ofrecemos una defensa técnica especializada y actualizada en materia de Jurados.",
      icon: jurado,
    },
    {
      nombre: "EXCARCELACIONES Y LIBERTAD",
      descripcion:
        "Ante el abuso de la prisión preventiva que existe en la justicia penal, es necesario desde el minuto 1 de un proceso penal contar con una defensa preparada y activa, para controlar las medidas de investigación y para generar pruebas propias con las que sostener eficazmente la libertad del imputado durante todo el proceso. Aseguramos tus derechos en excarcelaciones, eximisión de prisión, juicios abreviados, suspensión del juicio a prueba, prisión domiciliaria y morigeraciones de la prisión preventiva",
      icon: carcel,
    },
    {
      nombre: "DELITOS CONTRA LA INTEGRIDAD SEXUAL",
      descripcion:
        "Estos delitos requieren una defensa sumamente activa y estratégica. Las circunstancias de privacidad en la que ocurren estas conductas hacen que el manejo de la prueba y los apoyos científicos sean manejados por la defensa con máxima profesionalidad.",
      icon:sexual,
    },
    {
      nombre: "DELITOS CONTRA LAS PERSONAS",
      descripcion:
        "Nos especializamos en litigio estratégico en casos de homicidio y lesiones. Ya sean dolosos o culposos, la gravedad de las imputaciones y las consecuencias demandan que la defensa de tus derechos esté resguarada desde el inicio de la investigación. Contamos con un equipo interdisciplinario de peritos que colaboran para crear la mejor estrategia de defensa para tu caso.",
      icon: personas,
    },
    {
        nombre: "DELITOS CONTRA LA PROPIEDAD",
        descripcion:
            "Ofrecemos defensas eficaces y estratégicas en casos de robo, hurto, estafas, defraudaciones, extorsión, usurpación. La defensa en estos casos requiere un examen profesional y exhaustivo del material probatorio de cargo para elegir la forma más eficaz de defensa para tu caso.",
        icon: propiedad,
    },
    {
        nombre: "ESTUPEFACIENTES Y NARCOTRAFICO",
        descripcion:
            "Ofrecemos una defensa integral en casos regidos por la ley 23.737 de estupefacientes. La tenencia, producción, suministro y transporte de drogas ilegales sin autorización son solo algunas conductas que al norma castiga con severas penas. La defensa de estos casos requiere urgencia y abordaje interdisciplinario. No pierdas tiempo.",
        icon: estupefacientes,
    },
    {
      nombre : "CIBERCRIMEN",
      descripcion : "Los avances de la tecnología han producido un notable incremento de los delitos cometidos mediante medios informáticos: phishing, ataques ransomware, suplantación de identidad, ciberacoso, sextorsión, cripto estafas, son solo algunas de las modalidas delictivas. Ya sea que hayas sido víctima, o te estén imputando un delito de este tipo, podemos ayudarte. Somos especialistas en esta materia como en el manejo adecuado de la evidencia digital",
      icon : ciber
    },
    {
      nombre : "VIOLENCIA DE GENERO",
      descripcion : "Los avances normativos permiten hoy hacer justicia en casos que antes quedaban en el olvido. La perspectiva de género es una obligación impuesta por Tratados Internacionales. Tanto las víctimas como los imputados en casos de esta especie requieren un asesoramiento legal especializado. Contamos con experiencia y formación actualizada al respecto. ",
      icon : violencia
    },
    {
      nombre : "PENAL ECONOMICO Y EMPRESARIAL",
      descripcion : "Contamos con calificados peritos y profesionales para alcanzar las mejores soluciones en los casos de defraudaciones complejas, lavado de activos, delitos tributarios, económicos y de la empresa. Podemos ayudarte con una mirada integral y especializada en la materia.",
      icon : economia
    },
    {
      nombre : "OTRAS ESPECIALIDADES",
      descripcion : "Te ofrecemos asesoramiento y representación integral en siniestros viales, representación ante compañía de seguros, accidentes laborales y junta médica, despidos, alimentos y divorcios, sucesiones y amparos de salud. Nuestro compromiso es encontrar junto a vos la mejor solución para tu caso.",
      icon : balanza
    }
  ];

  return (
    <div className="section-especilizaciones">
      <h2 className="title-especializaciones">Especializaciones</h2>
      <div className="especializaciones">
        {especializaciones.map((especializacion, index) => (
          <Item key={index} {...especializacion} />
        ))}
      </div>
    </div>
  );
}
