import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CodeVerificationPage } from './code-verification.page';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule if your component uses reactive forms

describe('CodeVerificationPage', () => {
  let component: CodeVerificationPage;
  let fixture: ComponentFixture<CodeVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodeVerificationPage], // Declare the component
      imports: [ReactiveFormsModule] // Import any necessary modules
    })
    .compileComponents(); // Compile the component's template and css

    fixture = TestBed.createComponent(CodeVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
