import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  genere = ['maschio', 'femmina', 'altro'];

  // Creo la struttura del form nel template, dopodiché la sincronizzo nel component.ts

  //signupForm è il mio form. Nell'onInit inizilizzo il form
  signupForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    //specifico come sarà fatto il mio form, sincronizzato con il mio template
    //vado ad annidare username e mail


    this.signupForm = new FormGroup({
      'userData': new FormGroup({

        'username': new FormControl('test', [Validators.required, CustomValidators.nomiProibiti]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.emailProibite),

      }),

      'genere': new FormControl('femmina', Validators.required)
    });

    //Status global del mio Form
    this.signupForm.statusChanges.subscribe(
      status => console.log("Status Globale", status)
    )

    //Status della singola propr input
    this.signupForm.get('userData.username').statusChanges.subscribe(
      status => console.log("Status Singolo", status)
    )

    ///Valori
    this.signupForm.valueChanges.subscribe(
        values => console.log("Valori", values)
    )

  }

  // //Custom Validator
  // usernameVietati = ['Pippo', 'Paperino', 'Pluto'];

  //Questo è stato spostato nel file esterno

  // nomiProibiti(control: FormControl): {[s: string]: boolean} {
  //   if(this.usernameVietati.indexOf(control.value) != -1){
  //     return {'nomeIsProibito': true} // oggetto JS -> chiave: valore
  //   }
  //   return null;
  // }

  //Async Validator
  emailProibite(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) =>{
      setTimeout(() => {
        if(control.value === 'pippo@pippo.com'){
          resolve({'emailIsProibita' : true});
        }else{
          resolve(null)
        }
      }, 2000);
    });
    return promise
  }

  onSubmit() {
    console.log(this.signupForm);

  }
}
