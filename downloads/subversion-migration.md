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

## SVN repository, Git locally
During a VCS change, there may be a need to begin using Git locally while the hosted repositories remain under Subversion control. The `git svn` command and sub-commends provide the ability to interact with Subversions repositories while using all the benefits of Git on the command line or with graphical clients.

Acquire an SVN repository, with a resulting Git repository locally:

`git svn clone [svn-repo-url]`

**Note:** Keep in mind the *layout* of the SVN repository and whether is follows the standard pattern or not. If the Subversion repository is non-standard, with trunk, branches, or tags in uniquely names or structured folders, the following options switches should be used:

* `-T [trunk]` for alternate main source convention
* `-b [branches]` for alternate branch location
* `-t [tags]` for alternate tag structure location

Once the clone operation completes, you can proceed with any standard Git interactions, commands and processes.

## Synchronizing with SVN repository

Once local history within a `git svn clone` repository has occurred, the commits must be published to the Subversion repository.

`git svn dcommit`

If the Subversion repository has commits not yet on the local Git-equivalent, a `rebase` must first be performed.

`git svn rebase`

Keep in mind this rewrites history and your Git commit refs will be different than before the command is run.

## Subversion tooling bridge via GitHub

For users familiar with Subversion toolsets and clients, GitHub fully supports and bridges communications for the central repository. All Subversion commits directed to a GitHub hosted repository will automatically be converted to Git commit history.

* [Topics about branch strategies with SVN](https://github.com/blog/1178-collaborating-on-github-with-subversion)
* Patterns for updating `trunk` or GitHub default branch equivalent


## Migrating

The use of `git svn` should be a temporary bridge and complete migration to Git repositories for both local and upstream destinations is optimal.

The most lightweight approach is by utilizing `git svn` as a one-time conversion from Subversion to Git repository, rather than a long-running liaison between systems. To migrate a Subversion repository, several aspect must be ensured:

* Subversion commits cease prior to initiating the process
* One machine services as intermediary during conversion
* GitHub "upstream" repository setup for receiving history, branches, tags

### Git-SVN method
TBD

### SVN2Git method
https://github.com/nirvdrum/svn2git
