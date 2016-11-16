---
layout: cheat-sheet
title: Contekan Git GIhub
byline: Git adalah sistem kontrol versi distribusi versi sumber terbuka yang memfasilitasi kegiatan GitHub di laptop atau desktop Anda. contekan ini meringkas secara umum instruksi baris perintah Git sebagai referensi cepat.
leadingpath: ../
---

{% capture colOne %}
## Pasang Git
GitHub memberikan klien desktop yang termasuk antarmuka pengguna grafis untuk tindakan repositori yang paling umum dan secara otomatis memperbarui edisi baris perintah dari Git untuk skenario lanjutan.

### GitHub untuk Windows
http://windows.github.com

### GitHub untuk Mac
http://mac.github.com

Distribusi Git untuk Linux dan POSIX sistem tersedia di situs resmi Git SCM.

### Git untuk semua platform
https://git-scm.com

## Konfigurasi tooling
Konfigurasi informasi user untuk semua repositori lokal

```$ git config --global user.name "[nama]"```

Menetapkan nama yang ingin diterapkan untuk melakukan transaksi Anda


```$ git config --global user.email "[alamat surel]"```

Menetapkan surel yang ingin melekat untuk melakukan transaksi Anda

## Buat repositori
Mulai repositori baru atau mendapatkan salah satu dari URL yang ada


```$ git init [nama-proyek]```

Membuat sebuah repositori lokal dengan nama tertentu


```$ git clone [url]```

Unduh sebuah proyek dan seluruh riwayat versinya

{% endcapture %}
<div class="col-md-6">
{{ colOne | markdownify }}
</div>


{% capture colTwo %}

## Buat perubahan
Tinjau suntingan dan kerajinan transaksi komit


```$ git status```

Daftar semua file baru atau dimodifikasi yang akan di-komit-kan


```$ git diff```

Menunjukkan perbedaan file yang belum dipentaskan


```$ git add [berkas]```

Snapshot file dalam persiapan untuk pem-versi-an


```$ git diff --staged```

Menunjukkan perbedaan file antara pementasan dan versi file terakhir


```$ git reset [berkas]```

Batal mementaskan file, tapi mempertahankan isinya


```$ git commit -m "[descriptive message]"```

Catat snapshots file secara permanen di riwayat versi

## Perubahan grup
Nama serangkaian komit dan menggabungkan upaya untuk menyelesaikan


```$ git branch```

Daftar semua cabang lokal di repositori saat ini


```$ git branch [nama-cabang]```

Buat cabang baru


```$ git checkout [nama-cabang]```

Berpindah ke cabang tertentu dan update direktori kerja


```$ git merge [nama-cabang]```

Menggabungkan sejarah cabang tertentu ke dalam cabang saat ini


```$ git branch -d [nama-cabang]```

Hapus cabang tertentu
{% endcapture %}
<div class="col-md-6">
{{ colTwo | markdownify }}
</div>
<div class="clearfix"></div>


{% capture colThree %}
## Memfaktorkan ulang nama file
Relokasi dan menghapus file berversi


```$ git rm [berkas]```

Menghapus file dari direktori kerja dan pentaskan penghapusan


```$ git rm --cached [berkas]```

Menghapus file dari kontrol versi tetapi mempertahankan file lokal


```$ git mv [berkas-asli] [berkas-baru]```

Mengubah nama file dan mempersiapkannya untuk melakukan komit

## Menekan pelacakan
EMengecualikan sementara file dan jalur

```
*.log
build/
temp-*
```

Sebuah file teks bernama `.gitignore` menekan versi file tanpa disengaja dan jalur yang cocok dengan pola tertentu


```$ git ls-files --other --ignored --exclude-standard```

Daftar semua berkas yang diabaikan dalam proyek ini

## Simpan fragmen
Mengesampingkan dan mengembalikan perubahan lengkap


```$ git stash```

Menyimpan sementara semua perubahan file yang terlacak


```$ git stash pop```

Mengembalikan file yang paling baru disimpan


```$ git stash list```

Daftar semua changesets tersimpan


```$ git stash drop```

Membuang changeset paling baru disimpan
{% endcapture %}
<div class="col-md-6">
{{ colThree | markdownify }}
</div>

{% capture colFour %}
## Sejarah ulasan
Jelajah dan periksa evolusi dari berkas proyek


```$ git log```

Daftar riwayat versi untuk cabang saat ini


```$ git log --follow [berkas]```

Daftar riwayat versi untuk file, termasuk mengganti nama


```$ git diff [cabang-pertama]...[cabang-kedua]```

Menunjukkan perbedaan konten antara dua cabang


`` `$ Git show [komit]` ``

Output metadata dan konten perubahan yang ditentukan komit

## Redo melakukan
Menghapus kesalahan dan sejarah pengganti kerajinan


`` `$ Git reset [komit]` ``

Membatalkan semua komit setelah `[komit]`, melestarikan perubahan lokal


`` `$ Git reset --hard [berkomitmen]` ``

Membuang semua sejarah dan perubahan kembali ke ditentukan komit

## Sinkronisasi perubahan
Daftar remote (URL) dan sejarah repositori pertukaran

```$ git fetch [remote]```

Unduh semua sejarah dari repositori jauh


```$ git merge [remote]/[cabang]```

Menggabungkan cabang remote ke cabang lokal saat ini


```$ git push [remote] [branch]```

Upload semua cabang lokal berkomitmen untuk GitHub


```$ git pull```

Download penunjuk sejarah dan menggabungkan perubahan
{% endcapture %}
<div class="col-md-6">
{{ colFour | markdownify }}
</div>
