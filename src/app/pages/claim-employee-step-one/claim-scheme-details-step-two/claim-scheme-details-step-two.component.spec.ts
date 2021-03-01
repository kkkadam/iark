import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimSchemeDetailsStepTwoComponent } from './claim-scheme-details-step-two.component';

describe('ClaimSchemeDetailsStepTwoComponent', () => {
  let component: ClaimSchemeDetailsStepTwoComponent;
  let fixture: ComponentFixture<ClaimSchemeDetailsStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimSchemeDetailsStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimSchemeDetailsStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
