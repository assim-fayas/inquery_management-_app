import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnquiryComponent } from './new-enquiry.component';

describe('NewEnquiryComponent', () => {
  let component: NewEnquiryComponent;
  let fixture: ComponentFixture<NewEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEnquiryComponent]
    });
    fixture = TestBed.createComponent(NewEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
