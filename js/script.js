const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const icon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times', 'animate-x');
  } else {
    icon.classList.remove('fa-times', 'animate-x');
    icon.classList.add('fa-bars');
  }
});

// Espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", function () {
  const currentURL = window.location.pathname.split("/").pop(); // obtiene el nombre del archivo
  const menuLinks = document.querySelectorAll(".nav-menu a");

  menuLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentURL || (linkHref === "index.html" && currentURL === "")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop().toLowerCase();

    // Primero: activar el link según la página
    navLinks.forEach(link => {
      const href = link.getAttribute("href").toLowerCase();

      if ((href === currentPage) || (href === "index.html" && (currentPage === "" || currentPage === "index.html"))) {
        link.classList.add("active");
      } else if (currentPage !== "index.html" && href.startsWith("#")) {
        // Desactiva links con # si no estamos en index.html
        link.classList.remove("active");
      }
    });

    // Segundo: Si estamos en index.html, activa también según scroll
    if (currentPage === "" || currentPage === "index.html") {
      const sections = document.querySelectorAll("section[id]");

      function setActiveSection() {
        let currentSection = "";

        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
          }
        });

        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          link.classList.remove("active");

          if (href === `#${currentSection}`) {
            link.classList.add("active");
          }

          // Reactiva el "Inicio" si estamos arriba
          if (window.scrollY === 0 && href === "index.html") {
            link.classList.add("active");
          }
        });
      }

      window.addEventListener("scroll", setActiveSection);
      setActiveSection(); // Llamar al cargar
    }
  });


/* cambiar el color */
    document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("header");
    const productosSection = document.getElementById("productos");

    function toggleNavDark() {
      const productosTop = productosSection.offsetTop;
      const scrollPos = window.scrollY;

      if (scrollPos >= productosTop) {
        nav.classList.add("nav-dark");
      } else {
        nav.classList.remove("nav-dark");
      }
    }

    window.addEventListener("scroll", toggleNavDark);
    toggleNavDark(); // Ejecutar al cargar
  });


  /*abrir y cerrar modal*/
  function abrirModal() {
    document.getElementById("modalProducto").style.display = "flex";
  }

  function cerrarModal() {
    document.getElementById("modalProducto").style.display = "none";
  }






const contenedorCards = document.querySelector(".contenedorCards");
const contenedorModales = document.querySelector(".productosTodos");
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const paginacion = document.querySelector(".paginacion");

// Variables de control
const productosPorPagina = 15;
let paginaActual = 1;
let productosFiltrados = [...productos]; // Por defecto, muestra todos

// --- Renderizar Cards ---
function renderizarCards(pagina = 1) {
  contenedorCards.innerHTML = "";

  const inicio = (pagina - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productosFiltrados.slice(inicio, fin);

  productosPagina.forEach(p => {
    // Card
    const card = document.createElement("div");
    card.className = "card-producto";
    card.setAttribute("data-categoria", p.categoria);
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}" class="imagen-producto">
      <div class="info-hover">
        <button class="ver-mas" data-modal="${p.modalId}"><i class="fa-solid fa-eye"></i></button>
      </div>
      <div class="carrito">
        <button class="agregaCarrito" data-modal="${p.modalId}"><i class="fa-solid fa-basket-shopping"></i></button>
      </div>
      <h3 class="nombre-producto">${p.nombre}</h3>
    `;
    contenedorCards.appendChild(card);

    // Modal (solo si no existe)
    if (!document.getElementById(p.modalId)) {
      const modal = document.createElement("div");
      modal.id = p.modalId;
      modal.className = "modal";
      modal.innerHTML = `
        <div class="modal-contenido">
          <span class="cerrarM" onclick="cerrarModal('${p.modalId}')">×</span>
          <h3 class="h3">${p.nombre}</h3>
          <p class="parrafo">${p.descripcion}</p>
          <img src="${p.imagen}" alt="${p.nombre}" class="imagen-modal">
        </div>
      `;
      contenedorModales.appendChild(modal);
    }
  });

  activarEventosModales();
}

// --- Activar modales ---
function activarEventosModales() {
  document.querySelectorAll(".ver-mas").forEach(boton => {
    boton.addEventListener("click", () => {
      const modalId = boton.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "flex";
    });
  });
}

function cerrarModal(id) {
  document.getElementById(id).style.display = "none";
}

window.addEventListener("click", function (e) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});

// --- Crear paginación ---
function crearPaginacion() {
  paginacion.innerHTML = "";

  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  if (totalPaginas <= 1) return; // No mostrar si solo hay una página

  // Botón Anterior
  const btnAnterior = document.createElement("button");
  btnAnterior.textContent = "Anterior";
  btnAnterior.disabled = paginaActual === 1;
  btnAnterior.classList.add('btnSiguete')
  btnAnterior.addEventListener("click", () => {
    if (paginaActual > 1) {
      paginaActual--;
      renderizarCards(paginaActual);
      crearPaginacion();
    }
  });
  paginacion.appendChild(btnAnterior);

  // Números de página
  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add('numerosPaginas');
    btn.classList.toggle("activo", i === paginaActual);
    btn.addEventListener("click", () => {
      paginaActual = i;
      renderizarCards(paginaActual);
      crearPaginacion();
    });
    paginacion.appendChild(btn);
  }

  // Botón Siguiente
  const btnSiguiente = document.createElement("button");
  btnSiguiente.textContent = "Siguiente";
  btnSiguiente.classList.add('btnSiguete');
  btnSiguiente.disabled = paginaActual === totalPaginas;
  btnSiguiente.addEventListener("click", () => {
    if (paginaActual < totalPaginas) {
      paginaActual++;
      renderizarCards(paginaActual);
      crearPaginacion();
    }
  });
  paginacion.appendChild(btnSiguiente);
}

// --- Filtros ---
botonesFiltro.forEach(boton => {
  boton.addEventListener("click", () => {
    // Activar visualmente
    botonesFiltro.forEach(b => b.classList.remove("activo"));
    boton.classList.add("activo");

    const categoria = boton.getAttribute("data-categoria");

    if (categoria === "todos") {
      productosFiltrados = [...productos];
    } else {
      productosFiltrados = productos.filter(p => p.categoria === categoria);
    }

    paginaActual = 1; // Reiniciar página
    renderizarCards(paginaActual);
    crearPaginacion();
  });
});

// --- Inicialización ---
renderizarCards();
crearPaginacion();
