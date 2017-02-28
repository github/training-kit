---
layout: cheat-sheet
title: گیت‌هاب برگه‌تقلب گیت
byline: گیت سیستم کنترل نسخه توزیع‌شده است که فعالیت‌های گیت‌هاب را بر روی لپ‌تاپ یا دسکتپاب برای تسهیل می‌نماید. این برگه تقلب، دستورهای رایج مورد استفادهٔ خط‌فرمان را برای ارجاع سریع خلاصه نموده است. 
leadingpath: ../../../
---

{% capture colOne %}
<h2 dir="rtl">نصب گیت‌هاب</h2>
<div dir="rtl">
گبت‌هاب برنامه‌های رومیزی فراهم نموده است که شامل یک واسط گرافیکی برای بیشترکارهای عمومی مخازن هستند و یک 
نسخهٔ خط‌فرمان گیت که به صورت خودکار بروزرسانی می‌شود برای سناریوهای پیشرفته‌تر ارائه نموده است.
</div>

<h2 dir="rtl">گیت‌هاب برای ویندوز</h2>
http://windows.github.com

<h2 dir="rtl">گیت‌هاب برای مک</h2>
http://mac.github.com

<div dir="rtl">
توزیع‌های گیت برای لینوکس و سیستم‌های POSIX در سایت رسمی Git SCM در دسترس است. 
</div>

<h2 dir="rtl">گیت برای همهٔ سیستم‌ها</h2>
http://git-scm.com

<h2 dir="rtl">آماده‌سازی پیکربندی</h2>
<div dir="rtl">
پیکربندی اطلاعات کاربر برای تمامی مخازن محلی
</div>

```$ git config --global user.name "[name]"```

<div dir="rtl">
نامی را که تمایل دارید به تراکنش‌های مشارکت خودتان نسبت داده شود تنظیم نمایید. 
</div>



```$ git config --global user.email "[email address]"```

<div dir="rtl">
ایمیلی را که تمایل دارید به تراکنش‌های مشارکت خودتان نسبت داده شود تنظیم نمایید.
</div>



<h2 dir="rtl">ساخت مخازن</h2>
<div dir="rtl">
یک مخزن جدید را شروع نمایید یا یکی از مخازن را از URL موجود بدست آورید.
</div>



```$ git init [project-name]```

<div dir="rtl">
یک مخزن محلی جدید با یک نام مشخص می‌سازد
</div>


```$ git clone [url]```

<div dir="rtl">
یک پروژه و تمام نسخه تاریخچه آن را بارگیری می‌نماید. 
</div>


{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

<h2 dir="rtl">انجام تغییرات</h2>
<div dir="rtl">

مرور ویرایش‌ها و ساخت یک تراکنش مشارکت
</div>


```$ git status```

<div dir="rtl">

تمامی فایل‌های جدید و یا ویرایش شده‌ای که باید مشارکت داده شوند را لیست می‌نماید
</div>



```$ git diff```

<div dir="rtl">
تفاوت فایلی که هنوز قرارداده نشده است را نمایش می‌دهد
</div>


```$ git add [file]```

<div dir="rtl">
از فایل در حال آماده‌شدن یک تصویر لحظه‌ای برای نسخه‌برداری می‌گیرد (اضافه نمودن فایل به لیست مشارکت‌ها) 
</div>



```$ git diff --staged```

<div dir="rtl">
تفاوت‌های فایل بین آخرین نسخه و نسخه آماده ارسال را نمایش می‌دهد 
</div>



```$ git reset [file]```

<div dir="rtl">
فایل آماده ارسال از حالت ارسال خارج نموده لکن محتویات آن را نگاه می‌دارد
</div>



```$ git commit -m"[descriptive message]"```

<div dir="rtl">
تصاویر لحظه‌ای فایل‌ را به صورت دائمی در تاریخچه نسخه ذخیره می‌نماید.
</div>


<h2 dir="rtl">تغیرات گروهی</h2>
<div dir="rtl">
نام‌گذاری یک سری از مشارکت‌ها و ترکیب‌ تلاش‌های موفق
</div>



```$ git branch```

<div dir="rtl">
تمامی شاخه‌های محلی را در مخزن جاری لیست می‌نماید
</div>



```$ git branch [branch-name]```

<div dir="rtl">
یک شاخهٔ جدید می‌سازد
</div>



```$ git checkout [branch-name]```

<div dir="rtl">
به شاخه تعیین‌شده سوئیچ نموده و دایرکتوری کاری را نیز تغییر می‌دهد
</div>



```$ git merge [branch-name]```

<div dir="rtl">
تاریخچهٔ شاخهٔ معین‌شده درون شاخه جاری ترکیب می‌نماید
</div>



```$ git branch -d [branch-name]```

<div dir="rtl">
شاخه تعیین‌شده را حذف می‌نماید
</div>

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}

