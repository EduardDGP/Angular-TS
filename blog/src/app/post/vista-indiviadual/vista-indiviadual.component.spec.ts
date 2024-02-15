import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaIndiviadualComponent } from './vista-indiviadual.component';

describe('VistaIndiviadualComponent', () => {
  let component: VistaIndiviadualComponent;
  let fixture: ComponentFixture<VistaIndiviadualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaIndiviadualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaIndiviadualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
