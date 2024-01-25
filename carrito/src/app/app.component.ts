import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaProductosComponent, BarraSuperiorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carrito';
}


