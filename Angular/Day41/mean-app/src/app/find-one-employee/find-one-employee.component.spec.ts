import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOneEmployeeComponent } from './find-one-employee.component';

describe('FindOneEmployeeComponent', () => {
  let component: FindOneEmployeeComponent;
  let fixture: ComponentFixture<FindOneEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindOneEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOneEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
