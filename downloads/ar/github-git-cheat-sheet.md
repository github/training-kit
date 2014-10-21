---
layout: cheat-sheet
title:  برشامة أوامر Git لنظام GitHub
byline: أمر Git هو نظام تحكم بالنسخ الموزعة المفتوحة المصدر التي توظف أنشطة GitHub في الحواسيب الشخصية. هذه "البرشامة" تلخص تعليمات Git الأكثر استخداماً على سطر الأوامر كمرجع سري
leadingpath: ../../
---

<h1 dir="rtl"> برشامة أوامر Git لنظام GitHub</h1>
<p dir="rtl">أمر Git هو نظام تحكم بالنسخ الموزعة المفتوحة المصدر التي توظف أنشطة GitHub في الحواسيب الشخصية. هذه "البرشامة" تلخص تعليمات Git الأكثر استخداماً على سطر الأوامر كمرجع سريع.</p>

<h2 dir="rtl"> تنصيب Git</h2>
<p dir="rtl">نظام GitHub يوفر برنامج عميل لسطح المكتب يشمل واجهة مستخدم رسومية لنشاطات المستودعات الأكثر شيوعاً وتحديث نسخة سطر أوامر Git تلقائياً للحالات المتقدمة.</p>

<h3 dir="rtl"> GitHub لنظام تشغيل وندوز</h3>
<p dir="rtl">http://windows.github.com</p>

<h3 dir="rtl"> GitHub لنظام تشغيل ماك</h3>
<p dir="rtl">http://mac.github.com</p>

<p dir="rtl">توزيعات Git لأنظمة لينكس وPosix متوفرة في موقع Git SCM الرسمي.</p>

<h3 dir="rtl"> Git لكل أنظمة التشغيل</h3>
<p dir="rtl">http://git-scm.com</p>

<h2 dir="rtl"> إعادة تكوين الأدوات</h2>
<p dir="rtl">إعداد معلومات المستخدم لجميع المستودعات المحلية</p>

<pre><code align="right">$ git config --global user.name "[الاسم]"</pre></code>

<p dir="rtl">إعداد الاسم المراد إدراجه في إجراءات تنفيذ أو "ارتكاب" التغييرات</p>


<pre><code align="right">$ git config --global user.email "[البريد الالكتروني]"</pre></code>

<p dir="rtl">إعداد البريد الالكتروني المراد إدراجه في إجراءات تنفيذ أو "ارتكاب" التغييرات</p>


<h2 dir="rtl"> صنع المستودعات</h2>
<p dir="rtl">بدء مستودع جديد أو الحصول على مستودع موجود مسبقاً عن طريق وصلة</p>


<pre><code align="right">$ git init [اسم المشروع]</pre></code>

<p dir="rtl">صنع مستودع جديد بالمسمى المعطى</p>


<pre><code align="right">$ git clone [رابط المشروع]</pre></code>

<p dir="rtl">تحميل مشروع بماضيه الشامل لكل النسخ الحالية والسابقة</p>

<h2 dir="rtl"> إحداث تغييرات</h2>
<p dir="rtl">مراجعة التغييرات وتشكيل إجراء "ارتكاب" التغييرات</p>


<pre><code align="right">$ git status</pre></code>

<p dir="rtl">إدراج جميع الملفات الجديدة أو التي تم تغييرها وتنتظر أن يتم ارتكابها</p>


<pre><code align="right">$ git diff</pre></code>

<p dir="rtl">إظهار كل التغييرات في الملفات المتغيرة التي لم يتم إضافتها لقائمة الترحيل</p>


<pre><code align="right">$ git add [اسم الملف]</pre></code>

<p dir="rtl">إضافة الملف لقائمة الترحيل للتحضير ليتم ارتكابها</p>


<pre><code align="right">$ git diff --staged</pre></code>

<p dir="rtl">إظهار كل التغييرات في الملفات المتغيرة في قائمة الترحيل والمختلفة عن الموجودة في المستودع حالياً</p>


<pre><code align="right">$ git reset [اسم الملف]</pre></code>

<p dir="rtl">إزالة الملف من قائمة الترحيل مع الحفاظ على المحتوى الجديد دون تغيير.</p>


<pre><code align="right">$ git commit -m"[تعليق توضيحي]"</pre></code>

<p dir="rtl">ارتكاب التغييرات الموجودة في قائمة الترحيل وحفظها في ماضي النسخ</p>

<h2 dir="rtl"> التغييرات الجماعية</h2>
<p dir="rtl">تسمية مجموعة من التغييرات المرتكبة وجمع الجهود المكتملة</p>


<pre><code align="right">$ git branch</pre></code>

<p dir="rtl">إدراج قائمة بكل الفروع المحلية للمستودع الحالي</p>


<pre><code align="right">$ git branch [اسم الفرع]</pre></code>

<p dir="rtl">تكوين فرع جديد</p>


<pre><code align="right">$ git checkout [اسم الفرع]</pre></code>

<p dir="rtl">التغيير إلى فرع معين وتحديث المسار الحالي</p>


<pre><code align="right">$ git merge [اسم الفرع]</pre></code>

<p dir="rtl">دمج الفرع الحالي بفرع آخر ماضي</p>


<pre><code align="right">$ git branch -d [اسم الفرع]</pre></code>

