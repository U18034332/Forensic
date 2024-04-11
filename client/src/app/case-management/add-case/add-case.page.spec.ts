import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddCaseComponent } from './add-case.page'; // Update import

describe('AddCaseComponent', () => { // Update component name
  let component: AddCaseComponent;
  let fixture: ComponentFixture<AddCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCaseComponent], // Declare AddCaseComponent
    }).compileComponents();

    fixture = TestBed.createComponent(AddCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
