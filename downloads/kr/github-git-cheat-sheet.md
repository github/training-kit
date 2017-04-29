---
layout: cheat-sheet
title: GitHub Git Cheat Sheet
byline: Git은 여러분의 노트북이나 데스크톱에서 GitHub을 사용할 수 있도록 해주는 오픈 소스 분산 버전 관리 시스템입니다. 해당 Cheat Sheet에서는 사용자가 빠르게 참고할 수 있도록 주로 사용되는 Git의 명령행(command line)을 간단히 요약하였습니다.
leadingpath: ../../../
---

{% capture colOne %}
## Git 설치하기
GitHub은 가장 일반적인 저장소(repository)와 관련된 활동과 발전적 시나리오를 염두한 Git의 자동 갱신형 커맨드 라인 에디션을 위해 그래픽 사용자 인터페이스를 포함한 데스크톱 클라이언트를 제공합니다

### Windows 사용자를 위한 GitHub
http://windows.github.com

### Mac 사용자를 위한 GitHub
http://mac.github.com

리눅스와 POSIX 시스템을 위한 Git 배포 버전은 Git 의 공식 웹사이트인 Git SCM에서 확인하실 수 있습니다

### 모든 플랫폼을 위한 Git
http://git-scm.com

## 툴 환경 설정하기
모든 로컬 저장소를 위한 사용자 정보 설정하기

```$ git config --global user.name "[name]"```

유저의 커밋(commit) 기록에 부여되는 원하는 이름을 설정합니다

```$ git config --global user.email "[email address]"```

유저의 커밋 기록에 부여되는 원하는 이메일을 설정합니다


## 저장소 생성하기
새로운 저장소를 시작하거나 혹은 기존의 URL로부터 저장소를 획득합니다


```$ git init [project-name]```

특정 이름으로 새로운 로컬 저장소를 생성합니다.


```$ git clone [url]```

프로젝트와 프로젝트의 버전 기록 전체를 다운로드 합니다.

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## 변경하기
수정 사항을 리뷰하고 커밋 기록을 생성합니다


```$ git status```

커밋 대상의 모든 새로운 파일 혹은 수정된 파일 리스트를 보여줍니다

```$ git diff```

아직 Staged 되지 않은 파일의 차이점을 보여줍니다


```$ git add [file]```

버저닝(versioning) 준비를 위해 파일을 일시적으로 저장(snapshot)합니다


```$ git diff --staged```

곧 커밋할 것이라고 표시(staging)한 것과 가장 최근 파일 버전 간의 차이점을 보여줍니다


```$ git reset [file]```

파일을 언스테이지(unstage) 상태로 변경시키나 파일 컨텐츠는 그대로 보존합니다


```$ git commit -m"[descriptive message]"```

버전 히스토리에 파일 스냅샷을 영원히 기록합니다

## 그룹 변경하기
커밋 시리즈의 이름을 설정하고 결과물을 결합시킵니다


```$ git branch```

현재 저장소 안의 모든 로컬 브랜치 리스트를 보여줍니다

```$ git branch [branch-name]```

새로운 브랜치를 생성합니다


```$ git checkout [branch-name]```

특정 브랜치로 전환하고 워킹 디렉토리를 업데이트합니다


```$ git merge [branch-name]```

현재 브랜치에 특정 브랜치의 히스토리를 결합시킵니다


```$ git branch -d [branch-name]```

특정 브랜치를 삭제합니다
{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## 파일 이름 단장하기(refactor)
버전이 부여된 파일들을 재배치하고 제거합니다

```$ git rm [file]```

워킹 디렉토리로부터 파일을 제거하고 삭제를 Stage 합니다


```$ git rm --cached [file]```

버전 관리로부터는 파일을 제거하나 로컬에서는 파일을 보존합니다

```$ git mv [file-original] [file-renamed]```

파일명을 변경하고 커밋을 준비합니다

## 트랙킹 숨기기
임시 파일과 경로를 제외시킵니다

```
*.log
build/
temp-*
```

`.gitignore`이름의 텍스트 파일은 특정 패턴으로 매칭되는 우연히 버저닝된 파일과 경로를 숨깁니다


```$ git ls-files --others --ignored --exclude-standard```

해당 프로젝트에서 무시된 모든 파일 리스트를 보여줍니다

## 조각 저장하기
불완전한 변경 사항을 보류하고 복원 시킵니다


```$ git stash```

임시로 모든 수정된 트래킹된 파일들을 저장합니다


```$ git stash pop```

가장 최근에 숨겨진 파일을 복원합니다


```$ git stash list```

모든 숨겨진 변경 사항들의 리스트를 보여줍니다


```$ git stash drop```

가장 최근에 숨겨진 변경 사항을 버립니다
{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}
## 히스토리 리뷰
프로젝트 파일이 진행된 사항을 살펴보고 점검합니다


```$ git log```

현재 브랜치의 버전 히스토리 리스트를 보여줍니다

```$ git log```

현재 브랜치의 버전 히스토리 리스트를 보여줍니다

```$ git log --follow [file]```

이름 재설정을 포함한 파일의 버전 히스토리 리스트를 보여줍니다

```$ git diff [first-branch]...[second-branch]```

두 브랜치 간의 컨텐츠 차이점을 보여줍니다

```$ git show [commit]```

메타 데이터와 특정 커밋의 컨텐츠 변경 사항을 출력합니다

## 커밋 되돌리기
실수한 내용을 지우고 대체 히스토리를 생성합니다.

```$ git reset [commit]```

로컬에 변경사항을 보존한 채로 '[커밋]' 이 후의 모든 커밋을 되돌립니다

```$ git reset --hard [commit]```

모든 히스토리와 변경사항을 버리고 특정 커밋으로 되돌립니다

## 변경사항 연동하기
원격(URL)을 등록하고 저장소 기록을 주고 받습니다

```$ git fetch [remote]```

원격 저장소로부터 모든 히스토리를 다운로드합니다

```$ git merge [remote]/[branch]```

원격 브랜치를 현재의 로컬 브랜치와 결합합니다

```$ git push [remote] [branch]```

GitHub에 모든 로컬 브랜치 커밋을 업로드합니다

```$ git pull```

북마크 기록을 다운로드하고 변경 사항을 포함합니다
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
