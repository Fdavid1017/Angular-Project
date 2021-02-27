import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KozoshivatalComponent } from './kozoshivatal.component';

describe('KozoshivatalComponent', () => {
  let component: KozoshivatalComponent;
  let fixture: ComponentFixture<KozoshivatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KozoshivatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KozoshivatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
