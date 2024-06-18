import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesAndFirmsComponent } from './agencies-and-firms.component';

describe('AgenciesAndFirmsComponent', () => {
  let component: AgenciesAndFirmsComponent;
  let fixture: ComponentFixture<AgenciesAndFirmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenciesAndFirmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgenciesAndFirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
