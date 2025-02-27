function eliminarProducto(id) {
    const index = dataProductos.findIndex(producto => producto.id === id);
    if (index !== -1) {
        dataProductos.splice(index, 1);
        cargarProductos();
    }
}

function resaltarProducto(id) {
    const productos = document.querySelectorAll(".producto");
    productos.forEach(producto => producto.classList.remove("resaltado"));

    const productoResaltado = document.querySelector(`[data-id="${id}"]`);
    if (productoResaltado) {
        productoResaltado.classList.add("resaltado");
    }
}
