import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FotografiaRetoque = () => (
  <Layout>
    <h1>Fotografía, retoque y montaje</h1>
    <p>Algo de mis fotos, y la edición que puedo hacer de ellas</p>
    <ol>
        <li>
            Título y descripción
            <ul>
                <li>Editar el Título</li>
                <li>Enfoque y estilo de fotografía, influencias, cámara, técnicas preferidas, etc.</li>
            </ul>
        </li>
        <li>
            Galería de Imágenes
            <ul>
                <li>Carrusel o Grid para mostrar fotos buenas</li>
                <li>Ejemplos de antes y después de los retoques y montajes</li>
            </ul>
        </li>
        <li>
            Herramientas y Técnicas
            <ul>
                <li>Mención a software que utilizo para el retoque fotográfico, como Photoshop, Lightroom, etc.</li>
                <li>Técnicas específicas: Información sobre las técnicas de retoque que aplico en fotos, como la corrección de color, el ajuste de iluminación o la eliminación de imperfecciones y manchas de lente.</li>
            </ul>
        </li>
    </ol>
    <Link to="/">Vuelve a la página de inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Foto" />

export default FotografiaRetoque