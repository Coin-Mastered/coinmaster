import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User, Wallet } from 'src/app/models/user';
import { ClientMessage } from 'src/app/models/client-message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  title = 'Register'
  public user = new User( '', '', '', '', '', [])
  public wallet = new Wallet('USD','100000');
  public clientMessage = new ClientMessage('')


  constructor(private userService: UserService, private Router: Router) { }// Insert private user service

  public registerUser(): void{

    this.user.wallets.push(this.wallet);
    this.userService.registerUser(this.user)
      .subscribe(
        data => this.clientMessage.message = `Successfully registered ${data.username}`,
        error => this.clientMessage.message = `Something went wrong. Error: ${error}`
      )
      //console.log("Pineapples")
  }


}
