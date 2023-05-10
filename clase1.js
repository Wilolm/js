//1) Realizar una funcion que reciba un número y escriba una piramide desde 1 hasta ese número
 
let i,n;

for (i=1; i<=5; i++ )
{
    for(n=1; n<=i; n++)
   console.log(n);
    console.log("<br>")
}

// 2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos 

let array1 = ['auto','bus','tren'];
let array2 = ['tren','bici','auto'];

function Comparar(a,b){
    let iguales=[];
   for ( let i = 0; i< array1.length; i++){
    for (let l=0; l<array2.length ; l++){
        if (array1[i] == array2[l] ){
            iguales.push(array1[i])
        }
    }
}
console.log(iguales);
}
Comparar(array1,array2);

//3) Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

let carrito = {
    montoTotal: 10,
    productos: ["Leche"],
};

class producto {
    producto;
    precio;
    cantidad;
    total;

    constructor(nombreprod,precioprod,cantprod,total){
        this.producto= nombreprod;
        this.precio= precioprod;
        this.cantidad=cantprod;
        this.total= total;
    }
    
    
    agregarProducto(nombre, precio, unidades) {
        this.producto= nombre;
        this.precio = precio;
        this.cantidad = unidades;
        this.total = (this.precio * this.cantidad);

        carrito.montoTotal= this.total;
        carrito.productos=this.producto;

}
}


const nuevoprod1 = new producto ();
nuevoprod1.agregarProducto("fideo",100,2);
console.log(nuevoprod1);
console.log(carrito);