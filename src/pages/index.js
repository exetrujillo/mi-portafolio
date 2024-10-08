import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Acerca de mí",
    url: "sobre-mi",
    description:
      "Entra aquí si quieres saber más sobre mí, mis trabajos, áreas de desarrollo y proyectos.",
  },
  {
    text: "Fotografía y retoque",
    url: "fotografia-retoque",
    description:
      "Aquí puedes ver algunos ejemplos de mis fotografías, mi trabajo de retoque fotográfico, montaje de imagen y edición de imagen no vectorizada",
  },
  {
    text: "Illustrator e InDesign",
    url: "illustrator-indesign",
    description:
      "Uso de Illustrator, con imágenes vectorizadas, y uso de InDesign para el diseño de folletos, trípticos, materiales educativos, libros y revistas.",
  },
  {
    text: "Diseño Web",
    url: "diseno-web",
    description:
      "HTML, CSS, JavaScript, React y en general diseño de páginas web (¡Como ésta!)",
  },
  {
    text: "Traducciones",
    url: "traducciones",
    description:
      "Me apasiona aprender otras lenguas, poder comunicarme con otras personas y entender los memes de otras culturas, pero también me gusta compartir conocimiento que no está disponible en otros idiomas. ¡Aquí hay un poco de eso!",
  },
  {
    text: "Estadística",
    url:"estadistica",
    description:
    "Uso de R y Excel, estadística principalmente para la Ciencias Sociales, después de todo estudio sociología",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Bienvenido a mi portafolio, soy <b>Exequiel Trujillo</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
