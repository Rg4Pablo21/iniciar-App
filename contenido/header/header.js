function mostrarMenu() {
    const contador = document.getElementById('contador-productos');
    const productosResaltados = document.querySelectorAll('.resaltado').length;
    contador.textContent = `Productos en General: ${productosResaltados}`;

    const header = document.querySelector('header');
    if (header && !document.getElementById('logo-supermercado')) {
        const logo = document.createElement('img');
        logo.src = "https://static.vecteezy.com/system/resources/previews/005/766/127/non_2x/supermarket-shop-logo-vector.jpg";
        logo.alt = "Logo del supermercado";
        logo.id = "logo-supermercado";

        header.prepend(logo); 
    }
}

export { mostrarMenu };