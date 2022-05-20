function somma(a: number,b:number): number{
    return a+b;
}


//posso omettere il tipo di ritorno, non è obbligatorio poiché TS conosce da solo il tipo
function moltiplica(a: number, b: number){
    return a * b;
}

//Se non ho tipo di ritorno ?
//Il tipo di ritorno void segnale che non verrà ritornato nulla ma semplicemente eseguito qualcosa

function salutaInConsole (saluto: string): void{
    console.log(saluto);   
}

salutaInConsole("Ciao Dario ");
