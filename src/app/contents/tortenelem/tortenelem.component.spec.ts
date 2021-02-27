import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortenelemComponent } from './tortenelem.component';

describe('TortenelemComponent', () => {
  let component: TortenelemComponent;
  let fixture: ComponentFixture<TortenelemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortenelemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TortenelemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
