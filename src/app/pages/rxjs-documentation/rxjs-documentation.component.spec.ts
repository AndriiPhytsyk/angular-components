import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDocumentationComponent } from './rxjs-documentation.component';

describe('RxjsDocumentationComponent', () => {
  let component: RxjsDocumentationComponent;
  let fixture: ComponentFixture<RxjsDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsDocumentationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
