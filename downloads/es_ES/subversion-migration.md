---
layout: cheat-sheet
redirect_to: false
title: Migración de Subversion (SVN) a Git
byline: Al migrar de Subversion a Git, hay un vocabulario y un conjunto de comandos por aprender, además de las nuevas capacidades que solo ofrece Git. Esta hoja de trucos y comandos tiene como objetivo ayudar en la transición entre la tecnología clásica de Subversion y el uso moderno de Git con la plataforma de colaboración GitHub.
leadingpath: ../../
---

{% capture migration %}
## Migrando


### Importador de GitHub

Para proyectos con acceso a Internet, GitHub.com proporciona un Importador para la migración automática y la creación de repositorios desde Subversion, Team Foundation Server, Mercurial o proyectos controlados de versión Git alojados alternativamente.

El proceso es simple, solo necesitas iniciar sesión en tu cuenta de GitHub, si aún no lo has hecho, ingresar la URL de control de versiones de tu proyecto existente en el campo del repositorio e iniciar la conversión.

Dependiendo del sistema de control de versiones detectado, el Importador puede solicitar información adicional para la migración. Esto incluye un archivo de mapeo para asociar los nombres de usuario de Subversion con los campos de Git.

Lea más sobre cómo importar su proyecto a GitHub consultando la [documentación del Importador de GitHub] (https://docs.github.com/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer).

### Utilidad SVN2Git

Cuando se tienen limitaciones de acceso o los repositorios de Subversion no son públicos es necesario trasladarlos a Git, la utilidad SVN2Git es la utilidad de línea de comandos de elección y proporciona control a través de cada paso del proceso.

Subversion presenta claras diferencias en la estructura de un repositorio que la de Git. SVN2Git proporciona la flexibilidad y configuración para diseños de Subversion tradicionales y personalizados. Esto asegura que el repositorio de Git resultante se alinea con las mejores prácticas estándar para commits, ramas y etiquetas para todo el historial del proyecto.

Las prinipales características de SVN2Git incluyen:

- Conversión de todas las convenciones de SVN a la estructura tradicional de Git
- Proporcionar a los usuarios de SVN un campo para nombre y datos de correo electrónico en los commits en Git
- Permitir patrones de exclusión para contenido preciso del repositorio de Git

Obtenga más información sobre SVN2Git en la página oficial del proyecto:

[https://github.com/nirvdrum/svn2git](https://github.com/nirvdrum/svn2git)
{% endcapture %}

<div class="col-md-6 col-12">
{{ migration | markdownify }}
</div>

{% capture bridging %}
## Transicionando

### Aprovechando la compatibilidad de Git con SVN

A menudo, durante una transición a Git, la infraestructura de Subversion permanece en su lugar mientras los usuarios se familiarizan con las interacciones del repositorio local de Git, los flujos de trabajo locales y las aplicaciones de escritorio.

El comando `git svn` permite a los usuarios sincronizar con un repositorio centralizado de Subversion mientras se aprovechan todos los beneficios que la línea de comandos Git local y los clientes gráficos tienen para ofrecer.

Para adquirir un repositorio de Subversion como un repositorio de Git local resultante, descargue el proyecto en su totalidad con este comando:

```
git svn clone [svn-repo-url] --stdlayout
```

Asegúrese de estar familiarizado con la estructura del repositorio de Subversion de destino y si sigue el diseño estándar o no. Para diseños de `trunk`,` branches` y `tags` no tradicionales, se deben especificar las siguientes opciónes durante el` svn clone`:

- `T [trunk]` para alternar la fuente principal
- `b [branches]` para alternar la locación de la rama
- `t [tags]` para alternar la locación de la estrutura de etiquetas

Una vez que se completa la operación de clonación, puede continuar con cualquier interacción de Git local en la línea de comandos o con clientes gráficos.

### Sincronizando con Subversion

La publicación del historial de Git local en un repositorio central de Subversion adquirido con git svn clone se realiza con un comando:

```
git svn dcommit
```

Si el historial del repositorio alojado de Subversion posee confirmaciones que aún no están en el repositorio local de Git, la operación `dcommit` será rechazada hasta que las confirmaciones se adquieran con este comando:

```
git svn rebase
```

Tenga en cuenta que esta acción reescribe su historial de Git local y sus identificadores de los commits serán diferentes.
{% endcapture %}

<div class="col-md-6 col-12">
{{ bridging | markdownify }}
</div>


## Resumen

Subversion y Git comparten vocabularios similares, pero lo común a menudo son los nombres de los comandos. El comportamiento y la funcionalidad son bastante distintos dadas las cualidades únicas que Git proporciona como un sistema de control de versiones distribuido en comparación con los aspectos centralizados de Subversion.


| commando SVN     | commando Git | comportamiento en Git                                                          |
| ---             | ---         | ---                                                                   |
| `status`        | `status`    | Informar el estado del árbol de trabajo                               |
| `add`           | `add`       | Requerido para agregar cada ruta antes de realizar un commit          |
| `commit`        | `commit`     | Almacenar los cambios deseados en el historial de revisión local     |
| `rm`, `delete`   | `rm`        | Preparar rutas para su eliminación en el próximo commmit             |
| `move`          | `mv`        | Prepara el contenido reubicado para el próximo commmit                |
| `checkout`      | `clone`     | Adquirir la historia completa de un proyecto localmente por primera vez |
|                 | `branch`    | Crear contexto local para commits                                     |
|                 | `merge`     | Unir historiales de ramas y cambios al árbol de trabajo               |
|                 | `log`       | Enumera el historial de versiones para la rama actual                 |
|                 | `push`      | Sube todos los commits de la rama local a GitHub                      |
|                 | `pull`      | Descargue e integre el historial del repositorio de GitHub            |
|                 | `fetch`     | Descargue el historial del repositorio de GitHub sin realizar ninguna otra acción |
