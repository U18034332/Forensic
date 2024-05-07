import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseManagementPage } from './case-management.page';

describe('CaseManagementPage', () => {
  let component: CaseManagementPage;
  let fixture: ComponentFixture<CaseManagementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaseManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
