import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentNonFundingComponent } from './assessment-non-funding.component';

describe('AssessmentNonFundingComponent', () => {
  let component: AssessmentNonFundingComponent;
  let fixture: ComponentFixture<AssessmentNonFundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentNonFundingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssessmentNonFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
