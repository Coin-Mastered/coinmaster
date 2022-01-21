export class User{

  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  wallet: any[];


  constructor(
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    email: string,
) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.password = password
    this.email = email
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
