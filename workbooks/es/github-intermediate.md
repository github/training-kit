---
layout: workbook
title: Libro de trabajo intermedio de GitHub
description: Este libro de trabajo para estudiantes y maestro será tu compañía para la clase de GitHub intermedia guiada por el equipo de entrenamiento de GitHub y otros grupos educacionales. En este curso, aprenderás extensivamente a cómo tomar ventaja de Git y GitHub desde la línea de comandos.
---


## Configuración básica de Git

### Resumen
* Scopes
* Excludesfile

#### Detalles

La configuración de Git es almacenada en uno de tres archivos de texto plano y en uno de tres niveles y es fácilmente editable con un editor de texto y portable a otras máquinas mediante la copia de los archivos de configuración.

Nivel | Precedencia | Ubicación
--- | --- | ---
`system` | la más baja | junto al archivo binario de `git`
`global` | media | en tu directorio de usuario como `.gitconfig`
`local` | la más alta | en el archivo `.git/config` de tu proyecto 

```
$ git config --list
$ git config user.name
$ git config user.email
$ git config --global core.autocrlf <valor>
```


## Configurando el usuario de Git
### Resumen
* [Libro _Pro Git_: Configurar Git por primera vez](http://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup)
* Nombre de usuario
* Dirección de correo
* Sin contraseña

#### Detalles

Tu nombre y dirección de correo son configuradas de manera local en Git y son anexadas a cada commit. Configuralos de manera correcta para recibir atribución por tu trabajo.

Para inspeccionar tu configuración actual, consulta individualmente dos valores de configuración:

``` shell
$ git config user.name
Nombre Apellido

$ git config user.email
tucuenta@ejemplo.com
```
Para hacer que los mismos valores se apliquen a todos tus repositorios:

``` shell
$ git config --global user.name "tu nombre"
$ git config --global user.email "tu@correo"
```

El manejo de fin de línea y agregar colores a la terminal son dos de las configuraciones más comunes que los usuario agregan la primera vez que usan Git
</span>
línea
``` shell
# Configurar fin de línea a LF para Mac y Linux
$ git config --global core.autocrlf input

# Configurar fin de línea a CRLF para Windows
$ git config --global core.autocrlf auto
```

Revisar todas las configuraciones

``` shell
$ git config --list
```

## Iniciar con la línea de comandos

### Resumen
* Nuevo proyecto
* Proyecto existente
* Clonar

#### Detalles
```
# Crear un nuevo directorio para un proyecto
$ git init [nombredelproyecto]
$ cd [nombredelproyecto]

# o inicializar un directorio existente
$ cd [nombredeproyectoexistente]
$ git init

# o clonar un repositorio existente
$ git clone [url] [nombre-opcional]
```

## Las entrañas de un repositorio

### Resumen
* Explorando los fundamentos
* La carpeta `.git`
* Todo el historial almacenado localmente
* Naturaleza distribuida, cambios simultáneos
* No bloqueante
* Optimizado para texto y archivos pequeños
* Símbolo `HEAD`
* Área de staging (archivo índice)
* `refs/heads/`
* Eficiencia de almacenamiento (zlib)

## Commits en la línea de comandos

### Resumen
* Pensamiento en tres etapas
* Editar, seleccionar, guardar

#### Detalles
```
$ git status
$ git add <nombredelarchivo>
$ git commit
$ git commit -m"<mensaje>"
```

## Comparando cambios

### Resumen
* Commando diff básico
* Comparar sólo un subconjunto de rutas
* Comparar contra versiones específicas
* Depender del estado de un archivo
* Útiles opciones de modificación

#### Detalles
```
$ git diff
$ git diff --staged
$ git diff HEAD
$ git diff [archivo]
$ git diff --stat -w --color-words
```

## Revisando el historial

### Resumen
* Revisión básica
* Refinando los resultados
* Filtrando por mensaje
* Filtrando por parche

#### Detalles
```
$ git log
$ git log -<n>
$ git log --stat
$ git log --patch
$ git log --all
$ git log --author=<autor>
$ git log --committer=<realizadordelcommit>
$ git log --format=full
$ git log --format=fuller
$ git log --format=raw
$ git log --diff-filter=[A|M|D]
$ git log -S<CadenaEnParcje>
$ git log -G="<expresionregular>"
$ git log --word-diff --patch
$ git log --graph
$ git log --decorate
```

## Ramas en la línea de comandos

### Resumen
* Crear una funcionalidad o un prototipo
* Mostrar ramas locales
* Crear
* Borrar
* Renombrado

#### Detalles
```
$ git branch
$ git branch <nombre> <referencia>
$ git branch -d <nombre>
$ git branch -m <vieja> <nueva>
$ git branch --merged
$ git branch --no-merged
```

## Cambiar entre ramas y descartar cambios

### Resumen
* `Checkout` como un comando multiuso
* Cambiar entre ramas
* Explorar el historial (`HEAD` separado)
* Descartar rutas de trabajo sucias

#### Detalles
```
# Seleccionar (cambiar a ) una rama existente
$ git checkout [rama]

# Seleccionar un archivo desde HEAD
$ git checkout -- [archivo]

# Seleccionar un HEAD separado (un punto anónimo en el tiempo)
$ git checkout [referencia]
```

## Remotos

### Resumen
* Explicar la convención de `origin`
* Aliases, marcadores para URL de un servidor
* Remover conexiones

#### Detalles
```
$ git clone -o github <URL>
$ git remote add <nombre> <ruta>
$ git ls-remote <nombre>
$ git remote rm <nombre>
```

## Publicar los cambios

### Resumen
* Publicar historial de commits
* Mostrar ramas remotas
* Mostrar todas las ramas

#### Detalles
```
$ git push -u origin master
$ git config --global push.default matching
$ git config --global push.default simple
$ git branch -r
$ git branch -a
```

## Mezclar en la línea de comandos

### Resumen
* Desplegarse entre las ramas
* Resolver conflictos en la mezcla (editar de manera manual)
* Resolver archivos con atajos
* Actualizar una rama de funcionalidad desde una rama base
* Integrar de manera separada el historial de un repositorio

#### Detalles
```
$ git pull origin
$ git pull
$ git pull --rebase

$ git merge
$ git merge -m<mensaje>

$ git checkout --ours [archivo]
$ git checkout --theirs [archivo]

$ git add [archivo]
$ git commit

$ git merge [base]

$ git pull [repositorio] [rama]
```

## Traer cambios

### Resumen
* Comparar sin mezclar
* Mezclar selectivamente
* Traer desde otros repositorios

#### Detalles
```
$ git fetch [remoto]
$ git branch -a

$ git fetch [repositorio] [rama]
$ git show FETCH_HEAD
```

## Remover archivos

### Resumen
* Observaciones de Git sobre eliminación de archivos
* Remover archivos
* Dejar de rastrear archivos

#### Detalles
```shell
$ git add -u .
$ git rm <archivo>
$ git rm --cached -- <nombredelarchivo>
```

## Mover archivos

### Resumen
* Mover genera un nuevo árbol, no un nuevo blob
* Indice de similitudes usado al hacer un commit

#### Detalles
```shell
$ mv <archivo> <nuevonombredearchivo>
$ git add -A .

# o

$ git mv <archivo> <archivo>
$ git log --stat -M
$ git log --follow <archivo>
```

## Deshacer commits con `revert` y `reset`

### Resumen
* Generar un commit para restaurar un conjunto de parches pasado
* Limpiar el índice y el directorio de trabajo
* Restaurar el índice, actualizar el directorio de trabajo
* Restaurar únicamente el índice
* Por referencia del commit, nombre de la rama, remoto
* ¿Por qué las diferentes opciones? (más a fondo)

#### Detalles
```shell
$ git revert <referencia>

$ git reset --hard
$ git reset --mixed
$ git reset --soft
```

## Ignorar archivos temporales

### Resumen
* Crear un archivo `.gitignore`
* Agregar patrones al archivo para ignorar
* Los archivos `.gitignore` también pueden estar en _subdirectorios_
* `!` es la negación de ignorar un patrón
* Ignorar de manera global con `core.excludesfile`

#### Detalles
```
$ touch .gitignore
$ echo '*.log' >> .gitignore
$ git add .gitignore
$ git commit -m "Ignorar archivos .log"
```

Configuración de archivo ignore global:

```
$ git config --global core.excludesfile <nombreyrutadelarchivo>
```

## Guardar cambios en progreso

### Resumen
* Guardar de manera temporal cambios ya rastreados
* Restaurar usando pop
* Descartar archivos no rastreados

#### Detalles
```
$ git stash
$ git pop
$ git stash --include-untracked
```

## Recuperar casi todo con `reflog`

### Resumen
* Seguimiento de las acciones de Git en el "historial"
* Explorar las últimas acciones

#### Detalles
```
$ git reflog
$ git reflog --all
$ git config --global alias.undo "reset HEAD@{1}"
$ git checkout HEAD@{1}

$ git reset --hard HEAD@{1}

$ git branch [name] HEAD@{1}
```

## Pull requests

### Summary
* Empujar una rama a GitHub
* Usar la interfaz de GitHub
* Obtener localmente

```
$ git push -u [remoto] [rama]

$ git fetch [remoto] refs/pull/[numero-de-incidencia]/head
```

## Incidencias de GitHub

### Resumen
* Casos de uso básicos
* Referencias cruzadas con `#` y `nombredeusuario/nombredelrepo#INCIDENCIA`

## Alias de atajos de comandos

### Resumen
* Más rápido de escribir
* Acceso más rápido a comandos complejos
* Compatible con completado de zsh

#### Detalles
```
$ git config --global alias.lol "log --graph --all --oneline --decorate"
$ git config --global alias.l "log --oneline --stat"
$ git config alias.s "status -s"
$ git s
```
