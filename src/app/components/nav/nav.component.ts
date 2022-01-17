import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = 'CoinMasters'
  image = 'assets/templogo.png'

  constructor() { }

  ngOnInit(): void {
  }

}
