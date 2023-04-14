# Fonaments del repositori GitHub

Git és un sistema de control de versions distribuït d'codi obert, creat per interaccionar per l'intèrpret d'ordres de la línia de comandes. Aquesta guia proporciona la configuració i les comandes del dia a dia per utilitzar Git localment i connectar repositoris a GitHub per un flux de treball col·laboratiu complet.

Per facilitar les explicacions es faràn servir els anglicismes pe alguns termes com ara:

- `commit`: comprometres
- `branch`: branca
- `merge`: fusió
- `pull request`: petició d'extracció (del contingut de la _branch_ que aporta els canvis)

## Comprendre termes i descripcions de processos de GitHub i Git

Amb un llenguatge propi, aquesta guia ràpida dels termes comuns de GitHub i Git et permetrà col·laborar en poc temps.

## Repositori

Un repositori és l'element més bàsic de Git i GitHub. Imagineu-lo com una carpeta de projecte. Un repositori conté tots els fitxers del projecte (incloent-hi la documentació) i emmagatzema la història de revisions de cada fitxer.

## _Commit_

Es un conjunt individual de canvis en un fitxer o conjunt de fitxers. Amb Git, cada vegada que es guarda un _commit_ es crea una ID única (coneguda com a "SHA" o "hash") que et permet fer un seguiment dels canvis que es van fer, quan i per qui. Els _commits_ solen contenir un missatge explicatiu associat, que és una breu descripció dels canvis realitzats.

## _Branch_

Una versió paral·lela del repositori. Està continguda dins del repositori, però no afecta la branca principal, permetent-te treballar lliurement sense interrompre la versió "en viu".

### Remot

La connexió d'un repositori local amb un repositori a GitHub. Permet sincronitzar la història de revisions mitjançant la publicació de _commits_ locals i la descàrrega de nous canvis des de GitHub.

### _Pull request_

Es una característica de GitHub que proporciona _conversació_, revisió de codi línia per línia, anàlisi de l'historial de canvis i resums dels fitxers modificats.

## Configuració

La primera cosa que s'ha de configurar en utilitzar Git són dos camps importants sobre l'usuari. Això permet donar crèdit apropiat i traçabilitat a les contribucions del projecte.

```bash
git config --global user.name "Mona Lisa Octocat"
git config --global user.email "mona@github.com"
```

## Versionant fitxers

La versió de fitxers comença creant un repositori al teu compte de GitHub. L'autoria i l'edició dels fitxers es pot fer a través de la interfície web o recuperant el repositori localment des de la línia de comandes.

```bash
git clone [url] [nom-projecte]
cd [nom-projecte]
```

Les contribucions al repositori es fan normalment a través de _branches_ i _commmits_ centrats en petites accions de treball.

```bash
git branch [nom]
git switch [nom]
git add [fitxer]
git commit -m [missatge-commit]
```

Quan el treball de la característica està acabat, la branca es pot fusionar localment o pujar a GitHub per a una revisió de codi.

```bash
git switch main
git merge [branca]
git push -u origin [branca]
```

Com que els _commits_ es poden fer eficientment, l'estat de qualsevol fitxer nou, modificat o desaparegut es pot verificar i validar ràpidament.

```bash
git status
git diff [fitxer-modificat]
```

## Integrant els canvis

Els _commits_ es poden en qualsevol ordre i sobre qualsevol _branch_. Normalment, això es fa sobre la _branch_ principal per integrar noves funcionalitats o corregir errors.

```bash
git switch main
git merge millora-característica
git branch -d millora-característica
```

[PLACEHOLDER - Recursive Merge Diagram]

El darrer pas elimina la _branch_ (si ja no la necessiteu). Els _merges_ fan que tota la història de _commits_ sigui accessible, eliminant la necessitat de mantenir l'etiqueta de la branca.

## Compartir i Recuperar

Compartir la història de _commits_ només requereix un repositori de destí, un a GitHub, i un únic pas de configuració:

```bash
git remote add origin [repo-url]
git remote -v
```

[PLACEHOLDER - Local-Upstream Diagram]

Amb una configuració remota, i amb el nom tradicional "`origin`" assignat a la URL, és senzill publicar els _commits_ locals.

```bash
git push origin [branch-name]
```

Recuperar canvis d'un repositori compartit i fusionar automàticament els nous _commits_ localment es realitza en una operació de diversos passos executada amb les seguents ordres:

```bash
git switch [target-branch]
git pull origin [upstream-branch]
```
