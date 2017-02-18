---
layout: برگه تقلب
title: گیت‌هاب گیت برگه تقلب
byline: گیت یک سیستم کنترل نسخه توزیع‌شده که برای تسهیل فعالیت‌های گیت بر روی لپ‌تاپ یا دسکتپاب می‌باشد. این برگه تقلب خلاصه شده دستورهای معمول  که کاربران برای ارتباط با گیت برای ارجاع سریع ارائه شده است.
leadingpath: ../../../
---

{% capture colOne %}
<h2 dir="rtl">نصب گیت‌هاب</h2>
GitHub provides desktop clients that include a graphical user interface for the most common repository actions and an automatically updating command line edition of Git for advanced scenarios.

<h2 dir="rtl">گیت‌هاب برای ویندوز</h2>
http://windows.github.com

<h2 dir="rtl">گیت‌هاب برای مک</h2>
http://mac.github.com

<div dir="rtl">
گیت‌هاب برای لینوکس و سیستم‌های پازیکس در سایت رسمی SCM قابل استفاده است.
</div>

<h2 dir="rtl">گیت‌هاب برای همه سیستم ها</h2>
http://git-scm.com

<h2 dir="rtl">ابزار تنظیمات</h2>
<div dir="rtl">
تنظیم اطلاعات کاربری برای تمامی مخازن لوکال
</div>

```$ git config --global user.name "[name]"```

<div dir="rtl">
نام خود را برای تمامی کامیت‌های بعدی تنظیم کنید.
</div>



```$ git config --global user.email "[email address]"```

<div dir="rtl">
ایمیل خود را برای تمامی کامیت‌های بعدی تنظیم کنید.
</div>



<h2 dir="rtl">ساخت یک مخزن</h2>
<div dir="rtl">
ساخت یک مخزن و یا کپی یک مخزن از یک آدرس
</div>



```$ git init [project-name]```

<div dir="rtl">
ساخت یک مخزن لوکال با نام منحصر به فرد
</div>



```$ git clone [url]```

<div dir="rtl">
دانلود کل پروژه به همراه تاریخچه گی آن!
</div>


{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

<h2 dir="rtl">نجام تغیرات</h2>
<div dir="rtl">
مرور ویرایش‌های و بررسی پیش‌روی کامیت‌ها
</div>


```$ git status```

Lists all new or modified files to be committed


```$ git diff```

Shows file differences not yet staged


```$ git add [file]```

Snapshots the file in preparation for versioning


```$ git diff --staged```

Shows file differences between staging and the last file version


```$ git reset [file]```

Unstages the file, but preserves its contents


```$ git commit -m"[descriptive message]"```

Records file snapshots permanently in version history

<h2 dir="rtl">تغیرات گروهی</h2>
Name a series of commits and combine completed efforts


```$ git branch```

Lists all local branches in the current repository


```$ git branch [branch-name]```

Creates a new branch


```$ git checkout [branch-name]```

Switches to the specified branch and updates working directory


```$ git merge [branch-name]```

Combines the specified branch’s history into the current branch


```$ git branch -d [branch-name]```

Deletes the specified branch
{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}

<h2 dir="rtl">ویرایش نام فایل‌ها</h2>
Relocate and remove versioned files


```$ git rm [file]```

Deletes the file from the working directory and stages the deletion


```$ git rm --cached [file]```

Removes the file from version control but preserves the file locally


```$ git mv [file-original] [file-renamed]```

Changes the file name and prepare it for commit

<h2 dir="rtl">پیگیری تغیرات</h2>
Exclude temporary files and paths

```
*.log
build/
temp-*
```

A text file named `.gitignore` suppresses accidental versioning of files and paths matching the specified patterns


```$ git ls-files --others --ignored --exclude-standard```

Lists all ignored files in this project

<h2 dir="rtl"></h2>
## Save fragments
Shelve and restore incomplete changes


```$ git stash```

Temporarily stores all modified tracked files


```$ git stash pop```

Restores the most recently stashed files


```$ git stash list```

Lists all stashed changesets


```$ git stash drop```

Discards the most recently stashed changeset
{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

<h2 dir="rtl">مرور تاریخچه</h2>
Browse and inspect the evolution of project files


```$ git log```

Lists version history for the current branch


```$ git log --follow [file]```

Lists version history for the file, including renames


```$ git diff [first-branch]...[second-branch]```

Shows content differences between two branches


```$ git show [commit]```

Outputs metadata and content changes of the specified commit

<h2 dir="rtl">برگشت به عقب برای یک کامیت</h2>
Erase mistakes and craft replacement history


```$ git reset [commit]```

Undoes all commits after `[commit]`, preserving changes locally


```$ git reset --hard [commit]```

Discards all history and changes back to the specified commit

<h2 dir="rtl">سینک شدن با تغیرات</h2>
Register a remote (URL) and exchange repository history


```$ git fetch [remote]```

Downloads all history from the remote repository


```$ git merge [remote]/[branch]```

Combines the remote branch into the current local branch


```$ git push [remote] [branch]```

Uploads all local branch commits to GitHub


```$ git pull```

Downloads bookmark history and incorporates changes
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
