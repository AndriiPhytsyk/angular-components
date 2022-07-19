import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsEmailComponent } from './reactive-forms-email.component';

describe('ReactiveFormsEmailComponent', () => {
  let component: ReactiveFormsEmailComponent;
  let fixture: ComponentFixture<ReactiveFormsEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormsEmailComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
