import { Injectable } from '@angular/core';
// import { awsUrl } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { LeaderboardEntry } from '../models/LeaderboardEntry';
import { catchError, throwError, Observable } from 'rxjs';

let awsUrl = 'http://localhost:5000/';
const url = `${awsUrl}api/users/leaderboard`;

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  constructor(private http: HttpClient) {}

  getLeaderboard(): Observable<LeaderboardEntry[]> {
    return this.http
      .get<LeaderboardEntry[]>(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log('An error occurred: ', httpError.error.message);
    } else {
      console.error(`
        Backend returned code ${httpError.status},
        body was: ${httpError.error}
      `);
    }
    return throwError(
      () => new Error('Something really bad happened, please try again later')
    );
  }
}
