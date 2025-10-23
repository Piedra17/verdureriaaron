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







  //codigo de crear cards de productos 

const contenedorCards = document.querySelector(".contenedorCards");
const contenedorModales = document.querySelector(".productosTodos");

productos.forEach(p => {
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

  // Modal
  const modal = document.createElement("div");
  modal.id = p.modalId;
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-contenido">
      <span class="cerrar" onclick="cerrarModal('${p.modalId}')">×</span>
      <h2>${p.nombre}</h2>
      <p>${p.descripcion}</p>
      <img src="${p.imagen}" alt="${p.nombre}" class="imagen-modal">
    </div>
  `;
  contenedorModales.appendChild(modal)
});

  // Abrir modal según el botón presionado
  document.querySelectorAll(".ver-mas").forEach(boton => {
    boton.addEventListener("click", () => {
      const modalId = boton.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "flex";
    });
  });

  // Cerrar modal por ID
  function cerrarModal(id) {
    document.getElementById(id).style.display = "none";
  }

  // Cerrar al hacer clic fuera del contenido
  window.addEventListener("click", function (e) {
    document.querySelectorAll(".modal").forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });


    /*filtros*/
    const botonesFiltro = document.querySelectorAll(".btn-filtro");
  const cards = document.querySelectorAll(".card-producto");

  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
      // Activar botón
      botonesFiltro.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");

      const categoria = boton.getAttribute("data-categoria");

      cards.forEach(card => {
        const cardCategoria = card.getAttribute("data-categoria");
        if (categoria === "todos" || cardCategoria === categoria) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });