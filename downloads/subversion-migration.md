# Subversion to Git migration

From migrating your Subversion content to Git repositories to understanding both shared and distinct vocabularies of the technologies.


## Vocabulary

| Git command | SVN | SVN equivalent | Behavior |
|---|---|---|---|
| `status` | ✓ |  | State of working tree |
| `add` | — |  | Required before commit |
| `commit` | — |  |  |
| `rm` | ✓ |  |  |
| `mv` | ✓ |  |  |
| `branch` | ✗ |  | Create local context for commits |
| `checkout` | — |  | Switch branches, or rewrite working tree from commit |
| `merge` | ✓ |  | Join branch histories and changes to working tree |
| `log` | — |  | No network required |
| `clone` | ✗ | `checkout` |  |
| `push` | ✗ | `commit` |  |
| `pull` | ✗ |  |  |
| `fetch` | ✗ |  |  |
| `rebase` | ✗ |  | Preserve changes |

**Key:** ✓ yes, ✗ no, — partial


## Migration
Converting SVN projects into Git repositories.

* Git-SVN
* SVN2Git

## Interoperation
How GitHub and SVN clients work together.

## Vocabulary
TBD



## Creation

Create a new master repository for [n] many projects
`svnadmin create [repository-name]`

Import source code into a new sub directory of the svn repository
`svn import [dir-project] [svn-repo/dir-project-name]`

**Question:** How does import work against a SVN repo that has many sub projects and many trunks?

`svn checkout [repo-path]/[project]`
`svn log`


## Versioning

`svn add [path]` only used for new content needing tracking. Not every time modifications occur like with Git.

## Git interoperability access

`git svn clone [svn-repo-url]`

* `-T [trunk]` for alternate main source convention
* `-b [branches]` for alternate branch location
* `-t [tags]` for alternate tag structure location

**Note:** Keeping in mind the *layout* of the SVN repository and whether is follows the standard pattern or not.


## Keeping in sync

Updating a Git repo from an SVN repository

`git svn rebase`

**Note:** Keep in mind this rewrites history, so your Git commit refs will potentially be different than before the command is run if you had local commits which had diverges from the commits and shared point in history of the upstream SVN repository.

## Back and forth
Interacting between SVN repos and Git repos
