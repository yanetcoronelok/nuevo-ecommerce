const PRODUCTOS = [
    {
        id: "foto-01",
        titulo: "Foto 01",
        imagen: "../resources/photographies/01.jpg",
        categoria: {
            nombre: "cities",
            id: "cities"
        },
        precio: 10
    },
    {
        id: "foto-02",
        titulo: "Foto 02",
        imagen: "../resources/photographies/02.jpg",
        categoria: {
            nombre: "cities",
            id: "cities"
        },
        precio: 10
    },
    {
        id: "foto-03",
        titulo: "Foto 03",
        imagen: "../resources/photographies/03.jpg",
        categoria: {
            nombre: "portraits",
            id: "portraits"
        },
        precio: 10
    },
    {
        id: "foto-04",
        titulo: "Foto 04",
        imagen: "../resources/photographies/04.jpg",
        categoria: {
            nombre: "events",
            id: "events"
        },
        precio: 10
    },
    {
        id: "foto-05",
        titulo: "Foto 05",
        imagen: "../resources/photographies/04.jpg",
        categoria: {
            nombre: "events",
            id: "events"
        },
        precio: 10
    },
    {
        id: "foto-06",
        titulo: "Foto 06",
        imagen: "../resources/photographies/05.jpg",
        categoria: {
            nombre: "portraits",
            id: "portraits"
        },
        precio: 10
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos(){

    PRODUCTOS.forEach(producto => {

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

        contenedorProductos.append(div);
    })

}

cargarProductos();