import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Utente } from './utente.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  constructor(private http: HttpClient) { }
  url = "https://proj-dotacadamy-default-rtdb.europe-west1.firebasedatabase.app"

  getData(){
    return this.http.get(this.url + '/users.json');
  }


  creaUtente(nome: string, cognome: string){

    const postUtente: Utente = {nome: nome, cognome: cognome};

    this.http.post(
      this.url + '/mieiUtenti.json',  //url
      postUtente //body della request
      )
      .subscribe( responseData => {
        console.log(responseData);
      })

  }

  fetchUtenti(){
    return this.http.get<{ [key: string]: Utente }>(
      this.url + '/mieiUtenti.json'
    )
    .pipe(map(responseData => { //.pipe & map per trasformare degli oggetti in un array di oggetti
      const mieiUtentiArray: Utente[] = [];

      for(let key in responseData){
        // mieiUtentiArray.push(responseData[key]);
        if(responseData.hasOwnProperty(key)){
          mieiUtentiArray.push({...responseData[key], id: key});
        }

      }
      return mieiUtentiArray;
    }

    ))
  }
}
