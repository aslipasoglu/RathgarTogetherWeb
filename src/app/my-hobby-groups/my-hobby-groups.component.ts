import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HobbyGroupService } from '../services/hobby-group.service';

@Component({
  selector: 'app-my-hobby-groups',
  templateUrl: './my-hobby-groups.component.html',
  styleUrls: ['./my-hobby-groups.component.scss']
})
export class MyHobbyGroupsComponent {

  hobbyGroups:any;

  constructor(private hobbyGroupService: HobbyGroupService,
    private notification: NzNotificationService,){}

  ngOnInit(): void {
    this.getAllHobbyGroup();
  }

  getAllHobbyGroup(){
    this.hobbyGroupService.getMyHobbyGroups().subscribe(res =>{
      this.hobbyGroups = res;
      console.log(this.hobbyGroups)
    });
  }

  // joinHobbyGroup(groupId){
  //   this.hobbyGroupService.joinHobbyGroup(groupId).subscribe((res) => {
  //     if (res.id != null) {
  //       this.getAllHobbyGroup();
  //       this.notification
  //         .success(
  //           'SUCCESS',
  //           `Congratulations You Joined Group Successfully!!!`,
  //           { nzDuration: 5000 }
  //         );
  //     }
  //   }, error => {
  //     console.log("errorr", error);
  //       this.notification
  //         .error(
  //           'ERROR',
  //           `${error.error}`,
  //           { nzDuration: 5000 }
  //         )

  //   });
  // }
}
