import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../services/auth.service';
import { HobbyGroupService } from '../services/hobby-group.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  isSpinning = false;
  id: any = this.activatedroute.snapshot.params['id'];

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private notification: NzNotificationService,
    private router: Router,
    private eventService: EventService
  ) { }

  validateForm!: FormGroup;


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      body: [null, [Validators.required]],
      date: [null, [Validators.required]],
    });
  }



  submitForm(): void {
    console.log(this.validateForm.valid);
    console.log(this.validateForm);
    if (this.validateForm.valid) {
      console.log("In function");
      this.isSpinning = true;
      const data = this.validateForm.value;
      data.hobbyGroupId = this.id;
      this.eventService.createEvent(data).subscribe((res) => {
        this.isSpinning = false;
        if (res.id != null) {
          this.notification
            .success(
              'SUCCESS',
              `Event Created Successfully!!!`,
              { nzDuration: 5000 }
            );
          this.router.navigateByUrl(`/view-hobby-group/${this.id}`);
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
        this.isSpinning = false;

      });
    } else {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

}
