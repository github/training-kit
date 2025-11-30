---
layout: cheat-sheet
redirect_to: false
title: <div dir="rtl">מעבר מ-Subversion ל-Git</div>
byline: <p dir="rtl">כשעוברים מ-Subversion ל-Git, יש אוצר מילים וערכת פקודות ללמוד, בנוסף ליכולות החדשות שרק Git מאפשר. דף תזכורת זה נועד לעזור לכם במעבר בין טכנולוגיית Subversion הקלאסית לשימוש המודרני ב-Git עם פלטפורמת השיתוף GitHub.</p>
leadingpath: ../../../
---

{% capture migration %}
<h2 dir="rtl">העברה (Migration)</h2>

<h3 dir="rtl">GitHub Importer</h3>

<p dir="rtl">עבור פרויקטים נגישים באינטרנט, GitHub.com מספק Importer להעברה אוטומטית ויצירת מאגר (repository) מ-Subversion, Team Foundation Server, Mercurial, או פרויקטים מבוססי Git שמתארחים במקומות אחרים.</p>

<p dir="rtl">התהליך פשוט, צריך רק להתחבר לחשבון GitHub שלכם (אם אתם לא מחוברים כבר), להזין את ה-URL של מערכת ניהול הגרסאות הקיימת של הפרויקט שלכם בשדה המאגר, ולהתחיל את ההמרה.</p>

<p dir="rtl">בהתאם למערכת ניהול הגרסאות שזוהתה, Importer עשוי לבקש מידע נוסף להעברה. זה כולל קובץ מיפוי לקישור בין שמות משתמש ב-Subversion לשדות Git.</p>

<p dir="rtl">קראו עוד על איך לייבא את הפרויקט שלכם ל-GitHub על ידי עיון במלוא <a href="https://docs.github.com/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer">התיעוד של GitHub Importer</a>.</p>

<h3 dir="rtl">כלי SVN2Git</h3>

<p dir="rtl">כשיש מגבלות גישה או מאגרי Subversion לא ציבוריים שצריך להעביר ל-Git, הכלי SVN2Git הוא כלי שורת הפקודה המועדף ומספק שליטה בכל שלב בתהליך.</p>

<p dir="rtl">Subversion מציג הבדלים ברורים במבנה לעומת מאגר Git, ו-SVN2Git מספק את הגמישות וההגדרות עבור מבני Subversion מסורתיים ומותאמים אישית. זה מבטיח שמאגר ה-Git שמתקבל מתיישר עם שיטות עבודה מומלצות סטנדרטיות עבור קומיטים, ענפים ותגים לאורך כל ההיסטוריה של הפרויקט.</p>

<p dir="rtl">תכונות בולטות של SVN2Git כוללות:</p>

<ul dir="rtl">
<li>המרת כל המוסכמות של SVN למבנה Git מסורתי</li>
<li>אספקת שדות משתמש SVN לנתוני שם ודוא״ל בקומיטים של Git</li>
<li>אפשרות לדפוסי החרגה לתוכן מדויק של מאגר Git</li>
</ul>

<p dir="rtl">למדו עוד על SVN2Git בדף הבית הרשמי של הפרויקט:</p>

<p dir="rtl"><a href="https://github.com/nirvdrum/svn2git">https://github.com/nirvdrum/svn2git</a></p>

{% endcapture %}

<div class="col-md-6 col-12">
{{ migration | markdownify }}
</div>

{% capture bridging %}
<h2 dir="rtl">גישור (Bridging)</h2>

<h3 dir="rtl">ניצול התמיכה של Git ב-SVN</h3>

<p dir="rtl">לעתים קרובות, במהלך המעבר ל-Git, תשתית ה-Subversion נשארת במקום בזמן שהמשתמשים מתרגלים לאינטראקציות עם מאגר Git מקומי, תהליכי עבודה מקומיים ואפליקציות שולחן עבודה.</p>

<p dir="rtl">הפקודה <code>git svn</code> מאפשרת למשתמשים להסתנכרן עם שרת מאגר Subversion מרכזי תוך ניצול כל היתרונות שיש להציע ללקוחות Git מקומיים בשורת פקודה וגרפיים.</p>

<p dir="rtl">כדי לשכפל מאגר Subversion כמאגר Git מקומי, הורידו את הפרויקט במלואו עם הפקודה הזו:</p>

<p align="right"><code dir="ltr">git svn clone [svn-repo-url] --stdlayout</code></p>

