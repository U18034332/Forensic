import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocManagementPage } from './doc-management.page';

describe('DocManagementPage', () => {
  let component: DocManagementPage;
  let fixture: ComponentFixture<DocManagementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DocManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
