---
layout: cheat-sheet
redirect_to: false
title: <div dir="rtl">טיפול בתלויות עם Submodules ו-Subtrees</div>
byline: <p dir="rtl">Submodules ו-subtrees הם כלי Git שמאפשרים לכלול תתי-פרויקטים כתת-תיקייה בתוך פרויקט. המימוש של כל אחד מהם שונה מאוד.</p>
leadingpath: ../../../
---

<div class="col-md-12">
<h1 dir="rtl">הוספת תת-פרויקט חדש</h1>
</div>

{% capture submodule %}

<h3 dir="rtl">Submodule</h3>

<p align="right"><code dir="ltr">git submodule add https://github.com/githubtraining/example-submodule</code></p>

<p align="right"><code dir="ltr">git commit -m "adding new submodule"</code></p>

<p dir="rtl">הפקודה <code>submodule add</code> מוסיפה קובץ חדש בשם <code>.gitmodules</code> יחד עם תת-תיקייה שמכילה את הקבצים מ-<code>example-submodule</code>. שניהם מתוספים לאזור ההכנה שלכם (staging area) ופשוט צריך לבצע להם קומיט. ההיסטוריה של ה-submodule נשארת עצמאית מפרויקט האב.</p>

{% endcapture %}

{% capture subtree %}

<h3 dir="rtl">Subtree</h3>

<p align="right"><code dir="ltr">git subtree add --prefix=example-submodule https://github.com/githubtraining/example-submodule main --squash</code></p>

<p dir="rtl">הפקודה subtree מוסיפה תת-תיקייה שמכילה את הקבצים מ-<code>example-submodule</code>. הנוהג הנפוץ ביותר הוא להשתמש באופציה <code>--squash</code> כדי לשלב את ההיסטוריה של תת-הפרויקט לקומיט יחיד, שאז מושתל על העץ הקיים של פרויקט האב. אתם יכולים להשמיט את האופציה <code>--squash</code> כדי לשמור על כל ההיסטוריה מהענף המיועד של תת-הפרויקט.</p>

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1 dir="rtl">צפייה ב-Diff של תת-הפרויקט</h1>
</div>

{% capture submodule %}

<h3 dir="rtl">Submodule</h3>

<p dir="rtl">כדי לראות diff של ה-submodule:</p>

<pre dir="ltr"><code># show changes to the submodule commit
git diff example-submodule
# show oneline log of new commits in the submodule
git diff --submodule example-submodule
# show changes to the files in the submodule
git diff --submodule=diff
</code></pre>

{% endcapture %}

{% capture subtree %}

<h3 dir="rtl">Subtree</h3>

<p dir="rtl">לא נדרשת פקודה מיוחדת</p>

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1 dir="rtl">שכפול מאגר (Repository) עם תת-פרויקט</h1>
</div>

{% capture submodule %}

<h3 dir="rtl">Submodule</h3>

<p dir="rtl">כדי לשכפל מאגר (repository) יחד עם ה-submodules שלו:</p>

<p align="right"><code dir="ltr">git clone --recurse-submodules URL</code></p>

<p dir="rtl">אם שכחתם את <code>--recurse-submodules</code>, תוכלו לשכפל ולאתחל את כל ה-submodules:</p>

<p align="right"><code dir="ltr">git submodule update --init --recursive</code></p>

<p dir="rtl">הוספת <code>--recursive</code> נדרשת רק אם יש ל-submodule עצמו submodules.</p>

{% endcapture %}

{% capture subtree %}

<h3 dir="rtl">Subtree</h3>

<p dir="rtl">לא נדרשת פקודה מיוחדת</p>

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1 dir="rtl">משיכת עדכונים של Superproject</h1>
</div>

{% capture submodule %}

<h3 dir="rtl">Submodule</h3>

<p dir="rtl">כברירת מחדל, מאגר ה-submodule נשלף (fetched), אבל לא מתעדכן כשאתם מריצים <code>git pull</code> ב-superproject. אתם צריכים להשתמש ב-<code>git submodule update</code>, או להוסיף את הדגל <code>--recurse-submodules</code> ל-<code>pull</code>:</p>

<pre dir="ltr"><code>git pull
git submodule update --init --recursive
# or, in one step (Git >= 2.14)
git pull --recurse-submodules
</code></pre>

<p dir="rtl"><code>--init</code> נדרש אם ה-superproject הוסיף submodules חדשים, ו-<code>--recursive</code> נדרש אם יש ל-submodule עצמו submodules.</p>

<p dir="rtl">אם אי-פעם ה-superproject משנה את ה-URL של ה-submodule, נדרשת פקודה נפרדת:</p>

<pre dir="ltr"><code># copy the new URL to your local config
git submodule sync --recursive
# update the submodule from the new URL
git submodule update --init --recursive
</code></pre>

<p dir="rtl"><code>--recursive</code> נדרש רק אם יש ל-submodule עצמו submodules.</p>

{% endcapture %}

{% capture subtree %}

<h3 dir="rtl">Subtree</h3>

<p dir="rtl">לא נדרשת פקודה מיוחדת</p>

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1 dir="rtl">החלפת ענפים</h1>
</div>

{% capture submodule %}

<h3 dir="rtl">Submodule</h3>

<p dir="rtl">כברירת מחדל, עץ העבודה של ה-submodule לא מתעדכן להתאים לקומיט המתועד ב-superproject כשמחליפים ענפים. אתם צריכים להשתמש ב-<code>git submodule update</code>, או להוסיף את הדגל <code>--recurse-submodules</code> ל-<code>switch</code>:</p>

