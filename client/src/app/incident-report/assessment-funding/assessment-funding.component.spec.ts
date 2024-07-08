import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentFundingComponent } from './assessment-funding.component';

describe('AssessmentFundingComponent', () => {
  let component: AssessmentFundingComponent;
  let fixture: ComponentFixture<AssessmentFundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentFundingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssessmentFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
