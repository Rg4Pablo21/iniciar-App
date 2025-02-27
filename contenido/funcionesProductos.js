export function resaltarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.classList.toggle('resaltado'); 
        actualizarContador();  // Asegúrate de que esta función existe
    }
}

export function eliminarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.remove(); 
        actualizarContador();  // Asegúrate de que esta función existe
    }
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-eliminar')) {
        const producto = event.target.closest('.producto');
        if (producto) {
            const id = producto.getAttribute('data-id');
            eliminarProducto(id);
        }
    }
});