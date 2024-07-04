import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantCaseManagementDigitalFormComponent } from './grant-case-management-digital-form.component';

describe('GrantCaseManagementDigitalFormComponent', () => {
  let component: GrantCaseManagementDigitalFormComponent;
  let fixture: ComponentFixture<GrantCaseManagementDigitalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrantCaseManagementDigitalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrantCaseManagementDigitalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
