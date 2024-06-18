import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantCaseManagementComponent } from './grant-case-management.component';

describe('GrantCaseManagementComponent', () => {
  let component: GrantCaseManagementComponent;
  let fixture: ComponentFixture<GrantCaseManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrantCaseManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrantCaseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
