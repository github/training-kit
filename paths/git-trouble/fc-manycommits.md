---
layout: simple-class
header:
  overlay_image: cover.jpeg
  overlay_filter: rgba(46, 129, 200, 0.6)
title: Too Many (small) Git Commits!
permalink: /git-trouble/too-many-commits
next-page: /git-trouble/git-scenarios
facilitator: false
sidebar:
  nav: "advanced"
main-content: |
  While working on your project, you might have made commits for every little change and created a commit history that looks more like an avalanche of information as opposed to a succinct list of the changes.

  Keep in mind, all exercises expect you to have run the script to create files using the scripts found on the [Set Up Your Environment](/on-demand/git-trouble/git-set-up) page.
pushed: |
    I know that avalanche of commits looks bad, but it doesn't need to be permanent. A lot of people unintentionally create problems by trying to use Git to fix something that has already been pushed to the remote.

    Instead, let it go (for now) and use the [**Squash and Merge**](https://help.github.com/articles/merging-a-pull-request/#merging-a-pull-request-using-the-web-interface) option when you are ready to merge the pull request. This will reduce that avalanche of commits down to a single snowflake on master!   

didnt-push: |
    If you haven't pushed your changes, you can adjust the commits you created without worrying about causing problems for other collaborators:

    1. Ensure you are on the correct branch and enter: `git log --oneline`.
    1. For this example, we are going to combine the commits associated with the addition of files 4, 5, and 6. So identify the SHA-1 associated with the commit for **adding file 3**.
    1. Enter the following: `git reset --soft SHA-1`, where SHA-1 is the SHA-1 associated with the `adding file 3` commit.
    1. Enter `git status`. You should see files 4, 5, and 6; in the Staging Area (aka ready to be committed).
    1. Enter: `git commit -m "Adding files 4, 5, and 6"`.
    1. Enter: `git log --oneline`, your commit history should be modified.

    Congratulations you just combined a bunch of commits into a single commit! Now, none of the other collaborators will know that you made **way** too many commits!

show-me-how:
tell-me-why:
  includes:
    - tell-me-why/trouble-reset.md
---
