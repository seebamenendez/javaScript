let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null) {
    alert("Carrito Vacio")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
}

listaObjetos.forEach(elementos => {
    imprimirDatos.innerHTML += `
    <div class="card col-4" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${elementos.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${elementos.categoria}</h6>
        <p class="card-text">${elementos.precio}</p>
    </div>
    </div>
    `
});


const finalizarCompra = () => {

    let monto = 0

    listaObjetos.forEach(e => {
        monto += e.precio
    })
    let cuotas = Number(prompt("¿En cuantas cuotas queres hacerlo?"));

    let total = monto / cuotas;
    console.log("Felicitaciones, tu compra fue aprovada en "+ cuotas + " cuotas. Cada cuota quedo con un valor de $" + total );
    localStorage.removeItem("carrito")
}

btn.addEventListener("click", () => {
    finalizarCompra()
})