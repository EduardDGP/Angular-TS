import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
