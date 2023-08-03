import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../services/auth.service';
import { HobbyGroupService } from '../services/hobby-group.service';

@Component({
  selector: 'app-create-hobby-group',
  templateUrl: './create-hobby-group.component.html',
  styleUrls: ['./create-hobby-group.component.scss']
})
export class CreateHobbyGroupComponent {

  isSpinning = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router,
    private hobbyGroupService: HobbyGroupService
  ) { }

  validateForm!: FormGroup;


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      speciality: [null, [Validators.required]],
    });
  }



  submitForm(): void {
    console.log(this.validateForm.valid);
    console.log(this.validateForm);
    if (this.validateForm.valid) {
      console.log("In function");
      this.isSpinning = true;
      this.hobbyGroupService.createHobbyGroup(this.validateForm.value).subscribe((res) => {
        this.isSpinning = false;
        if (res.id != null) {
          this.notification
            .success(
              'SUCCESS',
              `Hobby Group Created Successfully!!!`,
              { nzDuration: 5000 }
            );
          this.router.navigateByUrl('/user-dashbaord');
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
