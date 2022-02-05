import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from 'src/Models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  baseUrl = 'http://localhost:8080/api/skills';
  constructor(private http:HttpClient) { }

  getSkillsListSize():Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/size`);
  }

  getSkillsList(page:number):Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.baseUrl}/${page}`);
  }

  createSkill(skill:Skills):Observable<Object> {
    return this.http.post(`${this.baseUrl}`,skill);
  }

  addSkillToEmployee(skill:Skills,employeeId:number):Observable<Object> {
    return this.http.post(`${this.baseUrl}/add/${employeeId}`,skill);
  }
}
