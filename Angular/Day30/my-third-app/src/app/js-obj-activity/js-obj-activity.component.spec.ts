import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsObjActivityComponent } from './js-obj-activity.component';

describe('JsObjActivityComponent', () => {
  let component: JsObjActivityComponent;
  let fixture: ComponentFixture<JsObjActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsObjActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsObjActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
