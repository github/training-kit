This class uses the command line, so first you will need to find and open your terminal. For Windows, we recommend using [**Git Shell** or **Git Bash**](https://git-scm.com/download/windows). For Mac or Linux, your default terminal will work.

Before you can work with Git on the command line, you will need to set some basic configurations:

1. Open your terminal application.
2. Type `git --version` to ensure Git is installed. Version `1.9.5` or :arrow_up: is :+1:. Check [git-scm.com](https://git-scm.com/) to download the latest version.
3. Type `git config --global user.name "USER NAME"`, replacing `USERNAME` with your first and last name.
4. Type `git config --global user.email "EMAIL"`, replacing `EMAIL` with the email account associated with your GitHub account.
5. Depending on your operating system, set the `core.autocrlf`.
  - <i class="fa fa-windows" aria-hidden="true"></i> **Windows users:** Type `git config --global core.autocrlf true`.
  - <i class="fa fa-apple" aria-hidden="true"></i> <i class="fa fa-linux" aria-hidden="true"></i> **Mac & Linux users:** Type `git config --global core.autocrlf input`.
6. Type `git config --list` to see your current configurations.
