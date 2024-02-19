import { Component } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post-service';
import { Router } from 'express';
import { NgForm } from '@angular/forms';
import { truncate } from 'fs/promises';
import { ParseTreeResult } from '@angular/compiler';

@Component({
  selector: 'app-actualizacion',
  standalone: true,
  imports: [NgForm],
  templateUrl: './actualizacion.component.html',
  styleUrl: './actualizacion.component.css'
})
export class ActualizacionComponent {
  post: Post = { id: 0, title: '', body: '' };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    // Obtener el ID del post de los parámetros de la ruta
    const id = this.route.snapshot.params['id'];

    // Llamar al método para obtener el post por su ID
    this.postService.getPostById(id).subscribe(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  guardarCambios() {
    this.postService.updatePost(this.post).subscribe(
      () => {
        // Mostrar una alerta de éxito
        alert('Los cambios se han guardado correctamente.');

        // Redirigir al usuario a la página de inicio u otra página deseada
        window.location.href = '/listado';
      }
    );
  }

  onSubmit(form: NgForm) {
    // Verifica si el formulario es válido
    if (form.valid) {
      console.log('Formulario enviado');
      // Puedes realizar otras acciones aquí, como enviar los datos del formulario al servidor
    } else {
      // Si el formulario no es válido, puedes mostrar un mensaje de error o realizar otras acciones
      console.log('Formulario inválido');
    }
  }
}
