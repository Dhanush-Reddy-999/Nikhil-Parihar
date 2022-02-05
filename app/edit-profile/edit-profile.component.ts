import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificates } from 'src/Models/certificates';
import { Employee } from 'src/Models/employee';
import { Skills } from 'src/Models/skills';
import { CertificatesService } from '../certificates.service';
import { EmployeeService } from '../employee.service';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  employeeId!:number;
  employee:Employee=new Employee(); 
  skill:Skills= new Skills();
  certificate:Certificates= new Certificates();
  msg!:string;
  skillMsg!:string;
  certificateMsg!:string;
  constructor(private service:EmployeeService,private route:ActivatedRoute,private router:Router,
    private skillsService:SkillsService, private certificateService:CertificatesService) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    this.getEmployee();
  }

  getEmployee() {
    this.service.getEmployeeById(this.employeeId).subscribe(data=> {
      this.employee=data;
    })
  }

  onSubmit() {
    this.service.updateEmployee(this.employeeId,this.employee).subscribe(data=> {
      console.log(data);
      this.msg="updated Successfully";
    },error=> {
      this.msg="Phone No already taken, please check is it correct";
    });
    
  }

  onSubmitCertificate() {
    this.certificateService.addCertificateToEmployee(this.certificate,this.employeeId).subscribe(data=> {
      console.log(data);
      if(data==null) {
        this.certificateMsg="Certificate already added";
      } else {
        this.certificateMsg="";
      }
      this.getEmployee();
    })
  }

  onSubmitSkill() {
    this.skillsService.addSkillToEmployee(this.skill,this.employeeId).subscribe(data=> {
      console.log(data);
      if(data==null) {
        this.skillMsg="Skill already added";
      } else {
        this.skillMsg="";
      }
      this.getEmployee();
    })
  }


}
