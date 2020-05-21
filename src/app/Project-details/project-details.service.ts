import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import { ProjectDetails } from './ProjectDetails';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

   
  constructor(private httpser:HttpClient) { }

  projectHttpService():Observable<ProjectDetails>{
    return this.httpser.get<ProjectDetails>("http://localhost:3000/project");
  }

  postFun(ProjectForm):Observable<ProjectDetails>{    
    
    return this.httpser.post<ProjectDetails>("http://localhost:3000/project",ProjectForm);
  }
}
