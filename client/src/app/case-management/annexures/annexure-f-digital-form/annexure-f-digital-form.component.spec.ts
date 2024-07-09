import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureFDigitalFormComponent } from './annexure-f-digital-form.component';

describe('AnnexureFDigitalFormComponent', () => {
  let component: AnnexureFDigitalFormComponent;
  let fixture: ComponentFixture<AnnexureFDigitalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnexureFDigitalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnexureFDigitalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
