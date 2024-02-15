import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionComponent } from './creacion.component';

describe('CreacionComponent', () => {
  let component: CreacionComponent;
  let fixture: ComponentFixture<CreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // createPost() {
  //   this.postService.create(this.newPost).subscribe(newPost => {
  //     this.posts.push(newPost); // Agrega el nuevo post a la lista
  //     this.newPost = { id: 0, title: '', body: '' }; // Reinicia el nuevo post
  //   });
  // }
});
