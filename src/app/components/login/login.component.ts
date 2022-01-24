import { NavComponent } from './../nav/nav.component';
import { Wallet } from './../../models/user';
import { Data } from './../../models/buysell';
import { PersistService } from './../../services/persist.service';
import { UserService } from './../../services/user.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class LoginComponent {
  username: string;
  password: string;
  isLoggedIn: boolean = false;

  constructor(
    private UserService: UserService,
    private Router: Router,
    private per: PersistService,
    private nav: NavComponent
  ) {} // insert private user service and router

  // Todo: Create loggin method

  doLogin() {
    let resp = this.UserService.login(this.username, this.password);

    resp.subscribe(
      (data) => {
        console.log(Boolean(data)),
          this.per.set('1', data),
          console.log(this.per.get('1')),
          this.Router.navigate(['/home']);
        if (Boolean(data)) {
          this.nav.setIsLoggeIn(true);
          console.log(this.nav.isLoggedIn);
        } else {
          this.nav.setIsLoggeIn(false);
        }
      },
      (error) => this.Router.navigate(['/login'])
    );
  }
}
