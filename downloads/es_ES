# Hoja de referencia para GitHub Git

Git es el sistema de control de versiones distribuido y de código abierto que facilita las actividades de GitHub en su computadora portátil o de escritorio. Esta hoja de referencia rápida resume las instrucciones de línea de comandos de Git más comunes.

## Instalar Git
GitHub ofrece herramientas gráficas para usuarios de ordenadores con interfaz gráfica, y una versión de línea de comandos para entornos avanzados.

### GitHub para Windows
http://windows.github.com

### GitHub para Mac
http://mac.github.com

Hay distribuciones de Git para sistemas Linux y POSIX en el sitio web oficial Git SCM.

### Git para toda plataforma
http://git-scm.com

## Configurar herramientas

```$ git config --global user.name "[name]"```

Establece el nombre anexado a tus transacciones de commit.

```$ git config --global user.email "[email address]"```

Establece el e-mail anexado a tus transacciones de commit.

## Crear repositorios

```$ git init [project-name]```

Crea un nuevo repositorio local con el nombre especificado.

```$ git clone [url]```

Descarga un proyecto y todo su historial de versiones de una URL existente.

## Efectuar cambios

```$ git status```

Enumera todas las modificaciones en el repositorio, incluyendo archivos modificados, añadidos o eliminados.

```$ git diff```

Muestra las diferencias que no se han enviado aún al área de staging.

```$ git add [file]```

Añade un archivo al área de staging.

```$ git diff --staged```

Muestra las diferencias entre el área de staging y la última versión del repositorio.

```$ git reset [file]```

Mueve el archivo fuera del área de staging, preservando su contenido.

```$ git commit -m"[descriptive message]"```

Registra los cambios en el archivo permanentemente en el historial de versiones.

## Cambios grupales

```$ git branch```

Enumera todas las ramas en el repositorio actual.

```$ git branch [branch-name]```

Crea una nueva rama.

```$ git checkout [branch-name]```

Cambia a la rama especificada y actualiza el directorio activo.

```$ git merge [branch-name]```

Combina el historial de la rama especificada con la rama actual.

```$ git branch -d [branch-name]```

Borra la rama especificada.

## Nombres del archivo de refactorización

```$ git rm [file]```

Borra el archivo del directorio activo y pone en el área de espera el archivo borrado.

```$ git rm --cached [file]```

Retira el archivo del control de versiones, preservando el archivo a nivel local.

```$ git mv [file-original] [file-renamed]```

Cambia el nombre del archivo y lo prepara para commit.

## Suprimir tracking
Un archivo de texto llamado `.gitignore` suprime la creación accidental de versiones de archivos y rutas que concuerdan con los patrones especificados. Un ejemplo del contenido de este fichero se incluye a continuación.

```
*.log
build/
temp-*
```

```$ git ls-files --other --ignored --exclude-standard```

Enumera todos los archivos ignorados en este proyecto.

## Guardar fragmentos

```$ git stash```

Almacena temporalmente todos los archivos que son gestionados por Git y que han sido modificados.

```$ git stash pop```

Restaura los cambios guardados más recientemente.

```$ git stash list```

Enumera todos los sets de cambios en el área de stash.

```$ git stash drop```

Elimina el set de cambios más reciente del área de stash.

## Repasar historial

```$ git log```

Enumera el histórico de versiones para la rama actual.

```$ git log --follow [file]```

Enumera el histórico de versiones para el archivo, incluyendo cambios de nombre.

```$ git diff [first-branch]...[second-branch]```

Muestra las diferencias de contenido entre dos ramas.

```$ git show [commit]```

Muestra metadatos y cambios de contenido del commit especificado.

## Rehacer commits

```$ git reset [commit]```

Deshace todos los commits después de `[commit]`, preservando los cambios localmente.

```$ git reset --hard [commit]```

Desecha todo el historial y regresa al commit especificado.

## Sincronizar cambios

```$ git fetch [bookmark]```

Descarga todo el historial del marcador del repositorio.

```$ git merge [bookmark]/[branch]```

Combina la rama del marcador con la rama local actual.

```$ git push [alias] [branch]```

Carga todos los commits de la rama local a GitHub.

```$ git pull```

Descarga el historial del marcador e incorpora los cambios que se hayan producido.

---

## GitHub Training

Obtenga más información sobre el uso de GitHub y Git. Envíe un e-mail al equipo de training o visite nuestro sitio web para informarse sobre los horarios de eventos y la disponibilidad de clases privadas.

* training@github.com
* training.github.com
