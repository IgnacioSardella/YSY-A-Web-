let carrito = [];

const cardContainer = document.getElementById("mainShop");
const verCarrito = document.getElementById("ver-carrito");
const modalContainer = document.getElementById("modal-container")
const carritoContainer = document.getElementById('carritoContainer');

// funcion creadora de productos en DOM
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

// consulta a la "api" y carga de cards
const pedirDiscos = async () => {
  try{
    const resp = await fetch("../js/discos.json");
    const data = await resp.json();
    data.forEach(element => {
      let productoCompleto = crearCard(element);
    cardContainer.append(productoCompleto);
    });
  }catch{
    console.log("Error");
  }
}
pedirDiscos()

// evento del boton comprar
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
      img: product.img,
      cantidad: 1
    })
  }
  añadirLocalStorage()
}

// creacion del evento que pinta el carrito en el html
verCarrito.addEventListener('click', pintarCarrito)
function pintarCarrito() {
    modalContainer.style.display = "flex"
    modalContainer.innerHTML = '';
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h3>Tu Carrito</h3>
    `;
    modalContainer.append(modalHeader);

    const modalButtonHeader = document.createElement("button");
    modalButtonHeader.className = "modal-header-button btn btn-active";
    modalButtonHeader.innerHTML = "<p>Cerrar</p>";

    modalButtonHeader.addEventListener('click', () => {
      modalContainer.style.display = "none"
    })
    modalHeader.append(modalButtonHeader);

    const total = carrito.reduce((acc, su) => acc + su.precio, 0);
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer w-100 justify-content-around";
    modalFooter.innerHTML = `<p>Total a pagar: $${total}</p>`;
    modalContainer.append(modalFooter);

    const buttonFinCompra = document.createElement("div");
    buttonFinCompra.className = "boton-finalizar-compra";
    buttonFinCompra.innerHTML = `<button class="btn">Finaliza tu compra!</button>`;
    buttonFinCompra.addEventListener('click', () => {
      if (carrito.length >= 1){
        Swal.fire({
          title: `Muchas gracias por confiar en nosotros!
          El precio total de su compra es de ${total} pesos`,
          className: "swal-fin-compra",
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        localStorage.clear()
        carrito = [];
        modalContainer.innerHTML = '';
      }else{
        Swal.fire({
          title: 'Su carrito esta vacio, continue comprando',
          className: "swal-fin-compra",
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
    });
    modalFooter.append(buttonFinCompra);

    const buttonVaciarCarrito = document.createElement("div");
    buttonVaciarCarrito.className = "boton-vaciar-carrito";
    buttonVaciarCarrito.innerHTML = `<button class="btn">Vaciar carrito</button>`
    buttonVaciarCarrito.addEventListener('click', () => {
      Swal.fire({
        title: 'Esta seguro que desea vaciar su carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear()
            carrito = [];
            modalContainer.innerHTML = '';
          Swal.fire(
            'Vacio!',
            'Tu carrito ahora esta vacio!',
            'success'
          )
        }
      })
    })
    modalFooter.append(buttonVaciarCarrito);
    renderCarrito()
    modalContainer.append(modalFooter);
}

function renderCarrito(){
  carrito.forEach((producto) => {
    const itemCarrito = document.createElement("div")
    itemCarrito.classList = "modal-content"
    itemCarrito.innerHTML = `
    <img src="${producto.img}">
    <p>${producto.nombre}</p>
    <p>Precio: $${producto.precio}</p>
    <p>Cantidad: ${producto.cantidad}</p>
    <button onclick="eliminarProducto()" class="botonEliminar btn btn-active">❌</button>
    `
    
    modalContainer.append(itemCarrito)
    })
}

const  eliminarProducto = () =>  {
  const foundId = carrito.find((producto) => producto.id);
  carrito = carrito.filter((carritoFiltrado) => {
    return carritoFiltrado !== foundId;
  })
  añadirLocalStorage();
  pintarCarrito();
}

function añadirLocalStorage(){
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem("carrito"));
  if (storage) {
    carrito = storage;
  }
}

