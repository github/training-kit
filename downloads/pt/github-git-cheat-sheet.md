---
layout: cheat-sheet
title: GitHub Folha de dicas de Git
byline: Git é um sistema de controle de versão distribuído open source que facilita ações com o GitHub em seu notebook ou desktop. Esta folha de dicas resume instruções comumente usadas via linha de comando do Git para referência rápida.
leadingpath: ../../
---


# GitHub Folha de dicas de Git

Git é um sistema de controle de versão distribuído open source que facilita ações com o GitHub em seu notebook ou desktop. Esta folha de dicas resume instruções comumente usadas via linha de comando do Git para referência rápida.

## Instale o git
GitHub fornece clientes desktop que incluem uma interface gráfica para as ações mais comuns em um repositório e atualiza automaticamente para a linha de comando do Git para cenários avançados.

### GitHub para Windows
[http://windows.github.com](http://windows.github.com)

### GitHub para Mac
[http://mac.github.com](http://mac.github.com)

Distribuições do Git para Linux e sistemas POSIX são disponíveis no site oficial do Git SCM.

### Git para todas plataformas
[http://git-scm.com](http://git-scm.com)

## Configure a ferramenta
Configure informações de usuário para todos os repositórios locais


```$ git config --global user.name "[nome]"```

Configura o nome que você quer ligado as suas transações de commit


```$ git config --global user.email "[endereco-de-email]"```

Configura o email que você quer ligado as suas transações de commit


## Crie repositórios
Inicie um novo repositório ou obtenha de uma URL existente


```$ git init [nome-do-projeto]```

Cria um novo repositório local com um nome específico


```$ git clone [url]```

Baixa um projeto e seu histórico de versão inteiro

## Faça mudanças
Revise edições e crie uma transação de commit


```$ git status```

Lista todos os arquivos novos ou modificados para serem commitados


```$ git diff```

Mostra diferenças no arquivo que não foram realizadas


```$ git add [arquivo]```

Faz o snapshot de um arquivo na preparação para versionamento


```$ git diff --staged```

Mostra a diferença entre arquivos selecionados e a suas últimas versões


```$ git reset [arquivo]```

Deseleciona o arquivo, mas preserva seu conteúdo


```$ git commit -m "[mensagem descritiva]"```

Grava o snapshot permanentemente do arquivo no histórico de versão

## Mudanças em grupo
Nomeie uma série de commits e combine os esforços completos


```$ git branch```

Lista todos os branches locais no repositório atual


```$ git branch [nome-do-branch]```

Cria um novo branch


```$ git checkout [nome-do-branch]```

Muda para o branch específico e atualiza o diretório de trabalho


```$ git merge [nome-do-branch]```

Combina o histórico do branch específico com o branch atual


```$ git branch -d [nome-do-branch]```

Exclui o branch específico


## Refatore nomes dos arquivos
Mude e remova os arquivos versionados


```$ git rm [arquivo]```

Remove o arquivo do diretório de trabalho e o seleciona para remoção


```$ git rm --cached [arquivo]```

Remove o arquivo do controle de versão mas preserva o arquivo localmente


```$ git mv [arquivo-original] [arquivo-renomeado]```

Muda o nome do arquivo e o seleciona para o commit

## Suprima o rastreamento
Exclua arquivos e diretórios temporários

```
*.log
build/
temp-*
```

Um arquivo de texto chamado `.gitignore` suprime o versionamento acidental de arquivos e diretórios correspondentes aos padrões específicados


```$ git ls-files --other --ignored --exclude-standard```

Lista todos os arquivos ignorados neste projeto

## Salve fragmentos
Arquive e restaure mudanças incompletas


```$ git stash```

Armazena temporariamente todos os arquivos rastreados modificados


```$ git stash pop```

Restaura os arquivos recentes em stash


```$ git stash list```

Lista todos os conjuntos de alterações em stash


```$ git stash drop```

Descarta os conjuntos de alterações mais recentes em stash

## Revise histórico
Navegue e inspecione a evolução dos arquivos do projeto


```$ git log```

Lista o histórico de versões para o branch atual


```$ git log --follow [arquivo]```

Lista o histórico de versões para um arquivo, incluindo mudanças de nome


```$ git diff [primerio-branch]...[segundo-branch]```

Mostra a diferença de conteúdo entre dois branches


```$ git show [commit]```

Retorna mudanças de metadata e conteúdo para o commit especificado

## Desfaça commits
Apague enganos e crie um histórico substituto


```$ git reset [commit]```

Desfaz todos os commits depois de `[commit]`, preservando mudanças locais


```$ git reset --hard [commit]```

Descarta todo histórico e mudanças para o commit especificado

## Sincronize mudanças
Registre um marcador de repositório e troque o histórico de versão


```$ git fetch [marcador]```

Baixe todo o histórico de um marcador de repositório


```$ git merge [marcador]/[branch]```

Combina o marcador do branch no branch local


```$ git push [alias] [branch]```

Envia todos os commits do branch local para o GitHub


```$ git pull```

Baixa o histórico e incorpora as mudanças

---

## GitHub Training
Aprenda mais sobre o uso do GitHub e do Git. Envie um email para a Equipe de Treinamentos ou visite nosso site para ver a agenda de eventos ou a disponibilidade de cursos particulares.

* training@github.com
* [training.github.com](training.github.com)
