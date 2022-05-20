class Persona{
    //la classe è lo schema di massima dell'oggetto, blueprint di un oggetto 
    //ci dice come deve essere fatto un oggetto, quali proprietà e quali metodi deve avere

    //proprietà di classe
    nome: string;
    cognome: string;
    public eta: number;
    //proteggo la prop corsi, posso accedervi solo dall'interno della classe stessa, non dall'esterno.
    private corsi: string[];

    //avremo un costruttore il quale viene lanciato nel momento esatto in cui istanzioamo un nuovoi oggetto di tipo Persona
    constructor(nome: string, cognome: string, eta: number, corsi: string[]){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corsi = corsi;
    }

    iscriviti(nomeCorso: string){
        this.corsi.push(nomeCorso);
    }

    getCorsi(){
        return this.corsi
    }
}

//creo un'istanza della classe PErsona
const personaStud = new Persona("Pippo", "Rossi", 35, ['Angular', 'SpringBoot']);
personaStud.iscriviti('Php');
// console.log(personaStud.corsi); //dichiarando private corsi questo va in errore
console.log(personaStud.getCorsi());
