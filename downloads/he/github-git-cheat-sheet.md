---
layout: cheat-sheet
redirect_to: false
title: <div dir="rtl">דף תזכורת Git של GitHub</div>
byline: <p dir="rtl">Git היא מערכת קוד פתוח לניהול גרסאות מבוזרת שמאפשרת את הפעילות של GitHub על המחשב שלכם. דף תזכורת זה מרכז את פקודות שורת הפקודה הנפוצות של Git לעיון מהיר.</p>
leadingpath: ../../../
---

{% capture colOne %}
<h2 dir="rtl">התקנה</h2>

<h3 dir="rtl">GitHub Desktop</h3>
<p dir="rtl"><a href="https://desktop.github.com">desktop.github.com</a></p>

<h3 dir="rtl">Git לכל הפלטפורמות</h3>
<p dir="rtl"><a href="https://git-scm.com">git-scm.com</a></p>

<h2 dir="rtl">הגדרת הכלים</h2>
<p dir="rtl">הגדרת מידע משתמש עבור כל המאגרים המקומיים</p>

<p align="right"><code>$ git config --global user.name "[name]"</code></p>

<p dir="rtl">מגדיר את השם שתרצו שיופיע בפעולות הקומיט שלכם</p>

<p align="right"><code>$ git config --global user.email "[email address]"</code></p>

<p dir="rtl">מגדיר את כתובת הדוא״ל שתרצו שתופיע בפעולות הקומיט שלכם</p>

<p align="right"><code>$ git config --global color.ui auto</code></p>

<p dir="rtl">מפעיל צביעה שימושית של פלט שורת הפקודה</p>

<h2 dir="rtl">ענפים (Branches)</h2>

<p dir="rtl">ענפים הם חלק מהותי בעבודה עם Git. כל קומיט שתבצעו ייעשה על הענף שאתם עובדים עליו כרגע (checked out). השתמשו ב-<code>git status</code> כדי לראות איזה ענף זה.</p>

<p align="right"><code>$ git branch [branch-name]</code></p>

<p dir="rtl">יוצר ענף חדש</p>

<p align="right"><code>$ git switch -c [branch-name]</code></p>

<p dir="rtl">עובר לענף המצוין ומעדכן את תיקיית העבודה</p>

<p align="right"><code>$ git merge [branch]</code></p>

<p dir="rtl">משלב את ההיסטוריה של הענף המצוין לענף הנוכחי. זה בדרך כלל נעשה בבקשות משיכה (pull requests), אבל זו פעולת Git חשובה.</p>

<p align="right"><code>$ git branch -d [branch-name]</code></p>

<p dir="rtl">מוחק את הענף המצוין</p>

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

<h2 dir="rtl">יצירת מאגרים (Repositories)</h2>

<p dir="rtl">מאגר (repository) חדש יכול להיווצר מקומית, או שאפשר לשכפל מאגר קיים. כשיוצרים מאגר מקומי, צריך לדחוף אותו ל-GitHub אחר כך.</p>

<p align="right"><code>$ git init</code></p>

<p dir="rtl">הפקודה git init הופכת תיקייה קיימת למאגר Git חדש בתוך התיקייה שבה אתם מריצים את הפקודה הזו. אחרי השימוש בפקודה <code>git init</code>, קשרו את המאגר המקומי למאגר GitHub ריק באמצעות הפקודה הבאה:</p>

<p align="right"><code>$ git remote add origin [url]</code></p>

<p dir="rtl">מציין את המאגר המרוחק עבור המאגר המקומי שלכם. ה-url מצביע על מאגר ב-GitHub.</p>

<p align="right"><code>$ git clone [url]</code></p>

<p dir="rtl">משכפל (מוריד) מאגר שכבר קיים ב-GitHub, כולל כל הקבצים, הענפים והקומיטים</p>

<h2 dir="rtl">קובץ ה-.gitignore</h2>

<p dir="rtl">לפעמים כדאי להחריג קבצים ממעקב ב-Git. זה בדרך כלל נעשה בקובץ מיוחד בשם <code>.gitignore</code>. תוכלו למצוא תבניות שימושיות לקבצי <code>.gitignore</code> ב-<a href="https://github.com/github/gitignore">github.com/github/gitignore</a>.</p>

<h2 dir="rtl">סנכרון שינויים</h2>

<p dir="rtl">סנכרון המאגר המקומי שלכם עם המאגר המרוחק ב-GitHub.com</p>

<p align="right"><code>$ git fetch</code></p>

