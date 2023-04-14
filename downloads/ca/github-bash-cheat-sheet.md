---
layout: cheat-sheet
redirect_to: false
title: Full de referència per GitHub Bash
byline: Bash es un intèrpret d'ordres de línia de comandes del projecte GNU. Bash wol dir the Bourne Again SHell. Bash es compatible amb l'intèrpret d'ordres de línia de comandes `sh` que incorpora capacitats útils d'altres intèrprets d'ordres de línia de comandes, el Korn shell (ksh) i el C shell (csh). Està pensat per complir amb l'estàndard IEEE POSIX P1003.2/ISO 9945.2 Shell and Tools. Ofereix millores funcionals sobre `sh` tan per programar com per l'ús interactiu. De fet, molts dels scripts fets per `sh` poden ser executats per Bash sense necessitat de modificar-los.
leadingpath: ../../
---

{% capture colOne %}
## Install Bash

Bash es típicament una aplicació nativa de sistemes basats en Linux/Unix; encara i així, si necessiteu instal·lar-lo podeu trobar els enllaços de descàrrega més abaix.

### Bash per Windows

Donat que Bash no es natiu de Windows pot ser necessària una aplicació com [Cygwin](https://www.cygwin.com) per obtindre les mateixes capacitats disponibles en sistemes linux/macOS.

### Bash per macOS i linux

Bash està instal·lat nativament a sistemes basats en Linux/Unix.

## Configurar bash

Ordres per configurar els alies a bash:

- Reestableix l'ordre `ls` a la llist d'alias, acolorint-la, i preveient els sufixes del tamany dels fitxers

```$ alias ls='ls -lGh'```

## Treballant amb directoris

Ordres per navegar, crear i eliminar direcotris i fitxers:

- Veure la ubicació del directori on s'està actualment:

```$ pwd```

- Canviar el directori on s'està actualment cap a un altre especificat:

```$ cd [directori]```

- Canviar al directori pare que conte al directori on s'està actualment:

```$ cd ..```

- Veure el contingut del directori on s'està actualment:

```$ ls```

- Veure el contingut detallat del directori on s'està actualment, incloent-hi els fitxers ocults:

```$ ls -la```

- Crear un nou directori amb un nom concret:

```$ mkdir [directori]```

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>

{% capture colTwo %}

## Manegant la sortida

Control del flux de dades a un fitxer:

- Veure el contingut d'un fitxer concret:

```$ cat [fitxer]```

- Veure el contingut d'un fitxer concret amb suport per la paginació:

```$ less [fitxer]```

- Veure el contingut de les 10 primeres linies d'un fitxer concret:

```$ head [fitxer]```

- Emmagatzemar el flux de sortida de l'execució d'una ordre com a contingut d'un fitxer concret:

```$ [cmd] > [fitxer]```

- Emmagatzemar el flux de sortida de l'execució d'una ordre com afegit al final del contingut previ d'un fitxer concret:

```$ [cmd] >> [fitxer]```

- Definir el flux de sortida de l'execució d'una ordre com el flux d'entrada de l'ordre inmediatament posterior:

```$ [cmd1] | [cmd2]```

- Netejar la finestra de bash:

```$ clear```

## Treballant amb fitxers

Ordres per moure, renombrar, crear i eliminar fitxers:

- Eliminar un fitxer concret:

```$ rm [fitxer]```

- Eliminar un directori concret:

```$ rm -r [directori]```

- Forçar l'eliminació d'un fitxer concret:

```$ rm -f [fitxer]```

- Forçar l'eliminació d'un directori concret recursivament (tot el seu contingut encara que hi hagi altres directoris amb contingut):

```$ rm -rf [fitxer]```

- Renombrar un fitxer o directori:

```$ mv [fitxer-old] [fitxer-new]```

- Copiar un fitxer a dins d'un directori (amb possible sobreescriptura de fitxers si existeix prèviament al directori de destí):

```$ cp [fitxer] [directori]```

- Copiar un directori i tot el seu contingut a dins d'un altre directori (amb possible sobreescriptura si existeixen prèviament al directori de destí):

```$ cp -r [src-directori] [dest-directori]```

- Actualitzar la data i hora d'accés a un fitxer/Crear un fitxer buit si no existeix prèviament:

```$ touch [fitxer]```

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>

{% capture colThree %}
## Permisos de fitxers i directoris

Com canviar els permisos de lectura, escriptura i execució de fitxers i directoris:

- Canviar els permisos d'un fotxer concret a 755:

```$ chmod 755 [fitxer]```

> La representació octal dels permisos son grups de permisos per `Usuari propietari` (u), `Grup` (g) i `Altres (others)` (o) amb valors que son la suma dels permisos lectura (4), escriptura (2) i execució (1). Per exemple, 755 seria:
>
> - Usuari propietari = 7; lectura (4) + escriptura (2) + execució (1)
> - Grup = 5; lectura (4) + execució (1)
> - Altres = 5; lectura (4) + execució (1)

- Canviar els permisos d'un directori concret i recursivament al seu contingut:

```$ chmod -R 600```

- Canviar l'usuari i grup propietaris d'un fitxer o directori concret. En el cas del directori cal afegir `-R` per fer-ho recursivament sobre el seu contingut:

```$ chown [usuari]:[grup] [fitxer]```

```$ chown [usuari]:[grup] [directori]```

```$ chown [usuari]:[grup] -R [directori]```

## Configuració de xarxa i Internet

- Verificar l'accessibilitat d'un sistema remot i veure el temps per arrivar entre d'altres informacions:

```$ ping [ip/hostname]```

- Descarregar un recurs (fitxer) remot indicat per una URL al directori on s'està actualment:

```$ curl -O [url]```

- Iniciar una connexió SSH a un sistema remot amb un usuari concret:

```$ ssh [usuari]@[ip/hostname]```

- Afegir les claus SSH d'accés d'un usuari concret a un sistema remot per poder accedir posteriorment sense indicar la paraula clau:

```$ ssh-copy-id [usuari]@[ip/hostname]```

- Copia segura d'un fitxer a un sistema remot actuant com un usuari concret del sistema remot:

```$ scp [fitxer] [usuari]@[ip/hostname]:/path/to/fitxer```

- Descarregar un recurs (fitxer) remot indicat per una URL al directori on s'està actualment:

```$ wget [fitxer]```

## Tasques de sistema

Ordres per obtenir informació important sobre l'execució del sistema:

- Veure la llista dels processos que s'estan executant actualment:

```$ ps ax```

- Veure informació actualitzada continuament dels processos que s'estan executant actualment:

```$ top```

- Forçar la finalització d'un process indicat pel seu identificador de process (**pid**)

```$ kill [pid]```

- Forçar la finalització d'aquells processos que tinguin un nom concret:

```$ killall [nom_processos]```

- Veure l'espai lliure del disc dur:

```$ df```

- Veure l'espai que ocupa un fitxer concret del disc dur:

```$ du [fitxer]```

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>
