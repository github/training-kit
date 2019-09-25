---
layout: cheat-sheet
redirect_to: false
title: GitHub Git Cheat Sheet
byline: Git is the open source distributed version control system that facilitates GitHub activities on your laptop or desktop. This cheat sheet summarizes commonly used Git command line instructions for quick reference.
leadingpath: ../../
---

{% capture colOne %}
## Git Uygulamasını Kurmak
GitHub, en yaygın depolar ile yapılan işlemler için grafiksel bir kullanıcı arabirimi ve Git'in gelişmiş senaryolar için otomatik olarak güncellenen bir komut satırı sürümü içeren masaüstü istemcileri sağlar.

### GitHub Masaüstü
https://desktop.github.com/

Linux ve POSIX sistemleri için Git dağıtımlarını resmi Git SCM web sitesinde bulabilirsiniz.

### Git Tüm İşletim Sistemlerinde Kullanılabilir
http://git-scm.com

## Git Konfigürasyonlarını Yapmak
Kurulu olduğu bilgisayardaki tüm depolar,projeler için kullanıcı bilgilerini yapılandırabiliriz.

```$ git config --global user.name "[isim soyaisim]"```

Git üzerinde yapılan işlemin kimin tarafından yapıldığını tutan bilgidir.


```$ git config --global user.email "[mail adresi]"```

Git üzerinde yapılan işlemin hangi mail adresi tarafından yapıldığını tutan bilgidir.


## Depo Oluşturmak

```$ git init [proje-ismi]```

Verilen proje ismi yardımıyla yeni bir depo oluşturabiliriz.


```$ git clone [url]```
Var olan bir projeyi verilen URL bilgisi yardımıyla bulunduğunuz konuma indirir.

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## Değişiklikler Yapmak
Review edits and craft a commit transaction


```$ git status```

Lists all new or modified files to be committed


```$ git diff```

Shows file differences not yet staged


```$ git add [file]```

Snapshots the file in preparation for versioning


```$ git diff --staged```

Shows file differences between staging and the last file version


```$ git reset [file]```

Unstages the file, but preserves its contents


```$ git commit -m"[descriptive message]"```

Records file snapshots permanently in version history

## Group changes
Name a series of commits and combine completed efforts


```$ git branch```

Lists all local branches in the current repository


```$ git branch [branch-name]```

Creates a new branch


```$ git checkout [branch-name]```

Switches to the specified branch and updates working directory


```$ git merge [branch-name]```

Combines the specified branch’s history into the current branch


```$ git branch -d [branch-name]```

Deletes the specified branch
{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## Refactor file names
Relocate and remove versioned files


```$ git rm [file]```

Deletes the file from the working directory and stages the deletion


```$ git rm --cached [file]```

Removes the file from version control but preserves the file locally


```$ git mv [file-original] [file-renamed]```

Changes the file name and prepare it for commit

## Suppress tracking
Exclude temporary files and paths

```
*.log
build/
temp-*
```

A text file named `.gitignore` suppresses accidental versioning of files and paths matching the specified patterns


```$ git ls-files --others --ignored --exclude-standard```

Lists all ignored files in this project

## Save fragments
Shelve and restore incomplete changes


```$ git stash```

Temporarily stores all modified tracked files


```$ git stash pop```

Restores the most recently stashed files


```$ git stash list```

Lists all stashed changesets


```$ git stash drop```

Discards the most recently stashed changeset
{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}
## Review history
Browse and inspect the evolution of project files


```$ git log```

Lists version history for the current branch


```$ git log --follow [file]```

Lists version history for the file, including renames


```$ git diff [first-branch]...[second-branch]```

Shows content differences between two branches


```$ git show [commit]```

Outputs metadata and content changes of the specified commit

## Redo commits
Erase mistakes and craft replacement history


```$ git reset [commit]```

Undoes all commits after `[commit]`, preserving changes locally


```$ git reset --hard [commit]```

Discards all history and changes back to the specified commit

## Synchronize changes
Register a remote (URL) and exchange repository history


```$ git fetch [remote]```

Downloads all history from the remote repository


```$ git merge [remote]/[branch]```

Combines the remote branch into the current local branch


```$ git push [remote] [branch]```

Uploads all local branch commits to GitHub


```$ git pull```

Downloads bookmark history and incorporates changes
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
