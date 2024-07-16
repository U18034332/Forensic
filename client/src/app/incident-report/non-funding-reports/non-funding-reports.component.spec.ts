import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFundingReportsComponent } from './non-funding-reports.component';

describe('NonFundingReportsComponent', () => {
  let component: NonFundingReportsComponent;
  let fixture: ComponentFixture<NonFundingReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonFundingReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonFundingReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
