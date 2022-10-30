import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../model/soft-skills';

@Injectable({
  providedIn: 'root'
})
export class SoftService {
  skillsURL = 'http://localhost:9090/sskill/';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<SoftSkill[]>{
    return this.httpClient.get<SoftSkill[]>(this.skillsURL + 'lista');
  }

  public detail(id: number): Observable<SoftSkill>{
    return this.httpClient.get<SoftSkill>(this.skillsURL + `detail/${id}`);
  }

  public save(skill: SoftSkill): Observable<any>{
    return this.httpClient.post<any>(this.skillsURL + 'create', skill);
  }

  public update(id: number, skill: SoftSkill): Observable<any>{
    return this.httpClient.put<any>(this.skillsURL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.skillsURL + `delete/${id}`);
  }
}