import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  

@Component({
  selector: 'app-technology-voter',
  //templateUrl: './technology-voter.component.html',
  template:`
  Application:{{name}}
    <button (click)="vote(true)" [disabled]="dvote">Agree</button>
    <button (click)="vote(false)" [disabled]="dvote">DisAgree</button>
  `,
  styleUrls: ['./technology-voter.component.css']
})
export class TechnologyVoterComponent implements OnInit {

  @Input() name:string;
  @Output() voted=new EventEmitter<boolean>();
  dvote=false;

  constructor() { }

  ngOnInit(): void {
  }
  vote(ag:boolean){
    this.voted.emit(ag);
    this.dvote=true;
  }

}
