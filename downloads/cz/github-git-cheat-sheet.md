---
layout: cheat-sheet
redirect_to: false
title: GitHub Git Cheat Sheet
byline: Git je open source distribuovaný systém pro správu verzí, který usnadňuje činnost na GitHubu na vašem notebooku nebo stolním počítači. Tento přehled shrnuje běžně používané pokyny příkazového řádku systému Git pro rychlou orientaci.
leadingpath: ../../
---

{% capture colOne %}
## Instalace

### GitHub Desktop
[desktop.github.com](https://desktop.github.com)

### Git pro všechny platformy
[git-scm.com](https://git-scm.com)

## Konfigurace
Konfigurace informací o uživateli pro všechny místní repozitáře

```$ git config --global user.name "[jméno příjmení]"```

Nastaví jméno, které bude nastavené u commitu

```$ git config --global user.email "[emilová adresa]"```

Nastaví emailovou adresu, která bude nastavena u commitu

```$ git config --global color.ui auto```

Povoluje užitečné obarvení výstupu příkazového řádku

## Větvení a slučování

Větve jsou důležitou součástí práce se systémem Git. Všechny commity, které provedete, budou provedeny ve větvi, ve které jste právě "přihlášeni". Pomocí `git status` zjistíte, která větev to je.

```$ git branch [nazev-vetve]```

Vytvoří novou větev

```$ git switch -c [nazev-vetve]```

Přepne na zadanou větev a aktualizuje pracovní adresář

```$ git merge [vetev]```

Sloučí historii zadané větve do aktuální větve. Obvykle provádí při požadavcích na stažení (pull requests).

```$ git branch -d [nazev-vetve]```

Smaže vybranou větev

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## Vytváření repozitářů

Nový repozitář (úložiště) lze vytvořit buď lokálně, nebo lze klonovat existující. Pokud byl repozitář inicializován lokálně, je třeba jej následně odeslat na GitHub.

```$ git init [nazev-projektu]```

Ve složce, ve které je příkaz git init spuštěn se vytvoří nový podadresář s názvem .git. Bude obsahovat všechny soubory nezbytné pro repozitář, tzv. kostru repozitáře Git. Po použití příkazu `git init` propojte místní repozitář s prázdným repozitářem GitHub pomocí následujícího příkazu:

```$ git remote add origin [url]```

Určuje vzdálený repozitář pro místní repozitář. URL ukazuje na repozitář na GitHubu.

```$ git clone [url]```

Klonování (stažení) úložiště, které již existuje na GitHubu, včetně všech souborů, větví a commitů

## Soubor .gitignore

Někdy může být vhodné vyloučit soubory ze sledování pomocí systému Git. To se obvykle provádí ve speciálním souboru s názvem `.gitignore`. Užitečné šablony souborů `.gitignore` najdete na adrese [github.com/github/gitignore](https://github.com/github/gitignore).

## Synchronizace změn

Synchronizace místního repozitáře se vzdáleným repozitářem na GitHub.com

```$ git fetch```

Stáhne všechny změny ze vzdáleného do lokálního repozitáře

```$ git merge```

Sloučí vzdálené sledované větve do aktuální místní větve

```$ git push```

Nahraje všechny změny větve na GitHub

```$ git pull```

Aktualizuje vaši aktuální místní pracovní větev o všechny nové commity z odpovídající vzdálené větve na GitHubu. `git pull` je kombinací `git fetch` a `git merge`.

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>

{% capture colThree %}

## Provedené změny

Procházení a kontrola vývoje souborů projektu

```$ git log```

Vypíše historii verzí pro aktuální větev

```$ git log --follow [soubor]```

Vypíše historii verzí souboru, kromě přejmenování (funguje pouze pro jeden soubor).

```$ git diff [prvni-vetev]...[druha-vetev]```

Zobrazí obsahové rozdíly mezi dvěma větvemi

```$ git show [commit]```

Výstup metadat a změn obsahu zadaného commitu

```$ git add [soubor]```

Přidá soubor do přípravy na sledování

```$ git commit -m "[popisná zpráva]"```

Zaznamená trvalý snímek souboru v historii verzí

## Vracení commitů

Vymazání chyb a vytvoření náhradní historie

```$ git reset [commit]```

Vrátí všechny revize po `[commit]`, zachová lokální změny

```$ git reset --hard [commit]```

Zahodí celou historii a změny k zadanému commitu

> UPOZORNĚNÍ! Změna historie může mít nepříjemné vedlejší účinky. Pokud potřebujete změnit revize, které existují na GitHubu (vzdáleném serveru), postupujte opatrně. Pokud potřebujete pomoc, obraťte se na adresu [github.community](https://github.community) nebo kontaktujte podporu.

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

## Slovník

- **git**: open source distribuovaný systém pro správu verzí
- **GitHub**: platforma pro hostování a spolupráci Git repozitářů
- **commit**: objekt Git, snímek celého úložiště zkomprimovaný do formátu SHA.
- **branch**: lehký pohyblivý ukazatel na revizi
- **clone**: místní verzi úložiště, včetně všech revizí a větví.
- **remote**: společný repozitář na GitHubu, který všichni členové týmu používají k výměně změn.
- **fork**: kopie úložiště na GitHubu, které vlastní jiný uživatel.
- **pull request**: místo pro porovnávání a diskusi o rozdílech zavedených ve větvi s recenzemi, komentáři, integrovanými testy a dalšími informacemi.
- **HEAD**: představuje váš aktuální pracovní adresář, ukazatel HEAD lze při použití `git switch` přesunout do různých větví, značek nebo revizí.

{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
<div class="clearfix"></div>
