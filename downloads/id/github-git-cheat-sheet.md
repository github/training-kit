---
layout: cheat-sheet
redirect_to: false
title: Buku Saku Git GitHub
byline: Git adalah sistem manajemen revisi terdistribusi bersifat terbuka yang memfasilitasi aktivitas GitHub di laptop atau komputer pribadi Anda. Buku saku ini meringkas baris perintah instruksi-instruksi Git yang biasa digunakan sebagai referensi singkat.
leadingpath: ../
---

{% capture colOne %}
## Memasang Git
GitHub menyediakan klien untuk komputer yang di dalamnya termasuk sebuah
antarmuka grafis untuk tindakan-tindakan yang paling umum dilakukan pada suatu
repositori dan sebuah edisi konsol pembaruan otomatis dari Git untuk skenario
lanjutan.

### GitHub untuk Windows
[windows.github.com](https://windows.github.com)

### GitHub untuk Mac
[mac.github.com](https://mac.github.com)

Distribusi Git untuk Linux dan sistem POSIX tersedia di situs resmi Git SCM.

### Dokumentasi Lengkap Git
[git-scm.com](https://git-scm.com)

## Konfigurasi Git
Konfigurasi informasi Git untuk pengguna dan system lokal

```$ git config --global user.name "[nama]"```

Mengatur nama yang ingin ditautkan pada transaksi _commit_ Anda

```$ git config --global user.email "[alamat surel]"```

Mengatur alamat surel yang ingin ditautkan pada transaksi _commit_ Anda

## Membuat Repositori
Mulai repositori baru

```$ git init [nama-proyek]```

Membuat repositori lokal baru dengan nama tertentu

```$ git clone [url]```

Unduh sebuah proyek dan seluruh riwayat revisinya

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## Membuat Perubahan
Tinjau suntingan dan buat sebuah transaksi _commit_

```$ git status```

Daftar semua berkas baru atau modifikasi yang siap didaftarkan dalam _commit_

```$ git diff```

Menunjukkan perbedaan berkas-berkas yang belum didaftarkan dalam _commit_

```$ git add [berkas]```

Rekam berkas yang akan didaftarkan ke dalam _commit_

```$ git diff --staged```

Menunjukkan perbedaan berkas hasil revisi dengan versi berkas terakhir yang
terdaftar

```$ git reset [berkas]```

Batal merevisi berkas, namun tetap mempertahankan isinya

```$ git commit -m "[pesan deskriptif]"```

Daftarkan perubahan berkas secara permanen di riwayat revisi

## Perubahan Berkelompok
Menyebutkan serangkaian _commit_ dan menggabungkan upaya yang telah selesai

```$ git branch```

Daftar semua cabang lokal di repositori saat ini

```$ git branch [nama-cabang]```

Mewujudkan cabang baru

```$ git switch -c [nama-cabang]```

Berpindah ke cabang tertentu dan perbarui direktori yang sedang dikerjakan

```$ git merge [nama-cabang]```

Menggabungkan riwayat cabang tertentu ke dalam cabang yang sedang dipakai

```$ git branch -d [nama-cabang]```

Hapus cabang tertentu
{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## Pergantian Nama Berkas
Merelokasi dan menghapus berkas terevisi

```$ git rm [berkas]```

Menghapus berkas dari direktori kerja dan daftarkan penghapusan

```$ git rm --cached [berkas]```

Menghapus berkas dari riwayat revisi dengan tetap mempertahankan berkas lokal

```$ git mv [berkas-asli] [berkas-baru]```

Mengganti nama berkas dan mempersiapkan berkas untuk pendaftaran _commit_

## Tahan Pelacakan
Mengabaikan berkas dan garis edar sementara

```
*.log
build/
temp-*
```

Sebuah berkas teks bernama `.gitignore` mengabaikan revisi berkas yang tidak disengaja serta garis edar berkas yang cocok dengan pola tertentu

```$ git ls-files --others --ignored --exclude-standard```

Daftar semua berkas yang diabaikan dalam proyek tersebut

## Menyimpan Fragmen
Menyimpan dan mengembalikan perubahan yang belum lengkap

```$ git stash```

Menyimpan semua perubahan berkas yang terlacak untuk sementara

```$ git stash pop```

Mengembalikan berkas yang paling baru disimpan

```$ git stash list```

Daftar semua koleksi perubahan yang tersimpan

```$ git stash drop```

Membuang koleksi perubahan yang paling baru disimpan
{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}
## Riwayat Ulasan
Jelajah dan periksa perkembangan berkas-berkas dalam proyek

```$ git log```

Daftar riwayat revisi untuk cabang saat ini

```$ git log --follow [berkas]```

Daftar riwayat revisi untuk sebuah berkas, termasuk pergantian namanya

```$ git diff [cabang-pertama]...[cabang-kedua]```

Menunjukkan perbedaan konten antar dua cabang

```$ git show [commit]```

Mennampilkan perubahan konten dan _metadata_ dari _commit_ tertentu

## Melakukan _Commit_ Kembali
Menghapus kesalahan dan buat riwayat penggantian

```$ git reset [commit]```

Membatalkan semua _commit_ setelah `[commit]`, dengan melestarikan perubahan lokal

```$ git reset --hard [commit]```

Membuang semua riwayat dan perubahan sampai di titik yang ditentukan oleh _commit_

## Sinkronisasi Perubahan
Daftarkan _remote_ (URL) dan tukar riwayat repositori

```$ git fetch [remote]```

Unduh semua riwayat dari repositori _remote_

```$ git merge [remote]/[cabang]```

Menggabungkan cabang _remote_ ke dalam cabang lokal saat ini

```$ git push [remote] [branch]```

Unggah semua _commit_ dari cabang lokal ke GitHub

```$ git pull```

Unduh riwayat marka dan gabungkan perubahan
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
