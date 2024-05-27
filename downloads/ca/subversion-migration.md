---
layout: cheat-sheet
redirect_to: false
title: Migració de Subversion a Git
byline: Quan cal migrar de Subversion a Git, hi  ha un vocabulari i conjunt d'ordres que cal apendre, a més de les noves funcionalitats que només Git aporta. Aquest full de referència pretén ajudar-vos en la vostre transició entre la clàssica tecnologia de Subversion i l'ús modern de Git amb la plataforma de col·laboració GitHub.
leadingpath: ../../
---

{% capture migration %}
## Migrant

### Importador de GitHub

Pels projectes accesibles des de Internet, GitHub.com proveeix **Importer** per fer una importació automàtica des de un repositori Subversion, Team Foundation Server, Mercurial, o a versions alternatives de Git, a un repositori que es crearà automàticament a GitHub.

El procés es molt simple, només cal que inicieu la sessió al vostre compte de GitHub, si encara no ho feu, introduïu l'URL de control de versions del vostre projecte existent al camp "repositori" i inicieu la conversió.

En funció del sistema de control de versions detectat, **Importer** pot sol·licitar informació addicional per a la migració. Això inclou un fitxer on s'informi de l'associació dels noms d'usuari de Subversion a camps Git.

Llegiu més sobre com importar el vostre projecte a GitHub fent una ullada a [la documentació de Importer de GitHub](https://docs.github.com/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer).

### Utilitat SVN2Git

Quan hi han limitacions d'accés o els repositoris de Subversion no son públics i es necessiten migrar a Git, SVN2Git és la utilitat de línia de comandes recomenada i proporciona control a través de cada pas del procés.

Subversion presenta diferències estructurals amb Git respecte als repositoris, i SVN2Git proporciona la flexibilitat i permet la configuració per serveis Subversion tradicionals i personalitzats. Això garanteix que el dipòsit de Git resultant s'alinei amb les millors pràctiques estàndard per a _commits_, _branches_ i _tags_ per a l'historial complet del projecte.

Les característiques més remarcables de SVN2Git son:

- Convertir totes les convencions SVN a l'estructura Git tradicional
- Proporcionar un camp d'usuaris SVN per nomenar i enviar dades de correu electrònic a les confirmacions de Git
- Permet patrons d'exclusió per al continguts concrets del repositori Git

Podeu trobar més informació sobre SVN2Git a la pàgina d'inici oficial del projecte:

[https://github.com/nirvdrum/svn2git](https://github.com/nirvdrum/svn2git)
{% endcapture %}

<div class="col-md-6 col-12">
{{ migration | markdownify }}
</div>

{% capture bridging %}
## Fent de pont

### Aprofitant el suport de Git per a SVN

Sovint, durant una transició a Git, la infraestructura de Subversion roman al seu lloc mentre els usuaris es familiaritzen interaccionant amb repositoris locals de Git, els fluxos de treball locals i les aplicacions d'escriptori.

L'ordre `git svn` permet als usuaris sincronitzar-se amb un amfitrió centralitzat del repositori Subversion mentre aprofiten tots els avantatges que ofereixen la línia de comandes de Git i els clients gràfics locals.

Per importar un repositori Subversion com a un repositori local Git, descarregueu el projecte sencer amb la seguent ordre:

```bash
git svn clone [svn-repo-url] --stdlayout
```

Assegureu-vos d'estar familiaritzats amb l'estructura del repositori Subversion objectiu i si segueix una disposició estàndard o no. Per als dissenys no tradicionals de `trunk`, `branches`, i `tags`, s'han d'especificar les seguents opcions durant l'execució de l'ordre `svn clone`:

- `T [trunk]` per la font principal convencional alternativa
- `b [branches]` per la ubicació alternativa de les _branches_
- `t [tags]` per la ubicació alternativa dels _tags_

Un cop finalitzada l'operació de clonació, podeu continuar amb l'operativa normal local de Git per la línia de comandes o amb clients gràfics.

### Sincronitzant amb Subversion

La publicació de l'historial local de Git en un dipòsit central Subversion importat amb el comand `git svn clone` es realitza amb l'ordre:

```bash
git svn dcommit
```

Si l'historial del dipòsit de Subversion allotjat conté canvis que encara no hi son al dipòsit local de Git, l'operació `dcommit` es rebutjarà fins que es traslladin amb aquesta ordre:

```bash
git svn rebase
```

Tingueu en compte que aquesta acció reescriu l'historial local de Git i els vostres identificadors de _commit_ seran diferents.
{% endcapture %}

<div class="col-md-6 col-12">
{{ bridging | markdownify }}
</div>

## Comprenent

Subversion i Git comparteixen vocabularis similars, però sovint només són els noms de les ordres. El comportament i la funcionalitat són força diferents donades les qualitats úniques que proporciona Git com a sistema de control de versions distribuït en comparació amb la naturalesa centralitzada de Subversion.

| SVN command     | Git command | Git behavior                                                              |
| ---             | ---         | ---                                                                       |
| `status`        | `status`    | Informa sobre l'estat del arbre de teball                                 |
| `add`           | `add`       | Requerit per cada _path_ abans de ser afegit a un _commit_                |
| `commit`        | `commit`    | Emmagatzema els canvis agrupats a la història de revisions locals         |
| `rm`, `delete`  | `rm`        | Prepara els _paths_ per ser eliminats per quan es faci el seguent commit  |
| `move`          | `mv`        | Prepara el contingut reubicat per quan es faci el seguent commit          |
| `checkout`      | `clone`     | Adqjuireix l'historial sencer d'un projecte localment per un primer cop   |
|                 | `branch`    | Crea un context local context per agrupar _commits_                       |
|                 | `merge`     | Fusiona histories de _branches_ i canvis al arbre de treball              |
|                 | `log`       | No cal xarxa                                                              |
|                 | `push`      | Envia la història de _commits_ a GitHub/un Servei Git central             |
|                 | `pull`      | Descarrega i integra l'històric d'un repositori GitHub al repositori local|
|                 | `fetch`     | Descarrega (sense integrar) l'històric d'un repositori GitHub             |
