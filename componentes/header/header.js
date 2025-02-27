function mostrarMenu() {
    const menu = document.getElementById("menu-productos");
    menu.innerHTML = `Productos marcados: ${dataProductos.length}`;
}
