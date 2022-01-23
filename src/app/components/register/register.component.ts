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
  public BTCwallet = new Wallet('BTC', '0');
  public ETHwallet = new Wallet('ETH', '0');
  public LTCwallet = new Wallet('LTC', '0');
  public ADAwallet = new Wallet('ADA', '0');
  public DOTwallet = new Wallet('DOT', '0');
  public XLMwallet = new Wallet('XLM', '0');
  public DOGEwallet = new Wallet('DOGE', '0');
  public USDTwallet = new Wallet('USDT', '0');
  public clientMessage = new ClientMessage('')


  constructor(private userService: UserService, private Router: Router) { }// Insert private user service

  public registerUser(): void{

    this.user.wallets.push(this.wallet);
    this.user.wallets.push(this.BTCwallet);
    this.user.wallets.push(this.ETHwallet);
    this.user.wallets.push(this.LTCwallet);
    this.user.wallets.push(this.ADAwallet);
    this.user.wallets.push(this.DOTwallet);
    this.user.wallets.push(this.XLMwallet);
    this.user.wallets.push(this.DOGEwallet);
    this.user.wallets.push(this.USDTwallet);
    this.userService.registerUser(this.user)
      .subscribe(
        data => this.clientMessage.message = `Successfully registered ${data.username}`,
        error => this.clientMessage.message = `Something went wrong. Error: ${error}`
      )
      //console.log("Pineapples")
  }


}
