---
layout: cheat-sheet
redirect_to: false
title: GitHub Git Ściąga
byline: Git to otwartoźródłowy rozproszony system kontroli wersji który umożliwia działanie GitHuba na twoim laptopie lub komputerze stacjonarnym. Ta ściąga podsumowuje najczęściej używane komendy wiersza poleceń Gita w celu szybkiego dostępu.
leadingpath: ../../../
---

{% capture colOne %}
## Instalacja Gita
GitHub dostarcza klienta dla komputerów który zawiera interfejs graficzny dla najbardziej powszechnych akcji w repozytorium i automatycznie aktualizuje edycje Gita w lini komend dla zaawansowanych scenariuszy.

### GitHub Desktop
[desktop.github.com](https://desktop.github.com)

Dystrybucje Gita dla systemu Linux i POSIX dostępne są na oficjalnej stronie Git SCM.

### Git dla wszystkich platform
[git-scm.com](https://git-scm.com)

## Konfiguracja narzędzi
Skonfiguruj informacje o użytkowniku dla wszystkich lokalnych repozytoriów

```$ git config --global user.name "[nazwa]"```

Ustawia nazwę którą chcesz dołączyć do wysyłanych commitów


```$ git config --global user.email "[adres email]"```

Ustawia email który chcesz dołączyć do wysyłanych commitów


## Tworzenie repozytorium
Tworzy nowe repozytorium lub uzyskuje je z istniejącego adresu URL


```$ git init [nazwa-projektu]```

Tworzy nowe lokalne repozytorium ze sprecyzowaną nazwą


```$ git clone [url]```

Pobiera projekt i całą jego historię wersji

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## Wprowadzanie zmian
Sprawdź zmiany i utwórz commit


```$ git status```

Wyświetla wszystkie nowe lub zmodyfikowane pliki do zatwierdzenia


```$ git diff```

Pokazuje różnice w plikach które nie zostały jeszcze zatwierdzone


```$ git add [plik]```

Zatwierdza pliki w celu przygotowania wersji


```$ git diff --staged```

Pokazuje różnicę pomiędzy plikami zatwierdzonymi a ich ostatnią wersją


```$ git reset [plik]```

Wycofuje plik lecz nie zmieniaj jego zawartości


```$ git commit -m"[descriptive message]"```

Permanentnie zapisuje zatwierdzone pliki w historii wersji

## Zmiany grupowe
Nazwij serie commitów i podsumuj ukończone zadania


```$ git branch```

Wyświetla listę wszystkich lokalnych gałęzi w aktualnym repozytorium


```$ git branch [nazwa-gałęzi]```

Tworzy nową gałąź


```$ git switch -c [nazwa-gałęzi]```

Przechodzi do określonej gałęzi i aktualizuje katalog roboczy


```$ git merge [nazwa-gałęzi]```

Łączy historię określonej gałęzi z aktualną


```$ git branch -d [nazwa-gałęzi]```

Usuwa określoną gałąź
{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## Zmiany w nazwach plików
Przenieś i usuń pliki w repozytorium


```$ git rm [plik]```

Usuwa plik z katalogu roboczego i zatwierdza usunięcie


```$ git rm --cached [plik]```

Usuwa plik z kontroli wersji lecz zachowuje go lokalnie


```$ git mv [oryginalny-plik] [plik-ze-zmienioną-nazwą]```

Zmienia nazwę pliku i przygotowuje go do commitu

## Pomiń śledzenie
Wyklucz pliki tymczasowe i ścieżki

```
*.log
build/
temp-*
```

Plik tekstowy nazwany `.gitignore` wyklucza przypadkowe dodanie do repozytorium plików i ścieżek pasujących do określonych wzorów


```$ git ls-files --others --ignored --exclude-standard```

Wyświetla wszystkie ignorowane pliki w tym projekcie

## Zapisuj fragmenty
Zapisuj i przywracaj niedokończone zmiany


```$ git stash```

Czasowo zachowuje wszystkie zmodyfikowane śledzone pliki


```$ git stash pop```

Przywraca najnowsze zachowane pliki


```$ git stash list```

Wyświetla listę wszystkich zachowanych zestawów zmian


```$ git stash drop```

Odrzuca najnowsze zachowane zmiany
{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}
## Przejrzyj historię
Przejrzyj i sprawdź ewolucje plików projektu


```$ git log```

Wyświetla listę wersji dla aktualnej gałęzi


```$ git log --follow [plik]```

Wyświetla historie wersji pliku w tym zmiany nazw


```$ git diff [pierwsza-gałąź]...[druga-gałąź]```

Pokazuje różnicę pomiędzy dwoma gałęziami


```$ git show [commit]```

Wyświetla metadane i zmiany zawartości danego commitu

## Przywróć commity
Wymaż błędy i historię zmian


```$ git reset [commit]```

Cofa wszystkie commity po `[commit]`, zachowując zmiany lokalne


```$ git reset --hard [commit]```

Odrzuca całą historię i zmiany wracając do danego commitu

## Synchronizuj dane
Zarejestruj zdalne repozytorium (URL) i wymień się z nim historią


```$ git fetch [remote]```

Pobiera całą historię ze zdalnego repozytorium


```$ git merge [remote]/[gałąź]```

Łączy gałąź zdalną z lokalną


```$ git push [remote] [gałąź]```

Przesyła lokalną gałąź do GitHuba


```$ git pull```

Pobiera historię i wprowadza zmiany
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
