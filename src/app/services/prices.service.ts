import { Data } from './../models/buysell';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuySell } from '../models/buysell';
import axios from 'axios';

const urlC: string = 'https://api.coinbase.com/v2/prices/';

@Injectable({
  providedIn: 'root',
})
export class PricesService {
  private http: HttpClient;
  constructor() {}

  public fetchBuyPrice(code: string): string {
    console.log('fetchBuyPrice called');
    console.log(code);
    console.log(urlC);
    console.log(`${urlC}${code}-USD/buy`);

    let amount: string = '0';

    this.http.get<BuySell>(`${urlC}${code}-USD/buy`).subscribe((res) => {
      // amount = res.data.amount;
      console.log(res);
    });
    return amount;

    // response.subscribe((data) => console.log(data));

    // return response;
  }
}
