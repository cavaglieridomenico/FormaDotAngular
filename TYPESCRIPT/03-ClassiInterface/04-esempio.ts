//siamo in un'officina. Abbiamo dei mnotori e delle auto 
//implementa delle proprietà per le interfacce; modello, marca, identificativo motore
//Sviluppa le classi di conseguenza
//Tramite console.log nella classe Officina presenta la nuova auto,

interface Motore{

    cilindrata: number;
    aumentaPotenza(): number;
    diminuisciPotenza(): number;
}

interface Auto{
    marca: string;
    modello: string;
    muovi();
    // calcolaGiri();
}

class Bmw implements Auto{

    private velocita = 0;

    //chiameremo Dependency Injection 
    constructor(public marca: string, public modello: string, private motore: Motore){

    }

    muovi() {
        this.velocita = this.motore.aumentaPotenza();
    }
}

class Motore1200 implements Motore{
    cilindrata: number;
    aumentaPotenza()  {
        return 10;
    }

    diminuisciPotenza() {
        return -10;
    }
}


class Motore1500 implements Motore{
    cilindrata: number;
    aumentaPotenza(){
        return 30;
    }

    diminuisciPotenza(){
        return -30;
    }
}

class officina{
    autos : Auto[] = [];

    constructor(){
        this.autos.push(
            new Bmw(new Motore1200())
        )
    }

    testaAuto(){
        //voglio testare se le auto si muovono oppure no 
        for(let a of this.autos){
            console.log(a.muovi());
        }
    }
}


