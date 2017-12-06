---
lang: es
ref: gh-desktop-06
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Crear branches locales con GitHub Desktop
permalink: /github-desktop/es/crear-branches-github-desktop
next-page: /github-desktop/es/hacer-cambios-github-desktop
facilitator: false
sidebar:
  nav: "github-desktop-nav-es"
main-content: |

  Ahora que ya tienes una copia local del repositorio, sigamos los pasos del [GitHub Flow](https://guides.github.com/introduction/flow/) para hacer un cambio en tu proyecto. Primero crearemos un branch.

  ![gif of following the directions below](<% BASEURL %>/images/gifs/github-desktop/create-branch-on-desktop.gif)

  1. Desde GitHub Desktop, haz clic en "Branch", y entonces en "New Branch".
  1. En el campo `Name`, introduce un nombre significativo para tu branch. Algo como `añadir-pag-index` irá bien.
  1. Si has estado siguiendo las instrucciones al pie de la letra, GitHub Desktop sabe que tiene que crear el branch nuevo basándose en `master` porque es el brnach que tenías activo cuando hiciste clic en la opción "New Branch".
  1. GitHub Desktop creará automáticamente tu nuevo branch y te cambiará a él.

show-me-how:
tell-me-why:
  includes:
    - tell-me-why-es/branching.md
---
