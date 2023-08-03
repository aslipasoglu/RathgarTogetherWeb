import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserStorageService } from './user-storage.service';

const BASIC_URL = "http://localhost:8080/";
export const AUTH_HEADER = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
    private userStorageService: UserStorageService) { }

  register(data): Observable<any> {
    console.log(data);
    return this.http.post(BASIC_URL + "api/user", data);
  }

  login(email: string, password: string): Observable<any> {
    const user = { email, password}
    console.log(user);
    return this.http.post(BASIC_URL + "login", user);
  }

  updateUserDetails(data): Observable<any> {
    console.log(data);
    return this.http.put(BASIC_URL + `api/user/${UserStorageService.getUserId()}`, data);
  }

  log(message: string): void {
    console.log(`User Auth Service: ${message}`);
  }

  getUserById(): Observable<any> {
    return this.http.get(BASIC_URL + `api/user/${UserStorageService.getUserId()}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(BASIC_URL + `api/user/all`);
  }

  deleteUser(userId: number){
    return this.http.delete(BASIC_URL+ `api/user/${userId}`, {
      responseType: 'text'
    });
  }


  handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}