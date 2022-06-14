import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textButton: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
     this.authService.loggedIn ? this.textButton="LogOut" : this.textButton = "LogIn";
  }

  onLog(){
    if(this.authService.loggedIn){
      this.authService.logout();
      this.textButton = "LogIn";
    }else{
      this.authService.login();
      this.textButton = "LogOut";
    }
  }
}
