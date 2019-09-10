---
layout: cheat-sheet
redirect_to: false
title: GitHub Actions Cheat Sheet
byline: GitHub Actions enables you to create custom software development lifecycle workflows directly in your GitHub repository.
leadingpath: ../../
---

{% capture colOne %}
## About GitHub Actions
GitHub Actions gives you the flexibility to build an automated software development lifecycle workflow. You can write individual tasks, called actions, and combine them to create a custom workflow. Workflows are custom automated processes that you can set up in your repository to build, test, package, release, or deploy any code project on GitHub and can be run in Linux, macOS, Windows, and containers on GitHub-hosted servers. Actions built by community members can be included in your own workflows, and when you're ready you can build actions to share with the GitHub community!

### GitHub Actions Documentation
Full documentation for GitHub Actions can be found on GitHub at [https://help.github.com/en/categories/automating-your-workflow-with-github-actions](https://help.github.com/en/categories/automating-your-workflow-with-github-actions)

## Syntax
Workflow files use YAML syntax, and must have either a .yml or .yaml file extension. You must store workflow files in the `.github/workflows` directory of your repository.

### Workflow `name`
The name of your workflow. GitHub displays the names of your workflows on your repository's actions page. If you omit this field, GitHub sets the `name` to the workflow's filename.

### `on` Event
Required The name of the GitHub event that triggers the workflow. You can provide a single event string, array of events, or an event configuration map that schedules a workflow or restricts the execution of a workflow to specific files, tags, or branch changes.

```
# Trigger on push
on: push
```

```
# Trigger the workflow on push or pull request
on: [push, pull_request]
```

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

### `jobs`
A workflow run is made up of one or more jobs. Jobs run in parallel by default. To run jobs sequentially, you can define dependencies on other jobs using the `jobs.<job_id>.needs` keyword. Each job runs in a fresh instance of the virtual environment specified by runs-on.

### `runs-on`
Inside of the `jobs` collection, this is the type of virtual host machine to run the job on. Each job runs with a fresh instance of the virtual environment specified in by `runs-on`.

Available virtual machine types are:

- `ubuntu-latest`, `ubuntu-18.04`, or `ubuntu-16.04`
- `windows-latest`, `windows-2019`, or `windows-2016`
- `macOS-latest` or `macOS-10.14`

### `steps`
A job contains a sequence of tasks called `steps`. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry. Not all steps run actions, but all actions run as a step. Each step runs in its own process in the virtual environment and has access to the workspace and filesystem. Because steps run in their own process, changes to environment variables are not preserved between steps. GitHub provides built-in steps to set up and complete a job.

### `name` and `uses`
The `name` scalar inside of the `steps` collection is simply for displaying the job in GitHub. It's not required but it makes it easier to follow.

The `uses` scalar inside of the `steps` collection selects an action to run as part of a step in your job. You can use an action defined in the same repository as the workflow, a public repository, or in a published Docker container image. The repositories are specified in the syntax `owner/repo@reference`. For example:

```
steps
  - uses: actions/setup-node@master
```

### `run`
Run command line programs using the operating system's shell. If you do not provide a name, the `steps` collection `name` will default to the run command. Commands run using non-login shells by default.

Each run keyword represents a new process and shell in the virtual environment. When you provide multi-line commands, each line runs in the same shell:

```
- name: Install Dependencies
  run: npm install
```

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
