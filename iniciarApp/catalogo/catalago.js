import { crearheader } from "../header/header.js";
import { dataproductos } from "../data.js";

crearheader();

function cargarProductos() {
    let contenedor = document.createElement("div");
    contenedor.className = "contenedor-productos";

    dataproductos.forEach(producto => {
        let item = document.createElement("div");
        item.className = "producto";
        item.dataset.id = producto.id; 

        let nombre = document.createElement("p");
        nombre.textContent = producto.nombre;

        let precio = document.createElement("p");
        precio.textContent = `Q ${producto.precio}`;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "btn-eliminar";

        botonEliminar.addEventListener("click", () => eliminarProducto(producto.id, item));

        item.appendChild(nombre);
        item.appendChild(precio);
        item.appendChild(botonEliminar);
        contenedor.appendChild(item);
    });

    document.body.appendChild(contenedor);
}

function eliminarProducto(id, elemento) {
    dataproductos = dataproductos.filter(producto => producto.id !== id);
    elemento.remove(); 
}

cargarProductos();
