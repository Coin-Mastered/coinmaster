import { TradePriceService } from './../../services/trade-price.service';
import { CryptoCard } from './../../models/CryptoCard';
import { Component, OnInit } from '@angular/core';

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
  // coins: string[] = ['BTC'];

  constructor(
    private cryptoCard: CryptoCard,
    private tradePriceService: TradePriceService
  ) {}

  ngOnInit(): void {
    // let BTC = new CryptoCard('BTC');
    // console.log(BTC); // logs out with name 'Bitcoin' as expected
    // this.cryptos.push(BTC);
    this.setCryptos();
  }

  setCryptos() {
    // this.coins.forEach((coin) => this.cryptos.push(new CryptoCard(coin)));
    this.coins.forEach((coin) => {
      let card: CryptoCard = new CryptoCard(this.tradePriceService);

      card.code = coin;
      // card.tradePrice('buy');
      // card.tradePrice('sell');
      card.tradePriceBuy();
      card.tradePriceSell();

      console.log('L40', card);
      this.cryptos.push(card);
      // console.log(card.buyPrice ?? 'Card.buyPrice still not loaded') but works;
    });

    // let BTC = new CryptoCard('BTC');
    // console.log(BTC); // logs out with name 'Bitcoin' as expected
    // this.cryptos.push(BTC);
    console.log('setCryptos()');

    // this.cryptoCard.tradePrice('buy');
  }
}
