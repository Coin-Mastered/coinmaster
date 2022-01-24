export class User{


  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  wallets: any[];


  constructor(

    firstName: string,
    lastName: string,
    username: string,
    password: string,
    email: string,
    wallets: Wallet[]
) {

    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.password = password
    this.email = email
    this.wallets = wallets
}
  }

  export class Wallet{

    assetName: string;
    amount: string;

    constructor(
      assetName: string,
      amount: string
    ){
      this.assetName = assetName
      this.amount = amount
    }

  }

  export class cust{
    amount: number;
    assetName: string;
    userId: number;

      constructor(
        amount: number,
        assetName: string,
        userId: number
      ){
        this.amount = amount
        this.assetName = assetName
        this.userId = userId
      }
  }


