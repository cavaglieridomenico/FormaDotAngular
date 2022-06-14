import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = true;

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
  }
  logout(){
    this.loggedIn = false;
  }
}
