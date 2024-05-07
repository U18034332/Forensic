import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsStoragePage } from './ps-storage.page';

describe('PsStoragePage', () => {
  let component: PsStoragePage;
  let fixture: ComponentFixture<PsStoragePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PsStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
