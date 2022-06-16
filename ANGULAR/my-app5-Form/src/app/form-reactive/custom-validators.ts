import { FormControl } from "@angular/forms";

export class CustomValidators{

//Creo i miei metodi custom che prima erano presenti nel file ts del form
//Li identifico con static così nel richiamare il metodo non ho necessità di costruire prima l'istanza della classe Custom Validators



static nomiProibiti(control: FormControl): {[s: string]: boolean} {

  let usernameVietati = ['Pippo', 'Paperino', 'Pluto'];

  if(usernameVietati.indexOf(control.value) != -1){
    return {'nomeIsProibito': true} // oggetto JS -> chiave: valore
  }
  return null;
}




}
