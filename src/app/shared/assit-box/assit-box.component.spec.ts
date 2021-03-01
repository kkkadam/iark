import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitBoxComponent } from './assit-box.component';

describe('AssitBoxComponent', () => {
  let component: AssitBoxComponent;
  let fixture: ComponentFixture<AssitBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssitBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssitBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
