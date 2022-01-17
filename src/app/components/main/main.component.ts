import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  bitcoin = 'assets/bitcoin-btc-logo.png'
  cardano = 'assets/cardano-ada-logo.png'
  ethereum = 'assets/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png'


  constructor() { }

  ngOnInit(): void {
  }

}
