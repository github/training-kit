---
lang: es
ref: gh-desktop-14
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Revisar el Flujo GitHub local
permalink: /github-desktop/es/revisar-github-flow
next-page: /github-desktop/es/push-pull-request-github-desktop
facilitator: false
sidebar:
  nav: "github-desktop-nav-es"
main-content: |

  Ahora que ya eres colaborador, vamos a utilizar el flujo de trabajo local que acabamos de aprender para hacer cambios en este repositorio.

  ![gif of following the directions below](<% BASEURL %>/images/gifs/github-desktop/review-local-workflow.gif)

  1. Empieza desde la pestaña Code del [repositorio de la clase en GitHub.com](https://github.com/githubschool/on-demand-github-pages/).
  1. Haz clic en `Clone or Download`.
  1. Haz clic en `Open in Desktop`. Esto abrirá GitHub Desktop.
  1. Confirma en `Local Path` en qué ubicación exacta de tu ordenador quieres almacenar el repositorio localmente.
  1. Crea un branch haciendo clic en "Branch > New branch" y etiquétalo con tu nombre de usuario, algo como `tuUsuario-añadir-pagina`.
  1. En tu editor de texto favorito, añade un archivo al directorio `_pages`. Utiliza tu nombre de usuario como nombre de archivo: `usuario.yaml`.
  1. Introduce el siguiente contenido en tu archivo:

         ---
         githubHandle: TU-USUARIO
         pageUrl: TU-USUARIO.github.io
         timestamp: FECHA_DE_HOY_CON_FORMATO_YYYY-MM-DD
         ---

  1. Asegúrate de que has reemplazado `TU-USUARIO` con tu nombre de usuario GitHub, `TU-USUARIO.github.io` con la URL a tu sitio, y `FECHA_DE_HOY_CON_FORMATO_YYYY-MM-DD` con la fecha de hoy, utilizando cuatro dígitos para el año, dos dígitos para el mes, y dos dígitos para el día. Por ejemplo, si hoy es 27 de septiembre de 2017, escribirías: `2017-09-27`.
  1. En GitHub Desktop, en la barra lateral `Changes`, asegúrate de que tu archivo está seleccionado.
  1. En GitHub Desktop, introduce un mensaje de commit que describa el cambio que estás introduciendo en el proyecto.
  1. En GitHub Desktop, haz clic en el botón `Commit to TU-BRANCH` -- asegúrate de que `TU-BRANCH` incluye tu nombre de usuario.

show-me-how:
tell-me-why: |

  ## Revisando el Flujo GitHub

  Recuerda, los cinco pasos del [Flujo GitHub](https://guides.github.com/introduction/flow/) con:

  1. **Crear un branch** :arrow_left: _(Esta sección trata sobre este paso.)_
  1. **Hacer commits** :arrow_left: _(Y este.)_
  1. Abrir un Pull Request
  1. Colaborar, y hacer más commits
  1. Hacer merge del Pull Request

  Con suerte esto ya te suena, porque has seguido este flujo de trabajo (al menos) dos veces. Ahora lo seguirás una vez más para añadir tu página a nuestro directorio.
---
