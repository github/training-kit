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

Définit le nom que vous voulez associer à toutes vos opérations de commit


```$ git config --global user.email "[email address]"```

Définit l'email que vous voulez associer à toutes vos opérations de commit


```$ git config --global color.ui auto```

Active la colorisation de la sortie en ligne de commande

## Créer des dépôts
Démarrer un nouveau dépôt ou en obtenir un depuis une URL existante


```$ git init [project-name]```

Crée un dépôt local à partir du nom spécifié


```$ git clone [url]```

Télécharge un projet et tout son historique de versions

## Effectuer des changements
Consulter les modifications et effectuer une opération de commit


```$ git status```

Liste tous les nouveaux fichiers et les fichiers modifiés à commiter


```$ git diff```

Montre les modifications de fichier qui ne sont pas encore indexées


```$ git add [file]```

Ajoute un instantané du fichier, en préparation pour le suivi de version


```$ git diff --staged```

Montre les différences de fichier entre la version indexée et la dernière version


```$ git reset [file]```

Enleve le fichier de l'index, mais préserve son contenu


```$ git commit -m"[descriptive message]"```

Enregistre des instantanés de fichiers de façon permanente dans l'historique des versions

## Grouper des changements
Nommer une série de commits et combiner les résultats de travaux terminés


```$ git branch```

Liste toutes les branches locales dans le dépôt courant


```$ git branch [branch-name]```

Crée une nouvelle branche


```$ git checkout [branch-name]```

Bascule sur la branche spécifiée et met à jour le répertoire de travail (working directory)


```$ git merge [branch-name]```

Combine dans la branche courante l'historique de la branche spécifiée


```$ git branch -d [branch-name]```

Supprime la branche spécifiée

## Changements au niveau des noms de fichiers
Déplacer et supprimer des fichiers sous suivi de version


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
