import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/Models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  msg!:string;
  success!:string;
  employee:Employee = new Employee();
  
  constructor(private service:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.employee);
    this.registerEmployee(); 
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  registerEmployee() {
    this.service.createEmployee(this.employee).subscribe(data=> {
      console.log(data);
      this.success="Registered Successfully"
      this.msg="";
    },error=>{console.log(error); 
    this.msg="Please try another Email or PhoneNo"}
    );
  }
}
