import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeOneComponent } from './episode-one.component';

describe('EpisodeOneComponent', () => {
  let component: EpisodeOneComponent;
  let fixture: ComponentFixture<EpisodeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
