import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app4-Routing';
  loggedIn: boolean;

  constructor(private authServ: AuthService){
  this.loggedIn =  authServ.loggedIn //true , false
  }
}
