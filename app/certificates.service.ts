import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificates } from 'src/Models/certificates';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  baseUrl = 'http://localhost:8080/api/certificate';
  constructor(private http:HttpClient) { }

  getCertificatesListSize():Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/size`);
  }

  getCertificateList(page:number):Observable<Certificates[]> {
    return this.http.get<Certificates[]>(`${this.baseUrl}/${page}`);
  }

  createCertificate(c:Certificates):Observable<Object> {
    return this.http.post(`${this.baseUrl}`,c);
  }

  addCertificateToEmployee(c:Certificates,id:number):Observable<Object> {
    return this.http.post(`${this.baseUrl}/add/${id}`,c);
  }

}
