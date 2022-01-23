import { PersistService } from './../../services/persist.service';
import { TradePriceService } from './../../services/trade-price.service';
import { Component, OnInit } from '@angular/core';
import { CryptoCard } from '../../models/CryptoCard';
import {
  HttpErrorResponse,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
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

  walletinfo;

  constructor(private tradePriceService: TradePriceService, private pers: PersistService) {}

  ngOnInit(): void {
    this.setCryptos();
    //this.setSellPrices();
    this.getwallet();
  }

  setCryptos() {
    this.coins.forEach((coin) => {
      let card: CryptoCard = new CryptoCard(this.tradePriceService);
      card.makeCryptoCard(coin);
      this.cryptos.push(card);
    });
  }

  getwallet(){
    console.log("get wallet start")
    this.walletinfo = this.pers.get('1');
    let temp = JSON.parse(this.walletinfo);
    console.log(temp.wallets)
    console.log("hello " + this.walletinfo.substring(271, 279))
    return this.walletinfo;
  }
}
