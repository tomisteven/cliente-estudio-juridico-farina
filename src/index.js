import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Diario from "./components/diario/Diario";
import Header from "./components/header/Header";
import DiarioSlug from "./components/diario/DiarioSlug.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/diario",
    element: <Diario />,
  },
  {
    path: "/diario/:slug",
    element: <DiarioSlug />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Header />
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
