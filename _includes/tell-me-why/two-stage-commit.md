## The Two Stage Commit

Add and commit files on the command line.

![](/on-demand/images/two-stage-commit-a.jpg){: .align-center}

After you have finished making your changes, it is time to commit them. When working from the command line, you will need to be familiar with the idea of the two stage commit.

![](/on-demand/images/two-stage-commit-b.jpg){: .align-center}

When you work locally, your files exist in one of four states. They are either untracked, modified, staged, or committed.

An untracked file is one that is not currently part of the version controlled directory. Typically, a file is identified as untracked if it is a new file, or a file that has been added to the folder where your local files are stored.

![](/on-demand/images/two-stage-commit-c.jpg){: .align-center}

To add these files to version control, you will create a collection of files that represent a discrete unit of work. We build this unit in the staging area.

![](/on-demand/images/two-stage-commit-d.jpg){: .align-center}

When we are satisfied with the unit of work we have assembled, we will commit everything in the staging area.

![](/on-demand/images/two-stage-commit-e.jpg){: .align-center}

In order to make a file part of the version controlled directory we will first do a `git add` and then we will do a `git commit`.
