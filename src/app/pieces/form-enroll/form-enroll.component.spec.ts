import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnrollComponent } from './form-enroll.component';

describe('FormEnrollComponent', () => {
  let component: FormEnrollComponent;
  let fixture: ComponentFixture<FormEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEnrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
