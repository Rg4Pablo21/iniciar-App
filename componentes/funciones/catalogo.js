function cargarProductos() {
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = "";

    dataProductos.forEach(producto => {
        contenedor.appendChild(crearProducto(producto));
    });
}
