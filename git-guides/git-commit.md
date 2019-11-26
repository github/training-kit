<!--
# Git Commit - One page that will set the formula for various git commands to follow:

- Individual command page – will follow command page formula.

# General Specifications

- Title: Git Commit – GitHub Git Guide
- URL: /git-guide/git-commit/
- Meta Description: The git commit command will save all staged changes, along with a brief description from the user, in a “commit” to the local repository.
- Focus Keyword: Git Commit (18,100)
- Secondary Keywords: git undo last commit (6,600), git commit amend (5,400), how to git commit (170), git revert commit (12,100), git undo commit (12,100), git commit example (720), git commit message example (140)
- Word Count: 800+
- The focus keyword should be in the page title, url, h1 and throughout body copy.
- The secondary keywords are semantic variations of the focus keyword and are great to use in h2, h3 and other headings.
- Written from a marketing perspective, should have an informal voice and not be exclusively technical.
- Doesn’t need to exhaustively cover the technical intricacies of the specific git command – should be beginner friendly and include a lot of the “why” and a general overview of the “how”. Can link out to more in-depth technical resources where appropriate.

-->

# Git Commit

Commits are snapshots of your entire repository at specific times. You should make new commits often, based around logical units of change. Over time, commits should tell a story of the history of your repository and how it came to be the way that it currently is.

<!--- Link related terms here in some way – spiderweb navigation to help users easily answer the next logical question after searching “Git Commit”. Potentially link to roll up section.-->

## How Git Commit Works

Remember, commits happen on the branch that you're currently checked out to (wherever HEAD is pointing) so it's always a good idea to run `git status` before making a commit, to check that you're checked-out to the branch that you intend to be.

That includes new changes that have been staged, and existing files that are not changed. Commits are lightweight SHA hashes, and should be made often. Commits are the building blocks of "save points" within Git's version control.

- Layman’s terms breakdown of what Git Commit is doing.
- What are the advantages of Git Commit?
- What problems does using Git Commit solve?

## How to Use Git Commit

### Common usages and options for Git Commit.

Commits have two phases to help you craft commits properly. Commits should be logical, atomic units of change that represent a specific idea. But, not all humans work that way. You may get carried away and end up solving two or three problems before you remember to commit! That's OK - Git can handle that. Once you're ready to craft your commits, you'll use `git add <FILENAME>` to specify the files that you'd like to "stage" for commit. Without adding any files, the command `git commit` won't work. Git only looks to the staging area to find out what to commit. Staging, or adding, files, is possible through the command line, and also possible with most Git interfaces like GitHub Desktop by selecting the lines or files that you'd like to stage.

You can also use a handy command, `git add -p`, to walk through the changes and separate them out, even if they're in the same file.

- Git commit
- Git commit -m
- Git commit -am
- Other helpful commonly used options, avoiding getting into too many technical specifics.
- Can link out to other more technical resources (help docs etc.).

### How to Undo Commits in Git

- A short summary of how to undo commits in git.
- This section is specifically aligned with the search term “git undo commit”.

### Updating Commits With Git Commit Amend

- A short summary of how to amend commits in git.
- This section is specifically aligned with the search term “git commit amend”.

## Examples of Git Commit


Once you've staged the files that you want to include in your commit, you're ready. Whether you commit in a tool like GitHub Desktop, or through your command line, the commit message is important. Commit messages should be short and descriptive of your change. If you are looking through your repository's history, you'll be guided by the commit messages, so they should tell a story. Commits in the command line can include the message with the following format:

- `git commit -m "commit message here"`

Commit messages should be present tense and directive, like the following examples:

- `git commit -m "create file structure for Git guides"`
- `git commit -m "translate Git cheat sheet into German"`
- `git commit -m "update broken URL to Git resources"`

If you'd like to include more context in your commit messages, you can have an extended commit message.

- 3 or 4 examples of how Git commit is commonly used.
- This section is specifically aligned with the search term “git commit example”.
- Include the keyword “git commit message example” here if possible.

Commit messages include lots of metadata in addition to the message, like the author, timestamp, and more.
