import axios from 'axios';
import { textChangeRangeIsUnchanged } from 'typescript';

/**
 * This holds the model for single crypto card to be rendered
 */

export default class Crypto {
  name: string;
  code: string;
  // logo: string;

  // spotPrice: number;
  // buyPrice: number;
  // sellPrice: number;

  // balance: number;

  userId: number = 0;

  // https://api.coinbase.com/v2/prices/BTC-USD/sell
  urlC: string = 'https://api.coinbase.com/v2/prices/';

  public constructor(code: string) {
    this.name = this.populateName(code);
    this.code = code;
    console.log(this.fetchBuyPrice(code)); // testing
  }

  // Method to evaluate name

  populateName(code: string) {
    switch (code) {
      case 'ETH':
        return 'Ethereum';
      case 'LTC':
        return 'Litecoin';
      case 'ADA':
        return 'Cardano';
      case 'DOT':
        return 'Polkadot';
      case 'BTC':
        return 'Bitcoin';
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

  fetchBuyPrice(code: string) {
    resp: Promise = new Promise();

    try {
      resp: Promise<() => Promise = fetch(`${this.urlC}${code}-USD/buy`).then((res) => res.json);
      // .then((res) => (price = res.data.amount));
    } catch (error) {
      console.log(error);
    }
  }

  // buy Method

  // sell Method
}
