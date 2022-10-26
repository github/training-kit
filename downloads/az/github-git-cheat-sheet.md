---
layout: cheat-sheet
redirect_to: false
title: GitHub-dan Git üçün yaddaş kitabçası
byline: Git - kompüterinizdə GitHub ilə işləmək üçün istifadə olunan açıq mənbəli, versiyaların paylanmış nəzarət sistemidir. Bu kitabça, əmr sətri üçün əsas Git əmrləri və onların tətbiqi üzrə təlimatlardan ibarətdir.
leadingpath: ../../
---

{% capture colOne %}
## Git quraşdırılması
GitHub, repozitarla əsas əməliyyatların icra edilməsi üçün qrafik interfeysli bir pəncərə proqramı və genişləndirilmiş iş ssenariləri üçün Git-in avtomatik yenilənən konsol versiyasını təqdim edir.

### Github Desktop
[desktop.github.com](https://desktop.github.com)

Linux və POSIX sistemləri üçün Git distribusiyalarını Git SCM rəsmi saytında tapa bilərsiniz.

### Bütün platformalar üçün Git
[git-scm.com](https://git-scm.com)

## İlkin quraşdırma
İstifadəçi haqqında informasiyanın bütün lokal repozitarlar üçün konfiqurasiyası

```$ git config --global user.name "[istifadəçi adı]"```

Kommitlərinizdə müəllif sahəsində əks olunacaq adınızı təyin edir

```$ git config --global user.email "[e-poçt ünvanı]"```

Kommitlərinizin məlumat hissəsində əks olunacaq e-poçt ünvanınızı təyin edir

```$ git config --global color.ui auto```

Əmr sətrinin çıxışının faydalı rənglənməsini aktiv edir

## Budaqlar
Budaqlar - Git-lə işin mühüm hissəsidir. Etdiyiniz istənilən kommit hal-hazırda "giriş etmiş" olduğunuz budaqda ediləcək. Hansı budaqda olduğunuzu görmək üçün `git status` əmrindən istifadə edin.

```$ git branch [budaq-adı]```

Yeni budaq yaradır

```$ git switch -c [budaq-adı]```

Göstərilən budağa keçir və iş qovluğunu yeniləyir

```$ git merge [budaq-adı]```

Göstərilən budağın tarixini cari budaqla birləşdirir. Bu, ümumiyyətlə dəyişikliklərin qəbul edilməsi sorğularında istifadə olunur, lakin vacib bir Git əməliyyatıdır.

```$ git branch -d [budaq-adı]```

Göstərilən budağı silir

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## Repozitarın yaradılması

Yeni bir repozitar ilə işə başlamaq üçün, bunu ya lokalda yaradıb sonra GitHub-a göndərməli və ya mövcud repozitarı klonlaşdırmalısınız. Hər repozitar üçün bu əməliyyatı sadəcə bir dəfə edəcəksiz.

```$ git init```

Mövcud bir qovluğu Git repozitarına çevirir

```$ git clone [url]```

GitHub-da mövcud olan repozitarı, bütün faylları, budaqları və kommitləri daxil olmaqla klonlaşdırır (yükləyir).

## .gitignore faylı
Bəzən, müəyyən faylları Git tərəfindən izlənmədən istisna etmək əlverişli ola bilər. Bu istisnalar adətən `.gitignore` adlanan xüsusi faylda yazılaraq təyin edilir. `.gitignore` faylları üçün faydalı şablonları [github.com/github/gitignore](https://github.com/github/gitignore) ünvanında tapa bilərsiniz.

## Dəyişikliklərin sinxronizasiyası

Lokal repozitarınızı Github.com-da olan repozitarınız ilə sinxronlaşdırın

```$ git fetch```

GitHub-da mövcud olan repozitarın bütün tarixçəsini yükləyir

```$ git merge```

GitHub-da mövcud olan repozitarı cari budaqla birləşdirir

```$ git push```

Lokal budaqda olan bütün kommitləri Github repozitarına göndərir

```$ git pull```

Cari işlək lokal budağı müvafiq Github budağından gələn bütün yeni kommitlərlə yeniləyir. `git pull` - `git fetch` və `git merge` əmrlərinin kombinasiyasıdır

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>

{% capture colThree %}

## Dəyişikliklər edin
Dəyişikliklərə baxış və kommitlərin yaradılması

```$ git status```

Bütün yeni və ya dəyişdirilmiş faylların siyahısını sadalayır

```$ git log```

Cari budaq üçün versiya tarixini siyahılayır

```$ git log --follow [fayl]```

Bir fayl üçün ad dəyişmələri də daxil olmaqla versiya tarixini siyahılayır

```$ git diff [birinci-budaq]...[ikinci-budaq]```

İki budaq arasındakı məzmun fərqlərini göstərir

```$ git show [commit]```

Müəyyən bir kommit üçün metadata və məzmun dəyişikliklərini göstərir

```$ git add [file]```

Göstərilən faylı sonrakı əməliyyatlar üçün indeksləyir

```$ git commit -m "[izahlı mesaj]"```

İndekslənmiş dəyişiklikləri versiya tarixinə yazır

## Kommitlərin geri qaytarılması

Səhvlərin silinməsi və tarixin tənzimlənməsi

```$ git reset [kommit]```

Bütün dəyişiklikləri işçi qovluğunda saxlayaraq, göstərilən `[commit]`-dən sonrakı kommitlərin hamısını ləğv edir. 

```$ git reset --hard [kommit]```

Bütün tarixi, işçi qovluğu daxil olmaqla ləğv edir və göstərilən kommitə qaytarır.

> DİQQƏT! Tarixi dəyişdirmək xoşagəlməz yan təsirlərə səbəb ola bilər. GitHub-da mövcud olan kommitləri dəyişdirərkən ehtiyatlı olun. Əgər köməyə ehtiyacınız varsa, [github.community](https://github.community) və ya dəstəklə əlaqə saxlayın.

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}

## Lüğət

- **git**: açıq mənbəli, versiyaların paylanmış nəzarət sistemidir
- **GitHub**: git repozitarlarına ev sahibliyi və əməkdaşlıq üçün platformadır
- **commit**: bir Git obyekti, repozitarınızın SHA alqoritmi ilə sıxılmış bir görüntüsüdür
- **branch** (budaq): kommitlər üçün yüngül daşına bilən bir göstəricidir
- **clone**: bütün kommit və budaqları da daxil olmaqla bir repozitarın lokal bir versiyasıdır
- **remote** (məsafədən idarə olunan): GitHub-da bütün komanda üzvlərinin istifadə etdikləri ümumi bir repozitardır
- **fork** (nüsxə): GitHub-dakı fərqli istifadəçiyə məxsus bir repozitar nüsxəsidir
- **pull request** (dəyişikliklərin qəbul edilməsi sorğusu): bir budaqda təqdim olunan fərqləri müqayisə və rəylər, şərhlər, inteqrasiya olunmuş testlər və s. ilə müzakirə etmək üçün bir yer
- **HEAD**: cari işlədiyiniz qovluğu təmsil edir. HEAD göstəricisi `git switch` istifadə edilərkən müxtəlif budaqlara köçürülə bilər.

{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
<div class="clearfix"></div>
