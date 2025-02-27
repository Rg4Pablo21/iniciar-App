import { cargarProductos } from './contenido/catalogo.js';
import { mostrarMenu } from './contenido/header/header.js';

function iniciarApp() {
    let app = document.querySelector("#root");

    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    let header = document.createElement('header');
    header.innerHTML = `
        <h1>PRODUCTOS</h1>
        <div id="contador-productos"></div>
    `;
    contenedor.appendChild(header);

    let divProductos = document.createElement('div');
    divProductos.id = "contenedor-productos";
    divProductos.className = "div_productos";
    contenedor.appendChild(divProductos);


    app.appendChild(contenedor);

    cargarProductos();
    mostrarMenu();
}

document.addEventListener('DOMContentLoaded', iniciarApp);