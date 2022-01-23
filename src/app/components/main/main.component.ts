import { PersistService } from './../../services/persist.service';
import { TradePriceService } from './../../services/trade-price.service';
import { CryptoCard } from './../../models/CryptoCard';
import { Component, OnInit } from '@angular/core';

// import { coinurl } from 'src/environments/environment';

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
  litecoin = 'assets/image.png';
  polkadot = 'assets/image (1).png';
  bitcoinCash = 'assets/image (2).png';
  Stellar = 'assets/image (3).png';
  DogeCoin = 'assets/image (4).png';
  Tether = 'assets/image (5).png';

  cryptos: CryptoCard[] = [];

  coins: string[] = ['BTC', 'ETH', 'LTC', 'ADA', 'DOT', 'XLM', 'DOGE', 'USDT'];
  // coins: string[] = ['BTC'];

  constructor(
    private cryptoCard: CryptoCard,
    private tradePriceService: TradePriceService,
    private pre: PersistService
  ) {}

  ngOnInit(): void {
    // let BTC = new CryptoCard('BTC');
    // console.log(BTC); // logs out with name 'Bitcoin' as expected
    // this.cryptos.push(BTC);
    this.setCryptos();
    this.getId();
  }

  setCryptos() {
    // this.coins.forEach((coin) => this.cryptos.push(new CryptoCard(coin)));
    this.coins.forEach((coin) => {
      let card: CryptoCard = new CryptoCard(this.tradePriceService);
      card.makeCryptoCard(coin);
      this.cryptos.push(card);
    });


    // let BTC = new CryptoCard('BTC');
    // console.log(BTC); // logs out with name 'Bitcoin' as expected
    // this.cryptos.push(BTC);
    // console.log('setCryptos()');

    // this.cryptoCard.tradePrice('buy');
  }

  getId(){
    let temp = this.pre.get('1')
    temp = JSON.parse(temp)
    temp = temp.id
    console.log(temp)
  }

  consolecode(code: string){
    console.log(code);
  }
}
