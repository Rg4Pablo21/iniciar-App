import { carrito } from "../data.js";
export function resaltarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.classList.toggle('resaltado'); 
        actualizarContador(); 
    }
}

export function eliminarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.remove(); 
        actualizarContador(); 
    }
}

function agregar(){
    carrito.unshift("A");
    iniciarApp();
    alert("Hola")

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