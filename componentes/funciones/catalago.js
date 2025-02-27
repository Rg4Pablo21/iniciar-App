document.addEventListener("DOMContentLoaded", () => {
    const contenedorProductos = document.getElementById("contenedor-productos");
    if (!contenedorProductos) {
        console.error("No se encontró el contenedor de productos");
        return;
    }
    
    productos.forEach(prod => {
        const item = producto(prod);
        contenedorProductos.appendChild(item);
        item.addEventListener("click", () => resaltarProducto(prod.id));
    });
});
