//Se consulta que operacion quiere hacer
let operacion = prompt("¿Qué operación queres realizar?");


//Se controla que la operacion este dentro de lo esperado
if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/"){

    switch (operacion) {
        case "+": //se suman los dos numeros
            let numero1 = Number(prompt("Ingrese el primer número:"));
            let numero2 = Number(prompt("Ingrese el segundo número:"));
            console.log(`El resultado es: ${numero1 + numero2}`);
            break;
        case "-": //se restan los dos numeros
            let numero3 = prompt("Ingrese el primer número:");
            let numero4 = prompt("Ingrese el segundo número:");
            console.log(`El resultado es: ${numero3 - numero4}`);
            break;
        case "*": //se multiplican los dos numeros
            let numero5 = prompt("Ingrese el primer número:");
            let numero6 = prompt("Ingrese el segundo número:");
            console.log(`El resultado es: ${numero5 * numero6}`);
            break;
        case "/": //se dividen los dos numeros
            let numero7 = prompt("Ingrese el primer número:");
            let numero8 = prompt("Ingrese el segundo número:");
            console.log(`El resultado es: ${numero7 / numero8}`);
        break;


        default:
            break;
    }
}alert("nose que queres hacer");