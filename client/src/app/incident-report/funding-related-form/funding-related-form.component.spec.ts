import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingRelatedFormComponent } from './funding-related-form.component';

describe('FundingRelatedFormComponent', () => {
  let component: FundingRelatedFormComponent;
  let fixture: ComponentFixture<FundingRelatedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundingRelatedFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundingRelatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
