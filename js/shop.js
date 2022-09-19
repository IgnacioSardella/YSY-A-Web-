// const suma = (a,b) => a + b;
// const resta = (a,b) => a - b;
// const multiplicar = (a,b) => a * b;
// const iva = (a) => a * 0.21;

// let precio = 0
// let nombre;
// let disco;

// const ingresarNombre = () => {
//     nombre = prompt("Ingresa tu nombre");
//     while (!isNaN(nombre)) {
//         alert("Tu nombre debe contener letras");
//         nombre = prompt("Ingresa tu nombre");
//     }
// }


// const comprarDisco = () => {
//     do {
//         disco = prompt("Ingresa el nombre del disco que quieras llevar");
//         if (isNaN(disco)) {
//             alert("El nombre del disco ingresado no es valido")
//             condition = true
//         } else{
//             switch (disco.toLocaleLowerCase()) {
//                 case "antezana 247":
//                     precio += 2800;
//                     break;
    
//                 case "hecho a mano":
//                     precio += 2800;
//                     break;
    
//                 case "mordiendo el bozal":
//                     precio += 2500;
//                     break;
    
//                 case "trap de verdad":
//                     precio += 3200;
//                     break;

//                 default:
//                     alert("El nombre del disco ingresado no es valido");
//                     break;
//             }
//         }
//     } while (condition);
// }

// // let disco = prompt("Ingresa el nombre del disco que quieras llevar");
// while (disco != "ESC") {
//     switch (disco.toLocaleLowerCase()) {
//         case "antezana 247":
//             precio += 2800;
//             break;
    
//         case "hecho a mano":
//             precio += 2800;
//             break;
    
//         case "mordiendo el bozal":
//             precio += 2500;
//             break;
    
//         case "trap de verdad":
//             precio += 3200;
//             break;
    
//         default:
//             alert("El nombre del disco ingresado no es valido");
//         break;
//     }
//     disco = prompt("Ingresa el nombre del disco que quieras llevar");
// }

// let adicional = prompt("Elegi tu adicional (escribi ESC para omitir esta opcion)");
// switch (adicional.toLocaleLowerCase()) {
//     case "remera":
//         precio += 1700;
//         break;

//     case "comic":
//         precio += 1400;
//         break;

//     case "ESC":
//         break;
    
//     default:
//         alert("El nombre del adicional ingresado no es valido");
// }

// alert(`Gracias por elegirnos ${nombre}. El precio total de tu compra es de ` + suma(precio, iva(precio)) + " pesos");

let producto= 0;
let precioTotal = 0;
let precioEnCuotas = 0;

let listaDeProductos = [];

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

listaDeProductos.push(new Producto("Antezana 247", 3200));
listaDeProductos.push(new Producto("Hecho a mano", 3200));
listaDeProductos.push(new Producto("Mordiendo el bozal", 2900));
listaDeProductos.push(new Producto("Trap de verdad", 4000));
listaDeProductos.push(new Producto("Remera SponsorDios", 2700))
listaDeProductos.push(new Producto("Comic Genesis de un movimiento", 2500))


alert("No te quedes sin tu disco favorito de YSY A")
alert("Aprovecha, llevando hoy tenes 3, 6, 9 y hasta 12 cuotas sin interes!!")

function elegirProductos() {
    producto = Number(prompt(`Ingrese un numero de los que esten a continuacion para el producto que desea agregar al carrito 
    // 1. ${listaDeProductos[0].nombre} - $${listaDeProductos[0].precio} 
    // 2. ${listaDeProductos[1].nombre} - $${listaDeProductos[1].precio} 
    // 3. ${listaDeProductos[2].nombre} - $${listaDeProductos[2].precio} 
    // 4. ${listaDeProductos[3].nombre} - $${listaDeProductos[3].precio}`));
    while (producto > 0 && producto < 5) {
        precioTotal += listaDeProductos[producto - 1].precio;
        producto = Number(prompt(`Ingrese un numero de los que esten a continuacion para el producto que desea agregar al carrito 
    // 1. ${listaDeProductos[0].nombre} - $${listaDeProductos[0].precio} 
    // 2. ${listaDeProductos[1].nombre} - $${listaDeProductos[1].precio} 
    // 3. ${listaDeProductos[2].nombre} - $${listaDeProductos[2].precio} 
    // 4. ${listaDeProductos[3].nombre} - $${listaDeProductos[3].precio}`));
    }
}

function elegirAdicional() {
    producto = Number(prompt(`LLevate tambien uno de nuestros productos adicionales, Ingrese un numero de los que esten a continuacion para agregarlo a su carrito (En caso de no querer ningun adicional presione cancelar)
    // 1. ${listaDeProductos[4].nombre} - $${listaDeProductos[4].precio} 
    // 2. ${listaDeProductos[5].nombre} - $${listaDeProductos[5].precio}`));
    while (producto >= 1 && producto <= 2) {
        precioTotal += listaDeProductos[producto + 3].precio
        producto = Number(prompt(`Ingrese un numero de los que esten a continuacion para agregarlo a su carrito
        // 1. ${listaDeProductos[4].nombre} - $${listaDeProductos[4].precio} 
        // 2. ${listaDeProductos[5].nombre} - $${listaDeProductos[5].precio}`));
    }
    alert("Ya que el numero ingresado no corresponde a ninguno de la lista damos por sentado que no desea seguir agregando productos a su carrito! El monto total es de: $" + precioTotal)
}

function elegirCuotas() {
    cuotas = Number(prompt("Elige la cantidad de cuotas en las que desea abonar (1, 3, 6, 9, 12)"));
    if(cuotas === 3 || cuotas === 6 || cuotas === 9 || cuotas === 12) {
        precioEnCuotas = precioCuotas(cuotas);
        alert("Excelente, elegiste el pago en " + cuotas + " cuotas sin interes! El precio total de cada cuota es de: $" + precioEnCuotas.toFixed() + " - Gracias por elegirnos!!");
    }else if(cuotas === 1){
        alert("Excelente, elegiste el pago en " + cuotas + " cuota! El precio total es de: $" + precioTotal + " - Gracias por elegirnos!!");
    }else{
        alert("Ya que el numero ingresado no corresponde a ninguna cantidad de cuotas validas, por defecto el programa elige el pago en un unico abono de: $" + precioTotal + " - de lo contrario debe volver a realizar la operacion, muchas gracias!")
    }
}

function precioCuotas(a){
    return precioTotal / a;
}

elegirProductos();
elegirAdicional();
elegirCuotas();

