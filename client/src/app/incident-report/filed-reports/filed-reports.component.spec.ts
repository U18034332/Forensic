import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledReportsComponent } from './filed-reports.component';

describe('FiledReportsComponent', () => {
  let component: FiledReportsComponent;
  let fixture: ComponentFixture<FiledReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiledReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiledReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
