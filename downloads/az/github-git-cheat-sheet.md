---
layout: cheat-sheet
redirect_to: false
title: GitHub-dan Git üçün yaddaş kitabçası
byline: Git - kompüterinizdə GitHub ilə işləmək üçün istifadə olunan açıq mənbəli, versiyaların paylanmış nəzarət sistemidir. Bu kitabça, əmr sətri üçün əsas Git əmrləri və onların tətbiqi üzrə təlimatlardan ibarətdir.
leadingpath: ../../
---

{% capture colOne %}
## Git quraşdırılması
GitHub, repositarla əsas əməliyyatların icra edilməsi üçün qrafik interfeysli bir pəncərə proqramı və genişləndirilmiş iş ssenariləri üçün Git-in avtomatik yenilənən konsol versiyasını təqdim edir.

### GitHub Desktop
[desktop.github.com](https://desktop.github.com)

Linux və POSIX sistemləri üçün Git distributivlərini Git SCM rəsmi saytında tapa bilərsiniz.

### Git for All Platforms
[git-scm.com](http://git-scm.com)

## Configure tooling
İstifadəçi haqqında informasiyanın bütün lokal repozitarlar üçün konfiqurasiyası

```$ git config --global user.name "[istifadəçi_adınız]"```

Kommitlərinizdə müəllif sahəsində əks olunacaq adınızı təyin edir

```$ git config --global user.email "[e-poçt ünvanınız]"```

Kommitlərinizin məlumat hissəsində əks olunacaq e-poçt ünvanınızı təyin edir

```$ git config --global color.ui auto```

Əmr sətrinin çıxışının faydalı rənglənməsini aktiv edir

## Budaqlar
Budaqlar - Git-lə işin mühüm hissəsidir. Etdiyiniz istənilən kommit hal-hazırda "giriş etmiş" olduğunuz budaqda ediləcək. Hansı budaqda olduğunuzu görmək üçün `git status` əmrindən istifadə edin.

```$ git branch [budaq-adı]```

Yeni budaq yaradır

```$ git checkout [budaq-adı]```

Göstərilən budağa keçir və iş qovluğunu yeniləyir

```$ git merge [branch]```

Göstərilən budağın tarixini cari budaqla birləşdirir. Bu, ümumiyyətlə dəyişikliklərin qəbul edilməsi sorğularında istifadə olunur, lakin vacib bir Git əməliyyatıdır.

```$ git branch -d [branch-name]```

Göstərilən budağı silir

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## Create repositories

When starting out with a new repository, you only need to do it once; either locally, then push to GitHub, or by cloning an existing repository.

```$ git init```

Turn an existing directory into a Git repository

```$ git clone [url]```

Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits

## The .gitignore file

Sometimes it may be a good idea to exclude files from being tracked with Git. This is typically done in a special file named `.gitignore`. You can find helpful templates for `.gitignore` files at [github.com/github/gitignore](https://github.com/github/gitignore).

## Synchronize changes

Synchronize your local repository with the remote repository on GitHub.com

```$ git fetch```

Downloads all history from the remote tracking branches

```$ git merge```

Combines remote tracking branches into current local branch

```$ git push```

Uploads all local branch commits to GitHub

```$ git pull```

Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. `git pull` is a combination of `git fetch` and `git merge`

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>

{% capture colThree %}

## Make changes

Browse and inspect the evolution of project files

```$ git log```

Lists version history for the current branch

```$ git log --follow [file]```

Lists version history for a file, including renames

```$ git diff [first-branch]...[second-branch]```

Shows content differences between two branches

```$ git show [commit]```

Outputs metadata and content changes of the specified commit

```$ git add [file]```

Snapshots the file in preparation for versioning

```$ git commit -m"[descriptive message]"```

Records file snapshots permanently in version history

## Redo commits

Erase mistakes and craft replacement history

```$ git reset [commit]```

Undoes all commits after `[commit]`, preserving changes locally

```$ git reset --hard [commit]```

Discards all history and changes back to the specified commit

> CAUTION! Changing history can have nasty side effects. If  you need to change commits that exist on GitHub (the remote), proceed with caution. If you need help, reach out at github.community or contact support.

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

## Glossary

- **git**: an open source, distributed version-control system
- **GitHub**: a platform for hosting and collaborating on Git repositories
- **commit**: a Git object, a snapshot of your entire repository compressed into a SHA
- **branch**: a lightweight movable pointer to a commit
- **clone**: a local version of a repository, including all commits and branches
- **remote**: a common repository on GitHub that all team members use to exchange their changes
- **fork**: a copy of a repository on GitHub owned by a different user
- **pull request**: a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more
- **HEAD**: representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits when using `git checkout`

{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
<div class="clearfix"></div>
