import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/Models/employee';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost:8080/loginUser';
  constructor(private http:HttpClient) { }

  loginEmployee(employee:Employee):Observable<Object> {
    return this.http.post(`${this.baseUrl}`,employee);
  }

  getLoginEmployeeId(email:string,password:string):Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/${email}/${password}`)
  }
}
