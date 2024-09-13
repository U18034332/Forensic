import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmsSelectionDialogComponent } from './firms-selection-dialog.component';

describe('FirmsSelectionDialogComponent', () => {
  let component: FirmsSelectionDialogComponent;
  let fixture: ComponentFixture<FirmsSelectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirmsSelectionDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirmsSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
