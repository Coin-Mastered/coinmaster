export class BuySell {
  data: data;

  constructor(data: data) {
    this.data = data;
  }
}

export class data {
  base: string;
  currency: string;
  amount: string;

  constructor(base: string, currency: string, amount: string) {
    this.base = base;
    this.currency = currency;
    this.amount = amount;
  }
}
