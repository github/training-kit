# Git Diff

1. Type `git diff`. Let's start with `git diff` without any options. This command compares the changes you have made in the working directory with the staged version of the file.
1. Type `git diff --staged`. When you add the `--staged` option, `git diff` will compare the staged version with the most recent committed version of the file.
1. Type `git diff HEAD`. When you add `HEAD` after the `git diff` command, git combines the changes in your working and staging areas and compares them with the version of the file that is currently designated as the `HEAD`. In most cases, this is the most recent commit in the history of the file.
1. Type `git diff --color-words`. The default for `git diff` is to compare lines of change, but sometimes this is not helpful when we have only made a small change. We can add the option `--color-words` to get a word-by-word comparison instead of the line level comparison.
1. When you are finished, `commit` your file changes.
