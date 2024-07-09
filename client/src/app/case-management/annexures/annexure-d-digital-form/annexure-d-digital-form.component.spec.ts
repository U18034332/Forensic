import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureDDigitalFormComponent } from './annexure-d-digital-form.component';

describe('AnnexureDDigitalFormComponent', () => {
  let component: AnnexureDDigitalFormComponent;
  let fixture: ComponentFixture<AnnexureDDigitalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnexureDDigitalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnexureDDigitalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
