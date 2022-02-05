import { Component, OnInit } from '@angular/core';
import { Certificates } from 'src/Models/certificates';
import { CertificatesService } from '../certificates.service';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent implements OnInit {

  certificates!:Certificates[];
  pageNo:number=0;
  pages = new Array();
  pageSize:number=0;
  certificateSize!:number;
  index:number=this.pageNo*10;
  constructor(private service:CertificatesService) { }

  ngOnInit(): void {
    this.getCertificateSize();
    this.getCertificates();
  }

  getCertificates() {
    this.service.getCertificateList(this.pageNo).subscribe(data=> {
      this.certificates=data;
    })
  }

  getCertificateSize() {
    this.service.getCertificatesListSize().subscribe(data=> {
      this.certificateSize=data;
      if(this.certificateSize%10 != 0) {
        this.pageSize+=1;
        this.certificateSize-=this.certificateSize%10;
      }
      this.pageSize+=this.certificateSize/10;
      for(let i=1;i<=this.pageSize;i++) {
        this.pages.push(i);
      }
    })
  }

  setPage(p:number,event:any) {
    event.preventDefault();
    this.pageNo=p;
    this.index=this.pageNo*10;
    this.getCertificates();
  }

  setNextPage(event:any) {
      if(this.pageNo<this.pageSize) {
        event.preventDefault();
        this.pageNo+=1;
        this.index= this.pageNo*10;
        this.getCertificates();
      }
  }

  setPreviousPage(event:any) {
    if(this.pageNo>0) {
      event.preventDefault();
      this.pageNo-=1;
      this.index= this.pageNo*10;
      this.getCertificates();
    }
  }
}
