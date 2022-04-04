import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralActivityComponent } from './structural-activity.component';

describe('StructuralDemoComponent', () => {
  let component: StructuralActivityComponent;
  let fixture: ComponentFixture<StructuralActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
