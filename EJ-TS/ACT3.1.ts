class ProductoAlimenticio {
    
    nombrePA: string;
    precio : number;

    constructor(nombrePA: string, precio: number){
        this.nombrePA = this.nombrePA;
        this.precio = this.precio;
    };

    imprimeDatos(): void {

        console.log(`Nombre: ${this.nombrePA}`);
        console.log(`Precio: ${this.precio}`);

    };
};

//USO

const producto1 = new ProductoAlimenticio("Manzanas", 2.5);
producto1.imprimeDatos();
console.log('------------------------');