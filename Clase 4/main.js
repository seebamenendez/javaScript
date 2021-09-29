//Se arranca con $5000

consultaCliente();

//Consulto si quiero vender o comprar.
function consultaCliente(){
    let consulta = prompt("¿Deseas Comprar o Vender? (Comprar / Vender)");
    consulta = consulta.toLowerCase();
    if (consulta === "comprar") {
        consultaCompra();
    }else if (consulta === "vender"){
        consultaVenta();
    }else
    alert("Usted no ingreso la opcion correcta, vuelva a intentarlo.")
}



//Que desea comprar
function consultaCompra() {
    let preguntaCompra = prompt("Que es lo que desea comprar? (Camisa, Pantalon, Campera, Buzo)");
    console.log(validarCompra(preguntaCompra));
    return;
}

//Aseguro la compra
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


//Que desea vender
function consultaVenta() {
    let preguntaVenta = prompt("Que es lo que desea vender? (Camisa, Pantalon, Campera, Buzo)");
    console.log(validarVenta(preguntaVenta));
    return;
}


//Aseguro la venta
function validarVenta(nombre) {
    const dineroUsuario = 5000;
    let prenda = nombre.toLowerCase()
    switch (prenda) {
        case "camisa":
            diferenciaVenta = dineroUsuario + 2000;
            console.log(`La ${prenda} te la compramos a $2000. Tenes un saldo a favor de $${diferenciaVenta}.`);
            break;
        case "pantalon":
            diferenciaVenta = dineroUsuario + 1500;
            console.log(`El ${prenda} te lo compramos a $1500. Tenes un saldo a favor de $${diferenciaVenta}.`);
            break;
        case "campera":
            diferenciaVenta = dineroUsuario + 3000;
            console.log(`La ${prenda} te la compramos a $3000. Tenes un saldo a favor de $${diferenciaVenta}.`);
            break;
        case "buzo":
            diferenciaVenta = dineroUsuario + 1500;
            console.log(`El ${prenda} está a $1500. Tenes un saldo a favor de $${diferenciaVenta}.`);
        break;
        default :
        console.log("Disculpe, no compramos esa prenda.")
    }
}

