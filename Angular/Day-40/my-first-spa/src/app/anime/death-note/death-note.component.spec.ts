import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathNoteComponent } from './death-note.component';

describe('DeathNoteComponent', () => {
  let component: DeathNoteComponent;
  let fixture: ComponentFixture<DeathNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
