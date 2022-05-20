//L'interfaccia definisce il tipo dell'oggetto, cioè la struttura comune a tutti gli oggetti appartenenti alla classi che implemnetaranno l'interfaccia 


interface Umano{
    nome: string;
    cognome: string;
    eta: number;

    //nel definire il metodo in una interfaccia definisco solo il tipo di ritorno e il metodo attraverso il suo nome 
    saluta: () => void;
}

//posso anche istanziare solo un oggetto con queste caratteristiche e questi metodi
// let cittadino: Umano;

// cittadino = {
//     nome: "Pippo",
//     cognome: "Rossi",
//     eta: 40,
//     saluta(){
//         console.log("Ciao, Mondo");
//     }
// }

class Cittadino implements Umano {


    constructor(public nome: string, public cognome: string, public eta: number){
    
    }
    
    saluta() : void{

        console.log("Ciao " + this.nome);
    }
}


class Politico implements Umano{
    constructor(public nome: string, public cognome: string, public eta: number){
       
    }

    saluta(): void{
        console.log("Buongiorno, io sono il signor: " + this.cognome + ' ' + this.nome);
    }
}


let sindaco = new Cittadino("Paolo", "Rossi" , 40);
sindaco.saluta();

let senatore = new Politico("Pierluigi", "Pierantola", 87);
senatore.saluta()


