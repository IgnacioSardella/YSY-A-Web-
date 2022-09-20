let producto= 0;
let precioTotal = 0;
let precioEnCuotas = 0;
let contador = 0;

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
        contador++
        precioTotal += listaDeProductos[producto - 1].precio;
        producto = Number(prompt(`  N° de productos: ${contador}
    Ingrese un numero de los que esten a continuacion para el producto que desea agregar al carrito 
        // 1. ${listaDeProductos[0].nombre} - $${listaDeProductos[0].precio} 
        // 2. ${listaDeProductos[1].nombre} - $${listaDeProductos[1].precio} 
        // 3. ${listaDeProductos[2].nombre} - $${listaDeProductos[2].precio} 
        // 4. ${listaDeProductos[3].nombre} - $${listaDeProductos[3].precio}`));
    }
}

function elegirAdicional() {
    producto = Number(prompt(`N° de productos: ${contador}
    LLevate tambien uno de nuestros productos adicionales, Ingrese un numero de los que esten a continuacion para agregarlo a su carrito (En caso de no querer ningun adicional presione cancelar)
    // 1. ${listaDeProductos[4].nombre} - $${listaDeProductos[4].precio} 
    // 2. ${listaDeProductos[5].nombre} - $${listaDeProductos[5].precio}`));
    while (producto >= 1 && producto <= 2) {
        contador++
        precioTotal += listaDeProductos[producto + 3].precio
        producto = Number(prompt(`N° de productos: ${contador}
        Ingrese un numero de los que esten a continuacion para agregarlo a su carrito
        // 1. ${listaDeProductos[4].nombre} - $${listaDeProductos[4].precio} 
        // 2. ${listaDeProductos[5].nombre} - $${listaDeProductos[5].precio}`));
    }
    alert("Ya que el numero ingresado no corresponde a ninguno de la lista damos por sentado que no desea seguir agregando productos a su carrito! El monto total es de: $" + precioTotal)
}

function elegirCuotas() {
    cuotas = Number(prompt("Elige la cantidad de cuotas en las que desea abonar (1, 3, 6, 9, 12)"));
    if(cuotas === 3 || cuotas === 6 || cuotas === 9 || cuotas === 12) {
        precioEnCuotas = precioCuotas(cuotas);
        alert(`N° de productos: ${contador}
        Excelente, elegiste el pago en ${cuotas} cuotas sin interes! El precio total de cada cuota es de: $` + precioEnCuotas.toFixed() + ` - Gracias por elegirnos!!`);
    }else if(cuotas === 1){
        alert(`N° de productos: ${contador}
        Excelente, elegiste el pago en ${cuotas} cuota! El precio total es de: $${precioTotal} - Gracias por elegirnos!!`);
    }else{
        alert(`N° de productos: ${contador}
        Ya que el numero ingresado no corresponde a ninguna cantidad de cuotas validas, por defecto el programa elige el pago en un unico abono de: ${precioTotal} - de lo contrario debe volver a realizar la operacion, muchas gracias!`)
    }
}

function precioCuotas(a){
    return precioTotal / a;
}

elegirProductos();
elegirAdicional();
elegirCuotas();

