import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BleachComponent } from './bleach.component';

describe('BleachComponent', () => {
  let component: BleachComponent;
  let fixture: ComponentFixture<BleachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BleachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BleachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
