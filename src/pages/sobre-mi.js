import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SobreMi = () => (
  <Layout>
    <h1>Ahora un poco sobre mí</h1>
    <p>Esto es un texto de prueba pero aquí debo resumir:</p>
    <ol>
        <li>
            Introducción
            <ul>
                <li>Nombre y título: Comenzar con mi nombre completo y mi título o lo que me defina (por ejemplo, "Diseñador Gráfico", "Desarrollador Web", "Traductor", etc.).</li>
                <li>Breve descripción: Un párrafo corto que resuma quién soy y lo que hago.</li>
            </ul>
        </li>
        <li>
            Historia Personal (quizás innecesario)
            <ul>
                <li>Origen: De dónde soy o cuál es mi trasfondo. Puede incluir detalles sobre mi educación, experiencias personales o cualquier aspecto que me haya llevado a mi "carrera".</li>
                <li>Intereses: Intereses y pasiones, tanto dentro como fuera de tu campo profesional.</li>
            </ul>
        </li>
        <li>
            Formación Académica y Experiencia
            <ul>
                <li>Educación: Información sobre mi formación académica relevante, como títulos, cursos y certificaciones.</li>
            </ul>
        </li>
        <li>
            Habilidades
            <ul>
                <li>Competencias técnicas: Como el uso de herramientas de diseño (Photoshop, Illustrator), lenguajes de programación (HTML, CSS, JavaScript), o cualquier otra habilidad técnica pertinente.</li>
                <li>Habilidades blandas: Habilidades interpersonales como comunicación, trabajo en equipo o gestión del tiempo.</li>
            </ul>
        </li>
        <li>
            Contacto
            <ul>
                <li>Invitación a conectar</li>
            </ul>
        </li>
    </ol>
    <Link to="/">Vuelve a la página de inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Exequiel Trujillo" />

export default SobreMi