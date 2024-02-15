import { Component, OnInit } from '@angular/core';
import { Post } from '../post'; // Importa la interfaz Post
import { PostService } from '../post-service'; // Importa el servicio PostService
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html',
  styleUrls: ['listado.component.css'],
  imports: [CommonModule, RouterLink, RouterLinkActive],
  standalone: true
})
export class ListadoComponent implements OnInit {
  posts: Post[] = [];
  newPost: Post = { id: 0, title: '', body: '' };

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  createPost() {
    this.postService.create(this.newPost).subscribe(() => {
      // Después de crear el post, actualiza la lista de posts
      this.getAllPosts();
      // Limpia el formulario
      this.newPost = { id: 0, title: '', body: '' };
    });
  }
}
