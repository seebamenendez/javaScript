/*

//Se arranca con $5000


consultaCompra();

//Que desea comprar
function consultaCompra() {
    let pregunta = prompt("Que es lo que desea comprar? (Camisa, Pantalon, Campera, Buzo)");
    console.log(validarCompra(pregunta));
    return;
}

function validarCompra(nombre) {
    const dineroUsuario = 5000;
    let prenda = nombre.toLowerCase()
    switch (prenda) {
        case "camisa": 
            diferencia = dineroUsuario - 2000;
            console.log(`La ${prenda} está a $2000. Te queda para gastar ${diferencia}`); 
            break;
        case "pantalon":
            diferencia = dineroUsuario - 1500;
            console.log(`El ${prenda} está a $1500. Te queda para gastar ${diferencia}`);
            break;
        case "campera":
            diferencia = dineroUsuario - 3000;
            console.log(`La ${prenda} está a $3000. Te queda para gastar ${diferencia}`); 
            break;
        case "buzo":
            diferencia = dineroUsuario - 1500;
            console.log(`El ${prenda} está a $1500. Te queda para gastar ${diferencia}`); 
        break;
        default :
        console.log("Disculpe, no contamos con esa prenda.")
    }
}
*/


//Creamos un objeto

class Prendas {

    constructor(nombre, precio, temporada, stock, disponible){
        this.nombre = nombre;
        this.precio = precio;
        this.temporada = temporada;
        this.stock = stock;
        this.disponible = disponible;
    }

    comprar(cantidad){
        if(this.stock <= 0){
            console.log("Disculpa, no tenemos stock disponible");
            this.disponible = false;
        } else {
            this.stock = this.stock - cantidad;
            console.log(`Compraste ${this.nombre} y el total es ${this.precio * cantidad}`);
        }
    }
    cuotas(cantidadCuotas){
        console.log(`Se hizo la compra en ${cantidadCuotas} y el costo de cada una es de $${this.precio / cantidadCuotas}`);
    }
}

const prenda1 = new Prendas("camisa", 2500, "Origen 2021", 13, true);
const prenda2 = new Prendas("pantalon", 2000, "Origen 2021", 5, true);