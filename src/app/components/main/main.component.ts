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
  cryptos: CryptoCard[];

  constructor() {}

  ngOnInit(): void {
    let BTC = new CryptoCard('BTC');
    console.log(BTC);
    this.cryptos.push(BTC);
  }
}
