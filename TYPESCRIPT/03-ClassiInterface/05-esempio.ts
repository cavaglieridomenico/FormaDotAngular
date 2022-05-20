interface Dipendente{
    nome: string;
    //crea altre proprietà e metodi: cognome, matricola, calcolaStipendio(moltiplicatore)

}

class Manager implements Dipendente{
    nome: string;
}

class Operaio implements Dipendente{
    nome: string;
}