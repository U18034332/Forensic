import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkloadTableComponent } from './user-workload-table.component';

describe('UserWorkloadTableComponent', () => {
  let component: UserWorkloadTableComponent;
  let fixture: ComponentFixture<UserWorkloadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWorkloadTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWorkloadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
