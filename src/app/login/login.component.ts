import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../services/auth.service';
import { UserStorageService } from '../services/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  validateForm!: FormGroup;
  isSpinning = false;

  submitForm(): void {
    this.isSpinning = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.authService.login(this.validateForm.get(['email'])!.value, this.validateForm.get(['password'])!.value).subscribe(res => {
      if(res != null){
        this.userStorageService.saveUser(res);
        if (UserStorageService.isAdminLoggedIn()) {
          this.router.navigateByUrl('admin-dashboad');
        } else if (UserStorageService.isUserLoggedIn()) {
          this.router.navigateByUrl('user-dashbaord');
        }
      }else{
        this.notification
        .error(
          'ERROR',
          `Bad credentials`,
          { nzDuration: 5000 }
        )
      }

      this.isSpinning = false;
      console.log("res", res);
    }, error => {
      console.log("errorr", error);
        this.notification
          .error(
            'ERROR',
            `Bad credentials`,
            { nzDuration: 5000 }
          )
      this.isSpinning = false;

    })

  }

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private router: Router,
    private userStorageService: UserStorageService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}