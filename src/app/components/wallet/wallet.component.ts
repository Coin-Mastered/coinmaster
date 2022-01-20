import { Component, OnInit } from '@angular/core';
import { CryptoCard } from '../../models/CryptoCard';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { coinurl } from 'src/environments/environment';

const url = `${coinurl}`

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  cryptos: CryptoCard[] = [];

  coins: string[] = ['BTC', 'ETH', 'LTC', 'ADA', 'DOT', 'XLM', 'DOGE', 'USDT'];

  http: HttpClient;

  sell: any[] = [];


  constructor() { }

  ngOnInit(): void {
    this.setCryptos();
  //this.setSellPrices();
  }


setCryptos() {
  this.coins.forEach((coin) => this.cryptos.push(new CryptoCard(coin)));

  // let BTC = new CryptoCard('BTC');
  // console.log(BTC); // logs out with name 'Bitcoin' as expected
  // this.cryptos.push(BTC);
}

}
