class User {

    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass
    }
}


class Producto {

    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}


const admin = new User("admin", "admin1234")

let listaProductos;
//Si la lista esta vacia se crea una nueva, sino se trae parseada lo que ya existe en la misma.
if (localStorage.getItem("lista") == null) {
    listaProductos = []
} else {
    listaProductos = JSON.parse(localStorage.getItem("lista"))
}



//Hacemos una funcion para crear un nuevo producto que vamos a pedir por prompt
const crearProducto = (nombre, categoria, precio, stock) => {
    const producto = new Producto(nombre, categoria, precio, stock)
    return producto
}

//Validamos el usuario
const confirmacionDeAcceso = () => {

    let bucle = true
//Mientras que el usuario y pass coicidan con la constante que se creo de admin...
    while (bucle) {

        const nombre = prompt("Ingresa tu nombre");
        const pass = prompt("Ingresa tu pass")

        if (nombre === admin.nombre && pass === admin.pass) {
            bucle = false

            let ciclo = true;
//...Se van a pedir los campos por prompt de los productos a agregar...
            while (ciclo) {

                const nombre = prompt("ingrese nombre del producto");
                const categoria = prompt("ingrese categoria del producto");
                const precio = Number(prompt("ingrese precio del producto"));
                const stock = parseInt(prompt("Ingrese la cantidad de productos"))

//...se agrega dentro de la lista productos...
                listaProductos.push(crearProducto(nombre, categoria, precio, stock))

                localStorage.setItem("lista", JSON.stringify(listaProductos))
//...si se quiere seguir agregando productos se ejecuta nuevamente el while, sino sale.
                ciclo = confirm("Deseas agregar otro producto mas?")
            }

            break;
        } else {
//Usuario incorrecto si no es igual al admin
            alert("USUARIO INCORRECTO");
        }

    }

}

confirmacionDeAcceso()