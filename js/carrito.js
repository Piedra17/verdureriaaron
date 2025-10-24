const contador = document.getElementById("contadorCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const carritoModal = document.getElementById("carritoModal");
let carrito = [];

// Cargar carrito desde localStorage si no ha expirado
const guardado = JSON.parse(localStorage.getItem("carritoGuardado"));
if (guardado && Date.now() - guardado.timestamp < 3600000) {
  carrito = guardado.items;
  actualizarCarrito();
} else {
  localStorage.removeItem("carritoGuardado");
}

// Guardar en localStorage con timestamp
function guardarCarrito() {
  localStorage.setItem("carritoGuardado", JSON.stringify({
    items: carrito,
    timestamp: Date.now()
  }));
}

// Agregar producto al carrito (solo si no existe)
document.querySelectorAll(".agregaCarrito").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card-producto");
    const nombre = card.querySelector(".nombre-producto").textContent;
    const imagen = card.querySelector(".imagen-producto").getAttribute("src");

    const existente = carrito.find(p => p.nombre === nombre);
    if (existente) {
      alert("Este producto ya está en el carrito. Puedes cambiar la cantidad desde el carrito.");
    } else {
      carrito.push({ nombre, cantidad: 1, imagen });
      actualizarCarrito();
      guardarCarrito();
    }
  });
});

// Actualizar contenido del carrito
function actualizarCarrito() {
  contador.textContent = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  listaCarrito.innerHTML = "";

  carrito.forEach((p, index) => {
    const tr = document.createElement("tr");
    tr.className = "carrito-item";
    tr.innerHTML = `
      <td class="imagen-carrito"><img src="${p.imagen}" alt="${p.nombre}"></td>
      <td class="nombreProductos"><span>${p.nombre}</span></td>
      <td><input type="number" min="1" value="${p.cantidad}" data-index="${index}"></td>
      <td class="botonEliminarProduc">
        <button class="eliminar-producto" data-index="${index}" style="margin-left:10px; background:red; color:white;">Eliminar</button>
      </td>
    `;
    listaCarrito.appendChild(tr);
  });

  // Cambiar cantidad
  listaCarrito.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", () => {
      const i = input.dataset.index;
      const nuevaCantidad = parseInt(input.value);
      carrito[i].cantidad = nuevaCantidad > 0 ? nuevaCantidad : 1;
      actualizarCarrito();
      guardarCarrito();
    });
  });

  // Eliminar producto
  listaCarrito.querySelectorAll(".eliminar-producto").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = btn.dataset.index;
      carrito.splice(i, 1);
      actualizarCarrito();
      guardarCarrito();
    });
  });
}

// Abrir y cerrar modal
document.getElementById("abrirCarrito").addEventListener("click", (e) => {
  e.preventDefault();
  carritoModal.style.display = "flex";
});

document.getElementById("cerrarCarrito").addEventListener("click", () => {
  carritoModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === carritoModal) carritoModal.style.display = "none";
});

// Finalizar compra por WhatsApp
document.getElementById("finalizarCompra").addEventListener("click", () => {
  const mensaje = carrito.map(p => `• ${p.nombre} x ${p.cantidad}`).join('%0A');
  const url = `https://wa.me/50688853533?text=Hola! Quiero comprar:%0A${mensaje}`;
  window.open(url, '_blank');
});
