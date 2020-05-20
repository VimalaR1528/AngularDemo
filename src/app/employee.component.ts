import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';
 

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  username:string;
  un:string;
  msg:string;
  constructor(private actRout:ActivatedRoute,private empServ:EmployeeService) { }
 
  ngOnInit(): void {   

    this.msg= this.empServ.serviceFun();
      this.username=localStorage.getItem("user");
      this.un=this.actRout.snapshot.params["uname"];
  }

  email=new FormControl(' ');

  updateEmail(){
    this.email.setValue("Tharun@hexa.com");
  }
 
  empForm=new FormGroup({
    eid:new FormControl(null,[Validators.required,Validators.minLength(4)]),
    ename:new FormControl(null,Validators.required)
  })

  empfun(){    
    console.log("successful");
  }
}
