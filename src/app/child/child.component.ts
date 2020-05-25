import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-child',
  //templateUrl: './child.component.html',
  template:`
  Parent to child Component: {{pdata}}
  <br>
  <button (click)="callEvent()">Send Event</button>

  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childMsg:string="Child msg here... for interaction";

  //@Input() parentData;
  @Input("parentData") pdata ;
  @Output() childEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  callEvent(){
    this.childEvent.emit("Data from child to Parent....");
  }

}
