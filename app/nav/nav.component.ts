import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/Models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  employeeId!:number;
  employee:Employee= new Employee();
  constructor(private route:ActivatedRoute, private service:EmployeeService) { }

  ngOnInit(): void {
    this.employeeId=this.route.snapshot.params['employeeId'];
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    this.service.getEmployeeById(this.employeeId).subscribe(data=> {
      console.log(data);
      this.employee=data;
    })
  }

}
