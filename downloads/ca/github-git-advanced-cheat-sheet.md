# Full de referència avançat

## Ordres rel·lacionades amb la fusió de canvis

Abortar la fusió:

`$ git merge --abort`

## Ordres per emmagatzemar canvis transitòriament

Guardar el conjunt de canvis actuals en el magatzem assignant-li un nom (una paraula) particular al qual poder fer referència:

`$ git stash save <nom_de_referència>`

Guardar el conjunt de canvis actuals al començament del magatzem (stash@{0})

`$ git stash`

Descartar el conjunt de canvis guardats al començament del magatzem:

`$ git stash drop`

Descartar el conjunt de canvis guardats a la posició concreta (_n_) del magatzem:

`$ git stash drop stash@{n}`

Aplicar el conjunt de canvis enmagatzemats a una posició concreta (_n_) del magatzem i eliminar-ho de dins:

`$ git stash pop stash@{n}`

Aplicar el conjunt de canvis enmagatzemats a una posició concreta (_n_) del magatzem:

`$ git stash apply stash@{n}`

## Ordres per recuperar conjunts de _branches_

Descartar tots els canvis:

`$ git restore .`

Crear una nova _branch_ i fer que sigui l'activa canviant cap a ella:

`$ git switch -c <branch name>`

Restaurar un únic fitxer a l'àrea de treball del conjunt de canvis al començament del magatzem:

`$ git restore --source=<stash@{0}> <filename>`

## Ordres de pegat (_patch_)

Aplicar un fitxer de pegat (típicament `.diff` o `.patch`) al repositori:

`$ git apply <patch file>`

## Ordres de traces

Embellir les taces de la història:

`$ git log --pretty=oneline`
