/* ══════════════════════════════════════
   CONFIGURACIÓN
══════════════════════════════════════ */
console.log('script.js cargado');
const URL_PRODUCTOS = 'https://verduleria-api-nycc.onrender.com/api/products';
const PRODUCTOS_POR_PAGINA = 15;

/* ══════════════════════════════════════
   ESTADO GLOBAL
══════════════════════════════════════ */
let todosLosProductos = [];
let productosFiltrados = [];
let paginaActual = 1;

/* ══════════════════════════════════════
   ELEMENTOS DEL DOM
══════════════════════════════════════ */
const contenedorCards   = document.querySelector('.contenedorCards');
const contenedorModales = document.querySelector('.contenedorModales');
const botonesFiltro     = document.querySelectorAll('.btn-filtro');
const paginacion        = document.querySelector('.paginacion');

/* ══════════════════════════════════════
   API — CARGAR PRODUCTOS
══════════════════════════════════════ */
async function cargarProductos() {
    try {
        contenedorCards.innerHTML = `
            <div class="loading">
                <p>Cargando productos...</p>
            </div>`;

        const res = await fetch(URL_PRODUCTOS);

        if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);

        const data = await res.json();

        // El backend devuelve { success, productos: [...] }, no un array directo
        const listaProductos = Array.isArray(data) ? data : (data.productos ?? []);
      console.log('DATA RECIBIDA:', data);
        todosLosProductos  = listaProductos;
        productosFiltrados = [...listaProductos];

        renderizarCards(1);
        crearPaginacion();

    } catch (error) {
        console.error('Error al cargar productos:', error);
        contenedorCards.innerHTML = `
            <div class="error-carga">
                <p>No se pudieron cargar los productos. Intenta de nuevo.</p>
                <button onclick="cargarProductos()">Reintentar</button>
            </div>`;
    }
}

/* ══════════════════════════════════════
   RENDERIZAR CARDS
══════════════════════════════════════ */
function renderizarCards(pagina = 1) {
    paginaActual = pagina;
    contenedorCards.innerHTML = '';
    contenedorModales.innerHTML = '';

    const inicio = (pagina - 1) * PRODUCTOS_POR_PAGINA;
    const fin    = inicio + PRODUCTOS_POR_PAGINA;
    const productosPagina = productosFiltrados.slice(inicio, fin);

    if (productosPagina.length === 0) {
        contenedorCards.innerHTML = `
            <div class="sin-resultados">
                <p>No hay productos en esta categoría.</p>
            </div>`;
        return;
    }

    productosPagina.forEach(producto => {
        crearCard(producto);
        crearModal(producto);
    });

    activarEventosModales();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════════════
   CREAR CARD
══════════════════════════════════════ */
function crearCard(producto) {
    const card = document.createElement('div');
    card.className = 'card-producto';
    card.setAttribute('data-categoria', producto.categoria);

    card.innerHTML = `
        <img 
            src="${producto.image_path}" 
            alt="${producto.nombre}" 
            class="imagen-producto"
            onerror="this.src='img/placeholder.png'"
        >
        <div class="info-hover">
            <button class="ver-mas" data-modal="${producto.modal_id}">
                <i class="fa-solid fa-eye"></i>
            </button>
        </div>
        <div class="carrito">
            <button class="agregaCarrito" data-modal="${producto.modal_id}">
                <i class="fa-solid fa-basket-shopping"></i>
            </button>
        </div>
        <h3 class="nombre-producto">${producto.nombre}</h3>
        <h3 class="nombre-producto">Precio:${producto.precio}</h3>
    `;

    contenedorCards.appendChild(card);
}

/* ══════════════════════════════════════
   CREAR MODAL
══════════════════════════════════════ */
function crearModal(producto) {
    if (document.getElementById(producto.modal_id)) return;

    const modal = document.createElement('div');
    modal.id        = producto.modal_id;
    modal.className = 'modal';

    modal.innerHTML = `
        <div class="modal-contenido">
            <span class="cerrarM" onclick="cerrarModal('${producto.modal_id}')">×</span>
            <h3 class="h3">${producto.nombre}</h3>
            <img 
                src="${producto.image_path}" 
                alt="${producto.nombre}" 
                class="imagen-modal"
                onerror="this.src='img/placeholder.png'"
            >
            <p class="parrafo">${producto.descripcion ?? 'Sin descripción disponible.'}</p>
        </div>
    `;

    contenedorModales.appendChild(modal);
}

/* ══════════════════════════════════════
   MODALES — ABRIR / CERRAR
══════════════════════════════════════ */
function activarEventosModales() {
    document.querySelectorAll('.ver-mas').forEach(boton => {
        boton.addEventListener('click', () => {
            const id = boton.getAttribute('data-modal');
            const modal = document.getElementById(id);
            if (modal) modal.style.display = 'flex';
        });
    });
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none';
}

function abrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'flex';
}

