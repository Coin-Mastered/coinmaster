import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistService {

  constructor() { }

  set(key: string, data: any): void {
    try{
      localStorage.setItem(key, JSON.stringify(data));
      console.log("at set")
    } catch (e){
      console.error('Error with local storage', e);

    }
  }

  get(key: string){
    try{
      return JSON.parse(localStorage.getItem(key));
      console.log("at get")
    } catch (e){
      console.error('Error retrieving data', e);
      return null;
    }
  }
}
