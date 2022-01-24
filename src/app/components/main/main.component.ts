import { UserService } from './../../services/user.service';
import { cust, Wallet } from './../../models/user';
import { PersistService } from './../../services/persist.service';
import { TradePriceService } from './../../services/trade-price.service';
import { CryptoCard } from './../../models/CryptoCard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientMessage } from 'src/app/models/client-message';

// import { coinurl } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  bitcoin = 'assets/bitcoin-btc-logo.png';
  cardano = 'assets/cardano-ada-logo.png';
  ethereum =
    'assets/png-transparent-ethereum-cryptocurrency-blockchain-bitcoin-logo-bitcoin-angle-triangle-logo.png';
  litecoin = 'assets/image.png';
  polkadot = 'assets/image (1).png';
  bitcoinCash = 'assets/image (2).png';
  Stellar = 'assets/image (3).png';
  DogeCoin = 'assets/image (4).png';
  Tether = 'assets/image (5).png';

  cryptos: CryptoCard[] = [];

  coins: string[] = ['BTC', 'ETH', 'LTC', 'ADA', 'DOT', 'XLM', 'DOGE', 'USDT'];

  public BTC = 'BTC';
  public amount: string;
  //public wallet = new Wallet('','');
  // coins: string[] = ['BTC'];
  //public something: any = {"BTC"}
  coinAmount: Map<string, string> = new Map();

  coinMap = {
    BTC: '',
    ETH: '',
    LTC: '',
    ADA: '',
    DOT: '',
    XLM: '',
    DOGE: '',
    USDT: '',
  };
  public clientMessage = new ClientMessage('')

  public obj = new cust (0, '', 0)

  constructor(
    private cryptoCard: CryptoCard,
    private tradePriceService: TradePriceService,
    private pre: PersistService,
    private user: UserService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    // let BTC = new CryptoCard('BTC');
    // console.log(BTC); // logs out with name 'Bitcoin' as expected
    // this.cryptos.push(BTC);
    this.setCryptos();
    this.getId();
    this.popmap();
    console.log('refreshed');

    this.inits();
  }

  inits() {
    // setInterval(this.ngOnInit, 500);
  }

  setCryptos() {
    // this.coins.forEach((coin) => this.cryptos.push(new CryptoCard(coin)));
    this.coins.forEach((coin) => {
      let card: CryptoCard = new CryptoCard(this.tradePriceService);
      card.makeCryptoCard(coin);
      this.cryptos.push(card);
    });

    // let BTC = new CryptoCard('BTC');
    // console.log(BTC); // logs out with name 'Bitcoin' as expected
    // this.cryptos.push(BTC);
    // console.log('setCryptos()');

    // this.cryptoCard.tradePrice('buy');
  }

  getId(): number {
    let temp = this.pre.get('1');
    temp = temp.id
    console.log(temp);
    return temp;
  }

  buy(code: string): void {
   let temp = this.getId();
   this.obj.userId = temp
   this.obj.assetName = code;
   console.log(this.obj)
   this.user.buycrypto(this.obj)
    .subscribe(
      data => {this.clientMessage.message = `Purchase complete`, this.pre.set('1',data), this.Router.navigate(['/wallet'])},
      error => this.clientMessage.message = `Something went wrong. Error: ${error}`
    )
  }

  sell(code: string): void {
  let temp = this.getId();
   this.obj.userId = temp
   this.obj.assetName = code;
   console.log(this.obj)
   this.user.sellcrypto(this.obj)
    .subscribe(
      data => {this.clientMessage.message = `Purchase complete`,  this.pre.set('1',data), this.Router.navigate(['/wallet'])},
      error => this.clientMessage.message = `Something went wrong. Error: ${error}`
    )
  }

  popmap() {
    for (let i = 0; i < this.coins.length; i++) {
      this.coinAmount.set(this.coins[i], '');
    }
  }
}
