import React, { lazy } from "react";
import Loadable from "../layouts/Loadable";
import { Navigate } from "react-router-dom";
import Alumnos from "../components/Alumnos";
import Tutores from "../components/Tutores";
import CrearCuenta from "../components/Crearcuenta";
import Paginaprincipal from "../components/Paginaprincipal";
import Inscribirtutorias from "../components/Inscribirtutorias";
import Calendario from "../components/Calendario";
import Inscribirtutor from "../components/Inscribirtutor";
import Tutorias from "../components/Tutorias";
import Reseñas from "../components/Reseñas";


/* ***Layouts**** */
const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);

/* ***End Layouts**** */

const Error = Loadable(lazy(() => import("../pages/Error/404")));

/* ****Pages***** */
const HomePage = Loadable(lazy(() => import("../pages/Home/Home")));

/* ****Routes***** */

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "", exact: true, element: <HomePage /> },
      { path: "alumnos", element: <Alumnos /> }, 
      { path: "tutores", element: <Tutores /> },
      { path: "crear-cuenta", element: <CrearCuenta /> }, 
      { path: "paginaprincipal", element: <Paginaprincipal /> },
      { path: "inscribirtutorias", element: <Inscribirtutorias /> },
      { path: "inscribirtutor", element: <Inscribirtutor /> },
      { path: "calendario", element: <Calendario /> },
      { path: "tutorias", element: <Tutorias /> }, 
      {path: "reseñas", element:<Reseñas/>},
      { path: "*", element: <Navigate to="/404" /> },
      { path: "404", element: <Error /> },
    ],
  },
];

export default Router;
