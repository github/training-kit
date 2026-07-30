---
layout: cheat-sheet
redirect_to: false
title: Migrare da Subversion a Git
byline: Quando si migra da Subversion a Git, c'è un vocabolario e un set di comandi da imparare, oltre alle nuove funzionalità offerte solo da Git. Questo cheat sheet ha lo scopo di aiutarti nella transizione tra la classica tecnologia Subversion e l'uso moderno di Git con la piattaforma di collaborazione GitHub.
leadingpath: ../../
---

{% capture migration %}
## Migrazione


### Importatore di Github

Per i progetti accessibili da Internet, GitHub.com fornisce lo strumento Importer per la migrazione automatica e la creazione di repository partendo da Subversion, Team Foundation Server, Mercurial o progetti ospitati altrove che usano Git per il controllo di versione.

Il processo è semplice: basta che tu acceda al tuo account GitHub (se non lo sei già), inserisci l'URL del controllo di versione del progetto esistente nel campo "repository" e avvii la conversione.

A seconda del sistema di controllo della versione rilevato, Importer potrebbe richiedere ulteriori informazioni per la migrazione. Questo comprende un file di mappatura per associare i nomi utente di Subversion con i campi Git.

Leggi di più su come importare il tuo progetto in GitHub guardando la [documentazione di GitHub Importer](https://docs.github.com/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer).

### SVN2Git Utility

Quando è necessario trasferire su Git dei repository Subversion che hanno delle limitazioni di accesso o non sono pubblici, SVN2Git è lo strumento da riga di comando raccomandato e fornisce controllo in ogni fase del processo.

Subversion presenta differenze nella struttura rispetto a quella di un repository Git e SVN2Git fornisce la flessibilità e la configurazione per i layout Subversion tradizionali e personalizzati. Ciò garantisce che il repository Git risultante adotti le migliori soluzioni per commit, rami e tag, per l'intera cronologia del progetto.

Tra le caratteristiche principali di SVN2Git troviamo:

- Conversione di tutte le convenzioni SVN nella struttura Git tradizionale
- Fornire agli utenti SVN un campo per i dati relativi a nome e posta elettronica nei commit in Git
- Consentire modelli di esclusione per contenuti precisi del repository Git

Scopri di più su SVN2Git nella home page ufficiale del progetto:

[https://github.com/nirvdrum/svn2git](https://github.com/nirvdrum/svn2git)
{% endcapture %}

<div class="col-md-6 col-12">
{{ migration | markdownify }}
</div>

{% capture bridging %}
## Transizione

### Sfruttare la compatibilità di Git con SVN

Spesso, durante una transizione a Git, l'infrastruttura Subversion rimane attiva mentre gli utenti acquisiscono familiarità col repository Git locale, i flussi di lavoro locali e le applicazioni desktop.

Il comando `git svn` consente agli utenti di sincronizzarsi con un host Subversion centralizzato, sfruttando tutti i vantaggi che la riga di comando Git locale e i client grafici hanno da offrire.

To acquire a Subversion repository as a resulting local Git repository, download the project in its entirety with this command:
Per acquisire un repository Subversion, ottenendo come risultato un repository Git locale, scarica tutto il progetto con questo comando:

```
git svn clone [svn-repo-url] --stdlayout
```

Assicurati di avere familiarità con la struttura del repository Subversion di destinazione, e di sapere se segue il layout standard o no. Per i layout non tradizionali di `trunk`, `branches` e `tags`, si devono specificare durante il comando `svn clone` le opzioni:

- `T [trunk]` per alternare la fonte principale
- `b [branches]` per alternare la posizione dei rami
- `t [tags]`  per alternare la posizione della struttura dei tag

Una volta completata l'operazione di clonazione, puoi procedere con qualsiasi interazione Git locale usando una riga di comando o client grafici.

### Sincronizzazione con Subversion

La pubblicazione della cronologia Git locale in un repository Subversion centrale, acquisito con git svn clone, viene eseguita usando un solo comando:

```
git svn dcommit
```

Se la cronologia del repository Subversion ospitato contiene commit non ancora presenti nel repository Git locale, l'operazione `dcommit` verrà rifiutata fino a quando i commit non verranno acquisiti con questo comando:

```
git svn rebase
```

Ricorda che questa azione riscriverà la tua cronologia Git locale e i tuoi identificatori di commit saranno diversi.
{% endcapture %}

<div class="col-md-6 col-12">
{{ bridging | markdownify }}
</div>


## Riepilogo

Subversion e Git condividono vocabolari simili, ma la somiglianza spesso riguarda solo i nomi dei comandi. Comportamento e funzionalità sono abbastanza distinti date le qualità uniche che Git fornisce come sistema per il controllo di versione distribuito, rispetto a Subversion, che è invece centralizzato.

| comando SVN     | comando Git | comportamento in Git                                                  |
| ---             | ---         | ---                                                                   |
| `status`        | `status`    | Segnala lo stato dell'albero di lavoro                                |
| `add`           | `add`       | Necessario per ogni percorso prima di effettuare un commit            |
| `commit`        | `commit`    | Salva le modifiche effettuate nella cronologia locale delle revisioni |
| `rm`, `delete`  | `rm`        | Prepara i percorsi per l'eliminazione nel prossimo commit             |
| `move`          | `mv`        | Prepara il contenuto trasferito per il prossimo commit                |
| `checkout`      | `clone`     | Acquisisce localmente l'intera storia di un progetto (la prima volta) |
|                 | `branch`    | Crea un contesto locale per i commit                                  |
|                 | `merge`     | Unisci le cronologie dei rami e le modifiche all'albero di lavoro     |
|                 | `log`       | Elenca la cronologia delle versioni per il ramo corrente              |
|                 | `push`      | Carica la cronologia dei commit su GitHub/host Git centralizzato      |
|                 | `pull`      | Scarica la cronologia del repository GitHub, e aggiorna quella locale |
|                 | `fetch`     | Scarica la cronologia del repository GitHub, senza altre azioni       |
