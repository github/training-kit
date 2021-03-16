# Buku Saku Tingkat Lanjut

## Perintah penggabungan

---

Batalkan penggabungan

`$ git merge --abort`

## Perintah penyimpanan

---

Simpan perubahan saat ini dalam penyimpanan dengan nama tertentu

`$ git stash save <stash name>`

Simpan perubahan saat ini dalam sebuah penyimpanan (dengan nama stash@{0})

`$ git stash`

Hilangkan simpanan di tumpukan teratas

`$ git stash drop`

Hilangkan simpanan di indeks tumpukan ke-n

`$ git stash drop stash@{n}`

Terapkan penyimpanan di indeks tumpukan ke-n dan hapus dari daftar

`$ git stash pop stash@{n}`

Terapkan penyimpanan di indeks tumpukan ke-n

`$ git stash apply stash@{n}`

## Perintah lapor keluar

---

Singkirkan semua perubahan

`$ git restore .`

Membuat cabang baru dan pindah ke cabang tersebut

`$ git switch -c <branch name>`

Membawa satu berkas ke lokasi saat ini dari simpanan

`$ git restore --source=<stash@{0}> <filename>`

## Perintah tambalan

---

Menerapkan berkas tambalan (.diff atau .patch) ke dalam repo

`$ git apply <patch file>`

## Perintah log

Mendandani riwayat log sebuah git

`$ git log --pretty=oneline`
