import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddReportPage } from './add-report.page';

describe('AddReportPage', () => {
  let component: AddReportPage;
  let fixture: ComponentFixture<AddReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