<p dir="rtl">حذف فرع معين</p>


<h2 dir="rtl"> إزالة وتغيير الملفات</h2>
<p dir="rtl">تحريك وإزالة الملفات التي تتم متابعة نسخها</p>


<pre><code align="right">$ git rm [اسم الملف]</pre></code>

<p dir="rtl">حذف الملف وإضافة عملية الحذف لقائمة الترحيل</p>


<pre><code align="right">$ git rm --cached [اسم الملف]</pre></code>

<p dir="rtl">إلغاء عملية تتبع نسخ الملف مع الحفاظ على الملف محلياً (الملف موجود محليّاً لكنه لا يظهر على Github(</p>


<pre><code align="right">$ git mv [اسم الملف الأصلي] [اسم الملف الجديد]</pre></code>

<p dir="rtl">تغيير اسم الملف والتحضير لارتكاب التغييرات</p>

<h2 dir="rtl"> قمع تتبع الملفات</h2>
<p dir="rtl">استثناء الملفات والمجلدات المؤقتة</p>

<pre><code align="right">
*.log
build/
temp-*
</pre></code>

<p dir="rtl">استخدام ملف نصي بمسمى <code dir="ltr">.gitignore</code> يمنع تتبع الملفات والمجلدات الغير مرغوبة بتحديد أنماط تسمية هذه الملفات</p>


<pre><code align="right">$ git ls-files --other --ignored --exclude-standard</pre></code>

<p dir="rtl">سرد قائمة بكل الملفات التي تم تجاهلها في المشروع الحالي</p>

<h2 dir="rtl"> حفظ المتغيرات الصغيرة</h2>
<p dir="rtl">التخزين الجانبي واستعادة المتغيرات غير المكتلمة</p>


<pre><code align="right">$ git stash</pre></code>

<p dir="rtl">تخزين مؤقت لكل الملفات المتغيرة التي تتم متابعتها</p>


<pre><code align="right">$ git stash pop</pre></code>

<p dir="rtl">استعادة آخر الملفات المتغيرة التي تم تخزينها مؤخراً بشكل مؤقت</p>


<pre><code align="right">$ git stash list</pre></code>

<p dir="rtl">سرد قائمة بكل عمليات التخزين المؤقتة التي لم يتم استعادتها بعد</p>


<pre><code align="right">$ git stash drop</pre></code>

<p dir="rtl">التخلص من آخر الملفات المتغيرة التي تم تخزينها مؤخراً بشكل مؤقت</p>

<h2 dir="rtl"> مراجعة ماضي التغييرات</h2>
<p dir="rtl">تصفح وتفحص تطور ملفات المشروع</p>


<pre><code align="right">$ git log</pre></code>

<p dir="rtl">سرد قائمة بماضي النسخ للفرع الحالي</p>


<pre><code align="right">$ git log --follow [اسم الملف]</pre></code>

<p dir="rtl">سرد قائمة بماضي نسخ ملف معين (يشمل تغيير الاسم)</p>


<pre><code align="right">$ git diff [الفرع الثاني]...[الفرع الأول]</pre></code>

<p dir="rtl">عرض اختلافات المحتوى من فرع لآخر</p>


<pre><code align="right">$ git show [عملية ارتكاب]</pre></code>

<p dir="rtl">عرض البيانات الوصفية وتغييرات المحتوى لعملية ارتكاب معينة</p>

<h2 dir="rtl"> التراجع عن عمليات الارتكاب</h2>
<p dir="rtl">مسح الأخطاء واستبدال جزء من الماضي</p>


<pre><code align="right">$ git reset [عملية ارتكاب]</pre></code>

<p dir="rtl">إلغاء جميع عمليات ارتكاب التغييرات بعد <code>[عملية ارتكاب]</code> مع الحفاظ على التغييرات محليّاً</p>


<pre><code align="right">$ git reset --hard [عملية ارتكاب]</pre></code>

<p dir="rtl">إلغاء جميع عمليات ارتكاب التغييرات واستعادة الملفات إلى وضعها السابق وقت عملية ارتكاب التغييرات</p>

<h2 dir="rtl"> مزامنة التغييرات</h2>
<p dir="rtl">تسجيل علامة مرجعية للمستودع وتبادل ماضي النسخ</p>


<pre><code align="right">$ git fetch [علامة مرجعية]</pre></code>

<p dir="rtl">تحميل كل ماضي المستودع من العلامة المرجعية</p>


<pre><code align="right">$ git merge [فرع]/[علامة مرجعية]</pre></code>

<p dir="rtl">دمج فرع لعلامة مرجعية مع الفرع المحلي الحالي</p>


<pre><code align="right">$ git push [alias] [فرع]</pre></code>

<p dir="rtl">رفع كل عمليات ارتكاب التغيرات للفرع المحلي على Github</p>


<pre><code align="right">$ git pull</pre></code>

<p dir="rtl">تحميل ماضي العلامة المرجعية ودمج التغييرات</p>

---

<h2> GitHub تدريب استخدام</h2>
<p dir="rtl">للمزيد من المعلومات عن استخدام Github و Git. الرجاء مراسلة فريق التدريب أو زيارة موقعنا لجدول المناسبات التعليمية وحالة توفر المحادثة الخاصة</p>

* training@github.com
* training.github.com
