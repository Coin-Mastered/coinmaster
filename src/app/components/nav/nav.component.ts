import { LoginComponent } from './../login/login.component';
import {
  Component,
  Injectable,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class NavComponent implements OnInit, OnChanges {
  title = 'CoinMasters';
  image = 'assets/templogo.png';
  isLoggedIn: boolean = false;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log(this.isLoggedIn);
  }

  setIsLoggeIn(isLogIn: boolean) {
    this.isLoggedIn = isLogIn;
  }
}
