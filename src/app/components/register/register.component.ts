import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User, Wallet } from 'src/app/models/user';
import { ClientMessage } from 'src/app/models/client-message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  title = 'Register'
  public user = new User(0, '', '', '', '', '')
  public wallet = new Wallet;
  public clientMessage = new ClientMessage('')


  constructor(private userService: UserService) { }// Insert private user service

  public registerUser(): void{

    this.user.wallet.push(this.wallet);

    this.userService.registerUser(this.user)
      .subscribe(
        data => this.clientMessage.message = `Successfully registersed ${data.username}`,
        error => this.clientMessage.message = `Something went wrong. Error: ${error}`
      )
  }


}
