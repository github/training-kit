---
lang: es
ref: gh-desktop-15
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Hacer Push a GitHub y crear un Pull Request
permalink: /github-desktop/es/push-pull-request-github-desktop
next-page: /github-desktop/es/colaborar-github-pull-requests
facilitator: false
sidebar:
  nav: "github-desktop-nav-es"
main-content: |

  Ahora que ya has hecho algunos commits locales, es hora de que envíes tus cambios a la copia remota de tu repositorio en GitHub.com y abras un pull request.

  ![gif of following the directions below](<% BASEURL %>/images/gifs/github-desktop/review-push-open-pr.gif)

  1. En GitHub Desktop, haz clic en el botón para sincronizar los cambios. Este botón cambia de estado según los cambios que se hayan realizado en tus repositorios local y remoto. Si no se ha realizado ningún otro cambio, dirá **Publish Branch**.
  1. En tu navegador, accede a [la pestaña 'Pull Requests' del repositorio de la clase](https://github.com/githubschool/on-demand-github-pages/pulls).
  1. Haz clic en ['New pull request'](https://github.com/githubschool/on-demand-github-pages/compare).
  1. Asegúrate de que el branch `base` (el de la izquierda) es `master` y de que el branch `compare` (el de la derecha) es el que has creado en GitHub Desktop.
  1. Rellena los demás campos del pull request.

show-me-how:
tell-me-why:
  includes:
    - tell-me-why-es/pull-request.md

---
