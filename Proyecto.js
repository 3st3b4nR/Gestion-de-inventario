 // alt + 96

      // "Puedes escribir texto"
      // 'puedes escribir texto pero tambien como "encerrar"'
      // `puedes escribir texto pero tambien '' como "encerrar" y puedes poner varaibles entre textos con ${dsdas}`
      const inventario = [];
      let siguienteId = 1;

      function agregarProducto(nombre, stock) {
        if (
          inventario.some(
            (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
          )
        ) {
          alert(
            `El producto con nombre "${nombre}" ya existe en el inventario.`
          );
        } else {
          const producto = {
            id: siguienteId++,
            nombre: nombre,
            stock: stock,
          };
          inventario.push(producto);
          alert(`Producto agregado: ${JSON.stringify(producto)}`);
        }
      }

      function listarProductos() {
        if (inventario.length === 0) {
          alert("No hay productos en el inventario.");
        } else {
          const lista = inventario.map(
            (p) => `ID: ${p.id}, Nombre: ${p.nombre}, Stock: ${p.stock} \n`
          );
          alert(`Productos en el inventario \n` + lista);
        }
      }

      function actualizarStock(nombre, nuevoStock) {
        const producto = inventario.find((p) => p.nombre === nombre);
        if (producto) {
          producto.stock = nuevoStock;
          alert(`Stock actualizado: ${JSON.stringify(producto)}`);
        } else {
          alert(`Producto con nombre ${nombre} no encontrado.`);
        }
      }

      function eliminarProductoPorId(id) {
        const indice = inventario.findIndex((p) => p.id === id);
        if (indice !== -1) {
          const eliminado = inventario.splice(indice, 1);
          alert(`Producto eliminado: ${JSON.stringify(eliminado[0])}`);
        } else {
          alert(`Producto con id ${id} no encontrado.`);
        }
      }

      function eliminarProductoPorNombre(nombre) {
        const indice = inventario.findIndex((p) => p.nombre === nombre);

        if (indice !== -1) {
          const eliminado = inventario.splice(indice, 1);
          alert(`Producto eliminado: ${JSON.stringify(eliminado[0])}`);
        } else {
          alert(
            `El producto con nombre "${nombre}" no existe en el inventario.`
          );
        }
      }

      function buscarProducto(nombre) {
        const resultado = inventario.find(
          (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
        );
        if (resultado) {
          alert(
            "Resultados de la búsqueda:\n" +
              Object.keys(resultado)
                .map((key) => `${key}: ${resultado[key]}`) // Mapea cada clave y su valor
                .join("\n") // Une los resultados con un salto de línea
          );
        } else {
          alert(`No se encontraron productos con el nombre: ${nombre}`);
        }
      }

      document.addEventListener("DOMContentLoaded", () => {
        // ESCUCHA LOS EVENTOS DEL CLIC DEL BOTON AGREGAR
        document.getElementById("btn_agregar").addEventListener("click", () => {
          const nombre = document.getElementById("ProductoP").value;
          const stock = document.getElementById("ProductoStock").value;
          if (nombre.trim() && stock > 0) {
            // agregarProducto(nombre, stock);
            agregarProducto(nombre, stock);
            document.getElementById("ProductoP").value = "";
            document.getElementById("ProductoStock").value = "";
          } else {
            return alert("Debe ingresar el nombre del producto y el stock.");
          }
        });

        // ESCUCHA LOS EVENTOS DEL CLIC DEL BOTON ELIMINAR POR NOMBRE
        document
          .getElementById("btn_eliminar_nombre")
          .addEventListener("click", () => {
            const nombre = document.getElementById("ProductoP").value;
            if (nombre.trim()) {
              eliminarProductoPorNombre(nombre);
              document.getElementById("ProductoP").value = "";
            } else {
              return alert(
                "Debe ingresar el nombre del producto para ser eliminado."
              );
            }
          });

        document
          .getElementById("btn_eliminar_id")
          .addEventListener("click", () => {
            const id = parseInt(
              prompt("Ingrese el id del producto a eliminar:")
            );

            if (!isNaN(id)) {
              eliminarProductoPorId(id);
            } else {
              alert("Debe ingresar un número válido.");
            }
          });

        // listar inventario
        document
          .getElementById("btn_listar")
          .addEventListener("click", listarProductos);

        // actualizar stock desestrutirzar
        document.getElementById("btn_update").addEventListener("click", () => {
          const nombre = document.getElementById("ProductoP").value;
          const stock = document.getElementById("ProductoStock").value;
          if (nombre.trim() && stock >= 0) {
            actualizarStock(nombre, stock);
            document.getElementById("ProductoP").value = "";
            document.getElementById("ProductoStock").value = "";
          } else {
            return alert("Debe ingresar el nombre del producto y el stock.");
          }
        });

        // buscar producto
        document.getElementById("btn_buscar").addEventListener("click", () => {
          const nombre = document.getElementById("ProductoP").value;
          if (nombre.trim()) {
            buscarProducto(nombre);
            document.getElementById("ProductoP").value = "";
          } else {
            return alert("Debe ingresar el nombre del producto a buscar.");
          }
        });
      });


















