console.log("ciao ragazzi");

//primitive: Number, String, Boolean
//complessi: Array, Objects
//Funzioni o metodi

//dichiaro
let numero: number; //n minuscola, N maius 
//assegno
numero = 10;

console.log("Il mio numero è : " +  numero);

let saluto: string;
saluto = "Ciao classe Formatemp!";
console.log(saluto);

let interruttore: boolean;
interruttore = false;
console.log("Il pc è acceso? " + interruttore);


//dichiaro e assegno su una riga
let giornoSettimana: string = "Giovedì";
console.log("Il corso è partito : " + giornoSettimana);
console.log(giornoSettimana);

let meseAnno = "Maggio";
console.log(typeof meseAnno);

//Array
let hobbies: string[];
hobbies = ['Musica', 'Programmazione', 'Sport', 'Poesia'];

var elDemo: HTMLElement= document.getElementById('demo');

for(let i = 0; i < hobbies.length; i++){
    console.log(hobbies[i]);
    elDemo.innerHTML += '<li>' + hobbies[i] + '</li>';
}


//Oggetti
let persona: object;

persona = {
    nome: "Dario",
    cognome: "Mennillo",
    matricola: 123
}

//Object Type definition 
//Mi permette di strutturare un obj. Quando crererò l'istanza di questo obj dovrà rispecchiare in tutto e per tuto la struttura che ho definito, un po' come la funzione costruttore in JS ma NON è un costruttore

let utente: {
    nome: string,
    cognome: string,
    eta: number,
    ruolo: string
}

utente = {
    nome: "Anna",
    cognome: "Bianchi",
    eta: 33,
    ruolo: "Amministratore"    
}


let studenti: {
    nome: string,
    cognome: string,
    matricola: number,
    materie: string[]
}[]; //le [] ci dicono che studenti sarà un array di oggetti fatti in quel modo 

studenti = [
    {
        nome: "Cristiano",
        cognome: "Franco",
        matricola: 1,
        materie: ["HTml", "Css", "Javascript", "Angular"]
    },
    {
        nome: "Giovanni",
        cognome: "Omettere",
        matricola: 2,
        materie: ["HTml", "Css", "Javascript", "Angular"]
    },
    {
        nome: "Emilia",
        cognome: "Ghinea",
        matricola: 3,
        materie: ["HTml", "Css", "Javascript", "Angular"]
    },
    {
        nome: "Domenico",
        cognome: "Cavaglieri",
        matricola: 4,
        materie: ["HTml", "Css", "Javascript", "Angular"]
    },
    {
        nome: "Gabriele",
        cognome: "MArchionne",
        matricola: 5,
        materie: ["HTml", "Css", "Javascript", "Angular"]
    },
    {
        nome: "Daniele",
        cognome: "Morello",
        matricola: 6,
        materie: ["HTml", "Css", "Javascript", "Angular"]
    },
    {
        nome: "Nicola",
        cognome: "Locorotondo",
        matricola: 7,
        materie: ["HTml", "Css", "Javascript", "Angular"]
    },
    {
        nome: "Marco",
        cognome: "Soda",
        matricola: 8,
        materie: ["HTml", "Css", "Javascript", "Angular"]
    }
]

//ALIAS - se non voglio ripetere le definizioni es: duplicazione dell'oggetto studente, persona, animale. Per definire un Alias utilizzo la keyword type. CREO UN NUOVO TIPO DI DATO

type Docente = {
    nome: string,
    cognome: string,
    materia: string
}

let docenteJS: Docente;
docenteJS ={
    nome: "Giovanni",
    cognome: "Silvestri",
    materia: "Javascript"
}

let docenteAng: Docente;
docenteAng = {
    nome: "Dario",
    cognome: "Mennillo",
    materia: "Angular"
}

//