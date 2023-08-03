import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from './user-storage.service';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class HobbyGroupService {

  constructor(private http: HttpClient,
    private userStorageService: UserStorageService) { }

  createHobbyGroup(data): Observable<any> {
    data.owner = UserStorageService.getUserId();
    console.log(data);
    return this.http.post(BASIC_URL + "api/hobbyGroup", data);
  }

  getAllHobbyGroup(): Observable<any> {
    return this.http.get(BASIC_URL + "api/hobbyGroup");
  }

  getMyHobbyGroups(): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/hobbyGroup/user/${userId}`);
  }

  getMyHobbyGroupById(id): Observable<any> {
    return this.http.get(BASIC_URL + `api/hobbyGroup/${id}`);
  }

  joinHobbyGroup(groupId): Observable<any> {
    const memberId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/hobbyGroup/${groupId}/member/${memberId}`);
  }

  createComment(data): Observable<any> {
    data.userId = UserStorageService.getUserId();
    console.log(data);
    return this.http.post(BASIC_URL + "api/comment", data);
  }
}
