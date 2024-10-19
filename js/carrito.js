PRODUCTOS_EN_CARRITO = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];


const CONTENEDOR_CARRITO_VACIO = document.querySelector("#carrito-vacio");
const CONTENEDOR_CARRITO_PRODUCTOS = document.querySelector("#carrito-productos");
const CONTENEDOR_CARRITO_ACCIONES = document.querySelector("#carrito-acciones");
const CONTENEDOR_CARRITO_COMPRADO = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const BOTON_VACIAR = document.querySelector("#carrito-acciones-vaciar");
const CONTENEDOR_TOTAL = document.querySelector("#total");
const BOTON_COMPRAR = document.querySelector("#carrito-acciones-comprar")


function cargarProductosCarrito() {

    if (PRODUCTOS_EN_CARRITO && PRODUCTOS_EN_CARRITO.length > 0) {

        CONTENEDOR_CARRITO_VACIO.classList.add("disabled");
        CONTENEDOR_CARRITO_PRODUCTOS.classList.remove("disabled");
        CONTENEDOR_CARRITO_ACCIONES.classList.remove("disabled");
        CONTENEDOR_CARRITO_COMPRADO.classList.add("disabled");

        CONTENEDOR_CARRITO_PRODUCTOS.innerHTML = "";

        PRODUCTOS_EN_CARRITO.forEach(PRODUCTOS => {

            const DIV = document.createElement("DIV");
            DIV.classList.add("carrito-producto")
            DIV.innerHTML = `
              <img class="carrito-producto-imagen" src="${PRODUCTOS.imagen}" alt="${PRODUCTOS.titulo}" />
              <div class="carrito-producto-titulo">
                <small>${PRODUCTOS.titulo}</small>
                <h3>Foto1</h3>
              </div>
              <div class="carrito-producto-cantidad">
                <small>Quantity</small>
                <p>${PRODUCTOS.cantidad}</p>
              </div>
              <div class="carrito-producto-precio">
                <small>Price</small>
                <p>${PRODUCTOS.precio}</p>
              </div>
              <div class="carrito-producto-subtotal">
                <small>Subtotal</small>
                <p>${PRODUCTOS.precio * PRODUCTOS.cantidad}</p>
              </div>
              <button class="carrito-producto-eliminar" id="${PRODUCTOS.id}">
                <i class="bi bi-trash3"></i>
              </button>
        `;

            CONTENEDOR_CARRITO_PRODUCTOS.append(DIV);
        });


    } else {

        CONTENEDOR_CARRITO_VACIO.classList.remove("disabled");
        CONTENEDOR_CARRITO_PRODUCTOS.classList.add("disabled");
        CONTENEDOR_CARRITO_ACCIONES.classList.add("disabled");
        CONTENEDOR_CARRITO_COMPRADO.classList.add("disabled");

    };

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito()



function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
};

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = PRODUCTOS_EN_CARRITO.findIndex(producto => producto.id === idBoton);

 
    PRODUCTOS_EN_CARRITO.splice(index, 1);
    cargarProductosCarrito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(PRODUCTOS_EN_CARRITO));
}

BOTON_VACIAR.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    PRODUCTOS_EN_CARRITO.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(PRODUCTOS_EN_CARRITO));
    cargarProductosCarrito()
}

function actualizarTotal() {
    const TOTAL_CALCULADO = PRODUCTOS_EN_CARRITO.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${TOTAL_CALCULADO}`;
}

BOTON_COMPRAR.addEventListener("click", comprarCarrito);

function comprarCarrito() {
    PRODUCTOS_EN_CARRITO.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(PRODUCTOS_EN_CARRITO));
    
    CONTENEDOR_CARRITO_VACIO.classList.add("disabled");
    CONTENEDOR_CARRITO_PRODUCTOS.classList.add("disabled");
    CONTENEDOR_CARRITO_ACCIONES.classList.add("disabled");
    CONTENEDOR_CARRITO_COMPRADO.classList.remove("disabled");
}
