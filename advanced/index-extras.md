This curriculum will be your companion to the GitHub Advanced class taught by the GitHub Training Team and other educational groups. In this course, you'll explore strategies for branch and history rewriting, temporary storing and recovery techniques, and Git technology mechanics for faster problem solving.


* Linked list of commits
* First commit has `nil` parent
* Integrity checking with `git gc`


{% capture slide %}
### Branching strategies
{% endcapture %}
{% include slide-section %}

#### Summary
* GitHub Flow
* Branch-per-feature
* Compatibility with Pull Requests
* git-flow
* Long-term release support

#### Details
These are called Branching Strategies, but are just as easily called *Team Collaboration Techniques* in an abstract discussion of version control.


* Git's Model
    * [Git Maintenance Notes](https://sites.google.com/site/maintnotes/)
    * [Git Workflows](https://www.kernel.org/pub/software/scm/git/docs/gitworkflows.html)
    * [Git's Source Code](https://github.com/git/git)
    * Branches
        * master
        * maint
        * next (graduation from pu)
        * pu (can be rebased)
        * html
        * man
    * _"A trivial and safe enhancement goes directly on top of 'master'."_
    * _"The two branches "master" and "maint" are never rewound, and "next" usually will not be either"_
    * _"When a topic that was in 'pu' proves to be in testable shape, it graduates to 'next'."_




{% capture slide %}
### Applying branching patterns
{% endcapture %}
{% include slide-section %}

#### Summary
* Breaking features down into pieces
* Feedback early on Pull Requests
* @mentioning teams instead of individuals
* Continuous integration

#### Further reading
[Validated Build Promotions with Git, GitHub, and Jenkins](http://www.youtube.com/watch?v=Gd8OfAmKkMQ)

<iframe width="640" height="480" src="//www.youtube-nocookie.com/embed/Gd8OfAmKkMQ?rel=0" frameborder="0" allowfullscreen></iframe>

[Git and GitHub Workflows at the Utah JUG](https://speakerdeck.com/matthewmccullough/git-and-github-workflows-at-the-utah-jug)

<script async class="speakerdeck-embed" data-id="111dc3201094013231b066d414c0f9a8" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

{% capture slide %}
### Git-core GUIs
{% endcapture %}
{% include slide-section %}


#### Summary



{% capture slide %}
### Mastering Shortcuts


{% capture slide %}

{% endcapture %}
{% include slide-section %}




{% capture slide %}
### Branch best practices
{% endcapture %}
{% include slide-section %}

* Pros/cons of collapsing commits during merge
* Relation to branching strategies and deliverable expectations
* Checking merge state
* Cleaning up branches

```shell
$ git merge --squash [branch]
```

Querying commit existence:

```shell
$ git branch --contains [commit]
```

List branches with this merged in:

```shell
$ git branch --merged [commit]
```

List branches without this merged in:

```shell
$ git branch --no-merged [commit]
```



{% capture slide %}
### Navigating History
{% endcapture %}
{% include slide-section %}

#### Further reading
* [Git revision specificat
ion syntax](https://www.kernel.org/pub/software/scm/git/docs/gitrevisions.html)



{% capture slide %}
### Incorporating History
{% endcapture %}
{% include slide-section %}

#### More examples
```shell
$ git cherry-pick [ref]
$ git cherry-pick [ref1] [ref2]

$ git branch --contains [noncherrypickedref]
$ git cherry [upstreambranch]

+ bd650366fa8c39f03cfc9dd5290f60e7331a631d
+ ea62f9f6a7cef55a8a3028e617d28819408a63c4
+ 874628c0e405390130d6457776273451bb66d3a8
+ 046a9b8d0f2363361e45cfbc7e0f6d82968f2f9f
+ 315fe16408f9a9080527e00df3d9a8c1ba0dc97a
```

{% capture slide %}
### Rewriting history with rebase
{% endcapture %}
{% include slide-section %}




#### Fixing Branches
* This mode of rebase change where branch history begins
* Moving blocks of history around

To change which base a branch is placed upon:

```bash
$ git rebase --onto <newbase> <upstream> <HEAD|branch>
```

#### Further reading
* [Rebasing chapter of Pro Git book](http://git-scm.com/book/ch3-6.html)
* [Git rebase --onto section of Pro Git book](http://git-scm.com/book/ch3-6.html#More-Interesting-Rebases)



{% capture slide %}
### Cutting Releases
{% endcapture %}
{% include slide-section %}




{% capture slide %}
### Reviewing & synchronizing
{% endcapture %}
{% include slide-section %}




#### Maintaining, customizing remotes
* Remove non-matching _local_ remote branches
* Remove non-matching remote upstream branches
* Remove only remote upstream branch

```shell
# Discard remote local branches
# not present on upstream
$ git fetch --prune

# Delete an upstream branch
$ git push origin :<branch-name>
```

#### Customizing Interaction
* Specification for retrieval and pushing
* Implied on fetch, pull, and push
* Altered by option switches like `--tags`
* Stored in `.git/config`
* Ability to retrieve Pull Request branches

```shell
$ git fetch [repo-url] [source]:[destination]
$ git config --add remote.[upstream].fetch "+refs/pull/*/head:refs/remotes/[upstream]/pull/*"
```


{% capture slide %}
### Aggregating repositories
{% endcapture %}
{% include slide-section %}

##### Dependencies with subtree

* Alternative to submodule
* All files available advantage

First a remote connecting to the dependency and a branch in which to read from is needed.

```shell
$ git remote add
    [dependency-bookmark]
    [repository-url]

$ git fetch [dependency-bookmark]

$ git branch [branch]
    [dependency-bookmark]/[branch]
```

* Notice the working tree content differs between the dependency and the main project.
* Establishing the association of a subdirectory and the branch is necessary when creating the association.
* Whenever the branch needs updating, switch to it, retrieve the changes and commit them against the main project branch(es).

```shell
$ git read-tree
  --prefix=[directory]/
    -u [branch]
```

```shell
$ git merge --squash
  -s subtree [branch]
```








{% capture slide %}
### Signing work
{% endcapture %}
{% include slide-section %}

#### By commit message
Adds a rigorously formatted text block to commit messages:












{% capture slide %}
### Cleaning
{% endcapture %}
{% include slide-section %}




{% capture slide %}
### Diff & merge tool
{% endcapture %}
{% include slide-section %}

#### Summary
* [P4Merge](http://www.perforce.com/downloads/Perforce/20-User)
* Opendiff
* KDiff
* Kaleidoscope
* Vimdiff
* Meld

#### Details
Difftool execution:

```
$ git difftool --tool-help
$ git config diff.tool <tool-name-in-config>
$ git config difftool.prompt false
$ git config difftool.<tool-name>.cmd "<path [args]>"
```

A sample `.gitconfig` file:

```
[diff]
    tool = p4merge
[difftool "p4merge"]
    cmd = "/Applications/p4merge.app/Contents/Resources/launchp4merge $LOCAL $REMOTE"
[difftool]
    prompt = false
```


Mergetool execution:

```
$ git config --global merge.tool p4mergetool

$ git config --global mergetool.p4mergetool.cmd "/Applications/p4merge.app/Contents/Resources/launchp4merge \$PWD/\$BASE \$PWD/\$REMOTE \$PWD/\$LOCAL \$PWD/\$MERGED"

$ git config --global mergetool.p4mergetool.trustExitCode false

$ git config --global mergetool.keepBackup false
```

A sample `.gitconfig` file:

```
[merge]
    tool = Kaleidoscope
[mergetool "p4mergetool"]
    cmd = " /Applications/p4merge.app/Contents/Resources/launchp4merge $PWD/$BASE $PWD/$REMOTE $PWD/$LOCAL $PWD/$MERGED"
    keepBackup = false
```


{% capture slide %}
### Refspecs
{% endcapture %}
{% include slide-section %}

##### Git Refspec Documentation
* [Git `rev-parse` command and reference specifications](https://www.kernel.org/pub/software/scm/git/docs/git-rev-parse.html)
* [ProGit book chapter on refspecs](http://git-scm.com/book/en/Git-Internals-The-Refspec)

