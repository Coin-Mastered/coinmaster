import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username : string;
  password : string;

  constructor(private UserService: UserService, private Router: Router) { } // insert private user service and router

  // Todo: Create loggin method

  doLogin(){

    let resp = this.UserService.login(this.username, this.password)
    console.log(this.password)
    console.log(this.username)

    resp.subscribe(data => {this.Router.navigate(['/home'])
  },
  error => this.Router.navigate(['/login']))
  //console.log("Hello There")
  }
}
