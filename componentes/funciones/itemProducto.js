function producto(item) {
    return `
        <div class="producto" id="producto-${item.id}">
            <img src="${item.imagen}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>Q ${item.precio}.00</p>
            <button onclick="resaltarProducto(${item.id})">Resaltar</button>
            <button onclick="eliminarProducto(${item.id})">Eliminar</button>
        </div>
    `;
}