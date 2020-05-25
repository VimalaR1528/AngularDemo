import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { createElementCssSelector } from '@angular/compiler';

@Component({
  selector: 'app-voter-machine',
  //templateUrl: './voter-machine.component.html',
  template:`
  <h1>The Application that uses  Angular for UI?</h1><br>
<h2>Agree:{{agree}}
Disagree:{{disagree}}</h2>

  <app-technology-voter *ngFor="let vot of voters" 
  [name]="vot" (voted)="onvoted($event)"></app-technology-voter>
  `,
  styleUrls: ['./voter-machine.component.css']
})
export class VoterMachineComponent implements OnInit,OnChanges,OnDestroy {

  agree=0;
  disagree=0;
  voters=["Google","Youtube","Netflix"];
  constructor() { }
  ngOnDestroy(): void {
    console.log("on destr");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("on chan");
  }

  ngOnInit(): void {
    console.log("on init");
  }
onvoted(val:boolean){
if(val){
this.agree++;
}else{
this.disagree++;
}
}
}
