import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoStoreComponent } from './profile-info-store.component';

describe('ProfileInfoStoreComponent', () => {
  let component: ProfileInfoStoreComponent;
  let fixture: ComponentFixture<ProfileInfoStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInfoStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