<pre dir="ltr"><code>git switch &lt;branch&gt;
git submodule update --recursive
# or, in one step (Git >= 2.13)
git switch --recurse-submodules &lt;branch&gt;
</code></pre>

{% endcapture %}

{% capture subtree %}

<h3 dir="rtl">Subtree</h3>

<p dir="rtl">לא נדרשת פקודה מיוחדת</p>

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1 dir="rtl">משיכת עדכונים של תת-פרויקט</h1>
</div>

{% capture submodule %}

<h3 dir="rtl">Submodule</h3>

<pre dir="ltr"><code># Update the submodule repository
git submodule update --remote
# Record the changes in the superproject
git commit -am "Update submodule"
</code></pre>

<p dir="rtl">אם יש לכם יותר מ-submodule אחד, תוכלו להוסיף את הנתיב ל-submodule בסוף הפקודה <code>git submodule update --remote</code> כדי לציין איזה תת-פרויקט לעדכן.</p>

<p dir="rtl">כברירת מחדל, <code>git submodule update --remote</code> יעדכן את ה-submodule לקומיט האחרון על הענף <code>main</code> של ה-remote של ה-submodule.</p>

<p dir="rtl">אתם יכולים לשנות את ענף ברירת המחדל לקריאות עתידיות עם:</p>

<pre dir="ltr"><code># Git >= 2.22
git submodule set-branch other-branch
# or
git config -f .gitmodules submodule.example-submodule.branch other-branch
</code></pre>

{% endcapture %}

{% capture subtree %}

<h3 dir="rtl">Subtree</h3>

<p align="right"><code dir="ltr">git subtree pull --prefix=example-submodule https://github.com/githubtraining/example-submodule main --squash</code></p>

<p dir="rtl">תוכלו לקצר את הפקודה על ידי הוספת ה-URL של ה-subtree כ-remote:</p>

<p align="right"><code dir="ltr">git remote add sub-remote https://github.com/githubtraining/example-submodule.git</code></p>

<p dir="rtl">תוכלו להוסיף/למשוך מ-refs אחרים על ידי החלפת <code>main</code> ב-ref הרצוי (למשל <code>stable</code>, <code>v1.0</code>).</p>

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1 dir="rtl">ביצוע שינויים בתת-פרויקט</h1>

<p dir="rtl">ברוב המקרים, זה נחשב לשיטת עבודה מומלצת לבצע שינויים בשכפול נפרד של מאגר תת-הפרויקט ולמשוך אותם לפרויקט האב. כשזה לא מעשי, עקבו אחרי ההוראות האלה:</p>
</div>

{% capture submodule %}

<h3 dir="rtl">Submodule</h3>

<p dir="rtl">גישה לתיקיית ה-submodule ויצירת ענף:</p>

<p align="right"><code dir="ltr">cd example-submodule</code></p>
<p align="right"><code dir="ltr">git switch -c branch-name main</code></p>

<p dir="rtl">שינויים דורשים שני קומיטים, אחד במאגר תת-הפרויקט ואחד במאגר האב.</p>
<p dir="rtl">אל תשכחו לדחוף גם ב-submodule וגם ב-superproject!</p>

{% endcapture %}

{% capture subtree %}

<h3 dir="rtl">Subtree</h3>

<p dir="rtl">לא נדרשת פקודה מיוחדת, שינויים יבוצעו קומיט על ענף פרויקט האב.</p>

<p dir="rtl">אפשר ליצור קומיטים שמערבבים שינויים לתת-הפרויקט ולפרויקט האב, אבל זה בדרך כלל לא מומלץ.</p>

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1 dir="rtl">דחיפת שינויים למאגר תת-הפרויקט</h1>
</div>

{% capture submodule %}

<h3 dir="rtl">Submodule</h3>

<p dir="rtl">כשאתם בתיקיית ה-submodule:</p>

<p align="right"><code dir="ltr">git push</code></p>

<p dir="rtl">או כשאתם בתיקיית האב:</p>

<p align="right"><code dir="ltr">git push --recurse-submodules=on-demand</code></p>

{% endcapture %}

{% capture subtree %}

<h3 dir="rtl">Subtree</h3>

<p align="right"><code dir="ltr">git subtree push --prefix=example-submodule https://github.com/githubtraining/example-submodule main</code></p>

{% endcapture %}

<div class="col-md-6">
{{ submodule | markdownify }}
</div>

<div class="col-md-6">
{{ subtree | markdownify }}
</div>

<div class="col-md-12">
<h1 dir="rtl">הגדרות שימושיות ל-Submodules</h1>

{% capture configs %}
<p dir="rtl">תמיד להציג את לוג ה-submodule כשאתם עושים diff:</p>

<p align="right"><code dir="ltr">git config --global diff.submodule log</code></p>

<p dir="rtl">להציג סיכום קצר של שינויי submodule בהודעת <code>git status</code> שלכם:</p>

<p align="right"><code dir="ltr">git config --global status.submoduleSummary true</code></p>

<p dir="rtl">להפוך את <code>push</code> לברירת מחדל עם <code>--recurse-submodules=on-demand</code>:</p>

<p align="right"><code dir="ltr">git config --global push.recurseSubmodules on-demand</code></p>

<p dir="rtl">להפוך את כל הפקודות (חוץ מ-<code>clone</code>) לברירת מחדל עם <code>--recurse-submodules</code> אם הן תומכות בדגל (זה עובד עבור <code>git pull</code> מאז Git 2.15):</p>

<p align="right"><code dir="ltr">git config --global submodule.recurse true</code></p>

{% endcapture %}

{{ configs | markdownify }}
</div>
