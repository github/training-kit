---
layout: cheat-sheet
redirect_to: false
title: GitHub Git Cheat Sheet
byline: Git은 여러분의 노트북이나 데스크톱에서 GitHub을 사용할 수 있도록 해주는 오픈 소스 분산 버전 관리 시스템입니다. 이 Cheat Sheet는 자주 쓰이는 Git 명령을 쉽게 찾아볼 수 있게 정리하여 보여줍니다.
leadingpath: ../../../
---

{% capture colOne %}
## Git 설치하기
GitHub은 일반적으로 많이 사용되는 저장소 관련 작업을 위한 데스크톱 클라이언트와 함께, 더 복잡한 작업을 위해 자동으로 업데이트되는 Git command line 에디션을 제공합니다.

### Windows 사용자를 위한 GitHub
[windows.github.com](https://windows.github.com)

### Mac 사용자를 위한 GitHub
[mac.github.com](https://mac.github.com)

리눅스와 POSIX 운영체제를 위한 Git 배포 버전은 Git의 공식 웹사이트인 Git SCM에서 확인하실 수 있습니다.

### 모든 플랫폼을 위한 Git
[git-scm.com](https://git-scm.com)

## 환경 설정
모든 로컬 저장소에 적용할 사용자 정보를 설정합니다

```$ git config --global user.name "[name]"```

자신이 생성한 커밋(commit)에 들어갈 이름을 설정합니다

```$ git config --global user.email "[email address]"```

자신이 생성한 커밋에 들어갈 이메일 주소를 설정합니다


## 저장소 생성하기
새로운 저장소를 만들거나, 다른 저장소의 URL을 이용해 저장소를 복사합니다


```$ git init [project-name]```

새로운 로컬 저장소를 생성하고 이름을 정합니다.


```$ git clone [url]```

기존 프로젝트의 모든 커밋 내역을 가져와 저장소를 만듭니다

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## 변경점을 저장하기
수정 사항을 검토하고 커밋을 생성합니다


```$ git status```

커밋할 수 있는 새로운 파일과 수정된 파일의 목록을 보여줍니다

```$ git diff```

수정하였으나 아직 stage하지 않은 파일의 변경점을 보여줍니다


```$ git add [file]```

커밋을 준비하기 위해 파일을 stage합니다


```$ git diff --staged```

stage하였으나 아직 커밋하지 않은 파일과 가장 최근에 커밋한 파일을 비교합니다


```$ git reset [file]```

파일의 내용은 유지한 채로 stage한 내역만을 제거합니다


```$ git commit -m"[descriptive message]"```

stage한 내용을 커밋으로 영구히 저장합니다

## 변경점을 묶어 관리하기
일련의 커밋에 이름을 붙이고 여러 변경점을 합칩니다


```$ git branch```

현재 저장소의 모든 로컬 브랜치를 보여줍니다

```$ git branch [branch-name]```

새로운 브랜치를 생성합니다


```$ git switch -c [branch-name]```

특정 브랜치로 전환하고 워킹 디렉토리를 업데이트합니다


```$ git merge [branch-name]```

현재 브랜치에 특정 브랜치의 히스토리를 병합시킵니다


```$ git branch -d [branch-name]```

브랜치를 삭제합니다
{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## 파일 이름 바꾸기
버전 관리 중인 파일을 옮기거나 삭제합니다

```$ git rm [file]```

워킹 디렉토리에 있는 파일을 제거하고 삭제한 내역을 stage합니다


```$ git rm --cached [file]```

현재 파일은 그대로 두고 버전 관리 체계에서만 제거합니다

```$ git mv [file-original] [file-renamed]```

파일명을 변경하고 해당 내역을 stage합니다

## 특정 파일을 저장소에서 제외하기
임시 파일과 경로를 제외시킵니다

```
*.log
build/
temp-*
```

`.gitignore`이라는 텍스트 파일에 제외할 문자열 패턴을 지정하여 실수로 엉뚱한 파일이나 경로가 저장되지 않게 방지할 수 있습니다


```$ git ls-files --others --ignored --exclude-standard```

이 프로젝트에서 제외된 모든 파일을 보여줍니다

## 변경점 일부분을 저장하기
불완전한 변경 사항을 임시로 저장하거나 복원합니다


```$ git stash```

버전 관리 중인 모든 파일의 변경점을 임시로 저장합니다


```$ git stash pop```

가장 최근에 임시 저장한 내용을 복원합니다


```$ git stash list```

임시 저장된 모든 변경점의 목록을 보여줍니다


```$ git stash drop```

가장 최근에 임시 저장한 내용을 지웁니다
{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}
## 변경 기록 검토
프로젝트 내 파일의 변경 기록을 살펴보고 검토합니다


```$ git log```

현재 브랜치의 변경 기록을 보여줍니다

```$ git log --follow [file]```

특정 파일의 변경 기록을 보여줍니다(파일명 변경 포함)

```$ git diff [first-branch]...[second-branch]```

두 브랜치의 차이점을 비교합니다

```$ git show [commit]```

특정 커밋에 포함된 변경 사항과 메타데이터를 표시합니다

## 커밋 되돌리기
실수한 내용을 지우고 기록을 바꿉니다

```$ git reset [commit]```

현재 파일의 변경 사항은 그대로 두고 '[커밋]' 이후의 모든 커밋 내용을 되돌립니다

```$ git reset --hard [commit]```

모든 변경점과 기록을 버리고 특정 커밋으로 되돌아갑니다

## 변경점을 동기화하기
원격 저장소(의 URL)을 등록하고 저장소 기록을 주고받습니다

```$ git fetch [remote]```

원격 저장소로부터 모든 기록을 받아옵니다

```$ git merge [remote]/[branch]```

원격 브랜치를 현재 사용 중인 로컬 브랜치와 병합합니다

```$ git push [remote] [branch]```

모든 로컬 브랜치의 변경점을 GitHub에 업로드합니다

```$ git pull```

북마크된 원격 브랜치의 기록을 다운로드하여 변경점을 병합합니다
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
