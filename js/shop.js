// let producto= 0;
// let precioTotal = 0;
// let precioEnCuotas = 0;
// let contador = 0;

// let listaDediscos = [];

// class Producto{
//     constructor(nombre, precio, img){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.img = img;
//     }
// }

// listaDediscos.push(new Producto("Antezana 247", 3200, "../img/antezana.jpg"));
// listaDediscos.push(new Producto("Hecho a mano", 3200, "../img/hechoamano.jpg"));
// listaDediscos.push(new Producto("Mordiendo el bozal", 2900, "../img/melbozal.jpg"));
// listaDediscos.push(new Producto("Trap de verdad", 4000, "../img/trapdeverdad.jpg"));
// listaDediscos.push(new Producto("Remera SponsorDios", 2700, "../img/remeraysy.jpg"))
// listaDediscos.push(new Producto("Comic Genesis de un movimiento", 2500, "../img/ysycomic.jpg"))

// alert("No te quedes sin tu disco favorito de YSY A")
// alert("Aprovecha, llevando hoy tenes 3, 6, 9 y hasta 12 cuotas sin interes!!")

// function elegirdiscos() {
//     producto = Number(prompt(`Ingrese un numero de los que esten a continuacion para el producto que desea agregar al carrito
//     // 1. ${listaDediscos[0].nombre} - $${listaDediscos[0].precio}
//     // 2. ${listaDediscos[1].nombre} - $${listaDediscos[1].precio}
//     // 3. ${listaDediscos[2].nombre} - $${listaDediscos[2].precio}
//     // 4. ${listaDediscos[3].nombre} - $${listaDediscos[3].precio}`));
//     while (producto > 0 && producto < 5) {
//         contador++
//         precioTotal += listaDediscos[producto - 1].precio;
//         producto = Number(prompt(`  N° de discos: ${contador}
//     Ingrese un numero de los que esten a continuacion para el producto que desea agregar al carrito
//         // 1. ${listaDediscos[0].nombre} - $${listaDediscos[0].precio}
//         // 2. ${listaDediscos[1].nombre} - $${listaDediscos[1].precio}
//         // 3. ${listaDediscos[2].nombre} - $${listaDediscos[2].precio}
//         // 4. ${listaDediscos[3].nombre} - $${listaDediscos[3].precio}`));
//     }
// }

// function elegirAdicional() {
//     producto = Number(prompt(`N° de discos: ${contador}
//     LLevate tambien uno de nuestros discos adicionales, Ingrese un numero de los que esten a continuacion para agregarlo a su carrito (En caso de no querer ningun adicional presione cancelar)
//     // 1. ${listaDediscos[4].nombre} - $${listaDediscos[4].precio}
//     // 2. ${listaDediscos[5].nombre} - $${listaDediscos[5].precio}`));
//     while (producto >= 1 && producto <= 2) {
//         contador++
//         precioTotal += listaDediscos[producto + 3].precio
//         producto = Number(prompt(`N° de discos: ${contador}
//         Ingrese un numero de los que esten a continuacion para agregarlo a su carrito
//         // 1. ${listaDediscos[4].nombre} - $${listaDediscos[4].precio}
//         // 2. ${listaDediscos[5].nombre} - $${listaDediscos[5].precio}`));
//     }
//     alert("Ya que el numero ingresado no corresponde a ninguno de la lista damos por sentado que no desea seguir agregando discos a su carrito! El monto total es de: $" + precioTotal)
// }

// function elegirCuotas() {
//     cuotas = Number(prompt("Elige la cantidad de cuotas en las que desea abonar (1, 3, 6, 9, 12)"));
//     if(cuotas === 3 || cuotas === 6 || cuotas === 9 || cuotas === 12) {
//         precioEnCuotas = precioCuotas(cuotas);
//         alert(`N° de discos: ${contador}
//         Excelente, elegiste el pago en ${cuotas} cuotas sin interes! El precio total de cada cuota es de: $` + precioEnCuotas.toFixed() + ` - Gracias por elegirnos!!`);
//     }else if(cuotas === 1){
//         alert(`N° de discos: ${contador}
//         Excelente, elegiste el pago en ${cuotas} cuota! El precio total es de: $${precioTotal} - Gracias por elegirnos!!`);
//     }else{
//         alert(`N° de discos: ${contador}
//         Ya que el numero ingresado no corresponde a ninguna cantidad de cuotas validas, por defecto el programa elige el pago en un unico abono de: ${precioTotal} - de lo contrario debe volver a realizar la operacion, muchas gracias!`)
//     }
// }

// function precioCuotas(a){
//     return precioTotal / a;
// }

// elegirdiscos();
// elegirAdicional();
// elegirCuotas();

let producto = 0;
let precioTotal = 0;
let precioEnCuotas = 0;
let contador = 0;

let discos = [];
let adicionales = [];
let carrito = [];

class Producto {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
  }
}

discos.push(new Producto(1, "Antezana 247", 3200, "../img/antezana.jpg"));
discos.push(new Producto(2, "Hecho a mano", 3200, "../img/hechoamano.jpg"));
discos.push(new Producto(3, "Mordiendo el bozal", 2900, "../img/melbozal.jpg"));
discos.push(new Producto(4, "Trap de verdad", 4000, "../img/trapdeverdad.jpg"));
adicionales.push(
  new Producto(5, "Remera SponsorDios", 2700, "../img/remeraysy.jpg")
);
adicionales.push(
  new Producto(6, "Comic Genesis de un movimiento", 2500, "../img/ysycomic.jpg")
);

const cardContainer = document.getElementById("mainShop");

function crearCard(product) {
  let btnComprar = document.createElement("button");
  btnComprar.className = "btn btn-success";
  btnComprar.setAttribute("id", product.id);
  btnComprar.innerText = "Agregar al carrito";

  let cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex";
  cardBody.innerHTML = `
        <h5 class="name-shop">${product.nombre}</h5>
        <p class="price-shop">$${product.precio}</p>
    `;
  cardBody.append(btnComprar);

  let img = document.createElement("img");
  img.src = product.img;
  img.className = "img-shop";
  img.alt = `Portada de ${product.nombre}`;

  let card = document.createElement("div");
  card.className = "card col-sm-5 col-lg-2 m-4";
  card.append(img);
  card.append(cardBody);

  btnComprar.addEventListener("click", () => comprarProducto(product));
  return card;
}

const comprarProducto = (product) => {
  let productoExiste = carrito.find(item => item.id === product.id)
  if(productoExiste != undefined){
    productoExiste.precio = productoExiste.precio + product.precio;
    productoExiste.cantidad += 1;
  } else{
    carrito.push({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      imagen: product.imagen,
      cantidad: 1
    })
  }
  console.log(carrito);
}



function cargarCards() {
  cardContainer.innerHTML = "";
  discos.forEach((product) => {
    let productoCompleto = crearCard(product);
    cardContainer.append(productoCompleto);
  });
}

cargarCards();
