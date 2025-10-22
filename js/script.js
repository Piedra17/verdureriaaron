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