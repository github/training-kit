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

1.  ```$ pwd```

                    Display path of current working directory

2. ```$ cd [directory]```

                    Change working directory to [directory]

3. ```$ cd ..```

                    Navigate to the parent directory

4. ```$ ls```

                    List directory contents

5. ```$ ls -la```

                    List detailed directory contents, including hidden files


6. ```$ mkdir [directory]```

                    Create a new directory named [directory]

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>

{% capture colTwo %}

## Handling output
Control the flow of data from a file

1. ```$ cat [file]```

                    Output the contents of [file]


2. ```$ less [file]```

                    Output the contents of [file] which supports pagination


3. ```$ head [file]```

                    Output the first 10 lines of [file]


4. ```$ [cmd] > [file] ```

                    Direct the output of [cmd] into [file]


5. ```$ [cmd] >> [file]```

                     Append the output of [cmd] to [file]


6. ```$ [cmd1] | [cmd2]```

                      Direct the output of [cmd1] to the input of [cmd2]


7. ```$ clear```

                       Clear the bash window

## Working with files
Moving, renaming, creating and deleting files

1. ```$ rm [file]```

                        Delete [file]


2. ```$ rm -r [directory]```

                         Delete [directory]

3. ```$ rm -f [file]```

                          Force-delete [file] (add -r to force-delete a directory)


4. ```$ mv [file-old] [file-new]```

                          Rename [file-old] to [file-new]


5. ```$ cp [file] [directory]```

                         Copy [file] to [directory] (possibly overwriting an existing file)


6. ```$ cp -r [src-directory] [dest-directory]```

                         Copy [src-directory] and it's contents to [dest-directory] (possibly overwriting files in an existing directory)

7. ```$ touch [file]```

                        Update file access and modification time (and create [file] if it does not exist)

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## File and folder permissions
Change read, write, and execute permissions on files and folders


1. ```$ chmod 755 [file]```

                  Change permissions of [file] to 755
                    > Octal representation of permissions are group of permissions for User (u), Group (g) and Others (o) with values that are sum of read (4), write (2) and execute (1) permissions. For example, 755 is:
                    > - Owner = 7; read (4) + write (2) + execute (1)
                    > - Group = 5; read (4) + execute (1)
                    > - Others = 5; read (4) + execute (1)



2. ```$ chmod -R 600```

                    Change permissions of [directory] (and its contents to 600)


3. ```$ chown [user]:[group] [file]```

                    Change ownership of [tile] to [user] and [group] (add -R to include a directory's contents)

## Networking and Internet
1. ```$ ping [ip/host]```

                     Ping the [ip/host] and displays time, among other things

2. ```$ curl -O [url]```

                     Downloads [url] to current working directory

3. ```$ ssh [user]@[ip/host]```

                     Starts an SSH connection to [host] using [user]

4. ```$ ssh-copy-id [user]@[host]```

                     Adds your SSH key to the host file for [user] to enable a keyed or passwordless login

5. ```$ scp [file] [user]@[ip/host]:/path/to/file```

                      Securely copies [file] to a remote [host]

6. ```$ wget [file]```

                      Downloads [file] to your current working directory

## System Tasks

Find important information related to your currently running system

1. ```$ ps ax```

        List currently running processes

2. ```$ top```

        Displays live information on your currently running processes

3. ```$ kill [pid]```

        Ends the process using the provided process ID [pid]

4. ```$ killall [processname]```

        Ends all processes with the given [processname]

5. ```$ df```

        Shows disk usage

6. ```$ du [filename]```

        Shows disk usage of all files and folders in [filename]

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>
