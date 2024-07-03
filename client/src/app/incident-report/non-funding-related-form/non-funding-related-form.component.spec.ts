import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFundingRelatedFormComponent } from './non-funding-related-form.component';

describe('NonFundingRelatedFormComponent', () => {
  let component: NonFundingRelatedFormComponent;
  let fixture: ComponentFixture<NonFundingRelatedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonFundingRelatedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonFundingRelatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
