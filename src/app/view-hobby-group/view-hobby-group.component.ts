import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HobbyGroupService } from '../services/hobby-group.service';
import { ActivatedRoute } from '@angular/router';
import { UserStorageService } from '../services/user-storage.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-view-hobby-group',
  templateUrl: './view-hobby-group.component.html',
  styleUrls: ['./view-hobby-group.component.scss']
})
export class ViewHobbyGroupComponent {

  id: any = this.activatedroute.snapshot.params['id'];
  loggedInUserId: any = UserStorageService.getUserId();
  hobbyGroup:any;
  inputValue?: string;
  comments: any;
  eventList: any;

  constructor(private hobbyGroupService: HobbyGroupService,
    private notification: NzNotificationService,
    private activatedroute: ActivatedRoute,
    private eventService: EventService,){}

  ngOnInit(): void {
    this.getHobbyGroup();
  }

  getHobbyGroup(){
    this.hobbyGroupService.getMyHobbyGroupById(this.id).subscribe(res =>{
      this.hobbyGroup = res.hobbyGroup;
      this.comments = res.commentList;
      this.eventList = res.eventList;
      console.log(res)
    });
  }

  addComment(){
    if(this.inputValue!=null){
      const data = {
        body : this.inputValue,
        hobbyGroupId : this.id
      }
      this.hobbyGroupService.createComment(data).subscribe(res =>{
        if (res.id != null) {
          this.getHobbyGroup();
          this.inputValue = null;
          this.notification
            .success(
              'SUCCESS',
              `Comment Added Successfully!!!`,
              { nzDuration: 5000 }
            );
        } else {
          this.notification
            .error(
              'ERROR',
              `${res.message}`,
              { nzDuration: 5000 }
            )
        }
      }, error => {
        console.log("errorr", error);
        if (error.status == 406) {
          this.notification
            .error(
              'ERROR',
              `${error.error}`,
              { nzDuration: 5000 }
            )
        }

      });
  }
  }

  joinEvent(event){
    this.eventService.joinEvent(event).subscribe((res) => {
      if (res.id != null) {
        this.getHobbyGroup();
        this.notification
          .success(
            'SUCCESS',
            `Congratulations You Joined Event Successfully!!!`,
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
