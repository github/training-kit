---
layout: cheat-sheet
redirect_to: false
title: <div dir="rtl"> برشامة أوامر Git لنظام GitHub</div>
byline: <p dir="rtl"> أمر Git هو نظام تحكم بالنسخ الموزعة المفتوحة المصدر التي توظف أنشطة GitHub في الحواسيب الشخصية. هذه "البرشامة" تلخص تعليمات Git الأكثر استخداماً على سطر الأوامر كمرجع سري</p>
leadingpath: ../../../
---

{% capture colOne %}
<h2 dir="rtl"> تنصيب Git</h2>
<p dir="rtl">يعد Bash عادةً تطبيقًا أصليًا على الأجهزة التي تعمل بنظام Linux / Unix ؛ ومع ذلك ، إذا كان التثبيت ضروريًا ، يمكنك العثور على روابط للتنزيلات أدناه..</p>

<h3 dir="rtl"> Git على نظام التشغيل وندوز</h3>
<p dir="rtl"><a href="https://windows.github.com">windows.github.com</a></p>

<h3 dir="rtl"> Git على نظام التشغيل ماك أو لينكس </h3>
<p dir="rtl"><a href="https://mac.github.com">mac.github.com</a></p>

<p dir="rtl">توزيعات Git لأنظمة لينكس وPosix متوفرة في موقع Git SCM الرسمي.</p>

<h3 dir="rtl"> Git لكل أنظمة التشغيل</h3>
<p dir="rtl"><a href="https://git-scm.com">git-scm.com</a></p>

<h2 dir="rtl">الإعدادات الأساسية</h2>
<p dir="rtl">إدخال معلومات المستخدم لجميع المستودعات المحلية</p>

<p align="right"><code align="right">$ git config --global user.name "[إسم المستخدم]"</code></p>

<p dir="rtl">إدخال الإسم المراد إدراجه في إجراءات التنفيد أو "القيام" بأي تغيير</p>

<p align="right"><code>$ git config --global user.email "[البريد الالكتروني]"</code></p>
<p dir="rtl">إدخال البريد الالكتروني المراد إدراجه في إجراءات التنفيد أو "القيام" بأي تغيير</p>


<h2 dir="rtl"> تصنيع المستودعات</h2>
<p dir="rtl">بناء مستودع جديد أو العمل على مستودع موجود مسبقاً عن طريق رابطه</p>


<p align="right"><code align="right">$ git init [إسم المشروع]</code></p>

<p dir="rtl">العمل على مستودع جديد معرف بإسمه الأصلي </p>


<p align="right"><code>$ git clone [رابط المشروع]</code></p>

<p dir="rtl">تحميل مشروع و على كل ما يحتويه من النسخ الحالية والسابقة</p>

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

<h2 dir="rtl">  القيام بأي تغيير</h2>
<p dir="rtl">مراجعة التغييرات وتشكيل إجراء "القيام" بأي تغيير</p>


<p align="right"><code >$ git status</code></p>

<p dir="rtl">إدراج جميع الملفات الجديدة أو التي تم تغييرها وتنتظر أن يتم العمل عليها</p>


<p align="right"><code>$ git diff</code></p>

<p dir="rtl">إظهار كل التغييرات في الملفات المتغيرة التي لم يتم إضافتها لقائمة الترحيل</p>


<p align="right"><code>$ git add [إسم الملف]</code></p>

<p dir="rtl"> إضافة ملف لقائمة الترحيل لتحضيره من أجل العمل عليه</p>


<p align="right"><code>$ git diff --staged</code></p>

<p dir="rtl">إظهار كل التغييرات في الملفات المتغيرة في قائمة الترحيل و إظهار الفرق بينها وبين الأصلية الموجودة في المستودع حالياً</p>


<p align="right"><code >$ git reset [إسم الملف]</code></p>

<p dir="rtl">إزالة ملف من قائمة الترحيل مع الحفاظ على المحتوى الجديد دون تغيير.</p>


<p align="right"><code align="right">$ git commit -m"[تعليق توضيحي]"</code></p>

<p dir="rtl"> القيام بالتغييرات الموجودة في قائمة الترحيل وحفظها في ماضي النسخ</p>

<h2 dir="rtl"> التغييرات الإجمالية</h2>
<p dir="rtl">تسمية مجموعة من التغييرات المعمولة وجميع الأعمال المكتملة</p>


<p align="right"><code align="right">$ git branch</code></p>

<p dir="rtl">إدراج قائمة بكل الفروع المحلية للمستودع الحالي</p>


<p align="right"><code align="right">$ git branch [إسم الفرع]</code></p>

<p dir="rtl">تكوين فرع جديد</p>


<p align="right"><code align="right">$ git checkout [إسم الفرع]</code></p>

<p dir="rtl">التغيير إلى فرع معين وتحديث المسار الحالي</p>


<p align="right"><code align="right">$ git merge [إسم الفرع]</code></p>

<p dir="rtl">دمج الفرع الحالي بفرع آخر ماض</p>


<p align="right"><code align="right">$ git branch -d [إسم الفرع]</code></p>

