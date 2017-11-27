---
layout: cheat-sheet
title: Handling Dependencies with Submodules and Subtrees
byline: Submodules and subtrees are git tools that allow subprojects to be included as a subdirectory within a project. The implementation of each is very different.
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


    git subtree add --prefix=example-submodule https://github.com/githubtraining/example-submodule master --squash

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

    git diff --cached example-submodule
    git diff --cached --submodule example-submodule
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

Anyone who clones will need to:

    git clone --recursive URL

Anyone who already has a local copy of the repo will need to:

    git submodule update --init

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

    git submodule update --remote

If you have more than one submodule, you can add the name of the submodule to the end of the command to specify which subproject to update.

By default, this will update the submodule and check out to the default branch of the submodule remote.

You can change the default branch with:

    git config -f .gitmodules submodule.example-submodule.branch other-branch

{% endcapture %}

{% capture subtree %}

### Subtree
    git subtree pull --prefix=example-submodule https://github.com/githubtraining/example-submodule master --squash

You can shorten the command by adding the subtree URL as a remote:

    git remote add sub-remote https://github.com/githubtraining/example-submodule.git

You can add/pull from other refs by replacing master with the desired ref (e.g. stable, v1.0).

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1>Making Changes to a Subproject</h1>

In most cases, it is considered best practice to make changes in the subproject repository and pull them in to the parent project. When this is not practical, follow these instructions:
</div>

{% capture submodule %}
### Submodule

Access the submodule directory and create a branch:

    cd example-submodule
    git checkout -b branch-name master

Changes require two commits, one in the subproject repository and one in the parent repository.

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
    git subtree push --prefix= example-submodule https://github.com/githubtraining/example-submodule master
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

Show a short summary of submodule changes in your status message:

    git config status.submoduleSummary true

See the diffs in all of your submodules:

    git config alias.sdiff "git diff; git submodule foreach 'git diff'"
{% endcapture %}

{{ configs | markdownify }}
</div>
