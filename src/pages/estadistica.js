import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Estadistica = () => (
  <Layout>
    <h1>Estadística: R y Excel</h1>
    <p>Aquí poner:</p>
    <ul>
        <li>Habilidades: Por ejemplo, Análisis descriptivo e inferencial, modelado estadístico, análisis de regresión, diseños experimentales</li>
        <li>Herramientas: R, RStudio, Excel, librerías y programas para la visualización de datos, etc.</li>
        <li>Mostrar trabajos: títulos de estudio o análisis, enlaces a proyectos o estudios publicados, de ser posible</li>
        <li>Metodologías: Regresión lineal y múltiple, análisis de redes, etc.</li>
    </ul>
    <Link to="/">Vuelve a la página de inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Estadística" />

export default Estadistica