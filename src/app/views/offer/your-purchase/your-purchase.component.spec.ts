import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPurchaseComponent } from './your-purchase.component';

describe('YourPurchaseComponent', () => {
  let component: YourPurchaseComponent;
  let fixture: ComponentFixture<YourPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
