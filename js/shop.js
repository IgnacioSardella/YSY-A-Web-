
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
