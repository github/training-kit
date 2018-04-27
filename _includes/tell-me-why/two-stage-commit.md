## The Two Stage Commit

After you have finished making your changes, it is time to commit them. When working from the command line, you will need to be familiar with the idea of the two stage commit.

![two stage commit: three empty boxes representing the working directory, staging directory, and committed history directory]({{site.baseurl}}/images/two-stage-commit-a.jpg){: .align-center}

When you work locally, your files exist in one of four states. They are either untracked, modified, staged, or committed.

![two stage commit: three boxes representing the working directory, staging directory, and committed history directory with new and modified work shown in working directory]({{site.baseurl}}/images/two-stage-commit-b.jpg){: .align-center}

An *untracked* file is one that is not currently part of the version controlled directory. These are typically new files.

*Modified* files are ones that Git already knows about, they have at least one other version in history.

To add these files to version control, you will create a collection of files that represent a discrete unit of work. We build this unit in the staging area.

![two stage commit: three boxes representing the working directory, staging directory, and committed history directory with work shown in the staging directory]({{site.baseurl}}/images/two-stage-commit-c.jpg){: .align-center}

When we are satisfied with the unit of work we have assembled, we will commit everything in the staging area.

![two stage commit: three boxes representing the working directory, staging directory, and committed history directory with work shown in the committed history directory]({{site.baseurl}}/images/two-stage-commit-d.jpg){: .align-center}

In order to make a file part of the version controlled directory we will first do a `git add` and then we will do a `git commit`.

![two stage commit: showing command git add between working directory and staging directory, and git commit between staging directory and committed history directory]({{site.baseurl}}/images/two-stage-commit-e.jpg){: .align-center}
