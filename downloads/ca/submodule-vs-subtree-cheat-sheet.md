---
layout: cheat-sheet
redirect_to: false
title: Gestionant dependencies amb Submòduls i Subarbres
byline: Els submòduls i els subarbres són eines de Git que permeten incloure subprojectes com a subdirectori dins d'un projecte. La implementació de cadascun és molt diferent.
leadingpath: ../../
---

<div class="col-md-12">
<h1>Afegint un nou subprojecte</h1>
</div>

{% capture submodule %}

### Submòduls

```bash
git submodule add https://github.com/githubtraining/example-submodule
git commit -m "adding new submodule"
```

L'ordre `submodule add` afegeix un nou fitxer anomenat `.gitmodules` (si encara no existeix) juntament amb un subdirectori que conté els fitxers de `example-submodule`. Tots dos son afegits al vostre índex (àrea _staging_) i només es necessari fer un _commit_ amb ells. La història dels submòdul quedarà independent de la del seu projecte pare.

{% endcapture %}

{% capture subtree %}

### Subarbres

```bash
git subtree add --prefix=example-submodule https://github.com/githubtraining/example-submodule main --squash
```

L'ordre `subtree` afegeix un subdirectori que conté els fitxers de `example-submodule`. La pràctica més comuna es fer servir l'opció `--squash` per combinar la història del subprojecte en un únic _commit_, que després queda afegit a l'arbre existent del projecte pare. Podeu ometre l'opció  `--squash` per mantenir tota la història de la _branch_ indicada del subprojecte.

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Veient les diferències d'un subprojecte</h1>
</div>

{% capture submodule %}

### Submòdul

Per veure les differències d'un submòdul:

```bash
# show changes to the submodule commit
git diff example-submodule
# show oneline log of new commits in the submodule
git diff --submodule example-submodule
# show changes to the files in the submodule
git diff --submodule=diff
```

{% endcapture %}

{% capture subtree %}

### Subarbre

No hi ha una ordre especial necessària.

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Clonant un repositori amb un subprojecte</h1>
</div>

{% capture submodule %}

### Submòdul

Per clonar un repositori amb els seus submòduls:

```bash
git clone --recurse-submodules URL
```

Si heu oblidat d'indicar l'opció `--recurse-submodules`, podeu clonar i inicialitzar tots els submòduls de la seguent manera:

```bash
git submodule update --init --recursive
```

Afegir `--recursive` només es necessari si qualsevol submòdul te, a la seva vegada, submòduls.

{% endcapture %}

{% capture subtree %}

### Subarbre

No hi ha una ordre especial necessària.

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Recuperant les actualitzacions del superprojecte</h1>
</div>

{% capture submodule %}

### Submòdul

Per defecte, el repositori d'un submòdul es recupera, però no actualitzat quan s'executa l'ordre `git pull` en el superproject (projecte pare). Necesitu executar l'ordre `git submodule update`, o afegir l'opció `--recurse-submodules` a l'ordre `pull`:

```bash
git pull
git submodule update --init --recursive
# or, in one step (Git >= 2.14)
git pull --recurse-submodules
```

L'opció `--init` es necessària si el superprojecte afegeix nous submòduls, i l'opció `--recursive` es necessària si qualsevol submòdul te, a la seva vegada, submòduls.

Si algun cop el superprojecte canvia la URL d'un submòdul, necessitareu executar altre ordre independent:

```bash
# copy the new URL to your local config
git submodule sync --recursive
# update the submodule from the new URL
git submodule update --init --recursive
```

L'opció `--recursive` només serà necessària si qualsevol submòdul te, a la seva vegada, submòduls.

{% endcapture %}

{% capture subtree %}

### Subarbre

No cal cap ordre especial

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Canviant <i>branches</i></h1>
</div>

{% capture submodule %}

### Submòdul

