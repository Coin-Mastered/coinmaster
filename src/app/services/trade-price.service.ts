import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BuySell } from '../models/buysell';

@Injectable({
  providedIn: 'root',
})
export class TradePriceService {
  buySell: BuySell;
  constructor(private http: HttpClient) {}

  public tradePrice() {
    console.log('tradePriceService Called');

    try {
      this.http
        .get<BuySell>('https://api.coinbase.com/v2/prices/BTC-USD/sell', {
          observe: 'body',
          responseType: 'json',
        })
        .subscribe((res: BuySell) => {
          this.buySell = {
            data: res.data,
          };
          console.log(res.data.amount);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
