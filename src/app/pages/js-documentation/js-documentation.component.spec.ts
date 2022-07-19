import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDocumentationComponent } from './js-documentation.component';

describe('JsDocumentationComponent', () => {
  let component: JsDocumentationComponent;
  let fixture: ComponentFixture<JsDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsDocumentationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
