import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from '../services/user-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isUserLoggedIn: boolean = UserStorageService.isUserLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("user",UserStorageService.isUserLoggedIn())
    console.log("admin",UserStorageService.isAdminLoggedIn())
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isUserLoggedIn = UserStorageService.isUserLoggedIn();
        this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      }
    })
  }

  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }

}