import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  interrutore: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.interrutore = this.authService.loggedIn;
  }

  onLogin(){
    this.interrutore = true;
    this.authService.login();
    this.router.navigate(['/servers']);
  }

  onLogout(){
    this.interrutore = false;
    this.authService.logout();
    this.router.navigate(['/']);
  }


}
