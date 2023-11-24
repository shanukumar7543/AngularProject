import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletConnectionModalComponent } from './wallet-connection-modal.component';

describe('WalletConnectionModalComponent', () => {
  let component: WalletConnectionModalComponent;
  let fixture: ComponentFixture<WalletConnectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletConnectionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletConnectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
