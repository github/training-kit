---
layout: cheat-sheet
title: Transitioning from Subversion to Git and GitHub
byline: When migrating from Subversion to Git, there's a vocabulary and command set to learn, in addition to the new capabilities only afforded by a DVCS such as Git. This cheat sheet aims to help you in your transition between the classic Subversion technology and the modern use of Git with the GitHub collaboration platform.
---

# Transitioning from Subversion to Git and GitHub

When migrating from Subversion to Git, there's a vocabulary and command set to learn, in addition to the new capabilities only afforded by a DVCS such as Git. This cheat sheet aims to help you in your transition between the classic Subversion technology and the modern use of Git with the GitHub collaboration platform.

## Vocabulary

| Git command | SVN | SVN equivalent | Git Behavior |
|---|---|---|---|
| `status` | ✓ |  | Report the state of working tree |
| `add` | ✓ |  | Required for each path before making a commit |
| `commit` | ✓ |  | Store prepared changes in local revision history |
| `rm` | ✓ | `rm`, `delete` | Prepare paths for deletion in next commit |
| `mv` | ✓ | `move` | Prepare relocated content for next commit |
| `branch` | ✓ |  | Create local context for commits |
| `checkout` | ✓ |  | Switch branches, or rewrite working tree from commit |
| `merge` | ✓ |  | Join branch histories and changes to working tree |
| `log` | ✓ |  | No network required |
| `clone` | ✗ | `checkout` | Acquire the entire history of a project locally for the first time |
| `push` | ✗ | `commit` | Upload commit history to GitHub/centralized Git host |
| `pull` | ✗ |  | Download and integrate GitHub repository history with local one |
| `fetch` | ✗ |  | Download GitHub repository history with no other action  |

**Key:** ✓ yes, ✗ no

## Leveraging Git's support of SVN
During a VCS change, there may be a need to begin using Git locally while the hosted repositories remain under Subversion control. The `git svn` command and sub-commands provide the ability to interact with Subversion's repositories while using all the benefits of Git on the command line or with graphical clients.

Acquire an SVN repository, with a resulting Git repository locally:

`git svn clone [svn-repo-url]`

**Note:** Keep in mind the *layout* of the SVN repository and whether this follows the standard pattern or not. If the Subversion repository follows the traditional `trunk`, `branches`, and `tags` pattern, supply the `--std-layout` option. When the Subversion repository is non-standard or organized in a more custom structure, the following options switches should be specified during the clone:

* `-T [trunk]` for alternate main source convention
* `-b [branches]` for alternate branch location
* `-t [tags]` for alternate tag structure location

Once the clone operation completes, you can proceed with any standard Git interactions, commands and processes.

## Synchronizing with SVN repository

Once local history within a `git svn clone` repository has occurred, the commits must be published to the Subversion repository.

`git svn dcommit`

If the Subversion repository has commits not yet on the local Git-equivalent, a `rebase` must first be performed.

`git svn rebase`

Keep in mind this rewrites local Git history and your Git commit refs will be different than before the command is run.

## Subversion tooling bridge via GitHub

For users familiar with Subversion toolsets and clients, [GitHub fully supports and bridges communications to the central repository](https://help.github.com/articles/support-for-subversion-clients/). All Subversion commits directed at a GitHub hosted repository will be automatically converted to Git commits.

* [Topics about branch strategies with SVN](https://github.com/blog/1178-collaborating-on-github-with-subversion)
* Patterns for updating `trunk` or GitHub default branch equivalent


## Migrating

The use of `git svn` should be a temporary bridge and complete migration to Git repositories for both local and upstream destinations is optimal.

The most lightweight approach is by utilizing `git svn` as a one-time conversion from Subversion to Git repository. To migrate a Subversion repository, several aspects must be ensured:

* Subversion commits cease prior to initiating the process
* One machine serves as intermediary during conversion
* GitHub "upstream" repository initialized and ready to receive history, branches, tags

### Git-SVN conversion method
* Create email/username mapping file
* Begin `git svn clone`
* Add `git remote add origin [GitHub-URL]`

Run each `ref` publish separately:

* Run `git push --all origin`
* Run `git push --tags origin`

Or upload all `ref`s (branches, tags,) to upstream:

* `git push --mirror origin`

### SVN2Git method

* Install Ruby Gem [SVN2Git](https://github.com/nirvdrum/svn2git)
* Identify the projects in the Subversion repository
* Run `svn list [svn-repo-url]`
* Start `svn2git [repo-root|repo-root/project]`

Considerations on migration:

* Convert "flat" history across all projects
* Utilize Git `filter-branch --subdirectory-filter`
* Migrate on a project-by-project basis
* Use `--trunk`, `--nobranches`, `--notags` or `--rootistrunk` for non-standard layouts
* Limit history from starting point ``--revision <<starting_rev>>``, or range `--revision <<start:end>>`

https://github.com/nirvdrum/svn2git

### GitHub importer (Porter) method
* [Read the import tool documentation](https://help.github.com/articles/importing-from-other-version-control-systems-to-github/)
* Expose the Subversion repository publicly
* [Visit the GitHub import tool page](https://porter.github.com/new)
* Point the import tool at your Subversion, TFS, or Mercurial repository
* Create the username mappings
* Wait for the tool to work in the background and complete the conversion
