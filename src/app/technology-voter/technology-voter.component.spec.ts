import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyVoterComponent } from './technology-voter.component';

describe('TechnologyVoterComponent', () => {
  let component: TechnologyVoterComponent;
  let fixture: ComponentFixture<TechnologyVoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyVoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
