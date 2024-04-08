import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortalUsersPage } from './portal-users.page';

describe('PortalUsersPage', () => {
  let component: PortalUsersPage;
  let fixture: ComponentFixture<PortalUsersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PortalUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
