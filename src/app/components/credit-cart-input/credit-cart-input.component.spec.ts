import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCartInputComponent } from './credit-cart-input.component';

describe('CreditCartInputComponent', () => {
  let component: CreditCartInputComponent;
  let fixture: ComponentFixture<CreditCartInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditCartInputComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCartInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
