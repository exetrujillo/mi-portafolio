---
title: Raefy - Paquete R para el Diccionario de la RAE
description: Un paquete de R para interactuar con el Diccionario de la Lengua Española (RAE). Permite buscar definiciones, sinónimos, antónimos, conjugaciones verbales y más.
date: 2025-12-30
tags: ['R', 'Web Scraping']
image: /portfolio-images/raefy.jpg
---

## Descripción del Proyecto

Raefy es un paquete de R que proporciona una interfaz para acceder a la información del Diccionario de la Lengua Española de la Real Academia Española (RAE). Permite obtener definiciones, sinónimos, antónimos, conjugaciones verbales y otras funcionalidades directamente desde R.

**Repositorio:** [github.com/exetrujillo/raefy](https://github.com/exetrujillo/raefy)

## Funcionalidades Principales

### Búsqueda de Palabras
La función principal `obtener_palabra()` permite obtener definiciones completas, etimología, sinónimos y antónimos:

```r
info <- obtener_palabra("programar")
print(info$definiciones)
```

### Conjugaciones Verbales
Para verbos, se puede solicitar la tabla de conjugación completa en todos los tiempos y modos:

```r
verbo <- obtener_palabra("correr", conjugaciones = TRUE)
print(head(verbo$conjugaciones))
```

### Palabra del Día
Obtén la palabra destacada del día por la RAE:

```r
palabra_del_dia()
```

### Palabra Aleatoria
Descubre palabras nuevas de forma aleatoria:

```r
palabra_aleatoria()
```

### Búsqueda de Anagramas
Encuentra todas las palabras que se pueden formar reordenando las letras:

```r
buscar_anagrama("amor")
# [1] "armo" "armó" "maro" "mora" "morá" "ramo" "roma" "Roma"
```

### Autocompletar
Obtén sugerencias de palabras que comienzan con un prefijo:

```r
autocompletar("const")
```

### Procesamiento en Lote
Busca múltiples palabras y obtén un dataframe consolidado:

```r
df <- recorrer_palabras(c("ciencia", "arte", "tecnología"))
```

## Instalación

El paquete está disponible en GitHub y puede instalarse con devtools:

```r
devtools::install_github("exetrujillo/raefy")
```

## Stack Tecnológico

- **R** (>= 4.4)
- **httr / rvest**: Peticiones HTTP y parsing de HTML
- **jsonlite**: Procesamiento de respuestas JSON
- **dplyr**: Manipulación de datos
- **API oficial de dle.rae.es**: Fuente de datos del Diccionario de la Lengua Española

## Casos de Uso

- **Análisis Lingüístico**: Investigación sobre el idioma español
- **Aplicaciones Educativas**: Herramientas para el aprendizaje del español
- **Procesamiento de Lenguaje Natural**: Enriquecimiento de datos textuales con definiciones, sinónimos y antónimos
- **Juegos de Palabras**: Funciones como anagramas y autocompletado para aplicaciones lúdicas