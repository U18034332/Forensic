import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationDialogComponent } from './investigation-dialog.component';

describe('InvestigationDialogComponent', () => {
  let component: InvestigationDialogComponent;
  let fixture: ComponentFixture<InvestigationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestigationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
