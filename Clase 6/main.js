//Creamos el array de prendas

let prenda = ["camisa", "pantalon", "chaleco", "campera", "blusa"];

console.table(prenda);

//Se consulta la prenda nueva
let prendaNueva = prompt("Ingrese una nueva prenda que desea vender:");

//Se agrega la prenda nueva al array de prendas
prenda.push(prendaNueva);

//Mostramos en una tabla todas las prendas
console.table(prenda);

//Mostramos la cantidad de prendas contadas con el length
console.log(`La cantidad de prendas que tenemos es de ${prenda.length}`);

//Hacemos dos arrays de clientes, y lo conctatenamos con el concat
const clientas = ["Sofia", "Guille", "Maria", "Cecilia", "Pia", "Camila", "Ana"];
const clientes = ["Pedro", "Diego", "Juan", "Oscar", "Mario", "Felipe", "Leonardo"];
const totalClientes = clientas.concat(clientes);

console.log(`Todos los clientes son: ${totalClientes}`);

//Recortamos con el slice el array de los mejores clientes

const mejoresClientes = totalClientes.slice(4, 10);
console.log(`Los mejores clientes son: ${mejoresClientes}`);


