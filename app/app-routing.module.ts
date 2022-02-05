import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SkillsListComponent } from './skills-list/skills-list.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:':employeeId/home',component:NavComponent},
  {path:':employeeId/dashboard',component:EmployerDashboardComponent},
  {path:'login',component:LoginPageComponent},
  {path:':employeeId/employees',component:EmployeeListComponent},
  {path:'register',component:RegistrationComponent},
  {path:':employeeId/details/:id',component:EmployeeDetailsComponent},
  {path:':employeeId/skills',component:SkillsListComponent},
  {path:':employeeId/certificates',component:CertificateListComponent},
  {path:':employeeId/profile',component:ProfileComponent},
  {path:':employeeId/editProfile',component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
