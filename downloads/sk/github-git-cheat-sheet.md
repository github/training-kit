---
layout: cheat-sheet
title: GitHub Git Cheat Sheet
byline: Git je open-source distribuovaný systém riadenia revízií. Github je služba, na ktorej je možné tieto revízie (repozitáre, projekty) hostovať. Tento cheat sheet sumarizuje bežne používané Git príkazy pre rýchlu referenciu.
leadingpath: ../../../
---

{% capture colOne %}
## Inštalácia GITu
GitHub ponúka aplikácie pre najbežnejšie operácie s repozitármi alebo rozhranie v príkazovom riadku pre zložitejšie situácie.

### GitHub pre Windows
http://windows.github.com

### GitHub pre Mac
http://mac.github.com

Git distribúcie pre Linux a POSIX systémy sú dostupné na oficiálnych stránkach Git SCM.

### Git pre všetky platformy
http://git-scm.com

## Konfigurácia
Konfigurácia používateľských informácií na zariadení.

```$ git config --global user.name "[meno]"```

Nastaví meno, ktoré bude priradené ku commitom


```$ git config --global user.email "[email]"```

Nastaví e-mail, ktorý bude priradený ku commitom

```$ git config --global color.ui auto```

Umožní farebné zvýrazňovanie výstupov z príkazového riadku


## Vytváranie repozitárov
Vytváranie nového repozitára alebo používanie už existujúceho


```$ git init [nazov-projektu]```

Vytvorí nový lokálny repozitár s daným názvom


```$ git clone [url]```

Stiahne celý repozitár z danej URL

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## Robenie zmien
Zrevidovanie zmien a robenie ďalších


```$ git status```

Vráti zoznam všetkých nových alebo upravených súborov


```$ git diff```

Ukáže rozdiely v súboroch, ktoré ešte neboli stage-nuté


```$ git add [subor]```

Pridá súbor do "poolu" pre nový commit


```$ git diff --staged```

Ukáže rozdiely v súboroch medzi stage-nutou a poslednou verziou


```$ git reset [subor]```

Unstage-ne súbor, ale zachová jeho obsah


```$ git commit -m"[vystizny-opis-zmien]"```

Vytvorí commita pridá k nemu správu s opisom zmien, ktoré boli urobené

## Skupinové zmeny
Pomenovanie série commitov a kombinovanie progresu


```$ git branch```

Vráti zoznam všetkých lokálnych vetiev v repozitári


```$ git branch [nazov-vetvy]```

Vytvorí novú vetvu


```$ git checkout [nazov-vetvy]```

Prepne nás do danej vetvy a aktualizuje súbory


```$ git merge [nazov-vetvy]```

Zlúči históriu danej vetvy do súčasnej vetvy


```$ git branch -d [nazov-vetvy]```

Zmaže vetvu
{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## Premiestňovanie súborov
Premiestnenie alebo zmazanie verzovaných súborov


```$ git rm [subor]```

Zmaže súbor z priečinka a zaznamená, že bol zmazaný


```$ git rm --cached [subor]```

Odstráni súbor z verzovacieho systému, ale zachová súbor lokálne


```$ git mv [originalny-subor] [premenovany-subor]```

Zmení názov súboru a pripraví súbor na commit

## Zakázanie verzovania
Vynechanie súborov, ktoré nechceme verzovať alebo dočasných súborov

```
*.log
build/
temp-*
```

Textový súbor nazvaný `.gitignore` zakáže verzovanie nechcených súborov alebo priečinkov (väčšinou napr. súbory IDE, heslá).


```$ git ls-files --others --ignored --exclude-standard```

Vráti zoznam všetkých ignorovaných súborov v projekte

##  Ukladanie menších zmien
Uloženie a obnovenie nedokončených zmien


```$ git stash```

Dočasne uloží všetky zmenené súbory


```$ git stash pop```

Obnoví posledne stashnuté (uložené) súbory


```$ git stash list```

Vráti zoznam všetkých stashnutých (uložených) zmien


```$ git stash drop```

Zahodí posledne stashnuté (uložené) zmeny
{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}
## Revidovanie histórie
Listovanie a kontrola vývoja súborov


```$ git log```

Vráti zoznam commitov v aktuálnej vetve


```$ git log --follow [subor]```

Vráti zoznam zmien pre daný súbor (zahŕňajúc premenovávania)


```$ git diff [jedna-vetva]...[druha-vetva]```

Zobrazí rozdiely medzi dvoma vetvami


```$ git show [commit]```

Vráti metadata a obsah zmien daného commitu

## Vrátenie zmien
Napravenie chýb a nahradenie histórie


```$ git reset [commit]```

Vráti všetky urobené zmeny až po daný commit, zachovajúc lokálne zmeny


```$ git reset --hard [commit]```

Zahodí všetky urobené zmeny až po daný commit

## Synchronizácia zmien
Zapísanie zmien a stiahnutie alebo nahratie zmien


```$ git fetch [remote]```

Stiahne všetky zmeny zo vzdialeného do lokálneho repozitár


```$ git merge [remote]/[branch]```

Zlúči danú vetvu do súčasnej


```$ git push [remote] [branch]```

Nahraje commity a zmeny do danej vetvy na Github


```$ git pull```

Stiahne k Vám všetky aktuálne zmeny a históriu kódu
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
