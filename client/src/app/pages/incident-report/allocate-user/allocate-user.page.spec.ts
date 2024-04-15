import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllocateUserPage } from './allocate-user.page';

describe('AllocateUserPage', () => {
  let component: AllocateUserPage;
  let fixture: ComponentFixture<AllocateUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllocateUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
