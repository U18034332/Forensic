import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReportPanelComponent } from './add-report-panel.component';

describe('AddReportPanelComponent', () => {
  let component: AddReportPanelComponent;
  let fixture: ComponentFixture<AddReportPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReportPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddReportPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
