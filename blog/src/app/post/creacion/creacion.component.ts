import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post-service';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { routes } from '../../app.routes';
import { Router } from 'express';


@Component({
  standalone: true,
  selector: 'app-edicion-post',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css'],
  imports: [RouterLink, ReactiveFormsModule, NgIf]
})
export class CreacionComponent implements OnInit {
  id: string = '';
  postForm: FormGroup = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    texto: new FormControl('', [Validators.required]),
  });

  constructor (
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.postForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
    
  }

  submit() {
    setTimeout(() => {
      // Alerta indicando que se ha guardado correctamente
      window.alert('¡Los datos se han guardado correctamente!');
      window.history.back();
    }, 1000);
  }
}
