//Se guardan las marcas que vendemos
const marca1 = "adidas";
const marca2 = "nike";
const marca3 = "puma";

//Se le pide al usuario que ingrese la marca que desea comprar
let marcaIngresada = prompt(
  "Ingrese la marca de calzado que desea comprar (Adidas, Nike, Puma)"
);

//Se guarda el texto ingresado todo en minusculas
marcaIngresada = marcaIngresada.toLowerCase();

//Compara la marca que se ingreso que este dentro de las 3 opciones
if (
  marcaIngresada === marca1 ||
  marcaIngresada === marca2 ||
  marcaIngresada === marca3
) {
  //Se le pide el talle
  let talle = Number(prompt("¿Que talle desea?(36 al 44)"));

  //if de la marca Nike
  if ( (marcaIngresada === "nike") && ( talle > 39)) {
    console.log("Ya se lo traemos para que se pruebe");
  } 
   
  //if de la marca Adidas
  else if ( (marcaIngresada === "adidas") && ( talle === 36 || talle === 38 || talle === 43)) {
    console.log("Ya se lo traemos para que se pruebe");
  }

  
  //if de la marca Puma
  else if ( (marcaIngresada === "puma") && (talle >= 38) && (talle <=44)) {
    console.log("Ya se lo traemos para que se pruebe");
  } 
  
  else {
    console.log(
      `Disculpe, no contamos con el talle ${talle} de la marca ${marcaIngresada}`
    );
  }
  
} else {
  //Se le comenta que no contamos con la marca que ingreso
  console.log("Disculpe, no contamos con esa marca");
}
