const PRODUCTOS = [
    {
        id: "foto-01",
        titulo: "Foto 01",
        imagen: "../resources/photographies/01.jpg",
        categoria: {
            nombre: "Cities",
            id: "cities"
        },
        precio: 10
    },
    {
        id: "foto-02",
        titulo: "Foto 02",
        imagen: "../resources/photographies/02.jpg",
        categoria: {
            nombre: "Cities",
            id: "cities"
        },
        precio: 10
    },
    {
        id: "foto-03",
        titulo: "Foto 03",
        imagen: "../resources/photographies/03.jpg",
        categoria: {
            nombre: "Portraits",
            id: "portraits"
        },
        precio: 10
    },
    {
        id: "foto-04",
        titulo: "Foto 04",
        imagen: "../resources/photographies/04.jpg",
        categoria: {
            nombre: "Events",
            id: "events"
        },
        precio: 10
    },
    {
        id: "foto-05",
        titulo: "Foto 05",
        imagen: "../resources/photographies/04.jpg",
        categoria: {
            nombre: "Events",
            id: "events"
        },
        precio: 10
    },
    {
        id: "foto-06",
        titulo: "Foto 06",
        imagen: "../resources/photographies/05.jpg",
        categoria: {
            nombre: "Portraits",
            id: "portraits"
        },
        precio: 10
    }
];

const CONTENEDOR_PRODUCTOS = document.querySelector("#contenedor-productos");
const BOTONES_CATEGORIAS = document.querySelectorAll(".boton-categoria");
const TITULO_PRINCIPAL = document.querySelector("#titulo-principal");

function cargarProductos(productosElegidos){

    CONTENEDOR_PRODUCTOS.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                    <img  class="producto-imagen" src="${producto.imagen}" alt="$(producto.titulo)">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button  class="producto-agregar" id="${producto.id}" >Agregar</button>
                    </div>
                 `;

                 CONTENEDOR_PRODUCTOS.append(div);
    })

}

cargarProductos(PRODUCTOS);

BOTONES_CATEGORIAS.forEach(boton => {
    boton.addEventListener("click", (e) =>{
        debugger
        BOTONES_CATEGORIAS.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const PRODUCTO_CATEGORIA = PRODUCTOS.find(producto => producto.categoria.id === e.currentTarget.id);
            
            TITULO_PRINCIPAL.innerText = PRODUCTO_CATEGORIA.categoria.nombre;

            const PRODUCTOS_BOTON = PRODUCTOS.filter(producto => producto.categoria.id ===e.currentTarget.id);
            cargarProductos(PRODUCTOS_BOTON);
    } else {
        TITULO_PRINCIPAL.innerText = "All Products";
        cargarProductos(PRODUCTOS);
    }
    })
})

