# Rischiatutto - Web Quiz Game

Benvenuti a **Rischiatutto**, un'applicazione web creata con Django che simula un quiz televisivo. Gli utenti possono rispondere a domande di vario tipo e il loro punteggio viene calcolato in base alle risposte corrette. Il gioco supporta anche il cambio di tema (tema chiaro/scuro) e la gestione delle domande tramite un database.

## Requisiti

- **Python 3.x** (>=3.7 consigliato)
- **Django 3.x** o successivo
- **SQLite** (predefinito in Django)

## Installazione

1. Clona la repository:

   ```bash
    git clone https://github.com/TizianoMu/rischiatutto.git
    ```
2. Vai nella directory del progetto:
   ```bash
    cd rischiatutto
    ```
3. Installa le dipendenze:
   ```bash
    pip install -r requirements.txt
    ```
4. Applica le migrazioni del database:
   ```bash
    python manage.py migrate
    ```
5. Avvia il server di sviluppo: 
   ```bash
    python manage.py runserver
    ```
6. Accedi all'applicazione tramite il browser all'indirizzo http://127.0.0.1:8000.

FAQ (Domande Frequenti)
1. Come posso cambiare il tema tra chiaro e scuro?
Il tema può essere cambiato in qualsiasi momento cliccando sul pulsante "Tema Chiaro/Tema Scuro" in alto a destra dell'interfaccia. Il tema scelto verrà memorizzato nel browser e verrà applicato automaticamente ogni volta che visiti il sito, anche dopo aver chiuso e riaperto il browser.

2. Il tema viene mantenuto su tutte le pagine?
Sì, il tema selezionato viene salvato utilizzando il localStorage del browser. In questo modo, il tema scelto dall'utente viene mantenuto mentre si naviga tra le pagine o si ricarica il sito. Non è necessario cambiare il tema ogni volta.

3. Come posso aggiungere nuove domande al quiz?
Per aggiungere nuove domande, segui questi passaggi:

    1. Apri il file fixtures.json nella directory /quiz/fixtures/ o utilizza l'interfaccia di amministrazione di Django per gestire il database.

    2. Se preferisci utilizzare l'admin di Django:

        - Prima di tutto, crea un superuser:
        ```bash
        python manage.py createsuperuser
        ```
        - Accedi all'interfaccia di amministrazione all'indirizzo http://127.0.0.1:8000/admin e inserisci le tue credenziali.

        - Vai alla sezione "Questions" e aggiungi nuove domande specificando il testo della domanda, le opzioni e la risposta corretta.
4. Come faccio a resettare il quiz?
    Attualmente, per resettare il quiz (cioè ricominciare da capo con le domande), puoi:

    - Ricaricare la pagina o navigare alla home page per iniziare una nuova sessione.
    - Puoi anche implementare un pulsante "Reset" che aggiorna il punteggio e le domande rimanenti.
5. Posso cambiare i colori del tema?
Sì, puoi cambiare i colori del tema modificando il file CSS style.css che si trova nella directory /static/quiz/. Cerca la classe .light-theme e personalizza i colori a seconda delle tue preferenze
6. Come posso fare il deploy in produzione?
Django fornisce diversi strumenti per fare il deploy su server di produzione. I passaggi generali includono:

    1. Configura il file settings.py per la modalità di produzione:
        - Imposta DEBUG = False.
        - Configura ALLOWED_HOSTS con il nome del dominio o l'IP del server.
        - Imposta un database di produzione, come PostgreSQL.
    2. Utilizza un server web come Gunicorn o uWSGI insieme a Nginx.
    3. Configura un servizio cloud o un VPS (Heroku, DigitalOcean, AWS, ecc.) per eseguire il tuo progetto Django.

## Struttura del Progetto
rischiatutto/
│
├── quiz/
│   ├── migrations/        # Migrazioni del database
│   ├── static/            # File statici come CSS e JavaScript
│   │   └── quiz/
│   │       ├── style.css  # Foglio di stile principale
│   │       └── theme.js   # Script per la gestione del tema
│   ├── templates/         # Template HTML
│   │   └── quiz/
│   │       ├── base.html  # Layout base del sito
│   │       ├── home.html  # Home page con regolamento
│   │       └── quiz.html  # Pagina del quiz
│   ├── fixtures.json      # File JSON contenente le domande predefinite
│   └── views.py           # Logica delle view
│
├── manage.py              # Script per gestire il progetto Django
├── requirements.txt       # Dipendenze del progetto
└── README.md              # Questo file

## Contatti
Per qualsiasi domanda o problema, non esitare a contattare lo sviluppatore:

- Email: tiziano.murzio@outlook.it
- GitHub: https://github.com/tizianomurzio
