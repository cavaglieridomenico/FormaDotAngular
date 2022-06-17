HTTP

-Collegati a Firebase
-installazione json-server
  npm i -g json-server
  Dobbiamo creare il file che verrà letto da json-server: data/db.json
  Per attivare il server lancio : json-server --watch src/data/db.json (sempre nel terminale all'altezza della app)



PROGETTO: Noleggio Yacht di Lusso
- HomePage di presentazione
- Tutti gli Yacht
- Le nostre Offerte
- Modifica Yacht

1. Pagine gestite con Routes
2. Creazione di un db contenente gli Yacht
   yacht:  {
      id: number
      nome: string,
      descrizione: string,
      costoGiorn: number,
      inOfferta: boolean,
      img: string,
    }
    users:
      {
        id: number,
        nome: string,
        ruolo: string (base, amministratore)
        collegato: boolean
      }

3. Le nostre offerte mostra solo quelli in inOfferta
4. Mostra tutto il db
5. Modifica Yacht permette di Aggiungere, Eliminare o Modificare uno Yacth esistente -> Form
6. Bonus, proteggere la Rotta Modifica Yacht
