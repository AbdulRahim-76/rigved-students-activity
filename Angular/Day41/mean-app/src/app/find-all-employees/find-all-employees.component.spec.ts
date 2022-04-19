import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllEmployeesComponent } from './find-all-employees.component';

describe('FindAllEmployeesComponent', () => {
  let component: FindAllEmployeesComponent;
  let fixture: ComponentFixture<FindAllEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
