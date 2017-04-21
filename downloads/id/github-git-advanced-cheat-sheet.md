# Lanjutan Cheat Sheet


## Merge perintah

Batalkan penggabungan

`$ git merge --abort`

## Perintah stash

Simpan perubahan saat ini untuk simpanan dengan nama tertentu

`$ git stash save <stash name>`

Simpan perubahan saat ini untuk simpanan (menyimpannya sebagai stash@{0})

`$ git stash`

Jatuhkan simpanan di atas sntack

`$ git stash drop`

Jatuhkan simpanan di indeks n

`$ git stash drop stash@{n}`

Terapkan simpanan di indeks n dan menghapus dari daftar

`$ git stash pop stash@{n}`

Terapkan simpanan di indeks n

`$ git stash apply stash@{n}`


## Perintah Checkout

Membuang semua perubahan

`$ git checkout .`

Membuat cabang baru dan melihat cabang tersebut

`$ git checkout -b <branch name>`

Membawa satu file ke ruang kerja dari simpanan

`$ git checkout <stash@{0}> — <filename>`

## Perintah patch

Menerapkan file patch (.diff atau .patch) ke repo

`$ git apply <patch file>`

## Log perintah

Mendandani sejarah log dari gi

`$ git log --pretty=oneline`