// Cerrar al hacer click fuera del modal
window.addEventListener('click', (e) => {
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) modal.style.display = 'none';
    });
});

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});

/* ══════════════════════════════════════
   PAGINACIÓN
══════════════════════════════════════ */
function crearPaginacion() {
    paginacion.innerHTML = '';

    const totalPaginas = Math.ceil(productosFiltrados.length / PRODUCTOS_POR_PAGINA);
    if (totalPaginas <= 1) return;

    // Botón anterior
    const btnAnterior = document.createElement('button');
    btnAnterior.textContent = 'Anterior';
    btnAnterior.classList.add('btnSiguete');
    btnAnterior.disabled = paginaActual === 1;
    btnAnterior.addEventListener('click', () => {
        if (paginaActual > 1) {
            paginaActual--;
            renderizarCards(paginaActual);
            crearPaginacion();
        }
    });
    paginacion.appendChild(btnAnterior);

    // Números de página
    for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.classList.add('numerosPaginas');
        btn.classList.toggle('activo', i === paginaActual);
        btn.addEventListener('click', () => {
            paginaActual = i;
            renderizarCards(paginaActual);
            crearPaginacion();
        });
        paginacion.appendChild(btn);
    }

    // Botón siguiente
    const btnSiguiente = document.createElement('button');
    btnSiguiente.textContent = 'Siguiente';
    btnSiguiente.classList.add('btnSiguete');
    btnSiguiente.disabled = paginaActual === totalPaginas;
    btnSiguiente.addEventListener('click', () => {
        if (paginaActual < totalPaginas) {
            paginaActual++;
            renderizarCards(paginaActual);
            crearPaginacion();
        }
    });
    paginacion.appendChild(btnSiguiente);
}

/* ══════════════════════════════════════
   FILTROS POR CATEGORÍA
══════════════════════════════════════ */
botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesFiltro.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');

        const categoria = boton.getAttribute('data-categoria');

        productosFiltrados = categoria === 'todos'
            ? [...todosLosProductos]
            : todosLosProductos.filter(p => p.categoria === categoria);

        paginaActual = 1;
        renderizarCards(1);
        crearPaginacion();
    });
});

/* ══════════════════════════════════════
   NAVBAR — HAMBURGUESA
══════════════════════════════════════ */
const menuToggle = document.getElementById('menu-toggle');
const navMenu    = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    const icon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        if (icon.classList.contains('fa-bars')) {
            icon.classList.replace('fa-bars', 'fa-times');
            icon.classList.add('animate-x');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            icon.classList.remove('animate-x');
        }
    });
}

/* ══════════════════════════════════════
   NAVBAR — LINK ACTIVO
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    const navLinks   = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();
    const esIndex     = currentPage === '' || currentPage === 'index.html';

    // Activar link según página actual
    navLinks.forEach(link => {
        const href = link.getAttribute('href').toLowerCase();
        const esLinkActivo =
            href === currentPage ||
            (esIndex && (href === 'index.html' || href === './'));

        link.classList.toggle('active', esLinkActivo);
    });

    // Activar por scroll solo en index
    if (esIndex) {
        const sections = document.querySelectorAll('section[id]');

        function actualizarLinkActivo() {
            let seccionActual = '';

            sections.forEach(sec => {
                if (window.scrollY >= sec.offsetTop - sec.offsetHeight / 3) {
                    seccionActual = sec.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                link.classList.remove('active');

                if (href === `#${seccionActual}`) {
                    link.classList.add('active');
                }

                if (window.scrollY === 0 && href === 'index.html') {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', actualizarLinkActivo);
        actualizarLinkActivo();
    }
});

/* ══════════════════════════════════════
   NAVBAR — COLOR AL HACER SCROLL
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    const header           = document.getElementById('header');
    const productosSection = document.getElementById('productos');

    if (!header || !productosSection) return;

    function toggleNavDark() {
        const productosTop = productosSection.offsetTop;
        header.classList.toggle('nav-dark', window.scrollY >= productosTop);
    }

    window.addEventListener('scroll', toggleNavDark);
    toggleNavDark();
});

/* ══════════════════════════════════════
   INICIALIZACIÓN
══════════════════════════════════════ */
cargarProductos();