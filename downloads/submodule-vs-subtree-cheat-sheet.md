---
layout: cheat-sheet
redirect_to: false
title: Handling Dependencies with Submodules and Subtrees
byline: Submodules and subtrees are Git tools that allow subprojects to be included as a subdirectory within a project. The implementation of each is very different.
leadingpath: ../../
---

<div class="col-md-12">
<h1>Adding a New Subproject</h1>
</div>

{% capture submodule %}

### Submodule

    git submodule add https://github.com/githubtraining/example-submodule

    git commit -m "adding new submodule"

The `submodule add` command adds a new file called `.gitmodules` along with a subdirectory containing the files from `example-submodule`. Both are added to your index (staging area) and you simply need to commit them. The submodule's history remains independent of the parent project.

{% endcapture %}

{% capture subtree %}

### Subtree

    git subtree add --prefix=example-submodule https://github.com/githubtraining/example-submodule main --squash

The subtree command adds a subdirectory containing the files from `example-submodule`. The most common practice is to use the `--squash` option to combine the subproject's history into a single commit, which is then grafted onto the existing tree of the parent project. You can omit the `--squash` option to maintain all of the history from the designated branch of the subproject.

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Viewing a Diff of the Subproject</h1>
</div>

{% capture submodule %}

### Submodule

To view a diff of the submodule:

```bash
# show changes to the submodule commit
git diff example-submodule
# show oneline log of new commits in the submodule
git diff --submodule example-submodule
# show changes to the files in the submodule
git diff --submodule=diff
```

{% endcapture %}

{% capture subtree %}

### Subtree

No special command required

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Cloning a Repository with a Subproject</h1>
</div>

{% capture submodule %}

### Submodule

To clone a repository along with its submodules:

    git clone --recurse-submodules URL

If you forgot `--recurse-submodules`, you can clone and initialize all submodules:

    git submodule update --init --recursive

Adding `--recursive` is only required if any submodule itself has submodules.

{% endcapture %}

{% capture subtree %}

### Subtree

No special command required

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Pulling in Superproject Updates</h1>
</div>

{% capture submodule %}

### Submodule

By default, the submodule repository is fetched, but not updated when you run `git pull` in the superproject. You need to use `git submodule update`, or add the `--recurse-submodules` flag to `pull` :

```bash
git pull
git submodule update --init --recursive
# or, in one step (Git >= 2.14)
git pull --recurse-submodules
```

`--init` is required if the superproject added new submodules, and `--recursive` is needed if any submodule itself has submodules.

If ever the superproject changes the URL of the submodule, a separate command is required:

```bash
# copy the new URL to your local config
git submodule sync --recursive
# update the submodule from the new URL
git submodule update --init --recursive
```

`--recursive` is only needed if any submodule itself has submodules.

{% endcapture %}

{% capture subtree %}

### Subtree

No special command required

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Changing branches</h1>
</div>

{% capture submodule %}

### Submodule

By default, the submodule working tree is not updated to match the commit recorded in the superproject when changing branches. You need to use `git submodule update`, or add the `--recurse-submodules` flag to `switch` :

```bash
git switch <branch>
git submodule update --recursive
# or, in one step (Git >= 2.13)
git switch --recurse-submodules <branch>
```

{% endcapture %}

{% capture subtree %}

### Subtree

No special command required

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Pulling in Subproject Updates</h1>
</div>

{% capture submodule %}

### Submodule

```bash
# Update the submodule repository
git submodule update --remote
# Record the changes in the superproject
git commit -am "Update submodule"
```

If you have more than one submodule, you can add the path to the submodule at the end of the `git submodule update --remote` command to specify which subproject to update.

By default, `git submodule update --remote` will update the submodule to the latest commit on the `main` branch of the submodule remote.

You can change the default branch for future calls with:

```bash
# Git >= 2.22
git submodule set-branch other-branch
# or
git config -f .gitmodules submodule.example-submodule.branch other-branch
```

{% endcapture %}

{% capture subtree %}

### Subtree

    git subtree pull --prefix=example-submodule https://github.com/githubtraining/example-submodule main --squash

You can shorten the command by adding the subtree URL as a remote:

    git remote add sub-remote https://github.com/githubtraining/example-submodule.git

You can add/pull from other refs by replacing `main` with the desired ref (e.g. `stable`, `v1.0`).

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Making Changes to a Subproject</h1>

In most cases, it is considered best practice to make changes in a separate clone of the subproject repository and pull them in to the parent project. When this is not practical, follow these instructions:
</div>

{% capture submodule %}

### Submodule

Access the submodule directory and create a branch:

    cd example-submodule
    git switch -c branch-name main

Changes require two commits, one in the subproject repository and one in the parent repository.
Don't forget to push in both the submodule and the superproject!

{% endcapture %}

{% capture subtree %}

### Subtree

No special command required, changes will be committed on the parent project branch.

It is possible to create commits mixing changes to the subproject and the parent project, but this is generally discouraged.
{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Pushing Changes to the Subproject Repository</h1>
</div>

{% capture submodule %}

### Submodule

While in the submodule directory:

    git push

Or while in the parent directory:

    git push --recurse-submodules=on-demand

{% endcapture %}

{% capture subtree %}

### Subtree

    git subtree push --prefix=example-submodule https://github.com/githubtraining/example-submodule main
{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Helpful Configs for Submodules</h1>

{% capture configs %}
Always show the submodule log when you diff:

    git config --global diff.submodule log

Show a short summary of submodule changes in your `git status` message:

    git config --global status.submoduleSummary true

Make `push` default to `--recurse-submodules=on-demand`:

    git config --global push.recurseSubmodules on-demand

Make all commands (except `clone`) default to `--recurse-submodules` if they support the flag (this works for `git pull` since Git 2.15):

    git config --global submodule.recurse true

{% endcapture %}

{{ configs | markdownify }}
</div>
