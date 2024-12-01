// Variable global para almacenar los datos de las cabañas
let cabanas = [];

// Función para cargar los datos de las cabañas desde el JSON
async function cargarCabanas() {
    try {
        const response = await fetch('data/cabanas.json');
        cabanas = await response.json();
        mostrarCabanas();
    } catch (error) {
        console.error('Error al cargar las cabañas:', error);
    }
}

// Función para mostrar las cabañas
function mostrarCabanas(cabanasFiltradas = cabanas) {
    const cabanasGrid = document.getElementById('cabanas-grid');
    if (!cabanasGrid) return;
    
    cabanasGrid.innerHTML = '';
    
    cabanasFiltradas.forEach(cabana => {
        const cabanaElement = document.createElement('div');
        cabanaElement.className = 'bg-white rounded-lg shadow-md overflow-hidden';
        cabanaElement.innerHTML = `
            <img src="${cabana.imagen}" alt="${cabana.nombre}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-semibold mb-2">${cabana.nombre}</h3>
                <p class="text-gray-600 mb-2">Capacidad: ${cabana.capacidad} personas</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${cabana.amenities.slice(0, 4).map(amenity => `
                        <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                            <i class="fas fa-${getAmenityIcon(amenity)} mr-1"></i>${amenity}
                        </span>
                    `).join('')}
                </div>
                <button class="ver-detalles px-4 py-2 bg-brand-primary text-white rounded hover:bg-brand-primary-dark transition duration-300" data-id="${cabana.id}">Ver Detalles</button>
            </div>
        `;
        cabanasGrid.appendChild(cabanaElement);
    });

    // Agregar event listeners a los botones "Ver Detalles"
    document.querySelectorAll('.ver-detalles').forEach(button => {
        button.addEventListener('click', (e) => {
            const cabanaId = parseInt(e.target.getAttribute('data-id'));
            const cabana = cabanas.find(c => c.id === cabanaId);
            if (cabana) {
                mostrarDetallesCabana(cabana);
            }
        });
    });
}

// Función para obtener el icono de amenidad
function getAmenityIcon(amenity) {
    const icons = {
        'wifi': 'wifi',
        'estacionamiento': 'parking',
        'cocina': 'utensils',
        'aire-acondicionado': 'snowflake',
        'chimenea': 'fire',
        'jacuzzi': 'hot-tub',
        'parrilla': 'grill',
        'piscina': 'swimming-pool'
    };
    return icons[amenity] || 'check';
}

// Función para mostrar detalles de la cabaña en el modal
function mostrarDetallesCabana(cabana) {
    const modal = document.getElementById('cabana-modal');
    const title = document.getElementById('modal-title');
    const image = document.getElementById('modal-image');
    const description = document.getElementById('modal-description');
    const amenities = document.getElementById('modal-amenities');
    const capacity = document.getElementById('modal-capacity');
    const location = document.getElementById('modal-location');
    const price = document.getElementById('modal-price');
    const size = document.getElementById('modal-size');

    title.textContent = cabana.nombre;
    image.src = cabana.imagen;
    image.alt = cabana.nombre;
    description.textContent = cabana.descripcion;
    amenities.innerHTML = cabana.amenities.map(amenity => `
        <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
            <i class="fas fa-${getAmenityIcon(amenity)} mr-1"></i>${amenity}
        </span>
    `).join('');
    capacity.textContent = `${cabana.capacidad} personas`;
    location.textContent = cabana.ubicacion.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    price.textContent = cabana.precio;
    size.textContent = cabana.tamaño;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Event listener para cerrar el modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('cabana-modal').classList.add('hidden');
    document.getElementById('cabana-modal').classList.remove('flex');
});

// Función para filtrar cabañas
function filtrarCabanas() {
    const ubicacion = document.getElementById('ubicacion').value;
    const capacidad = document.getElementById('capacidad').value;

    const cabanasFiltradas = cabanas.filter(cabana => {
        const ubicacionMatch = ubicacion === 'todas' || cabana.ubicacion === ubicacion;
        const capacidadMatch = capacidad === 'todas' || cabana.capacidad >= parseInt(capacidad);
        return ubicacionMatch && capacidadMatch;
    });

    mostrarCabanas(cabanasFiltradas);
}

// Event listeners para los filtros
document.getElementById('ubicacion').addEventListener('change', filtrarCabanas);
document.getElementById('capacidad').addEventListener('change', filtrarCabanas);

// Función para filtrar la galería
function filtrarGaleria(filtro) {
    const items = document.querySelectorAll('.galeria-item');
    items.forEach(item => {
        if (filtro === 'todas' || item.dataset.categoria === filtro) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Actualizar estilos de los botones de filtro
    document.querySelectorAll('.filtro-galeria').forEach(btn => {
        if (btn.dataset.filter === filtro) {
            btn.classList.add('bg-brand-primary', 'text-white');
            btn.classList.remove('bg-gray-300', 'text-gray-700');
        } else {
            btn.classList.remove('bg-brand-primary', 'text-white');
            btn.classList.add('bg-gray-300', 'text-gray-700');
        }
    });
}

// Event listeners para los botones de filtro de la galería
document.querySelectorAll('.filtro-galeria').forEach(btn => {
    btn.addEventListener('click', () => {
        const filtro = btn.dataset.filter;
        filtrarGaleria(filtro);
    });
});

// Función para inicializar Swipers
function initializeSwipers() {
    new Swiper('.top-banner-swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000,
        },
    });

    new Swiper('.hero-swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    new Swiper('.resenas-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

// Función para manejar el menú móvil
function handleMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Función para manejar el formulario de contacto
function handleContactForm() {
    const form = document.getElementById('contactForm');
    const cabanaSelect = document.getElementById('cabana');

    // Poblar el select de cabañas
    cabanas.forEach(cabana => {
        const option = document.createElement('option');
        option.value = cabana.id;
        option.textContent = cabana.nombre;
        cabanaSelect.appendChild(option);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        form.reset();
    });
}

// Función para manejar el formulario de newsletter
function handleNewsletterForm() {
    const form = document.getElementById('newsletterForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para suscribir al newsletter
        alert('Gracias por suscribirte a nuestro boletín.');
        form.reset();
    });
}

// Función de inicialización
async function init() {
    await cargarCabanas();
    initializeSwipers();
    handleMobileMenu();
    handleContactForm();
    handleNewsletterForm();
    filtrarGaleria('todas'); // Inicializar la galería mostrando todas las imágenes
}

// Ejecutar la función de inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);