<p dir="rtl">מוריד את כל ההיסטוריה מענפי המעקב המרוחקים</p>

<p align="right"><code>$ git merge</code></p>

<p dir="rtl">משלב ענפי מעקב מרוחקים לענף המקומי הנוכחי</p>

<p align="right"><code>$ git push</code></p>

<p dir="rtl">מעלה את כל הקומיטים של הענף המקומי ל-GitHub</p>

<p align="right"><code>$ git pull</code></p>

<p dir="rtl">מעדכן את ענף העבודה המקומי הנוכחי עם כל הקומיטים החדשים מהענף המרוחק המתאים ב-GitHub. <code>git pull</code> היא שילוב של <code>git fetch</code> ו-<code>git merge</code></p>

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>

{% capture colThree %}

<h2 dir="rtl">ביצוע שינויים</h2>

<p dir="rtl">עיון ובדיקת התפתחות קבצי הפרויקט</p>

<p align="right"><code>$ git log</code></p>

<p dir="rtl">מציג את היסטוריית הגרסאות עבור הענף הנוכחי</p>

<p align="right"><code>$ git log --follow [file]</code></p>

<p dir="rtl">מציג את היסטוריית הגרסאות עבור קובץ, כולל שינויי שם (עובד רק עבור קובץ בודד)</p>

<p align="right"><code>$ git diff [first-branch]...[second-branch]</code></p>

<p dir="rtl">מציג הבדלי תוכן בין שני ענפים</p>

<p align="right"><code>$ git show [commit]</code></p>

<p dir="rtl">מציג מטא-דאטה ושינויי תוכן של הקומיט המצוין</p>

<p align="right"><code>$ git add [file]</code></p>

<p dir="rtl">מכין את הקובץ לקומיט הבא באזור ההכנה (staging area)</p>

<p align="right"><code>$ git commit -m "[descriptive message]"</code></p>

<p dir="rtl">שומר את צילומי הקבצים באופן קבוע בהיסטוריית הגרסאות</p>

<h2 dir="rtl">ביטול קומיטים</h2>

<p dir="rtl">מחיקת טעויות ויצירת היסטוריה חלופית</p>

<p align="right"><code>$ git reset [commit]</code></p>

<p dir="rtl">מבטל את כל הקומיטים אחרי <code>[commit]</code>, תוך שמירה על השינויים מקומית</p>

<p align="right"><code>$ git reset --hard [commit]</code></p>

<p dir="rtl">מוחק את כל ההיסטוריה והשינויים חזרה לקומיט המצוין</p>

<blockquote dir="rtl">
<p dir="rtl">זהירות! שינוי ההיסטוריה עלול לגרום לבעיות חמורות. אם צריך לשנות קומיטים שכבר קיימים ב-GitHub (המאגר המרוחק), המשיכו בזהירות רבה. אם צריכים עזרה, פנו ל-<a href="https://github.community">github.community</a> או צרו קשר עם התמיכה.</p>
</blockquote>

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

<h2 dir="rtl">מילון מונחים</h2>

<ul dir="rtl">
<li><strong>git</strong>: מערכת קוד פתוח מבוזרת לניהול גרסאות</li>
<li><strong>GitHub</strong>: פלטפורמה לאחסון ושיתוף פעולה במאגרי Git</li>
<li><strong>קומיט (commit)</strong>: אובייקט Git, צילום של השינויים שלכם דחוס למזהה SHA</li>
<li><strong>ענף (branch)</strong>: מצביע קל משקל ומטולטל לקומיט</li>
<li><strong>שכפול (clone)</strong>: גרסה מקומית של מאגר, כולל כל הקומיטים והענפים</li>
<li><strong>מרוחק (remote)</strong>: מאגר משותף ב-GitHub שכל חברי הצוות משתמשים בו כדי להחליף שינויים</li>
<li><strong>העתק מאגר (fork)</strong>: עותק של מאגר ב-GitHub בבעלות משתמש אחר</li>
<li><strong>בקשת משיכה (pull request)</strong>: מקום להשוות ולדון בהבדלים שהוצגו בענף עם ביקורות, הערות, בדיקות משולבות ועוד</li>
<li><strong>HEAD</strong>: מייצג את תיקיית העבודה הנוכחית שלכם, מצביע ה-HEAD יכול לעבור לענפים, תגים או קומיטים שונים בשימוש ב-<code>git switch</code></li>
</ul>

{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
<div class="clearfix"></div>
