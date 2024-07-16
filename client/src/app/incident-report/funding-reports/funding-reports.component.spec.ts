import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingReportsComponent } from './funding-reports.component';

describe('FundingReportsComponent', () => {
  let component: FundingReportsComponent;
  let fixture: ComponentFixture<FundingReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundingReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundingReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
