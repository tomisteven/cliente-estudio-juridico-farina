import React from "react";
import { useParams } from "react-router-dom";
import noticias from "../Data/Noticias";
import "./DiarioSlug.css";
import { Oval } from "react-loader-spinner";
import {
  Comment,
  CommentAvatar,
  CommentContent,
  CommentGroup,
  CommentAuthor,
  CommentText,
  CommentActions,
  CommentAction,
  Icon,
} from "semantic-ui-react";
import doc from "../../assets/portadacelular.png";

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
            <p className="texto-slug">{noticia.subDescripcion1}</p>
          </div>
          <div class="cont-sub-texto-slug">
            <p className="texto-slug">{noticia.subDescripcion2}</p>
          </div>
          <div class="cont-sub-texto-slug">
            <p className="texto-slug">{noticia.subDescripcion3}</p>
          </div>
          <div class="cont-sub-texto-slug">
            <p className="texto-slug">{noticia.subDescripcion4}</p>
          </div>
          <div class="cont-sub-texto-slug">
            <p className="texto-slug">{noticia.subDescripcion5}</p>
          </div>
          <div class="cont-sub-texto-slug">
            <p className="texto-slug">{noticia.subDescripcion6}</p>
          </div>
          <div class="cont-sub-texto-slug">
            <p className="texto-slug">{noticia.subDescripcion7}</p>
          </div>
          <div class="cont-sub-texto-slug">
            <p className="texto-slug">{noticia.subDescripcion8}</p>
          </div>
          <div class="cont-sub-texto-slug">
            <p className="texto-slug">{noticia.subDescripcion9}</p>
          </div><div class="cont-sub-texto-slug">
            <p className="texto-slug">{noticia.subDescripcion10}</p>
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
          <img
            className="imagen-slug"
            src={noticia.imagen2}
            alt={noticia.titulo}
          />
          <div class="contact-slug">
            <CommentGroup className="contact-slug-comment">
              <Comment>
                <CommentAvatar as="a" src={doc} />
                <CommentContent>
                  <CommentAuthor>Julian Farina Balbi</CommentAuthor>
                  <CommentText>
                    Abogado UNLP. Especialista en Prueba Penal por la U. de
                    Castilla La Mancha. Director Legal en Estudio Farina Balbi
                  </CommentText>
                  <CommentActions>
                    <CommentAction>
                      <a
                        href={noticia.datosContactoTelefono}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon name="whatsapp" size="big" />
                      </a>
                    </CommentAction>
                    <CommentAction>
                      <a
                        href={noticia.datosContactoIG}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon name="instagram" size="big" />
                      </a>
                    </CommentAction>
                  </CommentActions>
                </CommentContent>
              </Comment>
            </CommentGroup>
          </div>
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
