import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoDeleteComponent } from './profile-info-delete.component';

describe('ProfileInfoDeleteComponent', () => {
  let component: ProfileInfoDeleteComponent;
  let fixture: ComponentFixture<ProfileInfoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
