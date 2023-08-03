import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  users:any;

  constructor(private authService: AuthService,
    private notification: NzNotificationService,){}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.authService.getAllUsers().subscribe(res =>{
      this.users = res;
      console.log(this.users);
    });
  }

  deleteUser(userId) {
    console.log(userId)
    this.authService.deleteUser(userId).subscribe(
      (response: string) => {
        this.getAllUsers();
        this.notification
        .success(
          'SUCCESS',
          `User Deleted Successfully!!!`,
          { nzDuration: 5000 }
        )
      },
      (error) => {
        console.error(error);
        this.notification
        .error(
          'ERROR',
          `${error.error.text}`,
          { nzDuration: 5000 }
        )
      }
    );
  }

}
