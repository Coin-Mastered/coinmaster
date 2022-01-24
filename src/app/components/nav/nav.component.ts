import { LoginComponent } from './../login/login.component';
import {
  AfterViewInit,
  Component,
  DoCheck,
  Injectable,
  OnChanges,
  OnInit,
  SimpleChange,
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
export class NavComponent implements DoCheck {
  title = 'CoinMasters';
  image = 'assets/templogo.png';
  isLoggedIn: boolean = false;

  change = new SimpleChange(this.isLoggedIn, !this.isLoggedIn, true);

  constructor() {}
  ngDoCheck(): void {
    if (this.isLoggedIn) {
      console.log('user is looged in ' + this.isLoggedIn);
    } else {
      console.log('No user found ' + this.isLoggedIn);
    }
  }

  ngOnInit(): void {
    console.log(this.change);
  }

  setIsLoggeIn(isLogIn: boolean) {
    this.isLoggedIn = isLogIn;
  }
}
