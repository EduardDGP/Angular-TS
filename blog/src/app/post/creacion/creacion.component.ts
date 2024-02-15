import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPass: string;
}

@Component({
  selector: 'app-creacion',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './creacion.component.html',
  styleUrl: './creacion.component.css'
})
export class CreacionComponent {
  registerForm: IRegisterForm = {
    name: "",
    email: "",
    password: "",
    repeatPass: ""
  };

  constructor() {}

  submit() {
    // Llegados a este punto, ya hemos podido validar todo excepto las contraseñas y ya recibimos los datos
    console.log("Datos de inicio de sesión");
    console.log(this.register.name);
    console.log(this.register.email);
    console.log(this.register.password);
    console.log(this.register.repeatPass);

    // Controlar si el password y el password verificado son iguales
    if (this.registerForm.password !== this.registerForm.repeatPass) {
      // Emitir alerta POR NO SER IGUALES Y NO DEJAR ENVIAR DATOS
      console.log(
        "Hay que introducir las dos contraseñas iguales para validarlo"
      );
      // Echar un mensaje de alerta
      return;
    }

    // Con estos datos ya todo OK, los enviamos al servidor para comprobar si el login es OK o NO
  }
} // FIN class

