# Advanced Cheat Sheet


## Merge commands

Abort the merge

```$ git merge --abort```

## Stash commands

Save a stash with a particular name

```$ git stash save <stash name>```

Delete a particular stash

```$ git stash pop <stash name>```


## Checkout commands

Discards all the changes

```$ git checkout .```

Create a new branch and checkout to that branch

```$ git checkout -b <branch name>```

Bring a single file to the working space from the stash

```$ git checkout <stash@{0}> — <filename>```

## Patch commands

Apply a patch file (.diff or .patch) to the repo

```$ git apply <patch file>```

## Log commands

Prettify the log history of git

```$ git log --pretty=oneline```
