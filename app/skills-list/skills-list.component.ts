import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/Models/skills';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {

  skills!:Skills[];
  pageNo:number=0;
  pages:Array<number>= new Array();
  pageSize!:number;
  skillsSize!:number;
  index:number=this.pageNo*10;
  constructor(private service:SkillsService) { }
  ngOnInit(): void {
    this.pageSize=0;
    this.getSkillsSize();
    console.log("skills size"+this.skillsSize);
    this.getSkills();
  }

  getSkillsSize() {
    this.service.getSkillsListSize().subscribe(data=> {
      this.skillsSize=data;
      console.log("Size of the skills list:"+this.skillsSize)
      if(this.skillsSize%10!=0) {
        this.pageSize+=1;
        this.skillsSize-=this.skillsSize%10;
      }
      this.pageSize+=this.skillsSize/10;
      for(let i=1;i<=this.pageSize;i++) {
        this.pages.push(i);
      }
    });
  }

  pagination() {
    let tempres:number=this.skillsSize%10;
    console.log("tempres: "+tempres);
    if(tempres>0) {
      this.pageSize+=1;
      this.skillsSize-=tempres;
    }
    this.pageSize+=this.skillsSize/10;
    console.log(this.pageSize+"is the size of page");
    for(let i=1;i<this.pageSize;i++) {
      this.pages.push(i);
    }
  }

  getSkills() {
    this.service.getSkillsList(this.pageNo).subscribe(data=> {
      this.skills=data;
      console.log(this.skills);
    })
  }
  setPage(p:number,event:any) {
    event.preventDefault();
    this.pageNo=p;
    this.index=this.pageNo*10;
    this.getSkills();
  }

  setNextPage(event:any) {
      if(this.pageNo<this.pageSize) {
        event.preventDefault();
        this.pageNo+=1;
        this.index=this.pageNo*10;
        this.getSkills();
      }
  }

  setPreviousPage(event:any) {
    if(this.pageNo>0) {
      event.preventDefault();
      this.pageNo-=1;
      this.index=this.pageNo*10;
      this.getSkills();
    }

  }
}
