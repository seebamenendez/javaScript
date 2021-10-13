let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")

//Hacemos un if para hacer la busqueda. Si la lista es vacia, dice que no hay productos, sino muestra la lista parseada
if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

//Se hace la busqueda, tiene que ser exactamente igual lo que se busca a lo que esta guardado en categoria.
let dato = prompt("Ingresa la categoria a buscar")
listaFiltrada = listaObjetos.filter(e => e.categoria === dato)


//Si encuentra la categoria, hace la tarj bootstrap de abajo automaticamente para todas las busquedas que encontro.
if (listaFiltrada.length != 0) {
    listaFiltrada.forEach(element => {

        let index = listaFiltrada.indexOf(element)
        imprimirDatos.innerHTML += `
        <div class="card col-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
            <p class="card-text">${element.precio}</p>
            <button class="card-link"  onclick="comprar(${index})">Comprar</button>
        </div>
        </div>
        `

    });
} else {
    console.log("NO TENES NINGUN PRODUCTO CON ESA CATEGORIA");
}

//La funcion comprar
const comprar = (index) => {
    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }


    carrito.push(listaObjetos[index])
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
