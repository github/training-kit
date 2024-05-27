---
layout: cheat-sheet
redirect_to: false
title: GitHub Git lathund
byline: Git är ett distribuerat versionshanteringssystem med öppen källkod som underlättar för att skicka information mellan GitHub och din egna dator. Använd lathunden för en snabb påminnelse om de vanligaste Git kommandona.
leadingpath: ../../
---

{% capture colOne %}

## Installera

### GitHub Desktop

GitHubs skrivbordsapplikation för de vanligaste git kommandona, samt en terminal för mer avancerade aktiviteter. [Ladda ner GitHub Desktop här.](https://desktop.github.com.)

### Git för alla fjärrarkiv

[Laddda ner git här.](https://git-scm.com)

## Konfigurera

Kommandon för att konfigurera användarinformationen för git lokalt.

<code>$ git config --global user.name _användarnamn_</code>

Anger vilket användarnamn som stå som avsändare för dina git-aktiviteter.

<code>$ git config --global user.email _e-postadress_</code>

Anger vilken epostadress som ska stå som avsändare för dina git-aktiviteter

`$ git config --global color.ui auto`

Infogar färger som stöd för att tolka kommandoraden.

## Grenar

Grenar är ett viktigt verktyg när du använder git. Dina incheckningar samlas på den gren du befinner dig på. Vanliga kommandon för att hantera förgreningarna är:

<code>$ git branch _grennamn_</code>

Skapar en ny gren.

<code>$ git switch -c _grennamn_</code>

Skapar en ny gren samtidigt som du hoppar till den.

<code>$ git merge _grennamn_</code>

Sammanfogar den angivna grenen, med all dess historik, med den genen du är på. Detta görs vanligtvis efter att den ändrade koden har granskats i en `pull request`.

<code>$ git branch -D _grennamn_</code>

Raderar en gren.

{% endcapture %}

<div class="col-md-6">
{{ colOne | markdownify }}
</div>

{% capture colTwo %}

## Skapa arkiv

Ett nytt git-arkiv kan antingen skapas lokalt på datorn eller genom att klona ett befintligt. Om ett arkiv skapas lokalt behöver du skicka det till GitHub efter.

`$ git init`

Skapar ett nytt git-arkiv i den mappen terminalen har öppen när du kör kommandot. När du har kört `git init` kan du koppla ihop ditt lokala arkiv med ett tomt arkiv på GitHub med följande kommando:

<code>$ git remote add origin _https:(//)www.github.com/DITT-ANVÄNDARNAMN/DITT-arkiv_</code>

Anger vilket fjärrarkiv på GitHub ditt lokala arkiv hör ihop med.

<code>$ git clone _https:(//)www.github.com/DITT-ANVÄNDARNAMN/DITT-arkiv.git_</code>

Klonar ett befintligt arkiv på GitHub till din lokala dator. Filer, grenar och historik följer med.

## Ignorera filer

Alla filer hör inte hemma i git. Git ignorerar dem enklast genom att filnamnen sparas i en fil i arkivet som du döper till `.gitignore`. [Här finns mallar om du behöver hjälp med strukturen](https://github.com/github/gitignore).

## Synkronisera ändringar

Kommandon för att synkronisera ditt lokala arkiv på din dator med fjärrarkivet på GitHub.

`$ git fetch`

Hämtar ner alla ändringar som har skickats till fjärrarkivet från dess förgreningar till din dator.

`$ git merge`

Slår ihop grenar.

`$ git push`

Skickar upp de ändringar du har checkat in lokalt till fjärrarkivet på GitHub.

`$ git pull`

Hämtar ner och drar in alla ändringar från grenen i fjärrarkivet på GitHub till din gren lokalt. Kommandot kör först `git fetch` och sedan `git merge`.

{% endcapture %}

<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>

{% capture colThree %}

## Ändringar i koden

Kommandon för att bläddra igenom och kolla in de växande filerna i ditt projekt

`$ git log`

Listar versionshistoriken på aktuell gren

<code>$ git log --follow _filnamn_</code>

Listar verionshistoriken för en specifik fil

<code>$ git diff _gren-1 annan-gren_</code>

Visar skillnader i innehåll mellan två grenar

<code>$ git show _incheckning_</code>

Visar metadata och ändringar i innehåll av en specifik incheckning

`$ git add .`

En ögonblicksbild av de ändrade filerna läggs till för att förbereda versionshantering

<code>$ git incheckning -m "_beskrivande meddelande_"</code>

Ögonblicksbilderna lagras permanent som en ny version i versionshistoriken

## Ångra incheckning

Kommandon för att fixa misstag och revidera historiken

<code>$ git reset _incheckning_</code>

Ångrar alla ändringar efter den angivna incheckningen och behåller ändringarna lokalt

<code>$ git reset --hard _incheckning_</code>

Kastar bort all historik och alla ändringar som gjorts efter den angivna incheckningen

> VARNING! Att ändra i historiken kan få oförutsedda konsekvenser. Om du behöver ändra en incheckning som har skickats till GitHub, var noggrann med dina kommandon ohc kontroller. Behöver du hjälp, fråga på [github.community](https://github.community).

{% endcapture %}

<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

## Ordlista

- **git**: ett distribuerat versionshanteringssystem med öppen källkod
- **GitHub**: en plattform för att lagra och samarbeta i Git arkivn
- **incheckning**: en pärm med ändringar i koden som görs vid ett specifikt tillfälle
- **branch**: en flyttbar gren som samlar dina inchecknings utan att störas av andras ändringar
- **clone**: en klon av ett arkiv med all dess versionshistorik
- **remote**: ett fjärrarkiv, t.ex. GitHub, där alla i teamet kan samarbeta
- **fork**: en kopia av ett arkiv på GitHub som ägs av en annan användare
- **pull request**: en plats att jämföra och diskutera ändringar i en gren med hjälp av granskningar, kommentarer, integrerade tester med mera
- **HEAD**: den aktuella plats som är utcheckad på din terminal. HEAD kan flyttas till andra grenar eller incheckningar med `git switch`

{% endcapture %}
