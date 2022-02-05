import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificates } from 'src/Models/certificates';
import { Employee } from 'src/Models/employee';
import { Skills } from 'src/Models/skills';
import { CertificatesService } from '../certificates.service';
import { EmployeeService } from '../employee.service';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-employer-dashboard',
  templateUrl: './employer-dashboard.component.html',
  styleUrls: ['./employer-dashboard.component.css']
})
export class EmployerDashboardComponent implements OnInit {
  skill:Skills=new Skills();
  certificate:Certificates=new Certificates();
  e:Employee=new Employee();
  employees!: Array<Employee>;
  pageNo:number=0;
  pages = new Array();
  pageSize:number=0;
  employeeListSize!:number;
  skillsListSize!:number;
  certificatesListSize!:number;
  index:number=this.pageNo*10;
  msg:boolean=false;
  employeeId!:number;
  showHome!:false;
  constructor(private employeeService:EmployeeService, private router:Router,private route:ActivatedRoute,
              private skillsService:SkillsService,private certificateService:CertificatesService) { }

  ngOnInit(): void {
    this.employeeId=this.route.snapshot.params['employeeId'];
    this.getEmployeeListSize();
    this.getSkillsListSize();
    this.getCertificateListSize();
    this.getEmployees();
  }


  getSkillsListSize() {
    this.skillsService.getSkillsListSize().subscribe(data=> {
      this.skillsListSize=data;
    })
  }

  getCertificateListSize() {
    this.certificateService.getCertificatesListSize().subscribe(data=> {
      this.certificatesListSize=data;
    })
  }

  getEmployeeListSize() {
    this.employeeService.getEmployeeListSize().subscribe(data=> {
      this.employeeListSize=data;
      console.log(this.employeeListSize);
      if(this.employeeListSize%10!=0) {
        this.pageSize+=1;
        this.employeeListSize-=this.employeeListSize%10;
      }
      this.pageSize+=this.employeeListSize/10;
      console.log(this.pageSize);
      for(let i=1;i<=this.pageSize;i++) {
        this.pages.push(i);
      }
      console.log(this.pages);
    })
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
  getEmployeeDetails(id:number) {
    this.router.navigate([this.employeeId,'details',id]);
  }

  getEmployees() {
    this.employeeService.getEmployerDashboardList(this.pageNo).subscribe(data => {
      this.employees=data;
      console.log(data);
    })
  }

  registerEmployee() {
    this.employeeService.createEmployee(this.e).subscribe(data=> {
      console.log(data);
    })

  }

  onSubmitEmployee() {
    this.registerEmployee();
  }

  registerSkill() {
    this.skillsService.createSkill(this.skill).subscribe(data=> {
      console.log(data);
    },error=> console.log(error))
  }

  onSubmitSkill() {
    console.log("We are here");
    this.registerSkill();
  }

  registerCertificate() {
    this.certificateService.createCertificate(this.certificate).subscribe(data=> {
      console.log(data);
    })
  }

  onSubmitCertificate() {
    this.registerCertificate();
  }

  deleteEmployee(id:number) {
    this.employeeService.deleteEmployeeById(id).subscribe(data=> {
      console.log(data);
      this.getEmployees();
      
    });
  }
  
}
