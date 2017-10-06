---
lang: es
ref: gh-desktop-09
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Abrir un pull request con GitHub Desktop
permalink: /github-desktop/es/pull-request-github-desktop
next-page: /github-desktop/es/merge-pull-request-github
facilitator: false
sidebar:
  nav: "github-desktop-nav-es"
main-content: |

  Ahora que ya has hecho algunos commits locales, es hora de que envíes tus cambios a la copia remota de tu repositorio en GitHub.com y abras un pull request.

  ![gif of following the directions below](<% BASEURL %>/images/gifs/github-desktop/opening-a-pr.gif)

  1. En GitHub Desktop, haz clic en el botón para sincronizar los cambios. Este botón cambia de estado basándose en los cambios que hayas realizado en tu repositorio local y en el remoto. Si no se ha realizado ningún otro cambio, dirá **Publish Branch**.
  1. En tu navegador, accede a la pestaá 'Pull Requests' del repositorio de tu sitio.
  1. Haz clic en 'New pull request'.
  1. Asegúrate de que el branch `base` (el de la izquierda) es `master` y de que el branch `compare` (el de la derecha) es el que has creado en GitHub Desktop.
  1. Completa los campos del pull request.

show-me-how:
tell-me-why: |
  ## Revisando el GitHub Flow

  Revisemos dónde nos encontramos en el GitHub Flow:

  1. Crear un branch
  1. Añadir commits
  1. **Abrir un Pull Request** :arrow_left: _(Esta sección trata sobre este paso.)_
  1. Colaborar, y hacer más commits
  1. Hacer merge del Pull Request

  Simplemente haz clic en el botón "Update Origin". Esto envía tu branch a GitHub. Entonces puedes abrir el Pull Request ahí.

---
