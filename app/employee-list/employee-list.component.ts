import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/Models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeId!:number;
  employees!: Array<Employee>;
  pageNo:number=0;
  pages= new Array();
  pageSize:number=0;
  index:number=this.pageNo*10;
  employeeListSize!:number;
  constructor(private service:EmployeeService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployeeListSize();
    this.getEmployees();
    this.employeeId=this.route.snapshot.params['employeeId'];
  }

  getEmployeeDetails(id:number) {
    this.router.navigate([this.employeeId,'details',id]);
  }

  setPage(p:number,event:any) { 
    event.preventDefault();
    this.pageNo=p;
    this.index=this.pageNo*10;
    this.getEmployees();
  }

  setNextPage(event:any) {
      if(this.pageNo<2) {
        event.preventDefault();
        this.pageNo+=1;
        this.index=this.pageNo*10;
        this.getEmployees();
      }
  }

  setPreviousPage(event:any) {
    if(this.pageNo>0) {
      event.preventDefault();
      this.pageNo-=1;
      this.index=this.pageNo*10;
      this.getEmployees();
    }
  }

  getEmployees() {
    this.service.getEmployeesList(this.pageNo).subscribe(data=> {
       this.employees=data; 
       console.log(this.employees);
    });
  }

  getEmployeeListSize() {
    this.service.getEmployeeListSize().subscribe(data=> {
      this.employeeListSize=data;
      if(this.employeeListSize%10!=0) {
        this.pageSize+=1;
        this.employeeListSize-=this.employeeListSize%10;
      }
      this.pageSize+=this.employeeListSize/10;
      for(let i=1;i<=this.pageSize;i++) {
        this.pages.push(i);
      }
    })
  }
}
