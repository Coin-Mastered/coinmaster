import { Component, OnInit } from '@angular/core';
import { CryptoCard } from '../../models/CryptoCard';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  bitcoin = 'assets/bitcoin-btc-logo.png';
  cardano = 'assets/cardano-ada-logo.png';
  ethereum =
    'assets/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png';
  cryptos: CryptoCard[] = [];

  coins: string[] = ['BTC', 'ETH', 'LTC', 'ADA', 'DOT', 'XLM', 'DOGE', 'USDT'];

  constructor() {}

  ngOnInit(): void {
    // let BTC = new CryptoCard('BTC');
    // console.log(BTC); // logs out with name 'Bitcoin' as expected
    // this.cryptos.push(BTC);
    this.setCryptos();
  }

  setCryptos() {
    this.coins.forEach((coin) => this.cryptos.push(new CryptoCard(coin)));

    // let BTC = new CryptoCard('BTC');
    // console.log(BTC); // logs out with name 'Bitcoin' as expected
    // this.cryptos.push(BTC);
  }
}
