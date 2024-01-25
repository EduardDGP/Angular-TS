import { Component } from '@angular/core';
import { productos } from '../productos';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos = productos;
}
