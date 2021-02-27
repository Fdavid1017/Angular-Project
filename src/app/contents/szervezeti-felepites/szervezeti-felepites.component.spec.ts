import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzervezetiFelepitesComponent } from './szervezeti-felepites.component';

describe('SzervezetiFelepitesComponent', () => {
  let component: SzervezetiFelepitesComponent;
  let fixture: ComponentFixture<SzervezetiFelepitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzervezetiFelepitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzervezetiFelepitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
