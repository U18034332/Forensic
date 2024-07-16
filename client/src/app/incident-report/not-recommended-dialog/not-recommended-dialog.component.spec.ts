import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRecommendedDialogComponent } from './not-recommended-dialog.component';

describe('NotRecommendedDialogComponent', () => {
  let component: NotRecommendedDialogComponent;
  let fixture: ComponentFixture<NotRecommendedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotRecommendedDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotRecommendedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
