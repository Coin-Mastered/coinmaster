import { data } from './../models/buysell';
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
  constructor(private http: HttpClient) {}

  public fetchBuyPrice(code: string): Observable<BuySell> {
    console.log(`${urlC}${code}-USD/buy`);
    let response = this.http.get<BuySell>(`${urlC}${code}-USD/buy`);
    console.log(response);
    return response;
  }

  public async fetchBuyPriceAxios(code: string) {
    let response = await axios.get(`${urlC}${code}-USD/buy`);
    return response.data.amount;
  }
}
