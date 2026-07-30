---
layout: cheat-sheet
redirect_to: false
title: GitHub Git 速查清單
byline: Git 是一個開源的分散式版本控制系統，可讓使用者在本機端（包含筆記型電腦與桌上型電腦）進行 GitHub 上的操作，這份速查清單羅列了使用者經常使用的指令，以提供使用者可快速參照。
leadingpath: ../../../
---

{% capture colOne %}
## 安裝 Git

### GitHub 桌面版
[desktop.github.com](https://desktop.github.com)

### Git 通用平台版
[git-scm.com](https://git-scm.com)

## Git 操作設定
設定使用者在操作本機端 Git 的通用配置

```$ git config --global user.name "[name]"```

設定本機端 Git 使用者的名稱

```$ git config --global user.email "[email address]"```

設定本機端 Git 使用者的電子郵件

```$ git config --global color.ui auto```

啟用本機端使用命令列時的彩色輸出模式，提高使用 Git 的可讀性

## 分支

分支在使用者操作 Git 時扮演重要的角色。使用者提出的任何提交 (commit) 都會當前所在的分支上。使用 `git status` 可查看當前所在的分支。

```$ git branch [branch-name]```

建立一個新的分支

```$ git switch -c [branch-name]```

切換到指定分支，使用者的工作目錄會基於該分支更新

```$ git merge [branch]```

將指定分支的檔案歷程合併到當前分支。相同的結果經常會透過合併請求 (Pull Request) 達成，但此指令仍在本機端扮演重要的角色。

```$ git branch -d [branch-name]```

刪除指定分支

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## 建立 Git 倉儲

使用者可透過兩種途徑來建立一個 Git 倉儲：第一，在本機端建立後，再推送到 GitHub；第二，取得該 Git 倉儲連結後，複製 (clone) 一份到本機端。

```$ git init```

使用者可透過 `git init` 指令，在本機端建立一個作為 Git 倉儲的資料夾目錄，並可透過以下指令建立本機端 Git 倉儲與 GitHub 倉儲的連結。

```$ git remote add origin [url]```

指定一個 URL 為 `[url]` 的遠端倉儲 `origin` 作為本機端 Git 倉儲的連結點。

```$ git clone [url]```

複製 (clone) 一個存在 GitHub 上的倉儲到本機端，其中包含所有檔案、分支與提交　(commits)

## .gitignore 檔案

使用者在一些情形下不希望 Git 追蹤部分檔案的狀態，這個時候可透過名為 `.gitignore` 的檔案達成，使用者可以在 [github.com/github/gitignore](https://github.com/github/gitignore) 找到有參考價值的 `.gitignore` 範本。

## 同步更改

將本機端 Git 倉儲與遠端 GitHub 倉儲進行狀態同步

```$ git fetch```

下載遠端分支的所有歷史

```$ git merge```

將遠端分支合併到當前本機端的分支

```$ git push```

將當前本機端的分支上傳到 GitHub

```$ git pull```

讀取 GitHub 遠端分支的對應提交，來更新使用者本機端當前的分支。當使用者接連著下達 `git fetch` 和 `git merge` 的指令，效果等同於直接下達 `git pull` 指令。

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>

{% capture colThree %}

## 管理 Git 追蹤狀態變更

檢視專案檔案的變更歷史

```$ git log```

列出當前分支的變更歷史

```$ git log --follow [file]```

列出指定檔案的變更歷史，包括重新命名

```$ git diff [first-branch]...[second-branch]```

顯示兩個分支的差異處

```$ git show [commit]```

顯示指定提交的詮釋資料與內容變化

```$ git add [file]```

對檔案進行快照，以讓 Git 納入版本控制

```$ git commit -m "[descriptive message]"```

將快照正式納入 Git 的版本控制歷史

## 修復提交

清除錯誤提交並修正

```$ git reset [commit]```

復原所有 `[commit]` 後的提交，並在本機端保留該復原內容

```$ git reset --hard [commit]```

復原所有 `[commit]` 後的提交，並在本機端捨棄該復原內容

> 特別注意！修改版本控制紀錄可能造成不好的後果。如果你需要修改遠端 GitHub 既有的提交，請小心操作。如果你需要幫助，可在社群 [github.community](https://github.community) 提出，或尋求[支援](https://support.github.com/)。

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

## 術語清單

- **git**: 一個開源的分散式版本控制系統
- **GitHub**: 一個讓使用者在使用本機端 Git 時，可進行遠端託管和協作管理的平台
- **commit**: 提交，在 Git 的架構中作為一個物件，存放著當前倉儲狀態的快照，並以 SHA 形式存在
- **branch**: 分支，通常用於區分 commit 的用途與專案的目標
- **clone**: 複製，透過 `clone` 可讓使用者複製遠端倉儲到本機端，並進行後續的一系列操作
- **remote**: 遠端，一個可被專案成員或大眾所觸及的遠端倉儲，有權限的使用者將會提交他們的檔案變更到此倉儲
- **fork**: 副本，使用者可建立一個被其他使用者所擁有之遠端倉儲副本
- **pull request**: 合併請求，當使用者變更倉儲內容後，需要透過合併請求，尋求倉儲所有人的同意，方能成為該倉儲的正式內容；透過合併請求，可讓提交人、倉儲關係人進行討論與測試
- **HEAD**: 表示使用者當前的工作目錄。使用者可透過 `git checkout` 切換到不同的分支、標記 (tags) 或提交，`HEAD` 也會因此改變

{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
<div class="clearfix"></div>
