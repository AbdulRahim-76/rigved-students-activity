import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonSlayerComponent } from './demon-slayer.component';

describe('DemonSlayerComponent', () => {
  let component: DemonSlayerComponent;
  let fixture: ComponentFixture<DemonSlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonSlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonSlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
