export function crearheader() {
    let header = document.createElement("header");
    header.className = "Header";

    let titulo = document.createElement("h1");
    titulo.className = "Titulo";
    titulo.textContent = "Productos";

    header.appendChild(titulo);
    document.body.appendChild(header); 
}
