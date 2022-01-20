import { RouterStateSnapshot } from '@angular/router';
// Dont need this.
export class MarketPrice {
  rates: Rates;

  constructor(rates: Rates) {
    this.rates = rates;
  }
}

export class Rates {
  BTC: string;

  constructor(BTC: string) {
    this.BTC = BTC;
  }
}
