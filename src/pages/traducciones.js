import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Traducciones = () => (
  <Layout>
    <h1>Traducciones y Lenguas</h1>
    <p>Aquí poner:</p>
    <ul>
        <li>Idiomas en los que hago traducciones</li>
        <li>Especialidades: Enumerar áreas específicas, como por ejemplo Traducción técnica (Manuales, documentación), Traducción literaria (novelas, poesía), Traducción comercial (marketing), Traducción audiovisual (subtítulos, guiones)</li>
        <li>Proceso de trabajo: Análisis del texto fuente, investigación de términos y contexto, revisión y edición del texto traducido</li>
    </ul>
    <Link to="/">Vuelve a la página de inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Traducciones" />

export default Traducciones