Per defecte, l'arbre de treball d'un submòdul no s'actualitza per coincidir amb el _commit_ registrat al superprojecte quan es canvia de _branch_. Es necessari fer servir l'ordre `git submodule update`, o afegir l'opció `--recurse-submodules` a l'ordre `switch`:

```bash
git switch <branch>
git submodule update --recursive
# or, in one step (Git >= 2.13)
git switch --recurse-submodules <branch>
```

{% endcapture %}

{% capture subtree %}

### Subarbre

No cal cap ordre especial.

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Recuperant actualitzacions al subprojecte</h1>
</div>

{% capture submodule %}

### Submòdul

```bash
# Update the submodule repository
git submodule update --remote
# Record the changes in the superproject
git commit -am "Update submodule"
```

Si teniu més d'un submòdul, podeu afegir el camí (_path_) al submòdul al final de l'ordre `git submodule update --remote` per indicar que subprojecte cal actualitzar.

Per defecte, l'ordre `git submodule update --remote` actualitzarà el submòdul al darrer _commit_ de la _branch_ `main` del submòdul remot.

Podeu canviar la _branch_ per defecte per futures crides amb la seguent ordre:

```bash
# Git >= 2.22
git submodule set-branch other-branch
# or
git config -f .gitmodules submodule.example-submodule.branch other-branch
```

{% endcapture %}

{% capture subtree %}

### Subarbre

```bash
git subtree pull --prefix=example-submodule https://github.com/githubtraining/example-submodule main --squash
```

Podeu escurçar l'ordre afegint la URL del subarbre com un remot:

```bash
git remote add sub-remote https://github.com/githubtraining/example-submodule.git
```

Podeu afegir o recuperar (`add` o `pull`) actualitzacions d'altres referències substituint `main` per la referència desitjada (e.g. `stable`, `v1.0`).

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Fent canvis a un subprojecte</h1>

A molts casos, es considera una bona pràctica fer els canvis a un clon separat del repositori del subprojecte i obtindre (_pull_) els canvis del projecte pare. Quan això no sigui pràctic, seguiu les seguents pases:
</div>

{% capture submodule %}

### Submòdul

Accés al directori del submòdul i creeu una _branch_:

```bash
cd example-submodule
git switch -c branch-name main
```

Els canvis requereixen dos _commits_, un al repositori del subprojecte i altre al respositori pare.
No oblideu enviar les actualitzacions (_push_) tan del submòdul com del superprojecte!

{% endcapture %}

{% capture subtree %}

### Subarbre

No cal cap ordre especial, els canvis seràn enviats a la _branch_ del projecte pare.

Es possible crear _commits_ combinant (_barrejant_) canvis del subprojecte i del projecte pare, però generalment està desaconsejat.
{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Enviar canvis al respositori del subprojecte</h1>
</div>

{% capture submodule %}

### Submòdul

Mentre al directory del submòdul:

```bash
git push
```

O mentre al directori pare:

```bash
git push --recurse-submodules=on-demand
```

{% endcapture %}

{% capture subtree %}

### Subarbre

```bash
    git subtree push --prefix=example-submodule https://github.com/githubtraining/example-submodule main
```

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Configuracions útils per submòduls</h1>

{% capture configs %}
Mostrar sempre les traces del submòdul quan es consultin les diferències:

```bash
git config --global diff.submodule log
```

Mostrar un resum curt dels canvis d'un submòdul al missatge de resposta de l'ordre `git status`:

```bash
git config --global status.submoduleSummary true
```

Fer que al executar l'ordre `push`, per defecte tingui l'opció `--recurse-submodules=on-demand`:

```bash
git config --global push.recurseSubmodules on-demand
```

Fer que totes les ordres (menys `clone`), per defecte tinguin l'opció `--recurse-submodules` si donen suport a aquesta opció (això funciona per l'ordre `git pull` des de la versió de Git 2.15):

```bash
git config --global submodule.recurse true
```

{% endcapture %}

{{ configs | markdownify }}
</div>
