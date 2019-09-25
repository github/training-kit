---
layout: cheat-sheet
redirect_to: false
title: GitHub Git Cheat Sheet
byline: Git is the open source distributed version control system that facilitates GitHub activities on your laptop or desktop. This cheat sheet summarizes commonly used Git command line instructions for quick reference.
leadingpath: ../../
---

{% capture colOne %}
## Git Uygulamasını Kurmak
GitHub, en yaygın depolar ile yapılan işlemler için grafiksel bir kullanıcı arabirimi ve Git'in gelişmiş senaryolar için otomatik olarak güncellenen bir komut satırı sürümü içeren masaüstü istemcileri sağlar.

### GitHub Masaüstü
https://desktop.github.com/

Linux ve POSIX sistemleri için Git dağıtımlarını resmi Git SCM web sitesinde bulabilirsiniz.

### Git Tüm İşletim Sistemlerinde Kullanılabilir
http://git-scm.com

## Git Konfigürasyonlarını Yapmak
Kurulu olduğu bilgisayardaki tüm depolar, projeler için kullanıcı bilgilerini yapılandırabiliriz.

```$ git config --global user.name "[isim soyaisim]"```

Git üzerinde yapılan işlemin kimin tarafından yapıldığını tutan bilgidir.


```$ git config --global user.email "[mail adresi]"```

Git üzerinde yapılan işlemin hangi mail adresi tarafından yapıldığını tutan bilgidir.


## Depo Oluşturmak

```$ git init [proje-ismi]```

Verilen proje ismi yardımıyla yeni bir depo oluşturabiliriz.


```$ git clone [url]```
Var olan bir projeyi verilen URL bilgisi yardımıyla bulunduğunuz konuma indirir.

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## Değişiklikler Yapmak
Yaptığınız düzenlemeleri görüntüleyebiliriz.


```$ git status```

Tüm yeni veya üzerinde çalışılmış olan dosyaları listeleyen, gönderilmek üzere olunan durumu gösteren komuttur.


```$ git diff```

Dosyalar üzerinde yaptığınız son değişiklikleri görebilirsiniz.


```$ git add [file]```

İşi biten ve gönderilecek dosyaları belirtelim.


```$ git diff --staged```

İşi biten ve gönderilecek dosyalar ile son dosyaları karşılaştırır.



```$ git reset [file]```

Dosyaların içeriğini değiştirmeden, gönderilmek üzere olanlar listesinden çıkartıp,
bir önceki adım olan üzerinde çalışılmışlar listesinde tutar.



```$ git commit -m"[descriptive message]"```

O anki değişiklilklerinizi daha sonra hatırlamak için yazılan kısa özet bilgidir.

## Çalışma Grubu Değiştirmek
Dosyamızın birçok değiştirilmiş ve değiştirilmemiş hallerini ayrı tutabildiğimiz
bağımsız çalışma alanlarıdır.


```$ git branch```

Üzerinde çalıştığınız projenin şuan hangi alanda çalıştığınızın bilgisini döner


```$ git branch [branch-name]```

Üzerinde çalıştığınız projenin o anki alanın bir kopyası verilen isim ile yeni bir alan olarak oluşturulur.


```$ git checkout [branch-name]```

Var olan çalışma alanınızı günceller, alanlar arası geçiş yapmanızı sağlar.


```$ git merge [branch-name]```

Belirtilen alan ile o anki bulunulan alanın birleştirilerek tek bir alan olması sağlanır.


```$ git branch -d [branch-name]```

Seçilen alanın silinmesidir.

{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## Yeniden Düzenleme ve Dosyalar
Geçmişe sahip dosyaları silebilir veya taşıyabiliriz.


```$ git rm [file]```

Dosyayı o anki çalışma dizininden siler ve bu işlemi yapılan düzenlemelerin tutulduğu listeye ekler.


```$ git rm --cached [file]```

Dosyanın sürüm kontrolü tarafından izlenilmesini kaldırır fakat dosyayı silmeden yerel ortamda tutar.


```$ git mv [file-original] [file-renamed]```

Dosya adını değiştirir,taşır ve bu işlemi yapılan düzenlemelerin tutulduğu listeye ekler.

## Geçici dosyaları önlemek
Geçici dosyaları ve sürekli kullanılan yol bilgilerinin tutulmaması için hazırlanan dosyalardır.

```
*.log
build/
temp-*
```

İsmi `.gitignore` belirtilen kalıplarla eşleşen dosya ve yolların yanlışlıkla versiyonlanmasını önler.


```$ git ls-files --others --ignored --exclude-standard```

Bu projedeki yok sayılan, izlenilmesi istenmeyen tüm dosyaları listeler

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
## Review history
Browse and inspect the evolution of project files


```$ git log```

Lists version history for the current branch


```$ git log --follow [file]```

Lists version history for the file, including renames


```$ git diff [first-branch]...[second-branch]```

Shows content differences between two branches


```$ git show [commit]```

Outputs metadata and content changes of the specified commit

## Redo commits
Erase mistakes and craft replacement history


```$ git reset [commit]```

Undoes all commits after `[commit]`, preserving changes locally


```$ git reset --hard [commit]```

Discards all history and changes back to the specified commit

## Synchronize changes
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
