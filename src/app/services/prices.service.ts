// import { HttpClient } from '@angular/common/http';

// ;
// import axios from 'axios';

// import { Data, crypto } from './../models/buysell';
// import { Injectable } from '@angular/core';
// import {  HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { catchError, Observable } from 'rxjs';
// import { BuySell } from '../models/buysell';

// const urlC: string = 'https://api.coinbase.com/v2/prices/';

// @Injectable({
//   providedIn: 'root',
// })
// export class PricesService {

//   private http: HttpClient;

//   static getSell(code: string) {
//     throw new Error('Method not implemented.');
//   }

//   constructor( private http: HttpClient){}

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json'})
//   }

//   getSell(code: string): Observable<crypto>{

//     return this.http.get<crypto>(`${urlC}${code}-USD/sell`)

//   }

// /*  private http: HttpClient;

//   constructor() {}

//   public fetchBuyPrice(code: string): string {
//     console.log('fetchBuyPrice called');
//     console.log(code);
//     console.log(urlC);
//     console.log(`${urlC}${code}-USD/buy`);

//     let amount: string = '0';

//     this.http.get<BuySell>(`${urlC}${code}-USD/buy`).subscribe((res) => {
//       // amount = res.data.amount;
//       console.log(res);
//     });
//     return amount;

//     // response.subscribe((data) => console.log(data));

//     // return response;

//   }

//   }*/

// }
