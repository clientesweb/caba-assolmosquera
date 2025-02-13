function PropertyDetails() {
  // Simulamos obtener el ID de la cabaña de la URL
  const cabinId = getCabinIdFromUrl()

  // Datos de ejemplo para una cabaña (en un caso real, estos datos vendrían de una API o base de datos)
  const cabin = {
    id: "vista-al-lago",
    title: "Cabaña Vista al Lago",
    location: "Villa del Dique, Valle de Calamuchita",
    price: "Desde $15,000/noche",
    description:
      "Disfrute de unas vacaciones inolvidables en nuestra hermosa cabaña con vista panorámica al lago. Ideal para familias o parejas que buscan tranquilidad y conexión con la naturaleza. Esta acogedora cabaña ofrece todo lo necesario para una estadía confortable, combinando rusticidad y modernidad en un entorno natural incomparable.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    amenities: [
      { icon: "fa-wifi", name: "Wi-Fi gratis" },
      { icon: "fa-snowflake", name: "Aire acondicionado" },
      { icon: "fa-fire", name: "Calefacción" },
      { icon: "fa-utensils", name: "Cocina equipada" },
      { icon: "fa-tv", name: "TV Smart" },
      { icon: "fa-parking", name: "Estacionamiento privado" },
      { icon: "fa-mountain", name: "Vista al lago" },
      { icon: "fa-umbrella-beach", name: "Acceso a la playa" },
    ],
    details: {
      bedrooms: 2,
      bathrooms: 1,
      capacity: 4,
      size: "80 m²",
    },
    features: [
      "Dormitorio principal con cama matrimonial y vista al lago",
      "Segunda habitación con dos camas individuales",
      "Sala de estar con sofá cama y chimenea",
      "Cocina totalmente equipada con electrodomésticos modernos",
      "Baño completo con ducha",
      "Terraza privada con parrilla y muebles de exterior",
      "Ropa de cama y toallas incluidas",
      "Productos de limpieza y aseo personal",
    ],
    nearby: [
      "A 5 minutos a pie de la playa",
      "Restaurantes y comercios a 10 minutos en auto",
      "Actividades de aventura y excursiones disponibles en la zona",
      "Alquiler de kayaks y botes a 15 minutos",
    ],
  }

  return `
    <main class="pt-16 pb-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
      <div class="container mx-auto px-4">
        <!-- Breadcrumbs -->
        <nav class="flex items-center space-x-2 text-sm mb-8" aria-label="Breadcrumb">
          <a href="/" class="text-gray-600 hover:text-primary transition-colors duration-300">Inicio</a>
          <span class="text-gray-400">/</span>
          <a href="/propiedades.html" class="text-gray-600 hover:text-primary transition-colors duration-300">Cabañas</a>
          <span class="text-gray-400">/</span>
          <span class="text-primary">${cabin.title}</span>
        </nav>

        <!-- Cabin Title and Location -->
        <div class="mb-8">
          <h1 class="text-4xl md:text-5xl font-serif font-bold mb-2">${cabin.title}</h1>
          <p class="text-xl text-gray-600">
            <i class="fas fa-map-marker-alt text-primary mr-2"></i>${cabin.location}
          </p>
        </div>

        <!-- Image Gallery -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div class="md:col-span-2">
            <img src="${cabin.images[0]}" alt="${cabin.title}" class="w-full h-96 object-cover rounded-lg shadow-lg">
          </div>
          ${cabin.images
            .slice(1)
            .map(
              (image, index) => `
            <div>
              <img src="${image}" alt="${cabin.title} - Imagen ${index + 2}" class="w-full h-48 object-cover rounded-lg shadow-md">
            </div>
          `,
            )
            .join("")}
        </div>

        <!-- Cabin Details -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="md:col-span-2">
            <h2 class="text-2xl font-serif font-bold mb-4">Descripción</h2>
            <p class="text-gray-700 mb-6">${cabin.description}</p>
            
            <h3 class="text-xl font-serif font-bold mb-3">Características principales</h3>
            <ul class="list-disc list-inside mb-6 space-y-2">
              ${cabin.features
                .map(
                  (feature) => `
                <li class="text-gray-700">${feature}</li>
              `,
                )
                .join("")}
            </ul>

            <h3 class="text-xl font-serif font-bold mb-3">En los alrededores</h3>
            <ul class="list-disc list-inside mb-6 space-y-2">
              ${cabin.nearby
                .map(
                  (item) => `
                <li class="text-gray-700">${item}</li>
              `,
                )
                .join("")}
            </ul>
          </div>

          <div>
            <div class="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <p class="text-3xl font-bold text-primary mb-4">${cabin.price}</p>
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="text-center">
                  <i class="fas fa-bed text-primary text-2xl mb-2"></i>
                  <p class="text-sm text-gray-600">${cabin.details.bedrooms} Dormitorios</p>
                </div>
                <div class="text-center">
                  <i class="fas fa-bath text-primary text-2xl mb-2"></i>
                  <p class="text-sm text-gray-600">${cabin.details.bathrooms} Baños</p>
                </div>
                <div class="text-center">
                  <i class="fas fa-users text-primary text-2xl mb-2"></i>
                  <p class="text-sm text-gray-600">Hasta ${cabin.details.capacity} personas</p>
                </div>
                <div class="text-center">
                  <i class="fas fa-vector-square text-primary text-2xl mb-2"></i>
                  <p class="text-sm text-gray-600">${cabin.details.size}</p>
                </div>
              </div>
              <a href="#reserva" class="block w-full bg-primary hover:bg-primary/90 text-white text-center font-bold py-3 px-4 rounded-lg transition duration-300 mb-4">
                Reservar ahora
              </a>
              <a href="https://wa.me/5493546406871?text=Hola,%20me%20interesa%20la%20cabaña%20${encodeURIComponent(cabin.title)}" target="_blank" rel="noopener noreferrer" class="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 px-4 rounded-lg transition duration-300">
                <i class="fab fa-whatsapp mr-2"></i>Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <!-- Amenities -->
        <div class="mb-12">
          <h2 class="text-2xl font-serif font-bold mb-6">Comodidades</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            ${cabin.amenities
              .map(
                (amenity) => `
              <div class="flex items-center space-x-3">
                <i class="fas ${amenity.icon} text-primary text-xl"></i>
                <span class="text-gray-700">${amenity.name}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        <!-- Booking Form -->
        <div id="reserva" class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-serif font-bold mb-6">Reserva tu estadía</h2>
          <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="check-in" class="block text-sm font-medium text-gray-700 mb-2">Fecha de llegada</label>
              <input type="date" id="check-in" name="check-in" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary">
            </div>
            <div>
              <label for="check-out" class="block text-sm font-medium text-gray-700 mb-2">Fecha de salida</label>
              <input type="date" id="check-out" name="check-out" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary">
            </div>
            <div>
              <label for="guests" class="block text-sm font-medium text-gray-700 mb-2">Número de huéspedes</label>
              <select id="guests" name="guests" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary">
                <option value="">Seleccionar</option>
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
              </select>
            </div>
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
              <input type="text" id="name" name="name" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary">
            </div>
            <div class="md:col-span-2">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
              <input type="email" id="email" name="email" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary">
            </div>
            <div class="md:col-span-2">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Mensaje (opcional)</label>
              <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
            </div>
            <div class="md:col-span-2">
              <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                Solicitar reserva
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  `
}

// Función auxiliar para obtener el ID de la cabaña de la URL (simulada)
function getCabinIdFromUrl() {
  // En un caso real, esto obtendría el ID de la URL
  return "vista-al-lago"
}

// Exportar la función PropertyDetails
window.PropertyDetails = PropertyDetails

