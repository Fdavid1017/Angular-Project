import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArculatikezikonyvComponent } from './arculatikezikonyv.component';

describe('ArculatikezikonyvComponent', () => {
  let component: ArculatikezikonyvComponent;
  let fixture: ComponentFixture<ArculatikezikonyvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArculatikezikonyvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArculatikezikonyvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
