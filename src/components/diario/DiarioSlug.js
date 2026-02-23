import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

  React.useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) footer.style.display = "none";
    return () => {
      if (footer) footer.style.display = "";
    };
  }, []);

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
        />
      </div>
    );

  // Crear descripción truncada para SEO (150-160 caracteres)
  const metaDescription = noticia.descripcion
    ? noticia.descripcion.substring(0, 155) + "..."
    : `Artículo sobre ${noticia.titulo} por el Dr. Julian Farina Balbi, especialista en derecho penal.`;

  return (
    <>
      <Helmet>
        <title>{noticia.titulo} | Blog Fariña Balbi</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://www.estudiofarinabalbi.com/diario/${slug}`} />
        <meta property="og:title" content={noticia.titulo} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`https://www.estudiofarinabalbi.com/diario/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={noticia.imagen} />
        <meta property="article:published_time" content={noticia.fecha} />
        <meta property="article:author" content="Dr. Julian Farina Balbi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={noticia.titulo} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={noticia.imagen} />
      </Helmet>
      <article className="container-slug">
        <nav aria-label="breadcrumb" className="nav-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Inicio</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/diario">Noticias</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {noticia.titulo}
            </li>
          </ol>
        </nav>

        <header className="header-slug">
          <h1 className="titulo-slug">{noticia.titulo}</h1>
          <p className="fecha-slug">Publicado el {noticia.fecha}</p>
        </header>

        <section className="cont-texto-slug">
          <h2 className="titulo-texto-slug">{noticia.tituloTexto}</h2>
          <p className="texto-slug">{noticia.descripcion}</p>
          {Array.from({ length: 10 }).map((_, index) => {
            const subDescripcionKey = `subDescripcion${index + 1}`;
            return noticia[subDescripcionKey] ? (
              <p key={subDescripcionKey} className="texto-slug">
                {noticia[subDescripcionKey]}
              </p>
            ) : null;
          })}

          {noticia.link && (
            <a
              href={noticia.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="link-slug"
            >
              {noticia.textBtn ? noticia.textBtn : "Ver más"}
            </a>
          )}
        </section>
        <aside className="cont-imagenes-info">
          <img
            className="imagen-slug"
            src={noticia.imagen}
            alt={noticia.titulo}
          />
          {noticia.imagen2 && (
            <img
              className="imagen-slug"
              src={noticia.imagen2}
              alt={noticia.titulo}
            />
          )}
        </aside>
        <footer className="contact-slug">
          <CommentGroup className="contact-slug-comment">
            <Comment>
              <CommentAvatar as="a" src={doc} />
              <CommentContent>
                <CommentAuthor>Julian Farina Balbi</CommentAuthor>
                <CommentText>
                  Abogado UNLP. Especialista en Prueba Penal por la U. de Castilla
                  La Mancha. Director Legal en Estudio Farina Balbi
                </CommentText>
                <CommentActions>
                  <CommentAction>
                    <a
                      href={noticia.datosContactoTelefono}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                      aria-label="Contacto por WhatsApp"
                    >
                      <Icon name="whatsapp" color="green" size="big" />
                    </a>
                  </CommentAction>
                  <CommentAction>
                    <a
                      href={noticia.datosContactoIG}
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                      aria-label="Instagram"
                    >
                      <Icon name="instagram" color="purple" size="big" />
                    </a>
                  </CommentAction>
                </CommentActions>
              </CommentContent>
            </Comment>
          </CommentGroup>
        </footer>

        <section className="ver-mas-noticias">
          <h2 className="titulo-ver-mas">Ver más noticias</h2>
          <div className="cont-mas-noticia">
            {noticias.map((noticia) => (
              <a href={`/diario/${noticia.slug}`} key={noticia.slug}>
                <img
                  className="imagen-mas-noticia"
                  src={noticia.imagen}
                  alt={noticia.titulo}
                />
                <h3 className="titulo-noticia">{noticia.titulo}</h3>
              </a>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
