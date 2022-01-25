import { User } from './../models/user';

export class LeaderboardEntry{
    user: User;
    value: number;
  
    constructor(
        user: User,
        value: number
    ) {
      this.user = user;
      this.value= value;
    }
}

  