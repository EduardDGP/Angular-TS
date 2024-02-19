import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post'; // Importa la interfaz Post desde su archivo correspondiente

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = 'https://jsonplaceholder.typicode.com'; // URL de la API

  // Opciones del encabezado HTTP
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // Método para obtener todos los posts
  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.apiURL}/posts`);
  }

  // Método para crear un nuevo post
  create(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(`${this.apiURL}/posts`, post, this.httpOptions);
  }

  // Método para buscar un post por su ID
  find(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.apiURL}/posts/${id}`);
  }

  // Método para actualizar un post existente
  update(id: number, post: Post): Observable<Post> {
    return this.httpClient.put<Post>(`${this.apiURL}/posts/${id}`, post, this.httpOptions);
  }

  // Método para borrar un post
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiURL}/posts/${id}`, this.httpOptions);
  }

  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.apiURL}/post/${id}`);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.apiURL}/${post.id}`; // Construir la URL para la actualización del post
    return this.httpClient.put<Post>(url, post); // Enviar una solicitud PUT al servidor con el post actualizado
  }
}
