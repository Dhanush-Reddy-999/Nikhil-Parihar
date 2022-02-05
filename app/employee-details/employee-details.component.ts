import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/Models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:Employee = new Employee(); 
  id!:number;
  constructor(private service:EmployeeService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.router.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe(data=> {
      this.employee=data;
    }, error=>console.log(error))
  }

  

}
