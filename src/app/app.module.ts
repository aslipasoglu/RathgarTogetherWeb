import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { CreateHobbyGroupComponent } from './create-hobby-group/create-hobby-group.component';
import { ViewHobbyGroupComponent } from './view-hobby-group/view-hobby-group.component';
import { MyHobbyGroupsComponent } from './my-hobby-groups/my-hobby-groups.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    CreateHobbyGroupComponent,
    ViewHobbyGroupComponent,
    MyHobbyGroupsComponent,
    CreateEventComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
