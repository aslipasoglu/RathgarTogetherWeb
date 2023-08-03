import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient,
    private userStorageService: UserStorageService) { }

  createEvent(data): Observable<any> {
    console.log(data);
    return this.http.post(BASIC_URL + "api/event", data);
  }

  joinEvent(eventId): Observable<any> {
    const memberId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/event/${eventId}/member/${memberId}`);
  }
}
