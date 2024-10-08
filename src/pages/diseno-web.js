import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DisenoWeb = () => (
  <Layout>
    <h1>Diseño Web</h1>
    <p>Aquí poner:</p>
    <ul>
        <li>Descripción del enfoque, estilo y tecnologías utilizadas (lenguajes, frameworks, etc.)</li>
        <li>Proyectos destacados, comenzar con mostrar este mismo</li>
        <li>Tratar de mostrar distintas habilidades, diseño responsivo, accesibilidad web, SEO básico, usabilidad y experiencia de usuario</li>
        <li>Tratar de mostrar también el uso de distintas tecnologías: HTML, CSS, JS, Frameworks, Bibliotecas (React, Vue, Bootstrap, por ejemplo), Sistemas de control de versiones (Git), Plataformas de despiegue (como Netlify o Vercel)</li>
        <li>Mostrar procesos de trabajo si es posible</li>
    </ul>
    <Link to="/">Vuelve a la página de inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Diseño Web" />

export default DisenoWeb