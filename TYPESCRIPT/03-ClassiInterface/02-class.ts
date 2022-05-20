//Costruisco una classe sfruttando una notazione compatta, tipica di Angular
//creerò direttamente classe e costruttore definenedo le propr direttamente in quest'ultimo

class Utente{
    
    constructor(public nome: string, public cognome: string, public eta: number, private corsi: string[]){

    }

    getCorsi(){
        return this.corsi;
    }
}

const utente = new Utente("Dario", "Mennillo", 33, ["Angular", "Js", "Ts"]);

console.log(utente.getCorsi);
console.log(utente.nome);

