import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css']
})
export class FormTemplateDrivenComponent implements OnInit {

  @ViewChild('mioForm') formReg: NgForm;

  risposta: string;
  domandaDefault = 'amico';
  genere = ['femmina', 'maschio', 'altro'];

  user = {
    username: '',
    email: '',
    secret: '',
    rispostaSecret: '',
    genere: ''
  };

  submitted = false;

  onSubmit(form: NgForm){
    console.log(form);

    this.user.username = this.formReg.value.userData.username;
    this.user.email = this.formReg.value.userData.email;
    this.user.secret = this.formReg.value.secret;
    this.user.rispostaSecret = this.formReg.value.rispostaSecret;
    this.user.genere = this.formReg.value.genere;

    this.submitted = true;

    //fare il reset()
    this.formReg.reset();

    console.log(this.user);
    return this.user;
  }

  onSuggerisciName(){
    const nomeSuggerito = "Pincopallino";

    //SetValue
    //Setto tutte le prop del mio oggetto (JS che arriva dal form)

    // this.formReg.setValue({
    //   userData:{
    //     username: nomeSuggerito,
    //     email: ''
    //   },
    //   secret: '',
    //   rispostaSecret: '',
    //   genere: 'maschio'
    // });

    //patchValue
    this.formReg.form.patchValue({
      userData:{
        username: nomeSuggerito
      },
      genere: 'femmina'
    });


  }


  constructor() { }


  ngOnInit(): void {
  }

}
