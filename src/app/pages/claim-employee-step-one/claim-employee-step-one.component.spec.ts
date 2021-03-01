import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimEmployeeStepOneComponent } from './claim-employee-step-one.component';

describe('ClaimEmployeeStepOneComponent', () => {
  let component: ClaimEmployeeStepOneComponent;
  let fixture: ComponentFixture<ClaimEmployeeStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimEmployeeStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimEmployeeStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
