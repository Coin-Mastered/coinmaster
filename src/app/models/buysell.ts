export class BuySell {
  data: Data;

  constructor(data: Data) {
    this.data = data;
  }
}

export class Data {
  base: string;
  currency: string;
  amount: string;

  constructor(base: string, currency: string, amount: string) {
    this.base = base;
    this.currency = currency;
    this.amount = amount;
  }
}