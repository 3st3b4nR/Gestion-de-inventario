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


function actualizarStock(id, nuevoStock) {
    const producto = inventario.find(p => p.id === id);
    if (producto) {
        producto.stock = nuevoStock;
        console.log(`Stock actualizado: ${JSON.stringify(producto)}`);
    } else {
        console.log(`Producto con id ${id} no encontrado.`);
    }
}

function eliminarProducto(id) {
    const indice = inventario.findIndex(p => p.id === id);
    if (indice !== -1) {
        const eliminado = inventario.splice(indice, 1);
        console.log(`Producto eliminado: ${JSON.stringify(eliminado[0])}`);
    } else {
        console.log(`Producto con id ${id} no encontrado.`);
    }
}



// [{},{},{},{}]
// splice > [{}]
//             1
//  0,1,2,3,4,5,6

//  const posicion1 = eliminado[0]
// find => encuentre


















