import { BuySell } from './buysell';
import { TradePriceService } from './../services/trade-price.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
// import axios from 'axios';

// import { PricesService } from '../services/prices.service';
import { Injectable } from '@angular/core';

/**
 * This holds the model for single crypto card to be rendered
 */

@Injectable({
  providedIn: 'root',
})
export class CryptoCard {
  name: string;
  code: string;
  // logo: string;

  spotPrice: string; // This is market price

  buyOrSell: string;

  buyPrice: string;
  sellPrice: string;
  previousBuyPrice: String;
  previousSellPrice: String;

  balance: string;
  buySell: BuySell;

  userId: number = 0;

  transactionAmount: number = 0;

  transaction = {
    amount: 0,
    assetName: 'string',
    userId: 0,
  };

  // tradePriceService: TradePriceService;

  // ps: PricesService = new PricesService();

  // https://api.coinbase.com/v2/prices/BTC-USD/sell

  public constructor(private tradePriceService: TradePriceService) {}

  //    console.log('pre fetchbuyprice in cryptocard'); // this runs

  //    console.log('pre fetchbuyprice in cryptocard'); // this runs

  // this.ps
  //   .fetchBuyPrice(code)
  //   .subscribe((ob) => (this.buyPrice = ob.data.amount));

  // this.buyPrice = this.ps.fetchBuyPrice(code);

  // this.buyPrice = this.ps.fetchBuyPriceAxios(code);

  // constructor (private pricesService : PricesService) {}

  // Method to evaluate name

  // callPsFetchBuyPrice() {
  //   this.ps.fetchBuyPrice(this.code);
  // }

  populateName(code: string) {
    switch (code) {
      case 'BTC':
        return 'Bitcoin';
      case 'ETH':
        return 'Ethereum';
      case 'LTC':
        return 'Litecoin';
      case 'ADA':
        return 'Cardano';
      case 'DOT':
        return 'Polkadot';
      case 'XLM':
        return 'Stellar';
      case 'DOGE':
        return 'Dogecoin';
      case 'USDT':
        return 'Tether';
      default:
        return 'Name not found';
    }
  }

  makeCryptoCard(code: string) {
    this.code = code;
    this.name = this.populateName(this.code);
    this.tradePriceBuy();
    this.tradePriceSell();
    this.tradePriceService.marketPriceService(this);

    // console.log(this.tradePriceService.maketPrice);
  }

  //Fetch Buy Price
  // fetchBuyPrice(code: string): Observable<BuySell> {
  //   return HttpClient.get<BuySell>(`${urlC}code-USD/buy`);
  // }

  // tradePrice(buyOrSell: string) {
  //   let tps = this.tradePriceService;

  // tradePrice(buyOrSell: string) {
  //   let tps = this.tradePriceService;

  //   let amt: string;
  //   fetcher();
  //   async function fetcher() {
  //     await tps.tradePriceService(this);
  //     console.log(this.buyPrice);
  //   }
  // }

  // tradePrice(buyOrSell: string) {
  //   // console.log(this); //  show buyPrice as expected ?????
  //   this.buyOrSell = buyOrSell;
  //   // console.log(this.buyOrSell);
  //   this.tradePriceService.tradePriceService(this);
  //   console.log(this); // shows buyprice at this.buyPrice
  // }

  tradePriceBuy() {
    // console.log(this); //  show buyPrice as expected ?????
    // this.buyOrSell = buyOrSell;
    // console.log(this.buyOrSell);
    this.previousBuyPrice = this.buyPrice ?? 'NA';
    this.tradePriceService.tradePriceBuyService(this);
    // console.log(this); // shows buyprice at this.buyPrice
  }

  tradePriceSell() {
    // console.log(this); //  show buyPrice as expected ?????
    // this.buyOrSell = buyOrSell;
    // console.log(this.buyOrSell);
    this.previousSellPrice = this.sellPrice ?? 'NA';
    this.tradePriceService.tradePriceSellService(this);
    // console.log(this); // shows buyprice at this.buyPrice
  }

  buyCrypto() {
    console.log(`Buy ${this.transactionAmount} of  ${this.code} `);
    this.transaction.amount = this.transactionAmount;
    this.transaction.assetName = this.code;
    this.transaction.userId = JSON.parse(
      JSON.parse(sessionStorage.getItem('1'))
    ).id;
    this.tradePriceService.buyService(this.transaction);
  }

  sellCrypto() {
    console.log(`Sell ${this.transactionAmount} of ${this.code}`);
    this.transaction.amount = this.transactionAmount;
    this.transaction.assetName = this.code;
    this.transaction.userId = JSON.parse(
      JSON.parse(sessionStorage.getItem('1'))
    ).id;
    this.tradePriceService.sellService(this.transaction);
  }
}
