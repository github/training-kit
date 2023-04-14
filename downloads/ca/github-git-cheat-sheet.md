---
layout: cheat-sheet
redirect_to: false
title: Full de referència per GitHub Git
byline: Git és el sistema de control de versions distribuït de codi obert que facilita les activitats de GitHub al vostre ordinador portàtil o d'escriptori. Aquest cheat-sheet resumeix les instruccions de la línia de comandes de Git d'ús habitual per en una referència ràpida.
leadingpath: ../../
---

{% capture colOne %}
## Instal·lació

GitHub te programari client per escritori amb interficie gràfica d'usuari per les accions més habituals que es realitzen en un repositori així com permet accions per línia de comandes per escenaris més avançats o complexos.

Per facilitar les explicacions es faràn servir els anglicismes pe alguns termes com ara:

- `commit`: comprometres
- `branch`: branca
- `merge`: fusió
- `pull request`: petició d'extracció (del contingut de la _branch_ que aporta els canvis)

### GitHub Desktop

[desktop.github.com](https://desktop.github.com)

### GitHub per Windows

[windows.github.com](https://windows.github.com)

### GitHub per Mac

[mac.github.com](https://mac.github.com)

### GitHub per Linux i UNIX

[Git SCM](https://git-scm.com/download/linux)

### Git per totes les plataformes

[git-scm.com](https://git-scm.com)

## Configurar les eines

### Ordres

Configuració de la informació d'usuari que cal aplicar a tots els respositoris locals:

- Establir el nom que s'associarà als vostres _commits_:

```$ git config --global user.name "[name]"```

- Establir l'adreça de correu electrònic que s'associarà als vostres _commits_:

```$ git config --global user.email "[email address]"```

- Acolorir les ordres a la linia de comandament per ajudar a la seva visualització:

```$ git config --global color.ui auto```

## Branques

Les _branches_ son una part molt important quan es treballa amb Git. Qualsevol dels _commits_ que realitzeu es faran a la _branch_ que estigui actualment activa ("_checked out_"). Podeu fer servir l'ordre `git status` per comprovar-ho entre d'altres informacions.

### Ordres més usuals

Mostrar la llista de _branches_ indicant l'activa amb un asterisc com a prefix:

```$ git branch```

Crear una nova _branch_:

```$ git branch [nom-de-la-branch]```

Canviar cap en una altra _branch_ que passarà a ser l'activa. Actualitzarà el contingut del directori recursivament:

```$ git switch -c [nom-de-la-branch]```

Fusionar la història d'una _branch_ sobre la que hi es activa. Això es el que es fa usualment a les _pull requests_, però es una operació de Git important:

```$ git merge [nom-de-la-branch]```

Esborrar la _branch_ indicada:

```$ git branch -d [nom-de-la-branch]```

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>

{% capture colTwo %}

## Crear repositoris

Es pot crear un repositori nou localment o es pot clonar un repositori existent. Quan un repositori s'ha inicialitzat localment, després l'heu d'enviar a GitHub.

```$ git init```

Aquesta ordre converteix un directori existent en un nou repositori Git, concretament el directori des d'on s'està executant l'ordre. Després d'utilitzar l'ordre, cal enllaçar el repositori local en un repositori GitHub (preferiblement) buit mitjançant la següent ordre:

```$ git remote add origin [url]```

Així s'especifica el repositori remot del vostre repositori local. L'URL es l'adreça del repositori a GitHub.

Per clonar (descarregar localment) un repositori que ja existeix a GitHub, inclosos tots els fitxers, _branches_ i _commits_; executeu la seguent ordre:

```$ git clone [url]```

## El fitxer .gitignore

De vegades pot ser una bona idea, o necesari, excloure fitxers del seguiment de control de Git. Això es fa normalment mitjançant l'enumeració del continguts a excloure en un fitxer especial anomenat `.gitignore`. Podeu trobar plantilles útils per als fitxers `.gitignore` a [github.com/github/gitignore](https://github.com/github/gitignore).

## Sincronització de canvis

Com fer diferents tipus de sincronització enter el vostre repositori local amb el remot a GitHub:

- Descarregar tota la història del repositori remot amb el seguiment de les _branches_:

```$ git fetch```

- Combinar les _branches_ de les que es fa seguiment al repositori remot a la _branch_ local activa:

```$ git merge```

- Enviar tots els _commits_ de la _branch_ activa local a GitHub (remot):

```$ git push```

- Actualitzar la _branch_ activa local amb tots els nous _commits_ que pugui haver a la _branch_ remota corresponent a GitHub. L'ordre `git pull` es la combinació de les ordres `git fetch` i `git merge`.

```$ git pull```

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>

{% capture colThree %}

## Veure i fer canvis

Hi han diverses maneres de inspeccionar la evolució dels fitxers d'un projecte:

- Veure la llista històrica de canvis de la _branch_ activa:

```$ git log```

- Veure la llista històrica de canvis **d'un fitxer concret**, encara que hagi sigut renombrat:

```$ git log --follow [file]```

- Mostrar les diferències entre dues _branches_:

```$ git diff [first-branch]...[second-branch]```

- Veure les metadades i contingut dels canvis **d'un _commit_ concret**:

```$ git show [commit]```

- Fer una "_fotografia_" d'un fitxer per preparar-ho per enviar com a part d'un _commit_:

```$ git add [file]```

- Enregistrar un _commit_ amb les "_fotografies_" dels fitxers que estiguin incloses:

```$ git commit -m "[descriptive message]"```

## Desfer _commits_

Com eliminar errades i elaborar la història de canvis.

- Desfer tots els _commits_ posteriors en un _commit_ concret, mantenint els canvis localment:

```$ git reset [commit]```

- Descartar tota la història i canvis fins en un _commit_ concret:

```$ git reset --hard [commit]```

> PRECAUCIÓ! Canviar la història pot provocar efectes col·laterals desagradables. Si necessiteu canviar _commits_ que existeixen a GitHub (remot), feu-lo amb precaució. Si necessiteu ajuda aprope-vos a [github.community](https://github.community) o contacteu amb suport.

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

## Glossary

- **git**: un sistema de control de versions distribuït de codi obert
- **GitHub**: una plataforma per allotjar i col·laborar en repositoris Git
- **commit**: un objecte Git, una instantània de tot el vostre dipòsit comprimit en un SHA
- **branch**: un punter mòbil lleuger en un _commit_
- **clone**: una versió local d'un repositori, que inclou tots els _commits_ i _branches_
- **remote**: un repositori comú a GitHub que tots els membres de l'equip utilitzen per intercanviar els seus canvis
- **fork**: una còpia d'un repositori a GitHub propietat d'un usuari diferent del original
- **pull request**: un lloc per comparar i discutir les diferències introduïdes en una _branch_ amb ressenyes, comentaris, proves integrades i molt més
- **HEAD**: representa el vostre directori de treball actual, el punter HEAD es pot moure a diferents _branches_, etiquetes o _commits_ quan utilitzeu `git switch`

{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
<div class="clearfix"></div>
