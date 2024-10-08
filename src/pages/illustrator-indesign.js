import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IllustratorIndesign = () => (
  <Layout>
    <h1>Vectores y maquetación: illustrator e InDesign</h1>
    <p>Aquí poner:</p>
    <ul>
        <li>Proyectos destacados: Infografías, Afiches, Folletos, Libros o Revistas. Además de los ejemplos se puede incluir resumenes de los proyectos y descripción del proceso creativo</li>
        <li>Habilidades y técnicas: Creación de ilustraciones vectoriales, composición, maquetación, uso de estilos de párrafo y carácter en InDesign, paletas de colores, manipulación de formas y creación de patrones</li>
    </ul>
    <Link to="/">Vuelve a la página de inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Illustrator e InDesign" />

export default IllustratorIndesign