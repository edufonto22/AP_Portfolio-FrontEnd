import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkill } from '../model/hard-skills';

@Injectable({
  providedIn: 'root'
})
export class HardService {
  skillsURL = 'http://localhost:9090/hskill/';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HardSkill[]>{
    return this.httpClient.get<HardSkill[]>(this.skillsURL + 'lista');
  }

  public detail(id: number): Observable<HardSkill>{
    return this.httpClient.get<HardSkill>(this.skillsURL + `detail/${id}`);
  }

  public save(skill: HardSkill): Observable<any>{
    return this.httpClient.post<any>(this.skillsURL + 'create', skill);
  }

  public update(id: number, skill: HardSkill): Observable<any>{
    return this.httpClient.put<any>(this.skillsURL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.skillsURL + `delete/${id}`);
  }
}