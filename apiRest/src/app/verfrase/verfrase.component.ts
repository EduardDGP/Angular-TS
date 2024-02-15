import { Component } from '@angular/core';
import { ApiService}
import { Frase } from "module";

@Component({
  selector: 'app-verfrase',
  standalone: true,
  imports: [],
  templateUrl: './verfrase.component.html',
  styleUrl: './verfrase.component.css'
})
export class VerfraseComponent {

  public frase: Frase = { id: "", quote: ""};

  constructor(private apiservice: Apiservice){

  }

  no
}
