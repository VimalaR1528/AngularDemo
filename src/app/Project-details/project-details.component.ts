import { Component, OnInit } from '@angular/core';
import { ProjectDetailsService } from './project-details.service';
import { ProjectDetails } from './ProjectDetails';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  pserv:ProjectDetails;
  proj:ProjectDetails;
  
  constructor(private projectserv:ProjectDetailsService) { }

  ngOnInit(): void {
    this.projectserv.projectHttpService()
    .subscribe(value=>{
      this.pserv=value,console.log(this.pserv)},(err:HttpErrorResponse)=>
        {console.log(err.message)
    });
  }
  projectFun(ProjectForm){
     
    this.projectserv.postFun(ProjectForm.value).subscribe(d=>{this.proj=d,console.log(ProjectForm.value);});
  }
}
