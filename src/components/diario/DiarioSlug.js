import React from "react";
import { useParams } from "react-router-dom";
import noticias from "../Data/Noticias";
import "./DiarioSlug.css";
import { Oval } from "react-loader-spinner";

export default function DiarioSlug() {
  const [noticia, setNoticia] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { slug } = useParams();

  React.useEffect(() => {
    setLoading(true);
    const noticia = noticias.find((noticia) => noticia.slug === slug);
    setNoticia(noticia);
    setLoading(false);
  }, [slug]);

  if (!noticia) return <div>Noticia no encontrada</div>;

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        )
      </div>
    );

  const footer = document.querySelector("footer");
  footer.style.display = "none";

  return (
    <>
      <div className="container-slug">
        <div class="cont-noticia-info">
          <div class="cont-ruta-slug">
            <h5 className="ruta-slug">
              Estudio Farina Balbi {">"} Noticias {">"} {noticia.titulo}
            </h5>
          </div>
          <div class="cont-titulo-slug">
            <h1 className="titulo-slug">{noticia.titulo}</h1>
          </div>
          <div class="cont-fecha-slug">
            <h5 className="fecha-slug">Publicado el {noticia.fecha}</h5>
          </div>
          <div class="cont-texto-slug">
            <h5 className="titulo-texto-slug">{noticia.tituloTexto}</h5>
            <p className="texto-slug">{noticia.descripcion}</p>
          </div>
          <div class="cont-sub-texto-slug">
            <h5 className="titulo-texto-slug">{noticia.subTitulo}</h5>
            <p className="texto-slug">{noticia.subDescripcion}</p>
          </div>
          <div class="button-noticia-link">
            <a href={noticia.link} target="_blank" rel="noreferrer">
              <button className="button-noticia">Leer más</button>
            </a>
          </div>
        </div>
        <div class="cont-imagenes-info">
          <img
            className="imagen-slug"
            src={noticia.imagen}
            alt={noticia.titulo}
          />
        </div>
      </div>

      <h1 className="titulo-ver-mas">Ver más noticias</h1>
      <div class="ver-mas-noticias">
        {noticias.map((noticia) => (
          <div class="cont-mas-noticia">
            <a href={`/diario/${noticia.slug}`}>
              <div class="cont-mas-noticia-img">
                <img
                  className="imagen-mas-noticia"
                  src={noticia.imagen}
                  alt={noticia.titulo}
                />
                <h5 className="titulo-noticia">{noticia.titulo}</h5>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
