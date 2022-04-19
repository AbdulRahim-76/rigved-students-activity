import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotComponent } from './aot.component';

describe('AotComponent', () => {
  let component: AotComponent;
  let fixture: ComponentFixture<AotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
