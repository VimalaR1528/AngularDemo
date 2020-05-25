import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  projectName:string="Airlines";
  dateOfJoin= new Date();
  salary=47654.887;
  grade=8;
  mark=[44,55,66,77,88,99];
  constructor() { }

  ngOnInit(): void {
  }

}
