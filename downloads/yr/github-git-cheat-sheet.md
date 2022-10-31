---
layout: cheat-sheet
redirect_to: false
title: Iwe Iyanjẹ GitHub Git rẹ
byline: Git jẹ eto iṣakoso ẹya pinpin orisun ṣiṣi ti o ṣe irọrun awọn iṣẹ GitHub lori kọǹpútà alágbèéká tabi tabili tabili rẹ. Iwe iyanjẹ yii ṣe akopọ awọn ilana laini aṣẹ Git ti o wọpọ julọ fun itọkasi ni iyara.
leadingpath: ../../
---

{% capture colOne %}
## Install / fi sori ẹrọ

### Ojú-iṣẹ GitHub
[desktop.github.com](https://desktop.github.com)

### Git fun Gbogbo Awọn iru ẹrọ
[git-scm.com](https://git-scm.com)

## Ṣe atunto irinṣẹ irinṣẹ
Ṣe atunto alaye olumulo fun gbogbo awọn ibi ipamọ agbegbe

```$ git config --global user.name "[name]"```

Ṣeto orukọ ti o fẹ somọ awọn iṣowo ṣiṣe rẹ

```$ git config --global user.email "[email address]"```

Ṣeto imeeli ti o fẹ somọ awọn iṣowo ṣiṣe rẹ

```$ git config --global color.ui auto```

Mu ki awọ ṣe iranlọwọ fun iṣelọpọ laini aṣẹ

## Awọn ẹka Git

Awọn ẹka jẹ apakan pataki ti ṣiṣẹ pẹlu Git. Awọn adehun eyikeyi ti o ṣe yoo ṣee ṣe lori ẹka ti o “ṣayẹwo” lọwọlọwọ si. Lo `git status` lati wo iru ẹka ti o jẹ.

```$ git branch [branch-name]```

Ṣẹda titun kan ẹka

```$ git switch -c [branch-name]```

Yipada si awọn pàtó kan ẹka ati ki o mu awọn ṣiṣẹ liana

```$ git merge [branch]```

Ṣapọpọ itan-akọọlẹ ẹka ti a pato sinu ẹka lọwọlọwọ. Eyi ni a ṣe nigbagbogbo ni awọn ibeere fifa, ṣugbọn o jẹ iṣẹ Git pataki kan.

```$ git branch -d [branch-name]```

Npa ẹka ti a ti sọ tẹlẹ

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## Ṣẹda awọn ibi ipamọ

Ibi ipamọ tuntun le boya ṣẹda ni agbegbe, tabi ibi ipamọ ti o wa tẹlẹ le jẹ cloned. Nigbati ibi-ipamọ ba wa ni ipilẹṣẹ ni agbegbe, o ni lati Titari si GitHub lẹhinna.

```$ git init```

Aṣẹ git init yi itọsọna ti o wa tẹlẹ sinu ibi ipamọ Git tuntun kan ninu folda ti o nṣiṣẹ aṣẹ yii Lẹhin lilo pipaṣẹ `git init', so ibi ipamọ agbegbe pọ si ibi ipamọ GitHub ṣofo nipa lilo aṣẹ atẹle:

```$ git remote add origin [url]```

Sọtọ ibi ipamọ latọna jijin fun ibi ipamọ agbegbe rẹ. URL naa tọka si ibi ipamọ kan lori GitHub.

```$ git clone [url]```

Clone (ṣe igbasilẹ/Download) ibi ipamọ ti o wa tẹlẹ lori GitHub, pẹlu gbogbo awọn faili, awọn ẹka, ati awọn iṣẹ ṣiṣe

## Faili .gitignore

Nigba miiran o le jẹ imọran ti o dara lati yọkuro awọn faili lati tọpinpin pẹlu Git. Eyi ni igbagbogbo ṣe ni faili pataki kan ti a npè ni `.gitignore`. O le wa awọn awoṣe iranlọwọ fun awọn faili `.gitignore` ni [github.com/github/gitignore](https://github.com/github/gitignore).

## Mu awọn ayipada ṣiṣẹpọ

Mu ibi ipamọ agbegbe rẹ ṣiṣẹpọ pẹlu ibi ipamọ latọna jijin lori GitHub.com

```$ git fetch```

Ṣe igbasilẹ gbogbo itan-akọọlẹ lati awọn ẹka ipasẹ latọna jijin

```$ git merge```

Apapọ awọn ẹka ipasẹ latọna jijin sinu ẹka agbegbe lọwọlọwọ

```$ git push```

Ṣe ikojọpọ gbogbo awọn iṣẹ ẹka agbegbe si GitHub

```$ git pull```

Ṣe imudojuiwọn ẹka iṣẹ agbegbe rẹ lọwọlọwọ pẹlu gbogbo awọn adehun tuntun lati ẹka isakoṣo latọna jijin ti o baamu lori GitHub. `git pull` je apapo `git fetch` ati `git merge`

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>

{% capture colThree %}

## Ṣe awọn ayipada

Ṣawakiri ati ṣayẹwo itankalẹ ti awọn faili iṣẹ akanṣe

```$ git log```

Awọn akojọ itan ti ikede fun ẹka lọwọlọwọ

```$ git log --follow [file]```

Ṣe atokọ itan-akọọlẹ ẹya fun faili kan, ikọja awọn orukọ (ṣiṣẹ fun faili kan nikan)

```$ git diff [first-branch]...[second-branch]```

Ṣe afihan awọn iyatọ akoonu laarin awọn ẹka meji

```$ git show [commit]```

Awọn abajade metadata ati awọn iyipada akoonu ti ifaramọ pàtó

```$ git add [file]```

Snapshots faili ni igbaradi fun ti ikede

```$ git commit -m "[descriptive message]"```

Ṣe igbasilẹ awọn aworan ifaworanhan faili patapata ni itan-akọọlẹ ẹya

## Redo commits

Pa awọn aṣiṣe kuro ati itan-irọpo iṣẹ ọwọ

```$ git reset [commit]```

Ṣe atunṣe gbogbo awọn iṣẹ lẹhin `[commit]', titọju awọn ayipada ni agbegbe

```$ git reset --hard [commit]```

Pa gbogbo itan kuro ati awọn iyipada pada si ifaramo ti a ti sọ tẹlẹ

> Ṣọra! Yiyipada itan le ni ẹgbin ẹgbẹ ipa. Ti o ba nilo lati yi awọn iṣe ti o wa lori GitHub (latọna jijin), tẹsiwaju pẹlu iṣọra. Ti o ba nilo iranlọwọ, de ọdọ ni [github.community](https://github.community) tabi kan si atilẹyin.

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

## Glossary

- **git**: orisun ṣiṣi, eto iṣakoso ẹya ti o pin
- **GitHub**: Syeed kan fun alejo gbigba ati ifowosowopo lori awọn ibi ipamọ Git
- **commit**: ohun Git kan, aworan aworan ti gbogbo ibi ipamọ rẹ ti a fisinuirindigbindigbin sinu SHA kan
- **branch**: a lightweight movable ijuboluwole to a dá
- **clone**: ẹya agbegbe ti ibi ipamọ kan, pẹlu gbogbo awọn adehun ati awọn ẹka
- **remote**: ibi ipamọ ti o wọpọ lori GitHub ti gbogbo awọn ọmọ ẹgbẹ ẹgbẹ lo lati paarọ awọn iyipada wọn
- **fork**: ẹda ibi ipamọ kan lori GitHub ohun ini nipasẹ olumulo ti o yatọ
- **pull request**: aaye lati ṣe afiwe ati jiroro lori awọn iyatọ ti a ṣafihan lori ẹka pẹlu awọn atunwo, awọn asọye, awọn idanwo iṣọpọ, ati diẹ sii
- **HEAD**: ti n ṣojuuṣe ilana ilana iṣẹ lọwọlọwọ rẹ, itọka HEAD le ṣee gbe si awọn ẹka oriṣiriṣi, awọn ami, tabi awọn iṣẹ ṣiṣe nigba lilo `git switch'

{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
<div class="clearfix"></div>
