import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/Models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  employeeId!:number
  employee:Employee = new Employee();
  constructor(private service:EmployeeService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeId= this.route.snapshot.params['employeeId']
    this.getEmployeeyId();
  }


  getEmployeeyId() {
    this.service.getEmployeeById(this.employeeId).subscribe(data=> {
      this.employee=data;
    })
  }

}
