import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/Models/employee';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  employee:Employee = new Employee();
  msg!:string;
  employeeId!:number;
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employee);
    this.loginEmployee();
    this.getLoginEmployeeId();
  }

  loginEmployee() {
    this.service.loginEmployee(this.employee).subscribe(data=> {
      console.log(data.valueOf.toString);
      this.goToProfilePage();
    },error=>{console.log(error);
    this.msg="Bad Credentials";}
    );
  }

  getLoginEmployeeId() {
    this.service.getLoginEmployeeId(this.employee.email,this.employee.password).subscribe(data=> {
      console.log(data);
      this.employeeId=data;
      console.log(this.employeeId);
    })
  }

  goToProfilePage() {
    this.router.navigate([this.employeeId,'profile']);
  }
}
