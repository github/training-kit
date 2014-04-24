# Aide-mémoire GitHub Git

Git est le sytème de gestion de version décentralisé open source qui facilite les activités GitHub sur votre ordinateur. Cet aide-mémoire permet un accès rapide aux instructions des commandes Git les plus utilisées.

## Installer git
GitHub fournit des clients desktop qui incluent une interface graphique pour les manipulations les plus courantes et une "an automatically updating command line edition of Git" pour les scénari avancés.

### GitHub pour Windows
http://windows.github.com

### GitHub pour Mac
http://mac.github.com

Les distributions de Git pour Linux et les systèmes POSIX sont disponibles sur le site web officiel de Git SCM.

###Git pour toutes les plate-formes
http://git-scm.com

## Configuration des outils
Configurer les informations de l'utilisateur pour tous les dépôts locaux


```git config --global user.name "[name]"```

Définir le nom que vous voulez associer à toutes vos opérations de commit


```$ git config --global user.email "[email address]"```

Définir l'email que vous voulez associer à toutes vos opérations de commit


```$ git config --global color.ui auto```

Activer la colorisation de la sortie en ligne de commande

## Create repositories
Start a new repository or obtain one from an existing URL


```$ git init [project-name]```

Creates a new local repository with the specified name


```$ git clone [url]```

Downloads a project and its entire version history

## Make changes
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


```$ git ls-files --other --ignored --exclude-standard```

Lists all ignored files in this project

## Save fragments
Shelve and restore incomplete changes


```$ git stash```

Temporarily stores all modified tracked files


```$ git stash pop```

Restores the most recent stashed files


```$ git stash list```

Lists all stashed changesets


```$ git stash drop```

Discards the most recently stashed changeset

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
Register a repository bookmark and exchange version history


```$ git fetch [bookmark]```

Downloads all history from the repository bookmark


```$ git merge [bookmark]/[branch]```

Combines bookmark’s branch into current local branch


```$ git push [alias] [branch]```

Uploads all local branch commits to GitHub


```$ git pull```

Downloads bookmark history and incorporates changes

---

## GitHub Training
Learn more about using GitHub and Git. Email the Training Team or visit our web site for learning event schedules and private class availability.

* training@github.com
* training.github.com
