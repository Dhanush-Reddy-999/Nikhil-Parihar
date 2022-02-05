import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/Models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://localhost:8080/api/employee';
  constructor(private http:HttpClient) { }
  getEmployeesList(page:number):Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/${page}`);
  }

  getEmployerDashboardList(page:number):Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/recentLogin/${page}`);
  }

  createEmployee(employee:Employee):Observable<Object> {
    return this.http.post(`${this.baseUrl}`,employee);
  }

  getEmployeeById(id:number):Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/get/${id}`);
  }

  getEmployeeListSize():Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/size`);
  }

  updateEmployee(id:number,employee:Employee):Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`,employee);
  }

  deleteEmployeeById(id:number):Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
