---
title: Cadáver Exquisito - Plataforma de Creación Poética Colaborativa
description: Reviviendo el juego surrealista en un entorno digital moderno para la comunidad universitaria.
date: 2025-05-27
tags: ['Next.js', 'PostgreSQL']
image: /portfolio-images/cadaver-exquisito.jpg
---

## Cadáver Exquisito: Únete al Camposanto Literario de Almas Errantes

**Enlace al Sitio:** [https://www.cadaverexquisito.cl/](https://www.cadaverexquisito.cl/)

## Resumen del Proyecto

"Cadáver Exquisito" es una plataforma web lúdico-creativa diseñada para fomentar la **creación poética colaborativa** dentro de la comunidad de la Universidad de Chile y un círculo selecto de invitados. Inspirada en el clásico juego surrealista, la aplicación permite a los participantes construir poemas verso a verso, conociendo solo una pequeña pista del aporte anterior, culminando en la revelación de una obra colectiva única y siempre inesperada.

El proyecto busca ofrecer un espacio digital exclusivo y seguro para la experimentación literaria, promoviendo la creación colaborativa anónima (durante el proceso creativo) o bajo seudónimos. Además se busca entregar a cada miembro de la comunidad la confianza para poder lanzarse a la escritura poética por medio de una experiencia lúdica, en un mundo donde la lectura y escritura de poesía parecieran estar cada vez más alejados de la población.

## Objetivos del Proyecto

Los principales objetivos detrás de "Cadáver Exquisito" son:

*   Proveer un espacio digital interactivo y seguro para la experimentación poética y la escritura colaborativa.
*   Fomentar la participación creativa dentro de la comunidad universitaria, extendiéndose a invitados.
*   Generar obras colectivas (poemas y, futuramente, otros formatos) con resultados sorprendentes e impredecibles.
*   Facilitar una experiencia de juego que reduzca la aprensión hacia la escritura poética, haciéndola accesible y divertida.
*   Construir una galería digital donde estas creaciones colaborativas puedan ser compartidas y apreciadas.

## Características Principales

La plataforma cuenta con una serie de funcionalidades diseñadas para hacer la experiencia de creación colaborativa fluida y atractiva:

*   **Creación Colaborativa de Poemas:** Los usuarios contribuyen versos de forma secuencial, viendo solo una pista del verso anterior.
*   **Salas de Creación Temáticas ("Patios"):** Diferentes espacios con reglas variables (ej. longitud máxima de poemas, tiempo por verso) para diversificar la experiencia.
*   **Sistema de Turnos con Bloqueo Temporal:** Asegura que un solo usuario escriba por vez en un "lienzo" (poema en progreso).
*   **Autenticación Segura:** Integración con Google OAuth 2.0 a través de NextAuth.js, con validación de dominios institucionales y una lista blanca para invitados.
*   **Perfiles de Usuario y Seudónimos:** Los usuarios pueden gestionar un seudónimo para sus contribuciones, manteniendo un balance entre reconocimiento y privacidad.
*   **Galería de Obras Completadas:** Un espacio para leer y apreciar los poemas finalizados, mostrando los colaboradores.
*   **Proceso de Titulación Comunitario:** Los poemas completados entran en una fase donde los colaboradores proponen títulos, y luego la comunidad (o los colaboradores) vota por el definitivo.
*   **Reacciones a Poemas:** Sistema de "Like/Dislike" para que los usuarios expresen su apreciación por las obras en la galería.
*   **Interfaz de Usuario Temática y Personalizable:** Uso de DaisyUI con múltiples temas seleccionables por el usuario.
*   **Navegación y Filtrado Avanzado:** Paginación y múltiples opciones de filtro en la galería para facilitar el descubrimiento de poemas y la interacción con estos cuando es posible.
*   **Mantenimiento Automatizado:** Tareas programadas (Cron Jobs) para gestionar los ciclos de vida de los poemas (deadlines de propuestas, votaciones, limpieza de turnos expirados).
*   **Landing Page Pública:** Presenta el proyecto a nuevos visitantes y gestiona la redirección para usuarios ya autenticados.

## Stack Tecnológico Utilizado

La plataforma "Cadáver Exquisito" se construyó utilizando un conjunto de tecnologías modernas y robustas, seleccionadas para ofrecer una experiencia de desarrollo eficiente y un producto final performante y escalable:

*   **Framework Fullstack:** **Next.js 14** (utilizando el **App Router**). Esto permite una combinación de Server Components para la eficiencia en la carga de datos y Client Components para la interactividad.
*   **Lenguaje de Programación:** **TypeScript** en todo el proyecto (frontend, backend y lógica de negocio), asegurando un tipado fuerte y una mejor mantenibilidad del código.
*   **Estilizado y UI:**
    *   **Tailwind CSS:** Framework CSS utility-first para un diseño rápido y personalizable.
    *   **DaisyUI:** Plugin para Tailwind CSS que proporciona un conjunto de componentes UI pre-estilizados y un sistema de temas personalizables, facilitando la coherencia visual y la selección de temas por el usuario.
*   **Base de Datos:** **Vercel Postgres** (impulsado por NeonDB). Una base de datos PostgreSQL serverless totalmente gestionada y optimizada para el entorno de Vercel.
*   **Autenticación:** **NextAuth.js**, configurado con el proveedor **Google OAuth 2.0** para un inicio de sesión seguro y familiar, con lógica personalizada para la validación de dominios y gestión de usuarios.
*   **Validación de Datos (Backend):** **Zod**, una librería de declaración y validación de esquemas basada en TypeScript, utilizada para asegurar la integridad y corrección de los datos recibidos por los API Route Handlers.
*   **Despliegue y Hosting:** **Vercel**. Plataforma optimizada para Next.js que provee despliegue continuo desde GitHub, funciones serverless para el backend, red de entrega de contenido (CDN) y gestión de variables de entorno.
*   **Lógica de Backend:** Implementada como módulos TypeScript y consumida por los **API Route Handlers** de Next.js, manteniendo una clara separación de concerns.

## Consideraciones de Diseño y Desarrollo

El desarrollo de "Cadáver Exquisito" se abordó con un enfoque en la creación de una experiencia de usuario fluida y segura, junto con una base de código mantenible y robusta.

*   **Experiencia de Usuario (UX):** Se priorizó una interfaz intuitiva que facilitara la participación incluso para usuarios no familiarizados con el juego original. Esto incluyó una navegación clara, feedback visual a través de notificaciones (toasts), y la personalización de la apariencia mediante temas. La meta fue hacer el proceso creativo lo más ágil y disfrutable posible.

*   **Seguridad de la Aplicación:** Desde el inicio, la seguridad fue un componente integral del diseño. Se implementaron múltiples capas para proteger la aplicación y los datos de los usuarios:
    *   **Autenticación Robusta:** Utilización de Google OAuth 2.0 a través de NextAuth.js, con validación estricta de dominios de correo y listas blancas para controlar el acceso.
    *   **Autorización Cuidadosa:** El acceso a funcionalidades y datos se gestiona en el backend, asegurando que los usuarios solo puedan realizar las acciones permitidas según su estado y participación.
    *   **Validación de Entradas:** Todas las entradas de datos provenientes del cliente hacia el backend son validadas rigurosamente (utilizando Zod) para asegurar su integridad y prevenir vulnerabilidades comunes.
    *   **Protección contra Inyección SQL:** El uso de consultas parametrizadas a la base de datos es una práctica estándar en todo el proyecto.
    *   **Manejo Seguro de Secretos:** Todas las claves de API y credenciales sensibles se gestionan como variables de entorno y no se exponen en el código fuente.
    *   **Configuraciones de Seguridad HTTP:** Básicamente headers de seguridad para mitigar riesgos como clickjacking y sniffing de tipo MIME.


## Lecciones Aprendidas y Evolución Futura

El desarrollo de "Cadáver Exquisito" ha sido una experiencia de aprendizaje continua, reforzando la importancia de varios aspectos clave en la creación de aplicaciones web modernas:

*   **Seguridad desde el Inicio:** Integrar consideraciones de seguridad desde las primeras etapas del diseño y desarrollo es crucial, en lugar de tratarla como un añadido posterior. La validación exhaustiva de entradas y una autorización cuidadosa son fundamentales.
*   **Claridad en la Lógica de Negocio:** Definir claramente las reglas del juego y los flujos de estado de los poemas (propuestas, votaciones) fue vital para implementar las funcionalidades de manera correcta y robusta. Esto está explicado en la sección de "Cómo Jugar" para que no sea simplemente una colección de reglas internas entendibles para quien lea el código, sino que para los usuarios.
*   **Experiencia de Usuario (UX):** Pequeños detalles, como la consistencia en la visualización de información, la persistencia de filtros, y el feedback claro a través de notificaciones, impactan significativamente la percepción y usabilidad de la aplicación.
*   **Elección del Stack Tecnológico:** La combinación de Next.js, TypeScript, Vercel y PostgreSQL demostró ser una base sólida y productiva para este tipo de proyecto, permitiendo un desarrollo rápido y un despliegue eficiente.

### Próximos Pasos y Visión a Futuro

"Cadáver Exquisito" tiene potencial para seguir creciendo y enriqueciendo la experiencia creativa de su comunidad. Algunas de las futuras expansiones y mejoras consideradas incluyen:

*   **Nuevos Formatos Creativos:**
    *   **Microcuentos Colaborativos:** Expandir la plataforma para permitir la creación colaborativa de microcuentos, siguiendo una mecánica similar a la de los poemas.
*   **Mejoras en la Galería y Descubrimiento:**
    *   **Filtro de Ordenamiento Avanzado:** Permitir a los usuarios ordenar la galería por criterios como "más populares" (basado en reacciones) o "más antiguos".
    *   **Sistema de Rankings Básico:** Introducir clasificaciones sencillas para los poemas más valorados o los usuarios más participativos, fomentando la interacción y lógicas de gamificación un poco más avanzadas.
*   **Funcionalidades Comunitarias:**
    *   Explorar la posibilidad de seguir a otros autores o recibir notificaciones sobre nuevos poemas en salas de interés.
*   **Optimización y Mantenimiento Continuo:**
    *   Monitoreo constante del rendimiento y la seguridad.
    *   Implementación de rate limiting más granular para APIs críticas si el tráfico lo requiere. Por ahora esto no significa un gran problema porque la aplicación se encuentra acotada a la comunidad de la Universidad de Chile y es manejable con otras medidas implementadas desde ya en el backend.
    *   Respuesta al feedback de los usuarios y corrección de errores.
*   **Soporte y Sostenibilidad:**
    *   Adición de un botón de donaciones para ayudar a cubrir los costos de mantenimiento y desarrollo futuro, si la comunidad lo valora.

Este proyecto se concibe como una plataforma viva, con la intención de evolucionar y seguir ofreciendo un espacio único para la creatividad compartida, además de un enorme proceso de aprendizaje y desarrollo profesional.