import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgenciesAndFirmsPage } from './agencies-and-firms.page';

describe('AgenciesAndFirmsPage', () => {
  let component: AgenciesAndFirmsPage;
  let fixture: ComponentFixture<AgenciesAndFirmsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgenciesAndFirmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
