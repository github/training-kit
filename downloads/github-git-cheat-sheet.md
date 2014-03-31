# GitHub Git Cheat Sheet

Git is the open source distributed version control system that facilitates GitHub activities on your laptop or desktop. This cheat sheet summarizes commonly-used Git command line instructions for quick reference.

## Install git
GitHub provides desktop clients that include a graphical user interface for the most common repository actions and an automatically updating command line edition of Git for advanced  scenarios.

### GitHub for Windows
http://windows.github.com

### GitHub for Mac
http://mac.github.com

Git distributions for Linux and POSIX systems are available on the official Git SCM web site.

###Git for All Platforms
http://git-scm.com

## Configure tooling
Configure user information for all local repositories

```git config --global user.name "[name]"```
Set your name that will be recorded for commit transactions

```git config --global user.email "[email address]"```
Set your email address that will be  saved for commit transations

```git config --global color.ui auto```
Enable helpful colorization of command line output


## Create repositories
Start a new repository or obtain one from an existing URL

```git init [project-name]```
Create a new local repository with the specified name

```git clone [url]```
Download a project and its entire version history

## Make changes
Review edits and craft a commit transaction

```git status```
List all new or modified files to be committed

```git diff```
Show file differences not yet staged

```git add [file]```
Snapshot the file in preparation for versioning

```git diff --staged```
Show file differences between staging and the last file version

```git reset [file]```
Remove the file from the staging area

```git commit -m"[descriptive message]"```
Record file snapshots permanently in version history

## Group changes
Name a series of commits and combine completed efforts

```git branch```
List all local branches to the current repository

```git branch [branch-name]```
Create a new branch

```git checkout [branch-name]```
Switch branches with respect to its specific commits

```git merge [branch-name]```
Combine the specified branch’s history into the current one

```git branch -d [branch-name]```
Delete the specified branch


## Refactor filenames
Relocate and remove versioned files

```git rm [file]```
Delete the file from the project prepare the removal for commit

```git rm --cached [file]```
Remove the file from version control but keep in project directory

```git mv [file-original] [file-renamed]```
Change the filename and prepare it for commit

## Supress tracking
Exclude temporary files and paths

```
*.log
build/
temp-*
```
Create a _.gitignore_ text file supress accidental versioning of files and paths matching the specified glob patterns

```git ls-files --other --ignored --exclude-standard```
List all ignore pattern matched files in project

## Save fragments
Shelve and restore incomplete changes

```git stash```
Temporarily store all modified, tracked files

```git stash pop```
Restore the most recent stashed files

```git stash list```
List all shelved changes

```git stash drop```
Discard the most recent stashed files

## Review history
Browse and inspect the evolution of project files

```git log```
List all version history for the current branch

```git log --follow [file]```
List version history for a file and possible renames

```git diff [first-branch]...[second-branch]```
Show content differences between two branches

```git show [commit]```
Output all details of the specified commit

## Redo commits
Erase mistakes and craft replacement history

```git reset [commit]```
Undo all commits after commit while preserving changes

```git reset --hard [commit]```
Discard all history and changes back to specified commit

## Synchronize changes
Register a repository bookmark and exchange version history

```git fetch [bookmark]```
Download all history from the repository bookmark

```git merge [bookmark]/[branch]```
Combine bookmark’s branch into into current local brancha

```git push [alias] [branch]```
Upload all local branch commits to GitHub

```git pull```
Sychronize bookmark history and current branch all at once

---

## GitHub Training
Learn more about using GitHub and Git. Email the Training Team or visit our web site for learning event schedules and private class availability.

* training@github.com
* trianing.github.com
