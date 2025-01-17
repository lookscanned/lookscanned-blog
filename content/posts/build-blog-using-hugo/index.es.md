---
title: "Cómo Crear un Blog con Hugo para Look Scanned"
date: "2025-01-17T14:22:31+08:00"
description: "Guía completa para crear un blog moderno con el generador de sitios estáticos Hugo. Incluye instalación, configuración, despliegue y personalización, ideal tanto para principiantes como para desarrolladores experimentados."
summary: "Guía completa para crear un blog moderno con el generador de sitios estáticos Hugo. Incluye instalación, configuración, despliegue y personalización, ideal tanto para principiantes como para desarrolladores experimentados."
tags: ["hugo", "blog", "web", "sitio-estático", "tutorial"]
---

## ¿Qué es Look Scanned?

[Look Scanned](https://lookscanned.io) es una aplicación web ligera que simula el efecto de documentos PDF escaneados. Diseñada con la privacidad como prioridad, permite a desarrolladores, diseñadores y usuarios en general crear PDFs con aspecto de escaneados sin necesidad de impresoras ni escáneres físicos.

## ¿Por qué Hugo?

Tras evaluar varios generadores de sitios estáticos para el blog de Look Scanned, nos decidimos por Hugo por estas razones:

1. **Velocidad Increíble** - Desarrollado en Go, ofrece una velocidad de compilación extraordinaria
2. **Facilidad de Uso** - Configuración sencilla y curva de aprendizaje suave
3. **Temas Diversos** - Gran colección de temas atractivos y personalizables
4. **Comunidad Activa** - Excelente soporte comunitario y documentación detallada
5. **I18n Integrado** - Soporte nativo para múltiples idiomas

## Guía de Instalación

### Instalar Hugo

Para usuarios de macOS (con Homebrew):

```bash
brew install hugo
```

Para usuarios de Windows (con Chocolatey):

```bash
choco install hugo-extended
```

Para usuarios de Linux, consulta las instrucciones de instalación [aquí](https://gohugo.io/installation/linux/).

### Crear un Sitio Nuevo

Configura tu sitio Hugo con estos comandos:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Instalar un Tema

Añade el tema PaperMod como submódulo de Git:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Modifica tu archivo `config.toml`:

```toml
theme = "PaperMod"
```

### Configurar Múltiples Idiomas

Añade soporte multiidioma en tu `config.toml`:

```toml
defaultContentLanguage = 'en'
defaultContentLanguageInSubdir = false

[params]
  displayFullLangName = true

[languages]
  [languages.en]
    languageCode = 'en'
    languageName = 'English'
    title = 'Look Scanned Blog'
  [languages.zh]
    languageName = '简体中文'
    title = 'Look Scanned 博客'
  [languages.zh-tw]
    languageCode = 'zh-TW'
    languageName = '繁體中文'
    title = 'Look Scanned 部落格'
  # Otros idiomas...
```

### Crear Contenido

Crea tu primera entrada del blog:

```bash
hugo new posts/build-blog-using-hugo/index.es.md
```

### Iniciar el Servidor Local

Inicia el servidor de desarrollo:

```bash
hugo server -D
```

Visita [http://localhost:1313](http://localhost:1313) para ver tu sitio.

## Opciones de Publicación

Publica tu blog Hugo fácilmente usando GitHub Actions:

1. **GitHub Pages**

   - Crea un repositorio en GitHub
   - Sube el código de tu sitio
   - Activa GitHub Pages en la configuración
   - Configura GitHub Actions para el despliegue automático

2. **Cloudflare Pages**
   - Vincula tu repositorio de GitHub
   - Define `hugo` como comando de compilación
   - Establece `public` como directorio de publicación

## Personalización

Hemos simplificado la interfaz eliminando el selector de idiomas del encabezado. Puedes ver los archivos modificados del tema [aquí](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Conclusión

Hugo es una excelente base para crear un blog personal. Su combinación de velocidad, flexibilidad y documentación completa lo hace ideal para desarrolladores de cualquier nivel. A medida que explores Hugo, descubrirás funcionalidades avanzadas para crear una experiencia de blog única.

## Recursos

- [Documentación de Hugo](https://gohugo.io/documentation/)
- [Tema PaperMod](https://github.com/adityatelange/hugo-PaperMod)
