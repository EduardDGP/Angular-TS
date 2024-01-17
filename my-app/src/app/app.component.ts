import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter:number = 2;

  aumentar(): void {
    this.counter += 1;
  }
  disminuir(): void {
    this.counter -= 1;
  }
  resetear(): void {
    this.counter = 0;
  }
  cuadrado(): void {
    this.counter = this.counter * this.counter;
  }
}

