import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarsulasokComponent } from './tarsulasok.component';

describe('TarsulasokComponent', () => {
  let component: TarsulasokComponent;
  let fixture: ComponentFixture<TarsulasokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarsulasokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarsulasokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
