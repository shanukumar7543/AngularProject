import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySharesComponent } from './property-shares.component';

describe('PropertySharesComponent', () => {
  let component: PropertySharesComponent;
  let fixture: ComponentFixture<PropertySharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySharesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertySharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