<h2 dir="rtl">پیرایش نام فایل‌ها</h2>
<div dir="rtl">
بازجاگذاری و حذف فایل‌های نسخه‌بندی شده
</div>



```$ git rm [file]```

<div dir="rtl">
فایل را از شاخه جاری حذف نموده و حذف را نیز ثبت می‌نماید
</div>


```$ git rm --cached [file]```

<div dir="rtl">
فایل را از سیستم نسخه کنترل حذف نموده لکن به صورت محلی آن را نگاه می‌دارد
</div>


```$ git mv [file-original] [file-renamed]```

<div dir="rtl">
نام فایل را تغییر داده و آن را برای مشارکت آماده می‌نماید
</div>


<h2 dir="rtl">جلوگیری از ردگیری</h2>
<div dir="rtl">
خارج‌نمودن فایل‌ها و مسیرهای موقتی
</div>


```
*.log
build/
temp-*
```
<div dir="rtl">
یک فایل متنی با نام 
.gitignore`
از نسخه‌برداری اتفاقی فایل‌ها و مسیرهایی که با الگوی تعیین‌شده تطابق دارند جلوگیری می‌نماید
</div>



```$ git ls-files --others --ignored --exclude-standard```

<div dir="rtl">
تمامی فایل‌های صرف نظر شده در این پروژه را لیست می‌نماید
</div>


<h2 dir="rtl">ذخیره سازی قطعات</h2>
<div dir="rtl">
کنار گذاشتن و بازیابی تغییرات ناکامل
</div>



```$ git stash```

<div dir="rtl">
به طور موقت تمامی فایل‌های ردگیری شده تغییر کرده را ذخیره می‌نماید
</div>


```$ git stash pop```

<div dir="rtl">
فایل‌هایی که اخیراً ذخیره شده است را بازیابی می‌نماید
</div>



```$ git stash list```

<div dir="rtl">
تمامی مجموعه تغییرات ذخیره شده را لیست می‌نماید
</div>



```$ git stash drop```

<div dir="rtl">
مجموعه تغییرات ذخیره شده اخیر را نادیده می‌گیرد
</div>

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

<h2 dir="rtl">مرور تاریخچه</h2>
<div dir="rtl">
نمایش و بررسی سیر تکامل فایل‌های پروژه
</div>



```$ git log```

<div dir="rtl">
نسخه تاریخچه شاخه جاری را لیست می‌نماید
</div>


```$ git log --follow [file]```

<div dir="rtl">
نسخه تاریخچه فایل مشخصی بعلاوه تمامی تغییر نام‌های آن را لیست می‌نماید
</div>



```$ git diff [first-branch]...[second-branch]```

<div dir="rtl">
تفاوت‌های محتوایی بین دو شاخه را نشان می‌دهد
</div>


```$ git show [commit]```

<div dir="rtl">
متادیتا و تغییرات محتوای تغیر یک مشارکت مشخص‌شده را در خروجی نمایش می‌دهد
</div>

<h2 dir="rtl">باز انجام یک مشارکت</h2>
<div dir="rtl">
حذف خطاها و ساخت تاریخچه جایگزین
</div>


```$ git reset [commit]```

<div dir="rtl">
تمامی مشارکت‌های پس از <code>[commit]</code> بدون اثر نموده و در عین حال تغییرات را به صورت محلی نگاه می‌دارد
</div>


```$ git reset --hard [commit]```

<div dir="rtl">
تمامی تاریخچه و تغییرات را تا مشارکت تعیین شده نادیده می‌انگارد
</div>

<h2 dir="rtl"> همگام‌سازی تغییرات</h2>
<div dir="rtl">

ثبت یک مخزن دوردست (URL) و تعویض تاریخچه مخزن
</div>



```$ git fetch [remote]```

<div dir="rtl">
تمامی تاریخچه را از مخزن دوردست بارگیری می‌نماید
</div>


```$ git merge [remote]/[branch]```

<div dir="rtl">
شاخه دوردست را درون شاخه محلی جاری ترکیب می‌نماید
</div>


```$ git push [remote] [branch]```

<div dir="rtl">
تمامی مشارکت‌های شاخه‌های محلی را به گیت‌هاب بارگذاری می‌نماید
</div>


```$ git pull```

<div dir="rtl">
نشان تاریخچه را بارگیری نموده و تغییرات را جاگذاری می‌نماید
</div>
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
