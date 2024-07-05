import "./App.css";

import "semantic-ui-css/semantic.min.css";
import Header from "./components/header/Header";
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
    <div className="App">
      <Header />
      <Portada />
      <Banner />
      <Especializaciones />
      <Presentacion />

      <Noticias />
      <Estudio />
      <ImagenConFrase />
      <Reseñas />
      <ButtonsSociales />
      <ButtonWhatsApp />
    </div>
  );
}

export default App;
