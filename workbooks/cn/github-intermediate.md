---
layout: workbook
title: GitHub中级操作手册
description: 这是一本Github的中级操作手册，可以在Github中级课程教学时辅助使用。在这个课程中，你将会学到如何通过命令行操作Git与Github。
---


## Git基本配置

### 概要
* 范围
* 忽略文件

#### 细节

Git的配置保存在三个文本文件中，并分为了三个等级。配置文件可以由编辑器进行编辑，且可以通过简单的拷贝转移到其它机器中。

等级 | 优先级 | 位置
--- | --- | ---
`system` | 最低 | `git`二进制文件旁边
`global` | 中等 | 在你文件目录中的`.gitconfig`
`local` | 最高 | 在你项目文件中的`.git/config`

```
$ git config --list
$ git config user.name
$ git config user.email
$ git config --global core.autocrlf <value>
```


## 配置Git用户
### 概要
* [Pro Git Book:第一次配置Git](http://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup)
* 用户名
* Email地址
* 无密码

#### 细节
你可以在本地的Git中配置用户名和邮件地址，它们会附加在你的commit上。准确设置后，可以很方便地找到工作的所属人。

如果要检查当前的配置，可以通过以下两个命令单独查询：

``` shell
$ git config user.name
Firstname Lastname

$ git config user.email
someaccount@example.com
```

为你的所有仓库设置相同的用户名和邮箱：

``` shell
$ git config --global user.name "your name"
$ git config --global user.email "your@email"
```

用户会在使用Git的早期对两个设置进行配置，一个是行尾结束符，另一个是颜色显示。
</span>

``` shell
# Set line endings to LF for Mac and Linux
$ git config --global core.autocrlf input

# Set line endings to CRLF for Windows
$ git config --global core.autocrlf auto
```

显示所有配置

``` shell
$ git config --list
```

## 开始命令行操作

### 概要
* 新项目
* 已存在项目
* 克隆

#### 细节
```
# 创建一个新的项目目录
$ git init [projectname]
$ cd [projectname]

# 或者初始化一个已有的目录
$ cd [existingprojectname]
$ git init

# 或者克隆一个已存在的仓库
$ git clone [url] [optional-name]
```

## 仓库内部

### 概要
* 探索本质
* `.git` 文件夹
* 所有历史都存在本地
* 分布式存在, 同时更改
* 不会锁定
* 优化文本，小文件
* `HEAD` 标志
* 临时区域 (索引文件)
* `refs/heads/`
* 存储效率(zlib)

## 命令行进行commit操作

### 概要
* 三个阶段的思考
* 编辑, 选择, 保存

#### Details
```
$ git status
$ git add <filename>
$ git commit
$ git commit -m"<message>"
```

## 比较更改

### 概要
* 基本的diff命令
* 仅比较部分子集
* 比较特定的修改
* 依赖文件状态
* 实用的选项切换

#### 细节
```
$ git diff
$ git diff --staged
$ git diff HEAD
$ git diff [file]
$ git diff --stat -w --color-words
```

## 审查历史

### 概要
* 基础审查
* 减少结果
* 通过信息过滤
* 通过补丁过滤

#### Details
```
$ git log
$ git log -<n>
$ git log --stat
$ git log --patch
$ git log --all
$ git log --author=<author>
$ git log --committer=<committer>
$ git log --format=full
$ git log --format=fuller
$ git log --format=raw
$ git log --diff-filter=[A|M|D]
$ git log -S<StringInPatch>
$ git log -G="<regexpattern>"
$ git log --word-diff --patch
$ git log --graph
$ git log --decorate
```

## 命令行中操作分支

### 概要
* 创建特性或原型
* 显示本地分支
* 创建
* 删除
* 重命名

#### 细节
```
$ git branch
$ git branch <name> <ref>
$ git branch -d <name>
$ git branch -m <old> <new>
$ git branch --merged
$ git branch --no-merged
```

## 切换分支&丢弃更改

### 概要
* `Checkout`是一个多用途的命令
* 更换分支
* 探索历史 (分离 `HEAD`)
* 丢弃工作树的一些分支


#### 细节
```
# Check out (toggle to) an existing branch
$ git checkout [branch]

# Check out a single file from HEAD
$ git checkout -- [file]

# Check out a detatched HEAD (unnamed point in time)
$ git checkout [ref]
```

## 远程

### 概要
* 解释`origin`
* 为服务端URL设置别名和书签
* 移除连接

#### 细节
```
$ git clone -o github <URL>
$ git remote add <name> <path>
$ git ls-remote <name>
$ git remote rm <name>
```

## 发布更改

### 概要
* 发布commit历史
* 展示远程分支
* 展示所有的分支

#### 细节
```
$ git push -u origin master
$ git config --global push.default matching
$ git config --global push.default simple
$ git branch -r
$ git branch -a
```

## 命令行中合并分支

### 概要
* 分支的交叉
* 解决冲突 (手动编辑)
* 用快捷方式处理文件
* 从基础分支中更新话题分支
* 整合分离的仓库历史

#### Details
```
$ git pull origin
$ git pull
$ git pull --rebase

$ git merge
$ git merge -m<message>

$ git checkout --ours [file]
$ git checkout --theirs [file]

$ git add [file]
$ git commit

$ git merge [base]

$ git pull [repository] [branch]
```

## 抓取更改

### 概要
* 不通过合并进行比较
* 选择性合并
* 从其它仓库获取

#### 细节
```
$ git fetch [remote]
$ git branch -a

$ git fetch [repository] [branch]
$ git show FETCH_HEAD
```

## 移除文件

### 概要
* Git观察文件系统迁移
* 移除文件
* 不追踪文件

#### 细节
```shell
$ git add -u .
$ git rm <file>
$ git rm --cached -- <filename>
```

## 移动文件

### 概要
* 移动生成新的树, 而不是一团
* commit的时候将索引关联进来

#### 细节
```shell
$ mv <file> <newfilename>
$ git add -A .

# or

$ git mv <file> <file>
$ git log --stat -M
$ git log --follow <file>
```

## 采用`revert`和`reset`取消commit

### 概要
* 生成commit来恢复过去的设置
* 清楚索引和文件目录
* 重置索引，更新文件目录
* 仅重置索引
* commit相关, 分支名, 远程
* 为什么会有不同的风格 (深入研究)

#### 细节
```shell
$ git revert <REF>

$ git reset --hard
$ git reset --mixed
$ git reset --soft
```

## 忽略临时文件

### 概要
* 创建`.gitignore`文件
* 在文件中增加忽略模式
* `.gitignore`文件可以存在于_子文件夹_
* `!` 是忽略模式中的取反
* 全局忽略`core.excludesfile`的配置

#### 细节
```
$ touch .gitignore
$ echo '*.log' >> .gitignore
$ git add .gitignore
$ git commit -m "Ignoring log files"
```

全局忽略文件配置:

```
$ git config --global core.excludesfile <filepathandname>
```

## 存放进行中的修改

### 概要
* 临时存储追踪中的修改
* 恢复临时存储
* 将为追踪的文件移到一边

#### 细节
```
$ git stash
$ git pop
$ git stash --include-untracked
```

## 采用`reflog`恢复任何文件

### 概要
* 追踪Git行为"历史"
* 探索最近的行为

#### 细节
```
$ git reflog
$ git reflog --all
$ git config --global alias.undo "reset HEAD@{1}"
$ git checkout HEAD@{1}

$ git reset --hard HEAD@{1}

$ git branch [name] HEAD@{1}
```

## Pull请求

### 概要
* 将分支推送到Github
* 使用Github用户界面
* 抓取到本地

```
$ git push -u [remote] [branch]

$ git fetch [remote] refs/pull/[issue-number]/head
```

## GitHub Issues

### 概要
* 基本使用案例
* 混合引用`#`和`username/reponame#ISSUE`

## 快捷键设置

### 概要
* 更快输入
* 快速执行复杂命令
* 与zsh进行兼容

#### 细节
```
$ git config --global alias.lol "log --graph --all --oneline --decorate"
$ git config --global alias.l "log --oneline --stat"
$ git config alias.s "status -s"
$ git s
```
