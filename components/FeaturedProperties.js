function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: "Cabaña Villa del Dique - Vista al Lago",
      price: "Desde $15,000/noche",
      location: "Villa del Dique, Valle de Calamuchita",
      image: "/placeholder.svg?height=400&width=600",
      bedrooms: "2",
      bathrooms: "1",
      area: "80 m²",
      url: "#villa-del-dique",
      description: "Hermosa cabaña con vista panorámica al lago, ideal para familias",
      reserve: "Reserva con 30%",
      status: "Disponible",
      type: "Cabaña",
    },
    {
      id: 2,
      title: "Cabaña Villa Rumipal - Entre Montañas",
      price: "Desde $18,000/noche",
      location: "Villa Rumipal, Valle de Calamuchita",
      image: "/placeholder.svg?height=400&width=600",
      bedrooms: "3",
      bathrooms: "2",
      area: "100 m²",
      url: "#villa-rumipal",
      description: "Espaciosa cabaña rodeada de naturaleza con increíbles vistas a las sierras",
      reserve: "Reserva con 30%",
      status: "Disponible",
      type: "Cabaña",
    },
    {
      id: 3,
      title: "Cabaña El Torreón - Familiar",
      price: "Desde $20,000/noche",
      location: "El Torreón, Valle de Calamuchita",
      image: "/placeholder.svg?height=400&width=600",
      bedrooms: "4",
      bathrooms: "2",
      area: "120 m²",
      url: "#el-torreon",
      description: "Amplia cabaña familiar con piscina privada y espacios verdes",
      reserve: "Reserva con 30%",
      status: "Última disponible",
      type: "Cabaña",
    },
    {
      id: 4,
      title: "Cabaña Santa Rosa - Premium",
      price: "Desde $25,000/noche",
      location: "Santa Rosa, Valle de Calamuchita",
      image: "/placeholder.svg?height=400&width=600",
      bedrooms: "3",
      bathrooms: "2",
      area: "110 m²",
      url: "#santa-rosa",
      description: "Cabaña premium con jacuzzi y vista panorámica al valle",
      reserve: "Reserva con 30%",
      status: "Nueva",
      type: "Cabaña Premium",
    },
  ]

  return `
    <section id="cabanas-destacadas" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            Cabañas Destacadas
          </span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span class="text-primary">Encuentra</span>
            <span class="text-gray-800"> Tu Lugar Ideal</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Descubre nuestras cabañas más exclusivas en las mejores ubicaciones del Valle de Calamuchita.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${properties
            .map(
              (property) => `
            <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div class="relative overflow-hidden">
                <img src="${property.image}" 
                     alt="${property.title}" 
                     class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                    ${property.status}
                  </span>
                  <span class="bg-white/90 text-primary px-3 py-1 rounded-full text-sm">
                    ${property.type}
                  </span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-white text-2xl font-bold mb-2">${property.price}</div>
                  <div class="flex items-center text-white/90 text-sm">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    ${property.location}
                  </div>
                </div>
              </div>
              
              <div class="p-6">
                <h3 class="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  ${property.title}
                </h3>
                <p class="text-gray-600 mb-4 line-clamp-2">${property.description}</p>
                
                <div class="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                  <div class="text-center">
                    <i class="fas fa-bed text-primary mb-1"></i>
                    <p class="text-sm text-gray-600">${property.bedrooms} Dorm.</p>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-bath text-primary mb-1"></i>
                    <p class="text-sm text-gray-600">${property.bathrooms} Baños</p>
                  </div>
                  <div class="text-center">
                    <i class="fas fa-vector-square text-primary mb-1"></i>
                    <p class="text-sm text-gray-600">${property.area}</p>
                  </div>
                </div>

                <div class="mt-4 flex flex-col gap-3">
                  <p class="text-green-600 font-semibold text-center">${property.reserve}</p>
                  <a href="${property.url}" 
                     class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 group">
                    Ver Detalles
                    <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </a>
                </div>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>

        <div class="mt-12 text-center">
          <a href="#todas-cabanas" 
             class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
            Ver Todas las Cabañas
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  `
}

