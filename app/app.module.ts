import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import {HttpClientModule} from '@angular/common/http';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { RegistrationComponent } from './registration/registration.component'
import { FormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployerDashboardComponent,
    RegistrationComponent,
    EmployeeDetailsComponent,
    LoginPageComponent,
    SkillsListComponent,
    CertificateListComponent,
    ProfileComponent,
    NavComponent,
    HomeComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
