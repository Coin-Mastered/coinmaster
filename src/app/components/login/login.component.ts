import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 /* username : string;
  password : string;*/

  constructor() { } // insert private user service and router

  // Todo: Create loggin method

 /* doLogin(){

    let resp = this.UserService.login(this.username, this.password)

    resp.subscribe(data => {this.router.navigate(['/home'])
  },
  error => this.router.navigate(['/login']))
  }*/
}
