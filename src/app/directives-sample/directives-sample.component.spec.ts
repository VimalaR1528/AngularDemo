import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesSampleComponent } from './directives-sample.component';

describe('DirectivesSampleComponent', () => {
  let component: DirectivesSampleComponent;
  let fixture: ComponentFixture<DirectivesSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
