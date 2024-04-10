import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrantCaseManagementPage } from './grant-case-management.page';

describe('GrantCaseManagementPage', () => {
  let component: GrantCaseManagementPage;
  let fixture: ComponentFixture<GrantCaseManagementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GrantCaseManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
