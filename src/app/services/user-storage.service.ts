import { Injectable } from '@angular/core';

const TOKEN = 'RathgarTogether_token';
const USER = 'RathgarTogether_user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

 
  constructor() { }

  public saveUser(user): void {
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getUser(): any {
    return JSON.parse(localStorage.getItem(USER));
  }


  static getUserId(): string {
    const user = this.getUser();
    if (user == null) { return ''; }
    return user.id;
  }

  static getUserRole(): string {
    const user = this.getUser();
    if (user == null) { return ''; }
    return user.role;
  }

  static isAdminLoggedIn(): boolean {
    const role: string = this.getUserRole();
    return role == 'ADMIN';
  }

  static isUserLoggedIn(): boolean {
    const role: string = this.getUserRole();
    return role == 'USER';
  }


  static signOut(): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }


}

