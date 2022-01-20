import { MarketPrice } from './../models/marketPrice';
import { CryptoCard } from './../models/CryptoCard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FileWatcherEventKind, ListFormat } from 'typescript';
import { BuySell } from '../models/buysell';

@Injectable({
  providedIn: 'root',
})
export class TradePriceService {
  // buySell: BuySell;

  maketPrice = {
    BTC: '',
    ETH: '',
    LTC: '',
    ADA: '',
    DOT: '',
    XLM: '',
    DOGE: '',
    USDT: '',
  };

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
  //       };x
  //       console.log(res.data.amount); // works
  //       return res.data.amount;
  //     });
  //   return 'Returned Before fetching';
  // }

  // tradePriceService(cryptoCard: CryptoCard) {
  //   let amount: string;
  //   console.log('tradePriceService Called');

  //   this.http
  //     .get<BuySell>(
  //       `https://api.coinbase.com/v2/prices/${cryptoCard.code}-USD/${cryptoCard.buyOrSell}`,
  //       {
  //         observe: 'body',
  //         responseType: 'json',
  //       }
  //     )
  //     .subscribe({
  //       next: (v) => {
  //         console.log('Amount is ' + v.data.amount); // Amount is 43079.23
  //         if (cryptoCard.buyOrSell === 'buy') {
  //           console.log('buy req ran');
  //           cryptoCard.buyPrice = v.data.amount;
  //         }
  //         if (cryptoCard.buyOrSell === 'sell') {
  //           console.log('sell req ran');
  //           cryptoCard.sellPrice = v.data.amount;
  //         }

  //         // return v.data.amount;
  //         // console.log('no run');
  //       },
  //       error: (e) => console.error(e),
  //       complete: () => {
  //         console.info('complete');
  //       },
  //     });
  // }

  tradePriceBuyService(cryptoCard: CryptoCard) {
    let amount: string;
    // console.log('tradePriceService Called');

    this.http
      .get<BuySell>(
        `https://api.coinbase.com/v2/prices/${cryptoCard.code}-USD/buy`,
        {
          observe: 'body',
          responseType: 'json',
        }
      )
      .subscribe({
        next: (v) => {
          // console.log('Amount is ' + v.data.amount); // Amount is 43079.23
          cryptoCard.buyPrice = v.data.amount;

          // return v.data.amount;
          // console.log('no run');
        },
        error: (e) => console.error(e),
        complete: () => {
          // console.info('complete');
        },
      });
  }

  tradePriceSellService(cryptoCard: CryptoCard) {
    let amount: string;
    // console.log('tradePriceService Called');

    this.http
      .get<BuySell>(
        `https://api.coinbase.com/v2/prices/${cryptoCard.code}-USD/sell`,
        {
          observe: 'body',
          responseType: 'json',
        }
      )
      .subscribe({
        next: (v) => {
          // console.log('Amount is ' + v.data.amount); // Amount is 43079.23
          cryptoCard.sellPrice = v.data.amount;

          // return v.data.amount;
          // console.log('no run');
        },
        error: (e) => console.error(e),
        complete: () => {
          // console.info('complete');
        },
      });
  }

  // marketPriceFetch() {
  //   this.http
  //     .get<any>(`https://api.coinbase.com/v2/exchange-rates`, {
  //       observe: 'body',
  //       responseType: 'json',
  //     })
  //     .subscribe({
  //       next: (v) => {
  //         this.maketPrice.BTC = v.data.rates.BTC;
  //         this.maketPrice.ETH = v.data.rates.ETH;
  //         this.maketPrice.LTC = v.data.rates.LTC;
  //         this.maketPrice.ADA = v.data.rates.ADA;
  //         this.maketPrice.DOT = v.data.rates.DOT;
  //         this.maketPrice.XLM = v.data.rates.XLM;
  //         this.maketPrice.DOGE = v.data.rates.DOGE;
  //         this.maketPrice.USDT = v.data.rates.USDT;

  //         // console.log(this.maketPrice);
  //       },
  //       error: (e) => console.error(e),
  //       complete: () => {
  //         // console.info('complete');
  //       },
  //     });
  // }

  marketPriceService(cryptoCard: CryptoCard) {
    this.http
      .get<any>(`https://api.coinbase.com/v2/exchange-rates`, {
        observe: 'body',
        responseType: 'json',
      })
      .subscribe({
        next: (v) => {
          switch (cryptoCard.code) {
            case 'BTC':
              cryptoCard.spotPrice = this.priceFixer(v.data.rates.BTC);
              break;
            case 'ETH':
              cryptoCard.spotPrice = this.priceFixer(v.data.rates.ETH);
              break;
            case 'LTC':
              cryptoCard.spotPrice = this.priceFixer(v.data.rates.LTC);
              break;
            case 'ADA':
              cryptoCard.spotPrice = this.priceFixer(v.data.rates.ADA);
              break;
            case 'DOT':
              cryptoCard.spotPrice = this.priceFixer(v.data.rates.DOT);
              break;
            case 'XLM':
              cryptoCard.spotPrice = this.priceFixer(v.data.rates.XLM);
              break;
            case 'DOGE':
              cryptoCard.spotPrice = this.priceFixer(v.data.rates.DOGE);
              break;
            case 'USDT':
              cryptoCard.spotPrice = this.priceFixer(v.data.rates.USDT);
              break;
            default:
              cryptoCard.spotPrice = 'check fetch';
          }

          // console.log(this.maketPrice);
        },
        error: (e) => console.error(e),
        complete: () => {
          // console.info('complete');
        },
      });
  }

  priceFixer(price: string): string {
    // console.log('price fixer hit');
    let test = '123e-1';

    console.log(price);

    let isE = price.includes('e');
    let left: number;
    let power: number;

    if (isE) {
      console.log('isE hit');
      let priceArray = price.split('e');
      left = +priceArray[0];

      let powerR = priceArray[1].slice(1);
      power = +powerR;
      let forReturn = 1 / left;
      power = Math.pow(10, power);
      return (forReturn * power).toString();
      // console.log(left + power);
    } else {
      console.log('elseE hit');
      console.log(`Left side ${price} `);

      return (1 / +price).toString();
    }

    // let atE = isE ? test.indexOf('e') : 0;
    // // console.log(atE);

    // let right = test.slice(atE);
    // // console.log(right);

    // console.log(left);
    // let power = left[1].slice(1);

    // console.log(power);

    // console.log(forReturn * power);
  }
}
