import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
 // templateUrl: './parent.component.html',
 template:`
 {{message}}<br>
 From ViewChild{{msg}}<br>
 <app-child ></app-child>
 `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit {

  parentMsg:string="Parent component msg here...";
  public message="";
  msg:string;

  @ViewChild(ChildComponent) child;
  constructor() { }
  ngAfterViewInit(): void {
    this.msg=this.child.childMsg;
  }

  ngOnInit(): void {
  }
//(childEvent)="message=$event" [parentData]="parentMsg"
}
