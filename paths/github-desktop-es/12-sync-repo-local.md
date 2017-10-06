---
lang: es
ref: gh-desktop-12
layout: simple-class
help: https://github.com/githubschool/on-demand-github-pages/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Hacer Push a GitHub con GitHub Desktop
permalink: /github-desktop/es/push-con-github-desktop
next-page: /github-desktop/es/añadir-github-pages-escaparate
facilitator: false
sidebar:
  nav: "github-desktop-nav-es"
main-content: |

  Después de hacer merge de tu Pull Request, tienes que actualizar tu copia local del repositorio.

  ![gif of following the directions below](<% BASEURL %>/images/gifs/github-desktop/sync-changes.gif)

  1. Vuelve a GitHub Desktop.
  1. Selecciona el branch `master` en la parte superior de la aplicación.
  1. Haz clic en el botón que dice **Fetch Origin** para obtener un estado actualizado sobre el repositorio remoto.
  1. Ahora haz clic en **Pull Origin** para traer los cambios a tu repositorio local.

show-me-how:
tell-me-why: |
  ## Mantener tu repositorio local sincronizado

  Como hemos comentado anteriormente, GitHub Desktop no necesita conexión a internet, lo que significa que no se comunica con repositorios remotos a no ser que se le indique expresamente que lo haga.

  Cuando haces merge de tu Pull Request en GitHub.com, los cambios que hiciste localmente se combinan con el branch `master` en el repositorio _remoto_ en GitHub.

   Sin embargo, no verás estos cambios reflejados automáticamente en tu copia local del repositorio hasta que lo actualices desde _origin_.

  Deberías obtener desde el origen (`Fetch Origin`) regularmente, y entonces hacer `pull` o `push` según sea necesario para asegurarte de que siempre estás trabajando con las copias más recientes de los archivos de tu repositorio.

---
