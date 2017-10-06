---
lang: es
ref: intro-to-github-11
layout: simple-class
help: https://github.com/githubschool/open-enrollment-classes-introduction-to-github/issues/new?title=I%20need%20help&body=Describe%20what%20you%20need%20help%20with%20here.&labels=Help%20Wanted
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Haz merge (combina) tu Pull Request
permalink: /intro-to-github/es/merge-pull-requests
next-page: /intro-to-github/es/celebrar
sidebar:
  nav: "intro-nav-es"
main-content:
  includes:
  - activity/intro-to-github-es/06-merge-un-pr.md
show-me-how:
tell-me-why: |
  ## Merge explicado

  Cuando haces merge (combinas) de tu branch, estás cogiendo el contenido e historia de la rama que creaste y añadiéndolo al contenido e historia del branch `master` o rama principal.

  ![Merge visual](../../images/merge-visual.jpg){: .align-center}

  ### Claves para hacer merge en equipos

  Muchos proyectos han establecido normas acerca de quién debería (o no debería) hacer merge de un pull request:

  - Algunos dicen que debería ser la persona que creó el pull request, porque serán quienes tengan que lidiar con cualquier problema que surga del merge.
  - Otros dicen que debería ser una única persona en cada proyecto para garantizar la consistencia.
  - Y otros dicen que debería ser cualquiera menos la persona que creó el pull request.

  Ésta es una discusión que deberías tener con los otros miembros de tu equipo.

  ### Herramientas para merges más seguros

  GitHub también dispone de herramientas que pueden ayudarte a garantizar que el código que combinas es seguro. Por ejemplo, este repositorio utiliza integración continua para validar la sintaxis en tu archivo y utliliza branches protegidos para evitar que hagas merge del branch si tu archivo contiene errores. ¡Emplearemos más tiempo en ver estas características en otra clase!

  ### Utilizando la revisión de código

  GitHub también incluye una característica de revisión de código que permite a otros indicar que han revisado el código y que o bien lo aprueban (**Approve**) o que solicitan cambios (**Request changes**).

  ## Hacer merge de tu pull request

  Cuando se han atajado todos los comentarios y todas las comprobaciones son correctas, estás listo para hacer merge de tu pull request. Este video te mostrará lo fácil que es:

  <iframe width="560" height="315" src="https://www.youtube.com/embed/3MUmLHHxSqE" frameborder="0" allowfullscreen></iframe>

---
