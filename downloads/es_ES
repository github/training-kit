# Hoja de referencia para GitHub Git

Git es el sistema de control de versiones distribuido, y de código bierto, que facilita las actividades de GitHub en su computadora portátil o de escritorio. Esta hoja de referencia rápida resume las instrucciones de línea de comandos de Git más comunes.

## Instalar Git
GitHub ofrece herramientas gráficas para usuarios the ordenadores con interfaz gráfica, y una versión de línea de comandos para entornos avanzados.

### GitHub para Windows
http://windows.github.com

### GitHub para Mac
http://mac.github.com

Hay distribuciones de Git para sistemas Linux y POSIX en el sitio web oficial Git SCM.

### Git para toda plataforma
http://git-scm.com

## Configurar herramientas
Configura la información del usuario para todos los respositorios locales

```$ git config --global user.name "[name]"```

Establece el nombre anexado a tus transacciones de commit


```$ git config --global user.email "[email address]"```

Establece el e-mail anexado a tus transacciones de commit


## Crear repositorios
Inicia un nuevo repositorio u obtiene uno de una URL existente


```$ git init [project-name]```

Crea un nuevo repositorio local con el nombre especificado


```$ git clone [url]```

Descarga un proyecto y todo su historial de versiones

## Efectuar cambios
Revisa las ediciones y elabora una transacción de commit


```$ git status```

Enumera todas las modificaciones en el repositorio. Incluyendo archivos modificados, añadidos o eliminados.


```$ git diff```

Muestra las diferencias que no se han enviado aún al área de staging.


```$ git add [file]```

Añade un archivo al área de staging.


```$ git diff --staged```

Muestra las diferencias entre el área de staging y la última versión del repositorio.


```$ git reset [file]```

Mueve el archivo fuera del área de staging, pero preserva su contenido


```$ git commit -m"[descriptive message]"```

Registra los cambios en el archivo permanentemente en el historial de versiones

## Cambios grupales
Nombra una serie de commits y combina esfuerzos ya culminados


```$ git branch```

Enumera todas las ramas en el repositorio actual


```$ git branch [branch-name]```

Crea una nueva rama


```$ git checkout [branch-name]```

Cambia a la rama especificada y actualiza el directorio activo


```$ git merge [branch-name]```

Combina el historial de la rama especificada con la rama actual


```$ git branch -d [branch-name]```

Borra la rama especificada


## Nombres del archivo de refactorización
Reubicay retira los archivos con versión


```$ git rm [file]```

Borra el archivo del directorio activo y pone en el área de espera el archivo borrado


```$ git rm --cached [file]```

Retira el archivo del control de versiones, pero preserva el archivo a nivel local


```$ git mv [file-original] [file-renamed]```

Cambia el nombre del archivo y lo prepara para commit

## Suprimir tracking
Excluye los archivos temporales y las rutas

```
*.log
build/
temp-*
```

Un archivo de texto llamado `.gitignore` suprime la creación accidental de versiones de archivos y rutas que concuerdan con los patrones especificados


```$ git ls-files --other --ignored --exclude-standard```

Enumera todos los archivos ignorados en este proyecto

## Guardar fragmentos
Almacena y restaura cambios incompletos


```$ git stash```

Almacena temporalmente todos los archivos tracked modificados


```$ git stash pop```

Restaura los archivos guardados más recientemente


```$ git stash list```

Enumera todos los sets de cambios en guardado rápido


```$ git stash drop```

Elimina el set de cambios en guardado rápido más reciente

## Repasar historial
Navega e inspecciona la evolución de los archivos de proyecto


```$ git log```

Enumera el historial de la versión para la rama actual


```$ git log --follow [file]```

Enumera el historial de versión para el archivo, incluidos los cambios de nombre


```$ git diff [first-branch]...[second-branch]```

Muestra las diferencias de contenido entre dos ramas


```$ git show [commit]```

Produce metadatos y cambios de contenido del commit especificado

## Rehacer commits
Borra errores y elabora historial de reemplazo


```$ git reset [commit]```

Deshace todos los commits después de `[commit]`, preservando los cambios localmente

```$ git reset --hard [commit]```

Desecha todo el historial y regresa al commit especificado

## Sincronizar cambios
Registrar un marcador de repositorio e intercambiar historial de versión


```$ git fetch [bookmark]```

Descarga todo el historial del marcador del repositorio

```$ git merge [bookmark]/[branch]```

Combina la rama del marcador con la rama local actual


```$ git push [alias] [branch]```

Carga todos los commits de la rama local al GitHub


```$ git pull```

Descarga el historial del marcador e incorpora cambios

---

## GitHub Training
Obtenga más información sobre el uso de GitHub y Git.Envíe un e-mail al Equipo de Capacitación o visite nuestro sitio web para informarse sobre los horarios de eventos y la disponibilidad de clases privadas.

* training@github.com
* training.github.com
