import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetToggleComponent } from './fieldset-toggle.component';

describe('FieldsetToggleComponent', () => {
  let component: FieldsetToggleComponent;
  let fixture: ComponentFixture<FieldsetToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FieldsetToggleComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
