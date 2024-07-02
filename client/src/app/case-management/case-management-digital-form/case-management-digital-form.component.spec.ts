import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseManagementDigitalFormComponent } from './case-management-digital-form.component';

describe('CaseManagementDigitalFormComponent', () => {
  let component: CaseManagementDigitalFormComponent;
  let fixture: ComponentFixture<CaseManagementDigitalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseManagementDigitalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseManagementDigitalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
