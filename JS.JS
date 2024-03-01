

let carrito = [];

//esto hace que pueda añadir productos al carrito :)
function agregarAlCarrito(producto, precio) {
    carrito.push({ nombre: producto, precio: precio });
    actualizarCarrito();
}


function omCarrito() {
    let carritoElemento = document.getElementById('carritoProductos');
    if (carritoElemento.style.display === "none") {
        carritoElemento.style.display = "block";
        actualizarCarrito(); // Llama a función para actualizar la lista
    } else {
        carritoElemento.style.display = "none";
    }
}
function actualizarCarrito() {
    let carritoElemento = document.getElementById('carritoProductos');
    carritoElemento.innerHTML = ''; // Borra el contenido actual antes de actualizar 👍
    carrito.forEach(item => {
        let productoElemento = document.createElement('div');
        productoElemento.textContent = `${item.nombre} - RD$${item.precio}`;
        carritoElemento.appendChild(productoElemento);
    });
}
