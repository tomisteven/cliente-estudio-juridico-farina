import "./App.css";

import "semantic-ui-css/semantic.min.css";
import { Helmet } from "react-helmet-async";

import Portada from "./components/portada/Portada";
import Presentacion from "./components/presentacion/Presentacion.js";
import Banner from "./components/banner/Banner.js";
import Especializaciones from "./components/especializaciones/Especializaciones.js";
import Estudio from "./components/estudio/Estudio.js";
import Reseñas from "./components/reseñas/Reseñas.js";
import ButtonsSociales from "./components/buttonsSociales/ButtonsSociales.js";
import ButtonWhatsApp from "./components/buttonWhatsApp/ButtonWhatsApp.js";
import Noticias from "./components/noticias/Noticias.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ImagenConFrase from "./components/imagenConFrase/ImagenConFrase.js";

function App() {
  return (
    <>
      <Helmet>
        <title>Abogado Penalista en La Plata | Dr. Julian Farina Balbi</title>
        <meta name="description" content="Abogado penalista especializado en delitos sexuales, falsas denuncias y derecho penal en La Plata. Urgencias 24hs ☎ +54 9221 561-9155" />
        <link rel="canonical" href="https://www.estudiofarinabalbi.com/" />
        <meta property="og:title" content="Abogado Penalista en La Plata | Dr. Julian Farina Balbi" />
        <meta property="og:url" content="https://www.estudiofarinabalbi.com/" />
        <meta property="og:description" content="Abogado penalista especializado en delitos sexuales y falsas denuncias en La Plata. Atención 24 horas." />
      </Helmet>
      <div className="App">
        <Portada />
        <Banner />
        <Especializaciones />
        <Presentacion />
        <Noticias />
        <Estudio />
        <ImagenConFrase />
        <div className="container-mapa">
          <h5 className="title-ubicacion">Ubicacion</h5>
          <iframe
            title="Ubicación del Estudio Jurídico"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5988880718037!2d-57.96308132460843!3d-34.91651427408431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6148252aa858410f%3A0x44bbe75e580a6723!2sFarina%20Balbi%20%7C%20Estudio%20Jur%C3%ADdico%20Penal!5e0!3m2!1ses-419!2sar!4v1755879042675!5m2!1ses-419!2sar"
            style={{
              border: 0,
              width: "100%",
              height: "100%",
              maxWidth: "100%",
            }}
            allowfullscreen={true}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Reseñas />
        <ButtonsSociales />
        <ButtonWhatsApp />
      </div>
    </>
  );
}

export default App;
