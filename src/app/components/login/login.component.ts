import { Wallet } from './../../models/user';
import { Data } from './../../models/buysell';
import { PersistService } from './../../services/persist.service';
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

  constructor(private UserService: UserService, private Router: Router, private per: PersistService) { } // insert private user service and router

  // Todo: Create loggin method

  doLogin(){

    let resp = this.UserService.login(this.username, this.password)

    resp.subscribe(data => {console.log(data), this.per.set('1',data), console.log(this.per.get('1')), this.Router.navigate(['/home'])
    },error => this.Router.navigate(['/login']))



  }
}
