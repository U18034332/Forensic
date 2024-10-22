import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRemoveConfirmationComponent } from './user-remove-confirmation.component';

describe('UserRemoveConfirmationComponent', () => {
  let component: UserRemoveConfirmationComponent;
  let fixture: ComponentFixture<UserRemoveConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRemoveConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRemoveConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
