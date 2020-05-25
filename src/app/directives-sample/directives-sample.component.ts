import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-sample',
  templateUrl: './directives-sample.component.html',
  styleUrls: ['./directives-sample.component.css']
})
export class DirectivesSampleComponent implements OnInit {

  javaFullStack:string[]=["Java","Spring","Hibernate","Reactjs","Angular"];

  empName:string="vimalasd";

 
  people: any[] = [
    {      "name": "Raja","country": 'India'    },
    {      "name": "Michale","country": 'US'    },
    {      "name": "Chintan","country": 'Japan'    },
    
     ];
  constructor() { }

  ngOnInit(): void {
  }

}
