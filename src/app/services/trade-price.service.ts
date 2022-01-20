import { CryptoCard } from './../models/CryptoCard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FileWatcherEventKind } from 'typescript';
import { BuySell } from '../models/buysell';

@Injectable({
  providedIn: 'root',
})
export class TradePriceService {
  buySell: BuySell;
  constructor(private http: HttpClient) {}

  // tradePrice() {
  //   let amount: string;
  //   console.log('tradePriceService Called');

  //   this.http
  //     .get<BuySell>('https://api.coinbase.com/v2/prices/BTC-USD/sell', {
  //       observe: 'body',
  //       responseType: 'json',
  //     })
  //     .subscribe((res: BuySell) => {
  //       this.buySell = {
  //         data: res.data,
  //       };
  //       console.log(res.data.amount); // works
  //       return res.data.amount;
  //     });
  //   return 'Returned Before fetching';
  // }

  tradePriceService(cryptoCard: CryptoCard): any {
    let amount: string;
    console.log('tradePriceService Called');

    this.http
      .get<BuySell>('https://api.coinbase.com/v2/prices/BTC-USD/sell', {
        observe: 'body',
        responseType: 'json',
      })
      .subscribe({
        next: (v) => {
          console.log('Amount is ' + v.data.amount); // Amount is 43079.23
          cryptoCard.buyPrice = v.data.amount;
          // return v.data.amount;
          console.log('no run');
        },
        error: (e) => console.error(e),
        complete: () => {
          console.info('complete');
        },
      });
  }
}
