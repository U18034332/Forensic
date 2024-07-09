import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureEDigitalFormComponent } from './annexure-e-digital-form.component';

describe('AnnexureEDigitalFormComponent', () => {
  let component: AnnexureEDigitalFormComponent;
  let fixture: ComponentFixture<AnnexureEDigitalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnexureEDigitalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnexureEDigitalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
