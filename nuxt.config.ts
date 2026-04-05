// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@nuxt/image'
  ],
  app: {
    head: {
      title: 'Exequiel Trujillo',
      titleTemplate: '%s | Exequiel Trujillo', // Plantilla para títulos de otras páginas
      htmlAttrs: {
        lang: 'es'
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    renderer: {
      anchorLinks: {
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false
      }
    },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'material-theme-lighter',
            dark: 'vitesse-dark',
          },
          langs: [
            'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml',
            'r'
          ]
        }
      }
    }
  },
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg']
  },
  nitro: {
    preset: 'vercel'
  },
  sourcemap: false
})
