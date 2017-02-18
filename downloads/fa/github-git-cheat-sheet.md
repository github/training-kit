---
layout: برگه تقلب
title: گیت‌هاب گیت برگه تقلب
byline: گیت یک سیستم کنترل نسخه توزیع‌شده که برای تسهیل فعالیت‌های گیت بر روی لپ‌تاپ یا دسکتپاب می‌باشد. این برگه تقلب خلاصه شده دستورهای معمول  که کاربران برای ارتباط با گیت برای ارجاع سریع ارائه شده است.
leadingpath: ../../../
---

{% capture colOne %}
<h2 dir="rtl">نصب گیت‌هاب</h2>
<div dir="rtl">
گبت‌هاب برای کاربران دسکتاپ یک اینترفیس گرافیکی را برای کارهای عمومی ارائه کرده است، حال آنکه برای دستور‌های حرفه‌ای تر می توانید از نسخه خط‌فرمان استفاده کنید.
</div>

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

<h2 dir="rtl">انجام تغیرات</h2>
<div dir="rtl">
مرور ویرایش‌های و بررسی پیش‌روی کامیت‌ها
</div>


```$ git status```

<div dir="rtl">
لیست تمامی فایل های جدید و یا ویرایش شده که کامیت شده اند.
</div>



```$ git diff```

<div dir="rtl">
نمایش تفاوت فایلی که هنوز قرارداده نشده است.
</div>


```$ git add [file]```

<div dir="rtl">
ایجاد یک تصویر از فایل برای آماده سازی در نسخه برداری(اضافه کردن فایل به لیست کامیت‌ها)
</div>



```$ git diff --staged```

<div dir="rtl">
نمایش تفاوت فایل های ثبت شده با آخرین نسخه
</div>



```$ git reset [file]```

<div dir="rtl">
خارج کردن فایل از حالت انتخاب شده به حالت قبلی بدون تغیر محتوای فایل
</div>



```$ git commit -m"[descriptive message]"```

<div dir="rtl">
ذخیره سازی فایل در نظام تاریخچه سازی گیت‌هاب(کامیت)
</div>


<h2 dir="rtl">تغیرات گروهی</h2>
<div dir="rtl">
نام‌گذاری یک سری از کامیت‌ها و ترکیب‌ آنها
</div>



```$ git branch```

<div dir="rtl">
لیست تمامی شاخه‌های لوکال در مخزن جاری
</div>



```$ git branch [branch-name]```

<div dir="rtl">
ساخت یک شاخه جدید
</div>



```$ git checkout [branch-name]```

<div dir="rtl">
تغیر شاخه جاری به شاخه دیگر
</div>



```$ git merge [branch-name]```

<div dir="rtl">
ترکیب یک شاخه از تاریخچه با شاخه جاری
</div>



```$ git branch -d [branch-name]```

<div dir="rtl">
حذف شاخه مشخص شده
</div>

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}

<h2 dir="rtl">ویرایش نام فایل‌ها</h2>
<div dir="rtl">
بازجاگذاری و حذف فایل از تاریخچه
</div>



```$ git rm [file]```

<div dir="rtl">
حذف فایل از شاخه جاری و همینطور از سیستم نسخه بندی
</div>


```$ git rm --cached [file]```

<div dir="rtl">
حذف فایل از سیستم نسخه بندی منتها بدون حذف فایل از لوکال
</div>


```$ git mv [file-original] [file-renamed]```

<div dir="rtl">
تغیر نام فایل و کامیت
</div>


<h2 dir="rtl">پیگیری تغیرات</h2>
<div dir="rtl">
حذف فایل‌های موقت
</div>


```
*.log
build/
temp-*
```
<div dir="rtl">
یک فایل متنی با نام 
.gitignore`
با تطابق خاصی از الگوها جلوگیری می کند. 
</div>



```$ git ls-files --others --ignored --exclude-standard```

<div dir="rtl">
لیست فایل های صرفه نظر شده در پروژه جاری
</div>


<h2 dir="rtl">ذخیره سازی قطعات</h2>
<div dir="rtl">
نادیده‌گرفتن و بازگردانی تغیرات
</div>



```$ git stash```

<div dir="rtl">
ذخیره سازی موقت تمامی فایل های تغیر کرده
</div>


```$ git stash pop```

<div dir="rtl">
بازآوری فایل های اخیرا ذخیره شده
</div>



```$ git stash list```

<div dir="rtl">
لیست همه تغیرات ذخیره شده
</div>



```$ git stash drop```

<div dir="rtl">
نادیده گرفتن همه تغیرات ذخیره شده
</div>

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

<h2 dir="rtl">مرور تاریخچه</h2>
<div dir="rtl">
نمایش و بررسی سیر تکاملی پروژه
</div>



```$ git log```

<div dir="rtl">
لیست نسخه برای شاخه جاری
</div>


```$ git log --follow [file]```

<div dir="rtl">
لیست نسخه برای فایل ها که شامل فایل های تغیر نام شده نیز می باشد
</div>



```$ git diff [first-branch]...[second-branch]```

<div dir="rtl">
نمایش تفاوت‌های محتوای بین دو شاخه
</div>


```$ git show [commit]```

<div dir="rtl">
نمایش متادیتا و محتوای تغیر داده شده از یک کامیت خاص
</div>

<h2 dir="rtl">برگشت به عقب برای یک کامیت</h2>
<div dir="rtl">
حذف خطاها و نادیده گرفتن تاریخچه
</div>


```$ git reset [commit]```

<div dir="rtl">
برگشت به عقب برای تمامی کامیت های بعد از کامیت مشخص شده
</div>


```$ git reset --hard [commit]```

<div dir="rtl">
نادیده گرفتن تاریخچه نسخه تا کامیت مشخص شده
</div>

<h2 dir="rtl">سینک شدن با تغیرات</h2>
<div dir="rtl">
ثبت یک URL و اعمال تغیرات در مخزن
</div>



```$ git fetch [remote]```

<div dir="rtl">
دانلود تمامی تاریخچه پروژه از مخزن راه‌دور
</div>


```$ git merge [remote]/[branch]```

<div dir="rtl">
ترکیب شاخه راه‌دور با شاخه جاری لوکال
</div>


```$ git push [remote] [branch]```

<div dir="rtl">
آپلود تمامی شاخه های لوکال به گیت‌هاب
</div>


```$ git pull```

<div dir="rtl">
دانلود تاریخچه و تمامی تغیرات از سرور راه دور
</div>
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
