---
layout: cheat-sheet
redirect_to: false
title: Manejo de dependencias con Submódulos y Subárboles
byline: Los Submódulos y Subárboles son herramientas de Git que permiten incluir subproyectos como un subdirectorio dentro de un proyecto. La implementación de cada uno es muy diferente.
leadingpath: ../../
---

<div class="col-md-12">
<h1>Agregar un nuevo Subproyecto</h1>
</div>

{% capture submodule %}

### Submódulo

    git submodule add https://github.com/githubtraining/submodulo-ejemplo

    git commit -m "agregando un nuevo submodulo"

El comando `submodule add` agrega un nuevo archivo llamado `.gitmodules` junto con un subdirectorio que contiene los archivos de `submodulo-ejemplo`. Ambos se agregan a tu index (staging area) y solo necesitas agregarlos a tu commit. El historial del submódulo permanecerá independiente del proyecto principal.

{% endcapture %}

{% capture subtree %}

### Subárbol

    git subtree add --prefix=submodulo-ejemplo https://github.com/githubtraining/submodulo-ejemplo main --squash

El comando `subtree add` agrega un subdirectorio que contiene los archivos de `submodulo-ejemplo`. La práctica más común es utilizar la opción `--squash` para combinar el historial del subproyecto en un único commit, que luego se inserta en el árbol existente del proyecto principal. Se puede omitir la opción `--squash` para mantener todo el historial de la rama seleccionada del subproyecto.

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Ver las diferencias de un Subproyecto</h1>
</div>

{% capture submodule %}

### Submódulo

Para ver las diferencias (`diff`) de un submódulo:

```bash
# mostrar cambios al commit del submódulo
git diff submodulo-ejemplo
# mostrar una línea de los registros de los nuevos commits en el submódulo
git diff --submodule submodulo-ejemplo
# mostrar cambios de los archivos en el submódulo
git diff --submodule=diff
```

{% endcapture %}

{% capture subtree %}

### Subárbol

No se requiere ningún comando especial

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Clonar un repositorio con Subproyecto</h1>
</div>

{% capture submodule %}

### Submódulo

Para clonar un repositorio junto con su submódulo:

    git clone --recurse-submodules URL

Si no se utiliza `--recurse-submodules` se puede clonar e inicializar todos los submódulos:

    git submodule update --init --recursive

Utilizar `--recursive` solo es necesario si algún submódulo tiene submódulos.

{% endcapture %}

{% capture subtree %}

### Subárbol

No se requiere ningún comando especial

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Descargar actualizaciones de Superproyectos</h1>
</div>

{% capture submodule %}

### Submódulo

De forma predeterminada, el repositorio del submódulo se recupera, pero no se actualiza cuando ejecuta `git pull` en el superproyecto.
Se necesita usar `git submodule update`, o agregar `--recurse-submodules` a `pull`:

```bash
git pull
git submodule update --init --recursive
# o, en un comando (Git >= 2.14)
git pull --recurse-submodules
```

`--init` es necesario si el superproyecto agregó nuevos submódulos, y `--recursive` es necesario si algún submódulo tiene submódulos.

Si alguna vez el superproyecto cambia la URL del submódulo, se requiere un comando por separado:

```bash
# copia la nueva URL a to configuración local
git submodule sync --recursive
# actualiza el submodulo desde la nueva URL
git submodule update --init --recursive
```

`--recursive` solo es necesario si algún submódulo tiene submódulos.

{% endcapture %}

{% capture subtree %}

### Subárbol

No se requiere ningún comando especial

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Cambiar de rama</h1>
</div>

{% capture submodule %}

### Submódulo

De forma predeterminada, el árbol de trabajo del submódulo no se actualiza para que coincida con el commit registrado en el superproyecto al cambiar de rama.
Necesita usar `git submodule update`, o agregar`--recurse-submodules` a `checkout`:

```bash
git checkout <branch>
git submodule update --recursive
# o, en un comando (Git >= 2.13)
git checkout --recurse-submodules <branch>
```

{% endcapture %}

{% capture subtree %}

### Subárbol

No se requiere ningún comando especial

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Descargar actualizaciones de Subproyectos</h1>
</div>

{% capture submodule %}

### Submódulo

```bash
# Actualiza el repositorio de submódulos
git submodule update --remote
# Registra los cambios en el superproyecto
git commit -am "Update submodule"
```

Si tiene más de un submódulo, puede agregar la ruta al submódulo al final del comando `git submodule update --remote` para especificar qué subproyecto actualizar.

Por defecto, `git submodule update --remote` actualizará el submódulo al último commit en la rama`main` del submódulo remoto.

Se puede cambiar la rama predeterminada para futuras llamadas con:

```bash
# Git >= 2.22
git submodule set-branch other-branch
# o
git config -f .gitmodules submodule.example-submodule.branch otra-rama
```

{% endcapture %}

{% capture subtree %}

### Subárbol

    git subtree pull --prefix=submodulo-ejemplo https://github.com/githubtraining/submodulo-ejemplo main --squash

Se puede acortar el comando agregando la URL del subárbol como remoto:

    git remote add sub-remote https://github.com/githubtraining/submodulo-ejemplo.git

Se pueden utilizar los commandos add/pull de otras referencias reemplazando `main` con la referencia deseada (e.g. `stable`, `v1.0`).

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Realizar cambios en un Subproyecto</h1>
En la mayoría de los casos, se considera una buena práctica realizar cambios en una copia (clon) separada del repositorio de subproyectos e incorporarlos al proyecto principal.
Cuando esto no sea práctico, siga estas instrucciones:
</div>

{% capture submodule %}

### Submódulo

Acceda al directorio del submódulo y cree una rama:

    cd example-submodule
    git checkout -b nombre-rama main

Los cambios requieren dos commits, una en el repositorio del subproyecto y otra en el repositorio principal.
¡No olvides agregar tanto el submódulo como el superproyecto!

{% endcapture %}

{% capture subtree %}

### Subárbol

No se requiere ningún comando especial, los cambios se agregaran en la rama del proyecto principal.

Es posible crear commits mezclando cambios en el subproyecto y el proyecto principal, pero esto generalmente no se recomienda.
{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Subir cambios al repositorio del Subproyecto</h1>
</div>

{% capture submodule %}

### Submódulo

Mientras está en el directorio del submódulo:

    git push

O mientras está en el directorio principal:

    git push --recurse-submodules=on-demand

{% endcapture %}

{% capture subtree %}

### Subárbol

    git subtree push --prefix=submodulo-ejemplo https://github.com/githubtraining/submodulo-ejemplo main
{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Configuraciones útiles para submódulos</h1>

{% capture configs %}
Siempre muestre el registro del submódulo cuando vea diferencias:

    git config --global diff.submodule log

Muestre un breve resumen de los cambios del submódulo en su mensaje `git status`:

    git config --global status.submoduleSummary true

Haga que `push` sea predeterminado en `--recurse-submodules = on-demand`:

    git config --global push.recurseSubmodules on-demand

Haga que todos los comandos (excepto `clone`) estén predeterminados en `--recurse-submodules` si admiten la bandera (esto funciona para `git pull` desde Git 2.15):

    git config --global submodule.recurse true

{% endcapture %}

{{ configs | markdownify }}
</div>
