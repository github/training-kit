---
lang: es
ref: gh-desktop-08
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Añadir commits locales con GitHub Desktop
permalink: /github-desktop/es/nuevos-commits-github-desktop
next-page: /github-desktop/es/pull-request-github-desktop
facilitator: false
sidebar:
  nav: "github-desktop-nav-es"
main-content: |

  Una vez que hayas terminado de hacer tus cambios, es hora de hacer commit (confirmarlos).

  ![gif of following the directions below](<% BASEURL %>/images/gifs/github-desktop/making-commits-locally.gif)

  1. Haz clic en la pestaña **changes** en la barra lateral izquierda para ver una lista de los archivos que han cambiado o se han añadido desde el último commit.
  1. Utiliza los checkboxes para indicar qué archivos deberían formar parte del commit. En esta actividad, seleccionarás el archivo `index.html`.

        *Nota: Es buena idea agrupar los archivos basándote en el tipo de cambio o el contenido del archivo. Por ejemplo, si has corregido el mismo problema de formato en varios documentos, deberías agruparlos en un único commit.*

  1. Escribe tu mensaje de commit en el campo _Summary_.
  1. Verás que GitHub Desktop ha rellenado automáticamente el botón de commit con el branch actual. Simplemente haz clic en el botón para hacer commit de tus cambios.

show-me-how:
tell-me-why: |
  ## Crear buenos commits

  Cuando trabajas en GitHub.com, un commit sólo puede incluir los cambios que has hecho en un único archivo. Pero cuando trabajas desde la aplicación de escritorio, tienes mucho más control sobre tus commits.

  Con GitHub Desktop, un commit puede incluir múltiples archivos, o puedes seleccionar un cambio específico en un archivo del que te gustaría hacer commit.

  Cuando selecciones los cambios realizados que quieres incluir en el commit, deberías intentar crear lo que nos gusta llamar un **commit atómico**. En otras palabras, cada commit que hagas debería contener cambios que tienen sentido juntos y representan una única unidad de trabajo.
---
