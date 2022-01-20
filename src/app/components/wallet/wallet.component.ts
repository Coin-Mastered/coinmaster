import { TradePriceService } from './../../services/trade-price.service';
import { Component, OnInit } from '@angular/core';
import { CryptoCard } from '../../models/CryptoCard';
import {
  HttpErrorResponse,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
// import { coinurl } from 'src/environments/environment';

// const url = `${coinurl}`;

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  cryptos: CryptoCard[] = [];

  coins: string[] = ['BTC', 'ETH', 'LTC', 'ADA', 'DOT', 'XLM', 'DOGE', 'USDT'];

  // http: HttpClient;

  sell: any[] = [];

  constructor(private tradePriceService: TradePriceService) {}

  ngOnInit(): void {
    this.setCryptos();
    //this.setSellPrices();
  }

  setCryptos() {
    this.coins.forEach((coin) => {
      let card: CryptoCard = new CryptoCard(this.tradePriceService);
      card.makeCryptoCard(coin);
      this.cryptos.push(card);
    });
  }
}
