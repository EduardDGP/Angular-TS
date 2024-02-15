import { Component, Input, OnInit, Output,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class DadoComponent {
  valor: number = 1;

  @Output() propagar = new EventEmitter<number>();

  tirarDado() {
    this.valor = Math.floor(Math.random() * 6) + 1;
    this.propagar.emit(this.valor);
  }

  onPropagar() {
    this.propagar.emit(this.valor);
  }
}

