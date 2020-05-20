import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginFun(loginform){
    console.log("login is successfull");
    console.log(loginform.value);
    this.uname=loginform.value.user;   
    console.log("Username   "+this.uname);
    localStorage.setItem("user",this.uname);
    if(this.uname=="Vimala"){
    this.router.navigate(["/empl",this.uname]);
    }else{
      console.log("ur credentials are not correct");
      this.router.navigate(["/login"]);
    }
    
  }
}
