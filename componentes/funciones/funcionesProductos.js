function resaltarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.classList.toggle("resaltado");
        productosResaltados += producto.classList.contains("resaltado") ? 1 : -1;
        contador.textContent = `Productos en General: ${productosResaltados}`;
    }
}