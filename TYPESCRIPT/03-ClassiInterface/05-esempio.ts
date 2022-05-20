interface Dipendente{
    nome: string;
    //crea altre proprietà e metodi: cognome, matricola, calcolaStipendio(moltiplicatore)
    calcolaStip(moltiplicatore: number): number;
}

class Manager implements Dipendente{
    
    constructor(public nome: string){

    }

    calcolaStip(moltiplicatore: number): number {
       let stipendio = moltiplicatore * 1000;
       return stipendio;
    }
}

let manager1 = new Manager("Mario");
console.log( manager1.calcolaStip(4.6) );




class Operaio implements Dipendente{
    
    constructor(public nome: string, public moltiplicatore: number){

    }

    calcolaStip(): number {
        let stipendio = this.moltiplicatore * 1000;
        return stipendio;
    }
}

let operaio1 = new Operaio("Ciro", 1.5);
console.log( operaio1.calcolaStip());
console.log( operaio1.moltiplicatore );



//OPPURE
interface Dipendente2{
    nome: string;
    moltiplicatore: number;
    calcolaStipendio: (moltiplicatore: number) => number;
}


class Sguattero implements Dipendente2{
    moltiplicatore: number;
    nome: string;
    constructor(nome: string, moltiplicatore: number){
        this.moltiplicatore = moltiplicatore;
        this.nome = nome
    }

    calcolaStipendio(moltiplicatore: number){
        return moltiplicatore * 1000;
    };
}

let sguatt1 = new Sguattero("Nino", 0.8);
sguatt1.calcolaStipendio(sguatt1.moltiplicatore);