<p dir="rtl">וודאו שאתם מכירים את המבנה של מאגר ה-Subversion הממוקד ואם הוא עוקב אחר הפריסה הסטנדרטית או לא. עבור פריסות לא מסורתיות של <code>trunk</code>, <code>branches</code> ו-<code>tags</code>, יש לציין את מתגי האופציה הבאים במהלך <code>svn clone</code>:</p>

<ul dir="rtl">
<li><code>T [trunk]</code> למוסכמת קוד מקור ראשית חלופית</li>
<li><code>b [branches]</code> למיקום ענפים חלופי</li>
<li><code>t [tags]</code> למיקום מבנה תגים חלופי</li>
</ul>

<p dir="rtl">ברגע שפעולת ה-clone מסתיימת, תוכלו להמשיך עם כל אינטראקציה מקומית של Git בשורת הפקודה או עם לקוחות גרפיים.</p>

<h3 dir="rtl">סנכרון עם Subversion</h3>

<p dir="rtl">פרסום היסטוריית Git מקומית חזרה למאגר Subversion מרכזי שהורד עם git svn clone מבוצע עם פקודה אחת:</p>

<p align="right"><code dir="ltr">git svn dcommit</code></p>

<p dir="rtl">אם ההיסטוריה של מאגר ה-Subversion המתארח מכילה קומיטים שעדיין לא נמצאים במאגר ה-Git המקומי, פעולת ה-<code>dcommit</code> תידחה עד שהקומיטים יורדו עם הפקודה הזו:</p>

<p align="right"><code dir="ltr">git svn rebase</code></p>

<p dir="rtl">זכרו שפעולה זו משכתבת את היסטוריית ה-Git המקומית שלכם ומזהי הקומיט שלכם יהיו שונים.</p>

{% endcapture %}

<div class="col-md-6 col-12">
{{ bridging | markdownify }}
</div>

<h2 dir="rtl">הבנה (Understanding)</h2>

<p dir="rtl">Subversion ו-Git חולקים אוצר מילים דומה, אבל המשותף לעתים קרובות הוא רק שמות הפקודות. ההתנהגות והפונקציונליות שונות למדי בהתחשב בתכונות הייחודיות ש-Git מספק כמערכת ניהול גרסאות מבוזרת בהשוואה להיבטים המרכזיים של Subversion.</p>

<table dir="rtl">
<thead>
<tr>
<th>פקודת SVN</th>
<th>פקודת Git</th>
<th>התנהגות Git</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>status</code></td>
<td><code>status</code></td>
<td>דיווח על מצב עץ העבודה</td>
</tr>
<tr>
<td><code>add</code></td>
<td><code>add</code></td>
<td>נדרש עבור כל נתיב לפני ביצוע קומיט</td>
</tr>
<tr>
<td><code>commit</code></td>
<td><code>commit</code></td>
<td>שמירת שינויים מוכנים בהיסטוריית הגרסאות המקומית</td>
</tr>
<tr>
<td><code>rm</code>, <code>delete</code></td>
<td><code>rm</code></td>
<td>הכנת נתיבים למחיקה בקומיט הבא</td>
</tr>
<tr>
<td><code>move</code></td>
<td><code>mv</code></td>
<td>הכנת תוכן שהועבר לקומיט הבא</td>
</tr>
<tr>
<td><code>checkout</code></td>
<td><code>clone</code></td>
<td>שכפול ההיסטוריה השלמה של פרויקט מקומית בפעם הראשונה</td>
</tr>
<tr>
<td></td>
<td><code>branch</code></td>
<td>יצירת הקשר מקומי לקומיטים</td>
</tr>
<tr>
<td></td>
<td><code>merge</code></td>
<td>חיבור היסטוריות ענפים ושינויים לעץ העבודה</td>
</tr>
<tr>
<td></td>
<td><code>log</code></td>
<td>לא נדרשת רשת</td>
</tr>
<tr>
<td></td>
<td><code>push</code></td>
<td>העלאת היסטוריית קומיטים ל-GitHub/שרת Git מרכזי</td>
</tr>
<tr>
<td></td>
<td><code>pull</code></td>
<td>הורדה ואינטגרציה של היסטוריית מאגר GitHub עם המקומי</td>
</tr>
<tr>
<td></td>
<td><code>fetch</code></td>
<td>הורדת היסטוריית מאגר GitHub ללא פעולה נוספת</td>
</tr>
</tbody>
</table>
