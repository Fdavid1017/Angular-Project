import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightHalfComponent } from './right-half.component';

describe('RightHalfComponent', () => {
  let component: RightHalfComponent;
  let fixture: ComponentFixture<RightHalfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightHalfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
