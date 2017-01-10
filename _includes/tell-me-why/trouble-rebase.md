[//]: # "This is used in the Git Out of Trouble course"

## Rebase
A rebase and a merge are essentially the same thing. When you want to combine your changes from two branches into one, you have a choice to use either process. The difference is found in the history that your project leaves behind.

When you `merge` two branches, a merge commit is created. This is a commit that identifies that the changes on the `test` branch were applied to the `master` branch (using our repo branches as an example). This would look something like having two traffic lanes merge into one at a single point (or commit in Git terminology).

Alternatively, if you were to `rebase` your `test` branch with the `master` branch, you would be placing the commits made on the `test` branch along the linear (straight line) history of the `master branch`.

Instead of just describing the difference between a `merge` commit and a `rebase`, look at these images.

  ![](/on-demand/images/git-merge.png){: .align-center}

In the above image, the `test` and `master` branches were merged at the `7b67` 'merge' commit. During development `test` was created at the `0d7b` commit and began creating changes on the `test` branch. Meanwhile, the `master` branch also got a handful of commits. When the `merge` command was used the commits that occurred between on both branches since the `0d7b` commit were combined at the `7b67` merge commit.

  ![](/on-demand/images/git-rebase.png){: .align-center}

Looking at the above example, you can see that again the `test` branch was created at the `0d7b` commit. Changes were made on both the `master` and `test` branches. Once the changes on the `test` branch were ready to be merged with the `master` branch, it was `rebase`d onto the `master` branch. You can see that the commits that occurred on the `test` branch were recreated on the `master` branch and given new commit SHA-1 hashes.

To sum it up:

  - Quick delivery of feature branches? Merge
  - Clarity of History? Rebase
