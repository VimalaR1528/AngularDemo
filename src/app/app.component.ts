import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`
  // Employee Name:<input [value]="empName" (input)='empName=$event.target.value'>
  // Employee Name:<input [(ngModel)]='empName'>
  // {{empName}}
  
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8pro';
  empName:string='Vimala';
  empId:number=31410;
  projectId:number[]=[12,23,44,55];
 employeeDetails:any=[
{eid:11,ename:'Anu',email:'anu@hexa.com'},
{eid:12,ename:'Aarthi',email:'aarthi@hexa.com'},
{eid:13,ename:'Swetha',email:'swetha@hexa.com'},
 ]
}
