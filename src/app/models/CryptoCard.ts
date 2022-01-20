import { HttpClient } from '@angular/common/http';
// import axios from 'axios';

import { PricesService } from '../services/prices.service';

/**
 * This holds the model for single crypto card to be rendered
 */

export class CryptoCard {
  name: string;
  code: string;
  // logo: string;

  // spotPrice: number;
  buyPrice: string;
  // sellPrice: number;

  // balance: number;

  userId: number = 0;

  ps: PricesService = new PricesService();

  // https://api.coinbase.com/v2/prices/BTC-USD/sell

  public constructor(
    code: string //, private ps: PricesService) {
  ) {
    this.name = this.populateName(code);
    this.code = code;
    console.log('pre fetchbuyprice in cryptocard'); // this runs

    // this.ps
    //   .fetchBuyPrice(code)
    //   .subscribe((ob) => (this.buyPrice = ob.data.amount));

    // this.buyPrice = this.ps.fetchBuyPrice(code);

    // this.buyPrice = this.ps.fetchBuyPriceAxios(code);
  }

  // constructor (private pricesService : PricesService) {}

  // Method to evaluate name

  callPsFetchBuyPrice() {
    this.ps.fetchBuyPrice(this.code);
  }

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
      case 'Tether':
        return 'USDT';
      default:
        return 'Name not found';
    }
  }

  //Fetch Buy Price
  // fetchBuyPrice(code: string): Observable<BuySell> {
  //   return HttpClient.get<BuySell>(`${urlC}code-USD/buy`);
  // }

  // buy Method

  // sell Method
}
