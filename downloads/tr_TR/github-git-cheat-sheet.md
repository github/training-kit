---
layout: cheat-sheet
redirect_to: false
title: GitHub Git Komut Sayfası
byline: Git, dizüstü bilgisayarınızda veya masaüstünüzdeki GitHub etkinliklerini kolaylaştıran, açık kaynaklı dağıtık sürüm kontrol sistemidir. Bu sayfa, hızlı başvuru için sık kullanılan Git komut satırı talimatlarını özetler.
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

## Geçici Dosyaları Önlemek
Geçici dosyaları ve sürekli kullanılan yol bilgilerinin tutulmaması için hazırlanan dosyalardır.

```
*.log
build/
temp-*
```

İsmi `.gitignore` belirtilen kalıplarla eşleşen dosya ve yolların yanlışlıkla versiyonlanmasını önler.


```$ git ls-files --others --ignored --exclude-standard```

Bu projedeki yok sayılan, izlenilmesi istenmeyen tüm dosyaları listeler

## Parçaları Kaydetmek
Yapmış olduğunuz değişikliklerin gönderilecekler listesine eklenmesini önlemek için kullanılır.


```$ git stash```

Değiştirilen tüm izlenen dosyaları geçici olarak saklar. Çalışma alanınızda göremezsiniz fakat yaptığnız değişiklikler korunur.


```$ git stash pop```

Saklanmış dosyaları çalışma alanınıza yeniden yükler.Fakat kopyasını bu listede saklamaya devam eder.


```$ git stash list```

Geçici olarak saklananların listesi


```$ git stash drop```

Saklanmış dosyaları çalışma alanınıza yeniden yükler.Fakat kopyasını bu listede saklamaya devam etmez.

{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}
## Geçmişe Göz Atmak



```$ git log```

Proje dosyalarının tarihsel olarak değişimini inceleyin.


```$ git log --follow [file]```

Yeniden adlandırmalar da dahil olmak üzere dosyanın sürüm geçmişini listeler


```$ git diff [first-branch]...[second-branch]```

İki çalışma alanı arasındaki içerik farklarını gösterir


```$ git show [commit]```

Belirtilen işlenmiş noktanın meta verilerini ve içerik değişikliklerini çıktılar

## Redo commits
Hataları veya işlerin geçmişini silebiliriz.


```$ git reset [commit]```

Verilen işlenmiş noktadan sonraki tüm işlemleri `[commit]` ile geri al, fakat yerel değişiklikleri koru


```$ git reset --hard [commit]```

Verilen işlenmiş noktadan sonraki tüm işlemleri tamamen ortadan kaldır..

## Değişiklikleri Senkronize Et
Çalışmalarınızı uzak sunucu URL sindeki projeleriniz ile günceleyebilirsiniz.


```$ git fetch [remote]```

Tüm geçmişi uzak sunucudan çalışma alanıma indir.


```$ git merge [remote]/[branch]```

Uzaktaki sunucu ile üzerinde çalıştığım alanı birleştir.


```$ git push [remote] [branch]```

GitHub üzerindeki alana , tüm yerel çalışmalarımı gönder.


```$ git pull```

Değişikliklerin tutulduğu listeyi ve değişiklikleri lokal çalışma alanınızıa indirir.
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
