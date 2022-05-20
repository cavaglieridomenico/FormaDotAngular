function inserisciAllInizio(array: any[], value: any){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const upArray = inserisciAllInizio(demoArray, 0); //--> [0,1,2,3];

upArray[0].split('')

//I generics si definisco nell'operatore diamond <>


function inserisciAllInizio2<T> (array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const upDarray2 = inserisciAllInizio2(demoArray, 0);
 //upDarray2[0].split('') //split va bene per le stringhe

const upArray3 = inserisciAllInizio2(['a','b','c','d'], 'e');
 upArray3[5].split('');


 

 const addItemToList = <T>(array: T[], item: T) => {
    return [item, ...array];
  };
  
  const newNumberList = addItemToList<number>([2, 3, 4], 0);
  console.log(newNumberList);
  const newStringList = addItemToList<string>(["2", "3", "4"], "0");
  console.log(newStringList);