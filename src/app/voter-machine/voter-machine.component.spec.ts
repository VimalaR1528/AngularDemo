import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterMachineComponent } from './voter-machine.component';

describe('VoterMachineComponent', () => {
  let component: VoterMachineComponent;
  let fixture: ComponentFixture<VoterMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
