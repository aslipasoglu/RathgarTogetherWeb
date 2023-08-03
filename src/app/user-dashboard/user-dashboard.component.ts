import { Component } from '@angular/core';
import { HobbyGroupService } from '../services/hobby-group.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {

  hobbyGroups:any;

  constructor(private hobbyGroupService: HobbyGroupService,
    private notification: NzNotificationService,){}

  ngOnInit(): void {
    this.getAllHobbyGroup();
  }

  getAllHobbyGroup(){
    this.hobbyGroupService.getAllHobbyGroup().subscribe(res =>{
      this.hobbyGroups = res;
      console.log(this.hobbyGroups)
    });
  }

  joinHobbyGroup(groupId){
    this.hobbyGroupService.joinHobbyGroup(groupId).subscribe((res) => {
      if (res.id != null) {
        this.getAllHobbyGroup();
        this.notification
          .success(
            'SUCCESS',
            `Congratulations You Joined Group Successfully!!!`,
            { nzDuration: 5000 }
          );
      }
    }, error => {
      console.log("errorr", error);
        this.notification
          .error(
            'ERROR',
            `${error.error}`,
            { nzDuration: 5000 }
          )

    });
  }
}
