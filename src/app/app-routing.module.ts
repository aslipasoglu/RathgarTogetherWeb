import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CreateHobbyGroupComponent } from './create-hobby-group/create-hobby-group.component';
import { ViewHobbyGroupComponent } from './view-hobby-group/view-hobby-group.component';
import { MyHobbyGroupsComponent } from './my-hobby-groups/my-hobby-groups.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'admin-dashboad', component: AdminDashboardComponent },
  { path: 'user-dashbaord', component: UserDashboardComponent },
  { path: 'create-hobby-group', component: CreateHobbyGroupComponent },
  { path: 'view-hobby-group/:id', component: ViewHobbyGroupComponent },
  { path: 'create-event/:id', component: CreateEventComponent },
  { path: 'my-hobby-groups', component: MyHobbyGroupsComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