<p dir="rtl">حذف فرع معين</p>

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
<h2 dir="rtl"> إزالة وتغيير الملفات</h2>
<p dir="rtl">تحريك وإزالة الملفات التي تتم متابعة نسخها</p>


<p align="right"><code align="right">$ git rm [إسم الملف]</code></p>

<p dir="rtl">حذف ملف وإضافة عملية الحذف لقائمة الترحيل</p>


<p align="right"><code align="right">$ git rm --cached [إسم الملف]</code></p>

<p dir="rtl">إلغاء عملية تتبع نسخ الملف مع الحفاظ على الملف محلياً (الملف موجود محليّاً لكنه لا يظهر على Github(</p>


<p align="right"><code align="right">$ git mv [إسم الملف الأصلي] [إسم الملف الجديد]</code></p>

<p dir="rtl">تغيير اسم ملف والتحضير للقيام بالتغييرات</p>

<h2 dir="rtl"> قمع تتبع الملفات</h2>
<p dir="rtl">استثناء الملفات والمجلدات المؤقتة</p>

<p align="right"><code align="right">
*.log
build/
temp-*
</code></p>

<p dir="rtl">استخدام ملف نصي بمسمى <code dir="ltr">.gitignore</code> يمنع تتبع الملفات والمجلدات الغير مرغوبة بتحديد أنماط تسمية هذه الملفات</p>


<p align="right"><code align="right">$ git ls-files --others --ignored --exclude-standard</code></p>

<p dir="rtl">سرد قائمة بكل الملفات التي تم تجاهلها في المشروع الحالي</p>

<h2 dir="rtl"> حفظ المتغيرات الصغيرة</h2>
<p dir="rtl">التخزين الجانبي واستعادة المتغيرات غير المكتلمة</p>


<p align="right"><code align="right">$ git stash</code></p>

<p dir="rtl">تخزين مؤقت لكل الملفات المتغيرة التي تتم متابعتها</p>


<p align="right"><code align="right">$ git stash pop</code></p>

<p dir="rtl">استعادة آخر الملفات المتغيرة التي تم تخزينها مؤخراً بشكل مؤقت</p>


<p align="right"><code align="right">$ git stash list</code></p>

<p dir="rtl">سرد قائمة بكل عمليات التخزين المؤقتة التي لم يتم استعادتها بعد</p>


<p align="right"><code align="right">$ git stash drop</code></p>

<p dir="rtl">التخلص من آخر الملفات المتغيرة التي تم تخزينها مؤخراً بشكل مؤقت</p>

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}
<h2 dir="rtl"> مراجعة ماضي التغييرات</h2>
<p dir="rtl">تصفح وتفحص تطور ملفات المشروع</p>


<p align="right"><code align="right">$ git log</code></p>

<p dir="rtl">سرد قائمة بماضي النسخ للفرع الحالي</p>


<p align="right"><code align="right">$ git log --follow [اسم الملف]</code></p>

<p dir="rtl">سرد قائمة بماضي نسخ ملف معين (يشمل تغيير الاسم)</p>


<p align="right"><code align="right">$ git diff [الفرع الثاني]...[الفرع الأول]</code></p>

<p dir="rtl">عرض اختلافات المحتوى من فرع لآخر</p>


<p align="right"><code align="right">$ git show [عملية ارتكاب]</code></p>

<p dir="rtl">عرض البيانات الوصفية وتغييرات المحتوى لعملية ارتكاب معينة</p>

<h2 dir="rtl"> التراجع عن عمليات الارتكاب</h2>
<p dir="rtl">مسح الأخطاء واستبدال جزء من الماضي</p>


<p align="right"><code align="right">$ git reset [عملية ارتكاب]</code></p>

<p dir="rtl">إلغاء جميع عمليات ارتكاب التغييرات بعد <code>[عملية ارتكاب]</code> مع الحفاظ على التغييرات محليّاً</p>


<p align="right"><code align="right">$ git reset --hard [عملية ارتكاب]</code></p>

<p dir="rtl">إلغاء جميع عمليات ارتكاب التغييرات واستعادة الملفات إلى وضعها السابق وقت عملية ارتكاب التغييرات</p>

<h2 dir="rtl"> مزامنة التغييرات</h2>
<p dir="rtl">تسجيل علامة مرجعية للمستودع وتبادل ماضي النسخ</p>


<p align="right"><code align="right">$ git fetch [علامة مرجعية]</code></p>

<p dir="rtl">تحميل كل ماضي المستودع من العلامة المرجعية</p>


<p align="right"><code align="right">$ git merge [فرع]/[علامة مرجعية]</code></p>

<p dir="rtl">دمج فرع لعلامة مرجعية مع الفرع المحلي الحالي</p>


<p align="right"><code align="right">$ git push [alias] [فرع]</code></p>

<p dir="rtl">رفع كل عمليات ارتكاب التغيرات للفرع المحلي على Github</p>


<p align="right"><code align="right">$ git pull</code></p>

<p dir="rtl">تحميل ماضي العلامة المرجعية ودمج التغييرات</p>

{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
