import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHealthProfileComponent } from './patient-health-profile.component';

describe('PatientHealthProfileComponent', () => {
  let component: PatientHealthProfileComponent;
  let fixture: ComponentFixture<PatientHealthProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientHealthProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientHealthProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
