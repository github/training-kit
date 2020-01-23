---
layout: cheat-sheet
redirect_to: false
title: GitHub Bash Cheat Sheet
byline: Bash is the GNU Project's shell. Bash is the Bourne Again SHell. Bash is an sh-compatible shell that incorporates useful features from the Korn shell (ksh) and C shell (csh). It is intended to conform to the IEEE POSIX P1003.2/ISO 9945.2 Shell and Tools standard. It offers functional improvements over sh for both programming and interactive use. In addition, most sh scripts can be run by Bash without modification.
leadingpath: ../../
---

{% capture colOne %}
## Install Bash
Bash is typically a native application on Linux/Unix based machines; however, if installation is necessary you can find links to downloads below.

### Bash for Windows
Because bash isn't native to Windows an application like Cygwin would be necessary to
gain the same features readily available in linux/macOS.  
https://www.cygwin.com

### Bash for macOS and linux
Bash is natively installed on Linux/Unix based machines.

## Configure shell
Configuring bash aliases

```$ alias ls='ls -lGh'```

Sets the ls command to list, colorize, and provide file size suffixes

## Working with directories
Navigate, create, and delete directory folders and files

```$ pwd```

Display path of current working directory

```$ cd [directory]```

Change working directory to [directory]

```$ cd ..```

Navigate to the parent directory

```$ ls```

List directory contents

```$ ls -la```

List detailed directory contents, including hidden files


```$ mkdir [directory]```

Create a new directory named [directory]

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>

{% capture colTwo %}

## Handling output
Control the flow of data from a file

```$ cat [file]```

Output the contents of [file]


```$ less [file]```

Output the contents of [file] which supports pagination


```$ head [file]```

Output the first 10 lines of [file]


```$ [cmd] > [file] ```

Direct the output of [cmd] into [file]


```$ [cmd] >> [file]```

Append the output of [cmd] to [file]


```$ [cmd1] | [cmd2]```

Direct the output of [cmd1] to the input of [cmd2]


```$ clear```

Clear the bash window

## Working with files
Moving, renaming, creating and deleting files

```$ rm [file]```

Delete [file]


```$ rm -r [directory]```

Delete [directory]

```$ rm -f [file]```

Force-delete [file] (add -r to force-delete a directory)


```$ mv [file-old] [file-new]```

Rename [file-old] to [file-new]


```$ cp [file] [directory]```

Copy [file] to [directory] (possibly overwriting an existing file)


```$ cp -r [src-directory] [dest-directory]```

Copy [src-directory] and it's contents to [dest-directory] (possibly overwriting files in an existing directory)

```$ touch [file]```

Update file access and modification time (and create [file] if it does not exist)

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## File and folder permissions
Change read, write, and execute permissions on files and folders


```$ chmod 755 [file]```

Change permissions of [file] to 755

> Octal representation of permissions are group of permissions for User (u), Group (g) and Others (o) with values that are sum of read (4), write (2) and execute (1) permissions. For example, 755 is:
> - Owner = 7; read (4) + write (2) + execute (1)
> - Group = 5; read (4) + execute (1)
> - Others = 5; read (4) + execute (1)



```$ chmod -R 600```

Change permissions of [directory] (and its contents to 600)


```$ chown [user]:[group] [file]```

Change ownership of [tile] to [user] and [group] (add -R to include a directory's contents)

## Networking and Internet
```$ ping [ip/host]```

Ping the [ip/host] and displays time, among other things

```$ curl -O [url]```

Downloads [url] to current working directory

```$ ssh [user]@[ip/host]```

Starts an SSH connection to [host] using [user]

```$ ssh-copy-id [user]@[host]```

Adds your SSH key to the host file for [user] to enable a keyed or passwordless login

```$ scp [file] [user]@[ip/host]:/path/to/file```

Securely copies [file] to a remote [host]

```$ wget [file]```

Downloads [file] to your current working directory

## System Tasks

Find important information related to your currently running system

```$ ps ax```

List currently running processes

```$ top```

Displays live information on your currently running processes

```$ kill [pid]```

Ends the process using the provided process ID [pid]

```$ killall [processname]```

Ends all processes with the given [processname]

```$ df```

Shows disk usage

```$ du [filename]```

Shows disk usage of all files and folders in [filename]

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>
