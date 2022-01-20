import { BuySell } from './buysell';
import { TradePriceService } from './../services/trade-price.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
// import axios from 'axios';

import { PricesService } from '../services/prices.service';
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

  spotPrice: string;
  buyPrice: string;
  sellPrice: string;

  balance: string;
  buySell: BuySell;

  userId: number = 0;

  // tradePriceService: TradePriceService;

  // ps: PricesService = new PricesService();

  // https://api.coinbase.com/v2/prices/BTC-USD/sell

  public constructor(
    // code: string //, private ps: PricesService) {
    private tradePriceService: TradePriceService
  ) {
    // this.name = this.populateName(code);
    // this.code = code;
    // console.log('pre fetchbuyprice in cryptocard'); // this runs
    // this.ps
    //   .fetchBuyPrice(code)
    //   .subscribe((ob) => (this.buyPrice = ob.data.amount));
    // this.buyPrice = this.ps.fetchBuyPrice(code);
    // this.buyPrice = this.ps.fetchBuyPriceAxios(code);
  }

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

  //Fetch Buy Price
  // fetchBuyPrice(code: string): Observable<BuySell> {
  //   return HttpClient.get<BuySell>(`${urlC}code-USD/buy`);
  // }

  // tradePrice(buyOrSell: string) {
  //   let tps = this.tradePriceService;

  //   let amt: string;
  //   fetcher();
  //   async function fetcher() {
  //     await tps.tradePriceService(this);
  //     console.log(this.buyPrice);
  //   }
  // }

  tradePrice(buyOrSell: string) {
    console.log(this);
    this.tradePriceService.tradePriceService(this);
    console.log(this); // shows buyprice at this.buyPrice
  }

  // buy Method

  // sell Method
}
