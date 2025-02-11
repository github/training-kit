---
layout: cheat-sheet
redirect_to: false
title: Обрађивање зависности подмодулима и подстаблима
byline: Подмодули и подстабла су Git алати који омогућавају да се потпројекти укључе у пројекат као поддиректоријум. Сваки је имплементиран на веома различит начин.
leadingpath: ../../../
---

<div class="col-md-12">
<h1>Додавање новог подпројекта</h1>
</div>

{% capture submodule %}

### Подмодул

    git submodule add https://github.com/githubtraining/example-submodule

    git commit -m "adding new submodule"

Команда `submodule add` додаје нови фајл под називом `.gitmodules` заједно са поддиректоријумом који садржи фајлове из `example-submodule`. Оба се додају у ваш индекс (стејџинг област) и просто морате да их комитујете. Историја подмодула остаје независна од пројекта родитеља.

{% endcapture %}

{% capture subtree %}

### Подстабло

    git subtree add --prefix=example-submodule https://github.com/githubtraining/example-submodule main --squash

Команда subtree додаје поддиректоријум који садржи фајлове из `example-submodule`. Најчешћа пракса је да се употреби опција `--squash` која комбинује историју подпројекта у један комит, који се затим уграђује у постојеће стабло пројекта родитеља. Ако желите да задржите комплетну историју назначене гране потпројекта, можете да изоставите опцију `--squash`.

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Приказ Diff-а потпројекта</h1>
</div>

{% capture submodule %}

### Подмодул

Да бисте видели diff подмодула:

```bash
# приказ измена у комиту подмодула
git diff example-submodule
# приказ једнолинијског дневника нових комитова у подмодулу
git diff --submodule example-submodule
# приказ измена фајлова у подмодулу
git diff --submodule=diff
```

{% endcapture %}

{% capture subtree %}

### Подстабло

Није потребна посебна команда

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Клонирање репозиторијума са потпројектом</h1>
</div>

{% capture submodule %}

### Подмодул

Да бисте клонирали репозиторијум заједно са свим његовим подмодулима:

    git clone --recurse-submodules URL

Ако сте заборавили `--recurse-submodules`, можете да клонирате и иницијализујете све подмодуле:

    git submodule update --init --recursive

`--recursive` је потребно само ако било који од подмодула садржи подмодуле.

{% endcapture %}

{% capture subtree %}

### Подстабло

Није потребна посебна команда

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Повлачење ажурирања суперпројекта</h1>
</div>

{% capture submodule %}

### Подмодул

Подразумевано, репозиторијум подмодула се дохвата, али се не ажурира када у суперпројекту извршите `git pull`. Морате да користите `git submodule update`, или да додате `--recurse-submodules` заставицу команди `pull` :

```bash
git pull
git submodule update --init --recursive
# или, у једном кораку (Git >= 2.14)
git pull --recurse-submodules
```

`--init` је обавезно ако су у суперпројекту додати нови подмодули, а `--recursive` је обавезно ако било који подмодул и сам има подмодуле.

Ако суперпројекат било када промени URL подмодула, потребна је посебна команда:

```bash
# копирање нове URL адресе у вашу локалну конфигурацију
git submodule sync --recursive
# ажурирање подмодула са нове URL адресе
git submodule update --init --recursive
```

`--recursive` је потребно само ако сам подмодул садржи подмодуле.

{% endcapture %}

{% capture subtree %}

### Подстабло

Није потребна посебна команда

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Измена грана</h1>
</div>

{% capture submodule %}

### Подмодул

Подразумевано, када се мења грана, радно стабло подмодула се не ажурира тако да се подудара са комитом забележеним у суперпројекту. Морате да употребите `git submodule update`, или да додате заставицу `--recurse-submodules` у `switch` :

```bash
git switch <грана>
git submodule update --recursive
# или, у једном кораку (Git >= 2.13)
git switch --recurse-submodules <грана>
```

{% endcapture %}

{% capture subtree %}

### Подстабло

Није потребна посебна команда

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Повлачење ажурирања потпројекта</h1>
</div>

{% capture submodule %}

### Подмодул

```bash
# Ажурирање репозиторијум потпројекта
git submodule update --remote
# Чување измена у суперпројекту
git commit -am "Ажурирање подмодула"
```

Ако имате више од једног подмодула, на крај команде `git submodule update --remote` можете да додате путању до подмодула и тако наведете који потпројекат треба да се ажурира.

Подразумевано, `git submodule update --remote` ће да ажурира подмодул на најновији комит `main` гране удаљеног подмодула.

За будуће позиве, подразумевану грану можете да промените са:

```bash
# Git >= 2.22
git submodule set-branch друга-грана
# или
git config -f .gitmodules submodule.example-submodule.branch друга-грана
```

{% endcapture %}

{% capture subtree %}

### Подстабло

    git subtree pull --prefix=example-submodule https://github.com/githubtraining/example-submodule main --squash

Команду можете да скратите додавањем URL адресе подстабла као удаљене гране:

    git remote add sub-remote https://github.com/githubtraining/example-submodule.git

Остале референце можете да додате/повучете замењивањем `main` са жељеном референцом (нпр. `stable`, `v1.0`).

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Прављење измена у потпројекту</h1>

У већини случајева, сматра се да је најбоља пракса да се измене раде у одвојеном клону репозиторијума потпројекта, па да се повуку у пројекат-родитељ. Када то није практично, пратите инструкције које следе:
</div>

{% capture submodule %}

### Подмодул

Приступите директоријуму подмодула и креирајте грану:

    cd example-submodule
    git switch -c branch-name main

За змене су потребна два комита, један у репозиторијуму потпројекта и један у репозиторијуму родитељу.
Не заборавите да гурнете измене и у подмодул и у суперпројекат!

{% endcapture %}

{% capture subtree %}

### Подстабло

Није потребна посебна команда, измене ће се комитовати на грану пројекта родитеља.

Постоји могућност да се креирају комитови који мешају измене потпројекта и пројекта родитеља, али то се у општем слућају не препоручује.
{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Гурање измена у репозиторијум потпројекта</h1>
</div>

{% capture submodule %}

### Подмодул

Док се налазите у директоријуму подмодула:

    git push

Или док се налазите у директоријуму родитељу:

    git push --recurse-submodules=on-demand

{% endcapture %}

{% capture subtree %}

### Подстабло

    git subtree push --prefix=example-submodule https://github.com/githubtraining/example-submodule main
{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Корисне конфигурације за подмодуле</h1>

{% capture configs %}
Када радите diff увек ће се приказивати дневник подмодула:

    git config --global diff.submodule log

У вашој `git status` поруци ће се приказивати кратак преглед измена подмодула:

    git config --global status.submoduleSummary true

`--recurse-submodules=on-demand` је подразумевано за `push`:

    git config --global push.recurseSubmodules on-demand

`--recurse-submodules` је подразумевано за све команде (одим `clone`) ако подржавају ту заставицу (ово ради за `git pull` од Git 2.15):

    git config --global submodule.recurse true

{% endcapture %}

{{ configs | markdownify }}
    </div>
