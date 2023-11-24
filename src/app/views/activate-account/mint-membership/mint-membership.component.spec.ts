import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintMembershipComponent } from './mint-membership.component';

describe('MintMembershipComponent', () => {
  let component: MintMembershipComponent;
  let fixture: ComponentFixture<MintMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintMembershipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MintMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
