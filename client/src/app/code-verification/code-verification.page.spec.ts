import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeVerificationPage } from './code-verification.page';

describe('CodeVerificationPage', () => {
  let component: CodeVerificationPage;
  let fixture: ComponentFixture<CodeVerificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CodeVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
