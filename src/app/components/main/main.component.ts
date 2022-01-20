import { PricesService } from './../../services/prices.service';
/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  bitcoin = 'assets/bitcoin-btc-logo.png'
  cardano = 'assets/cardano-ada-logo.png'
  ethereum = 'assets/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png'
  litecoin = 'assets/image.png'
  polkadot = 'assets/image (1).png'
  bitcoinCash = 'assets/image (2).png'
  Stellar = 'assets/image (3).png'
  DogeCoin = 'assets/image (4).png'
  Tether = 'assets/image (5).png'



  constructor() {}

  ngOnInit(): void {}

}*/

import { Component, OnInit } from '@angular/core';
import { CryptoCard } from '../../models/CryptoCard';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { coinurl } from 'src/environments/environment';

const url = `${coinurl}`

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  bitcoin = 'assets/BTC.png';
  cardano = 'assets/ADA.png';
  ethereum =
    'assets/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png';
  cryptos: CryptoCard[] = [];

  coins: string[] = ['BTC', 'ETH', 'LTC', 'ADA', 'DOT', 'XLM', 'DOGE', 'USDT'];

  http: HttpClient;

  sell: any[] = [];



  constructor() {}

  /*httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }*/

  ngOnInit(): void {
    // let BTC = new CryptoCard('BTC');
    // console.log(BTC); // logs out with name 'Bitcoin' as expected
    // this.cryptos.push(BTC);
    this.setCryptos();
    //this.setSellPrices();
  }

  setCryptos() {
    this.coins.forEach((coin) => this.cryptos.push(new CryptoCard(coin)));

    // let BTC = new CryptoCard('BTC');
    // console.log(BTC); // logs out with name 'Bitcoin' as expected
    // this.cryptos.push(BTC);
  }

  /*getSellPrice(code: string) {
    return PricesService.getSell(code)
  }*/

  getPrices(code: string){

    this.http.get(`${coinurl}${code}-USD/sell`)
      .subscribe(data => console.log(data))
  }

  setSellPrices(){
    this.coins.forEach((coin) => this.sell.push(this.getPrices(coin)));
  }
}


