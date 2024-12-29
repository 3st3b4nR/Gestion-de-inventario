const inventario = [];
let siguienteId = 1;

function agregarProducto(producto) {
    if (inventario.some(p => p.nombre.toLowerCase() === producto.nombre.toLowerCase())) {
        console.log(`El producto con nombre "${producto.nombre}" ya existe en el inventario.`);
    } else {
        producto.id = siguienteId++;
        inventario.push(producto);
        console.log(`Producto agregado: ${JSON.stringify(producto)}`);
    }
}

function listarProductos() {
    if (inventario.length === 0) {
        console.log("No hay productos en el inventario.");
    } else {
        console.log("Productos en el inventario:");
        inventario.forEach(producto => console.log(producto));
    }
}