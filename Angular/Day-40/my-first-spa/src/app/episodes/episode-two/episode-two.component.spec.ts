import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeTwoComponent } from './episode-two.component';

describe('EpisodeTwoComponent', () => {
  let component: EpisodeTwoComponent;
  let fixture: ComponentFixture<EpisodeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
