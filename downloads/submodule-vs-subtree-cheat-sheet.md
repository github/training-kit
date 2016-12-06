# Handling Dependencies with Submodules and Subtrees

Submodules and subtrees are git tools that allow subprojects to be included as a subdirectory within a project. The implementation of each is very different.

### Adding a New Subproject

| Submodule | Subtree |
| ---------- | ---------- |
| `git submodule add https://github.com/githubtraining/example-submodule` <br> `git commit -m “adding new submodule”`| `git subtree add --prefix=example-submodule https://github.com/githubtraining/example-submodule master --squash` |
| The submodule command adds a new file called `.gitmodules` along with a sub-directory containing the files from `example-submodule`. Both are added to your index and you simply need to commit them. The subproject's history remains independent of the container project. | The subtree command adds a sub-directory containing the files from `example-submodule`. The `--squash` option combines the sub-project history into a single commit and grafts it onto your existing tree. You can omit the squash option to maintain all of the history from the designated branch of the subtree. |

### Viewing a Diff of the Subproject

| Submodule | Subtree |
| ---------- | ---------- |
| To view a diff of the submodule: <br> `git diff --cached example-submodule` <br> `git diff --cached --submodule example-submodule` | No special command required |

### Cloning a Repository with a Subproject

| Submodule | Subtree |
| ---------- | ---------- |
| Anyone who clones will need to: <br> `git clone --recursive URL` | No special command required |
| Anyone who already has a local copy of the repo will need to: <br> `git submodule update --init` | No special command required |

### Pulling in Subproject Updates

| Submodule | Subtree |
| ---------- | ---------- |
| `git submodule update --remote` | `git subtree pull --prefix=example-submodule https://github.com/githubtraining/example-submodule master --squash` |
| If you have more than one submodule, you can add the name of the submodule to the end of the command to specify which submodule to update. | You can shorten the command by adding the submodule as a remote: <br> `git remote add sub-remote https://github.com/githubtraining/example-submodule.git` |
| By default, this will update the subproject and check out to the default branch of the subproject remote. <br> You can change the default branch with: <br> `git config -f .gitmodules submodule.example-submodule.branch other-branch`| You can add/pull from other refs by replacing `master` with the desired ref (e.g. stable, v1.0). |

### Making Changes to a Subproject

In most cases, it is considered best practice to make changes in the subproject repository and pull them in to the container project. When this is not practical, follow these instructions:

| Submodule | Subtree |
| ---------- | ---------- |
| You will need to cd into the subproject directory and create a branch: <br>`cd example-submodule` <br> `git checkout -b branch-name master` | No special command required, changes will be committed on the container project branch. |
| Changes require two commits, one in the submodule and one in the container repository. | It is possible to create commits mixing changes to the subproject and the container project, but this is generally discouraged. |

### Pushing Changes to the Subproject Repository

| Submodule | Subtree |
| ---------- | ---------- |
| While in the subproject directory: `git push` <br> **OR** <br> While in the main project: `git push --recurse-submodules=on-demand` | `git subtree push --prefix= example-submodule https://github.com/githubtraining/example-submodule master` |

### Helpful Configs

#### Submodules

Always show the submodule log when you diff:
`git config --global diff.submodule log`

Show a short summary of submodule changes in your status message:
`git config status.submoduleSummary true`

See the diffs in all of your submodules:
`git config alias.sdiff "git diff; git submodule foreach 'git diff'"`
