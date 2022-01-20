import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { User } from '../models/user';
import { catchError, Observable, throwError } from 'rxjs';
import { awsUrl } from 'src/environments/environment';



//Need to make a url
const url = `${awsUrl}/users`;


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }


  // Find by username and check password
 /* public login(username:string, password:string){

    let req: any = {
      "username" : username,
      "password" : password
    }

    return this.http.post(`${awsUrl}insertloginmapping`, request, {responseType: 'text' as 'json'})


  }*/

  registerUser(user: User): Observable<User>{
    return this.http.post<User>(`${awsUrl}/add`, user, this.httpOptions)
      .pipe(catchError(this.handleError))
  }


private handleError(httpError: HttpErrorResponse){

  if (httpError.error instanceof ErrorEvent){
    console.log('An error occured: ', httpError.error.message)
  } else {
    console.error(`Backend returned code ${httpError.status},
    body was: ${httpError.error}`)
  }

  return throwError(() => Error('Something bad happened, please try again later'))

}



}
