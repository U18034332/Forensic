import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocManagementComponent } from './doc-management.component';

describe('DocManagementComponent', () => {
  let component: DocManagementComponent;
  let fixture: ComponentFixture<DocManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
