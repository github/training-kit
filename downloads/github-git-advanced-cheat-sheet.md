# Advanced Cheat Sheet


## Merge commands

Abort the merge

`$ git merge --abort`

## Stash commands

Save current changes to a stash with a particular name

`$ git stash save <stash name>`

Save current changes to a stash (saves it as stash@{0})

`$ git stash`

Drop the stash at the top of the stack

`$ git stash drop`

Drop the stash at the nth index

`$ git stash drop stash@{n}`

Apply the stash at the nth index and delete from the list

`$ git stash pop stash@{n}`

Apply the stash at the nth index

`$ git stash apply stash@{n}`


## Checkout commands

Discards all the changes

`$ git checkout .`

Create a new branch and checkout to that branch

`$ git checkout -b <branch name>`

Bring a single file to the working space from the stash

`$ git checkout <stash@{0}> — <filename>`

## Patch commands

Apply a patch file (.diff or .patch) to the repo

`$ git apply <patch file>`

## Log commands

Prettify the log history of git

`$ git log --pretty=oneline`
