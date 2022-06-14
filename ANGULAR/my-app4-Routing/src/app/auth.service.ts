import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor() { }

  //simulare una vera Autenticazione, cioè deve passare del tempo
  isAuthenticated(){
    const miaProm = new Promise(
      (resolve, reject) =>{
        setTimeout(() => {
          resolve (this.loggedIn)
        }, 800);
      }
    )
    return miaProm;
  }



  //Questi metodi da utilizzare con pulsanti da qualche
  login(){
    this.loggedIn = true;
    console.log("Sei Loggato");

  }
  logout(){
    this.loggedIn = false;
    console.log("Non sei Loggato");

  }
}
