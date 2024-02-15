import { Producto, Component, Input } from "./productosInterface"

@Component({
  selector: 'app-lista-productos',
  template: `
    <div *ngFor="let producto of productos">
      <!-- Enlace con descripción al pasar el ratón -->
      <a href="#" (mouseover)="mostrarDetalles(producto)" (mouseout)="ocultarDetalles()">
        {{ producto.nombre }}
      </a>
      <span *ngIf="mostrarDescripcion"> - Detalles de {{ producto.nombre }}</span>
    </div>
  `,
})


export const productos: Producto[] = [
  {
      nombre: "Tele",
      precio: 300,
      descripcion: "Tele curva 4K 1080p, con 144hz"
  },
  //...
]

export class ListaProductosComponent {
  @Input() productos: any[] = []; // Asegúrate de definir el tipo correcto para tu lista de productos

  mostrarDescripcion = false;

  mostrarDetalles(producto: any) {
    this.mostrarDescripcion = true;
    // Puedes personalizar la lógica para mostrar detalles específicos del producto aquí
  }

  ocultarDetalles() {
    this.mostrarDescripcion = false;
  }
}
