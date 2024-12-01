// Datos de las cabañas
const cabanas = [
    {
        id: 1,
        nombre: "Cabaña del Bosque",
        ubicacion: "villa-del-dique",
        capacidad: 4,
        descripcion: "Hermosa cabaña rodeada de bosque nativo, ideal para familias.",
        imagen: "https://source.unsplash.com/800x600/?cabin,forest",
        amenities: ["wifi", "estacionamiento", "cocina", "aire-acondicionado"],
        precio: "$15,000",
        tamaño: "80 m²"
    },
    {
        id: 2,
        nombre: "Cabaña del Lago",
        ubicacion: "villa-rumipal",
        capacidad: 6,
        descripcion: "Espaciosa cabaña con vista al lago, perfecta para grupos grandes.",
        imagen: "https://source.unsplash.com/800x600/?cabin,lake",
        amenities: ["wifi", "estacionamiento", "cocina", "aire-acondicionado", "parrilla"],
        precio: "$20,000",
        tamaño: "100 m²"
    },
    {
        id: 3,
        nombre: "Cabaña de Montaña",
        ubicacion: "el-torreon",
        capacidad: 2,
        descripcion: "Acogedora cabaña para parejas con vistas panorámicas a las montañas.",
        imagen: "https://source.unsplash.com/800x600/?cabin,mountain",
        amenities: ["wifi", "chimenea", "cocina", "jacuzzi"],
        precio: "$12,000",
        tamaño: "60 m²"
    },
    {
        id: 4,
        nombre: "Cabaña Familiar",
        ubicacion: "santa-rosa",
        capacidad: 8,
        descripcion: "Gran cabaña para reuniones familiares o grupos de amigos.",
        imagen: "https://source.unsplash.com/800x600/?cabin,family",
        amenities: ["wifi", "estacionamiento", "cocina", "aire-acondicionado", "parrilla", "piscina"],
        precio: "$25,000",
        tamaño: "120 m²"
    },
    {
        id: 5,
        nombre: "Cabaña Romántica",
        ubicacion: "villa-del-dique",
        capacidad: 2,
        descripcion: "Cabaña íntima con jacuzzi privado, ideal para parejas.",
        imagen: "https://source.unsplash.com/800x600/?cabin,romantic",
        amenities: ["wifi", "chimenea", "cocina", "jacuzzi", "aire-acondicionado"],
        precio: "$18,000",
        tamaño: "50 m²"
    }
];

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

// Funci��n para filtrar cabañas
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
function init() {
    mostrarCabanas();
    initializeSwipers();
    handleMobileMenu();
    handleContactForm();
    handleNewsletterForm();
    filtrarGaleria('todas'); // Inicializar la galería mostrando todas las imágenes
}

// Ejecutar la función de inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);

