---
layout: workbook
title: Libro de trabajo de Fundamentos de GitHub
description: Este libro de trabajo para estudiantes y maestros será tu compañero para la clase de Fundamentos de GitHub impartida por el equipo de entrenamiento de GitHub y otros grupos educacionales. En este curso aprenderás habilidades básicas de colaboración a través del uso productivo de Git y GitHub en tu trabajo de código abierto y en tus asignaciones diarias de trabajo.


---

## Conceptos de Control de Versiones

### Resumen
* Git, el rastreador de información
* GitHub, la plataforma de colaboración
* Control de versiones distribuido
* [Una breve historia de Git](http://git-scm.com/book/en/Getting-Started-A-Short-History-of-Git)
* [La página principal de Git](http://git-scm.com)

### Detalles
__Git es un sistema de código abierto y distribuido__ de control de versiones inventado por Linus Torvalds en 2005. Se utiliza para versionar el kernel de Linux y ha demostrado ser, por algunas investigaciones, el sistema de control de versiones moderno más popular.

Git es el sistema de código abierto de comandos de línea que forma parte de los flujos de trabajo que cubriremos en este curso. Se le ha llamado el sucesor de "CVS" y "Subversion" por muchos usuarios, y mantiene cierta similitud con el comportamiento de estas herramientas históricas de control de versiones de código abierto.

Mantener una versión actual de Git es importante. Aun cuando escucharás correctamente que Git es generosamente compatible con versiones anteriores, las últimas versiones ofrecen mejoras en los mensajes de error, afinamientos en el rendimiento y características de usabilidad que hacen que usar Git sea ahora más rápido y agradable.

Verificar que Git está instalado y funcionando correctamente se puede hacer solicitando a Git que muestre su versión actual empleando este comando:

``` shell
$ git --version

git version 1.8.2
```

## Instaladores de GitHub
* [Instalador de GitHub para Windows](http://windows.github.com)
* [Instalador de GitHub para Mac](http://mac.github.com)
* [Libro Pro Git: Instalando Git](http://git-scm.com/book/en/Getting-Started-Installing-Git)
* **Windows**: El instalador de GitHub para Windows puede encontrarse en http://windows.github.com.
* **Mac**: El instalador de GitHub para Mac puede encontrarse en http://mac.github.com.
* **Linux**: El código fuente de Git y un listado de administradores de paquetes puede encontrarse en http://git-scm.com/download/linux.

### Detalles

La versión de línea de comandos de Git tiene una huella muy ligera. Para la mayoría de las plataformas, puedes simplemente copiar los binarios a una carpeta que esté dentro del $PATH de búsqueda ejecutable. Git está escrito principalmente en C, lo que significa que existe un solo instalador para cada sistema operativo.

## La plataforma GitHub

* [Lista de características de GitHub.com](https://github.com/features)
* [Cómo inscribirse en GitHub](https://www.youtube.com/watch?v=ezxRcdJ8glM&list=PLg7s6cbtAD17rhrz2BJWAPJMjR71B3IDx)

### Detalles

Las cuentas de GitHub son gratuitas. Regístrate por una en [github.com/join](https://github.com/join).

GitHub es la plataforma de hospedaje de repositorios, colaboración, despliegue y distribución para proyectos de software de código abierto y privado. Facilita la discusión de cambios en curso a través de los conceptos "Issues" y "Pull Requests" y proporciona una interfaz de usuario web a gran parte de Git. El flujo web hecho posible por GitHub trae consigo un rango más amplio de colaboradores, incluyendo especialistas de documentación, diseñadores e ingenieros de operaciones dentro del flujo de contribución al ciclo de vida de tu proyecto.

Las cuentas de GitHub son gratuitas para una cantidad ilimitada de repositorios públicos. Solo los repositorios privados tienen un costo para hospedarse en el servicio. Los repositorios privados son típicamente usados para consultoría de código cerrado del cliente o productos corporativos, mientras que los repositorios públicos son comúnmente utilizados para código abierto.

Regístrate por una cuenta gratuita de Github en https://github.com/join.

Git puede ser instalado como una Interfaz Gráfica de Usuario (GUI) de GitHub y línea de comandos unificada, o simplemente como una interfaz de línea de comandos independiente.

## Interactuando con repositorios

### Resumen
* [El flujo web de GitHub](https://guides.github.com/overviews/flow/)
* GUIs de GitHub para Mac, Windows
* Línea de Comandos

## Conociendo Git y GitHub

### Resumen
*Inicialización de Repositorios
  * Nuevo proyecto y nuevo repositorio
  * Repositorio basado en contenido existente
  * Por medio de la interfaz web
  * Interfaz web y cliente GUI

## Adquiriendo repositorios

### Resumen
* Clonar desde la web (botón de Clonar en Escritorio)
* Clonar a través de lista de repositorio personal en GitHub de Escritorio
* Explicación completa de "copy"

## Fundamentos de control de versiones

### Resumen
* Commits
  * Marcador de historial para archivo(s), cambio(s)
  * Registro de autor, tiempo y mensaje
* Ramas
  * Contenedor para commits agrupados
  * Medios simples para integrar cambios
  * Posibilidades de revisión de código más limpias
* GitHub, repositorios locales

## Interacción con repositorios de GitHub

### Resumen
* Commits (GitHub.com)
  * Pasos de Acción (Crear, Editar, Eliminar, Mover)
  * Mensajes de commit
  * Página de listado en GitHub
* Ramas (GitHub.com)
  * Menú de selección
  * Página de listado
  * Vista de comparación

## Interacción con repositorio local

### Resumen
* Cambios (con editor de texto)
* Comparación (diff mediante GHfD)
* Commits
* Ramas
* Historial
* Sincronización (GHfD)

* Commits (GitHub para Escritorio)
  * Administración de archivo en el sistema, revisión de resultados
  * Rastreo a nivel de línea
  * Agrupando archivos
  * Sincronizando commits locales
* Ramas (GitHub para Escritorio)
  * Crear
  * Modificar
  * Publicar

## Flujo de trabajo en GitHub

### Resumen
* Forking
    * [Guía para hacer Forking](https://guides.github.com/overviews/forking/)
    * Razones para hacer forks
    * Lo que fomenta
    * Cómo se aísla
    * Manteniéndose al día (¿demasiado avanzado?)
    * Original (base) y Fork (copia individual)
* El flujo de GitHub
    * Ramas
    * Commit
    * Comparar
    * Pull Request
    * Discusión
    * GIF Animado
    * Conversación de revisión de código línea por línea
    * Clonar localmente con GHfD (opcional)

## Visualizaciones en GitHub

### Resumen
* Comparando/Diff-ing
  * Código
  * Prosa
  * Imágenes
  * Mapas
  * Hojas de cálculo
  * Modelos 3D
* Vista de rama
* Posiciones de rama: Adelante/Detrás
* Gráfica de red
* Gráfica de actividad

## Wikis de GitHub

### Resumen
* Autoría de documentación rápida para repositorios
* Repositorio independiente
* Acceso fácil desde navegación de repositorio

## Páginas de GitHub

### Resumen
* Página web para tu repositorio
* Página web para tu cuenta
* Crear, editar, lanzar desde GitHub

## Características de GitHub

### Resumen
* Notificaciones
* Observando repositorios
* Destacando ("starring") repositorios
* Gist
* Markdown al estilo GitHub
  * Lo esencial
  * Emoji
  * Lista de verificación (Issues, Gists)

## Atajos de GitHub

### Resumen

* `/` barra de comandos
* `?` ayuda
* `t` búsqueda de archivos difusa

## Fundamentos de administración de proyectos

### Resumen
* "Issues" en GitHub
* Hitos
* Red de trabajo
* Pulso
* Etiquetas, Lanzamientos
* Colaboradores
* Organizaciones
* Equipos

## Características especiales de repositorio de GitHub
* Contributing.md
* License.md
  * Durante la creación de un repositorio
  * `+` un archivo con repositorio existente (lista desplegable especial)
* .gitignore
  * Durante la creación de un repositorio
  * `+` un archivo con repositorio existente (lista desplegable especial)
* Readme.md
  * En raíz
  * En subdirectorios
