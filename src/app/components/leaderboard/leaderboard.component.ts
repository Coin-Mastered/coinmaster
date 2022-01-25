import { Component, OnInit } from '@angular/core';
import { LeaderboardEntry } from 'src/app/models/LeaderboardEntry';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  entries: LeaderboardEntry[] = []

  constructor(private leaderboardService: LeaderboardService) { }

  ngOnInit(): void {
    this.setEntries();
  }

  setEntries() {
    this.leaderboardService.getLeaderboard().subscribe(
      (entries) => this.entries = entries
    )
  }
}
