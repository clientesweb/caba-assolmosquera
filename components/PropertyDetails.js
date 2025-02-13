"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog } from "@headlessui/react"

function PropertyDetails() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

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

  const openLightbox = (index) => {
    setCurrentImage(index)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % cabin.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + cabin.images.length) % cabin.images.length)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const message = `
      *Nueva Reserva*
      Cabaña: ${cabin.title}
      Fecha de llegada: ${formData.get("check-in")}
      Fecha de salida: ${formData.get("check-out")}
      Número de huéspedes: ${formData.get("guests")}
      Nombre: ${formData.get("name")}
      Email: ${formData.get("email")}
      Mensaje: ${formData.get("message")}
    `
    const whatsappUrl = `https://wa.me/5493546406871?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <main className="pt-16 pb-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm mb-8" aria-label="Breadcrumb">
          <a href="/" className="text-gray-600 hover:text-primary transition-colors duration-300">
            Inicio
          </a>
          <span className="text-gray-400">/</span>
          <a href="/cabanas" className="text-gray-600 hover:text-primary transition-colors duration-300">
            Cabañas
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-primary">{cabin.title}</span>
        </nav>

        {/* Cabin Title and Location */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">{cabin.title}</h1>
          <p className="text-xl text-gray-600">
            <i className="fas fa-map-marker-alt text-primary mr-2"></i>
            {cabin.location}
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="md:col-span-2">
            <Image
              src={cabin.images[0] || "/placeholder.svg"}
              alt={cabin.title}
              width={800}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() => openLightbox(0)}
            />
          </div>
          {cabin.images.slice(1).map((image, index) => (
            <div key={index}>
              <Image
                src={image || "/placeholder.svg"}
                alt={`${cabin.title} - Imagen ${index + 2}`}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => openLightbox(index + 1)}
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={isOpen} onClose={closeLightbox} className="fixed inset-0 z-50 flex items-center justify-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
          <div className="relative bg-white p-2 rounded-lg max-w-3xl max-h-full overflow-hidden">
            <Image
              src={cabin.images[currentImage] || "/placeholder.svg"}
              alt={`${cabin.title} - Imagen ${currentImage + 1}`}
              width={1200}
              height={900}
              className="w-full h-auto"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={closeLightbox}
            >
              <i className="fas fa-times"></i>
            </button>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={prevImage}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={nextImage}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </Dialog>

        {/* Cabin Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif font-bold mb-4">Descripción</h2>
            <p className="text-gray-700 mb-6">{cabin.description}</p>

            <h3 className="text-xl font-serif font-bold mb-3">Características principales</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              {cabin.features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-serif font-bold mb-3">En los alrededores</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              {cabin.nearby.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <p className="text-3xl font-bold text-primary mb-4">{cabin.price}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <i className="fas fa-bed text-primary text-2xl mb-2"></i>
                  <p className="text-sm text-gray-600">{cabin.details.bedrooms} Dormitorios</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-bath text-primary text-2xl mb-2"></i>
                  <p className="text-sm text-gray-600">{cabin.details.bathrooms} Baños</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-users text-primary text-2xl mb-2"></i>
                  <p className="text-sm text-gray-600">Hasta {cabin.details.capacity} personas</p>
                </div>
                <div className="text-center">
                  <i className="fas fa-vector-square text-primary text-2xl mb-2"></i>
                  <p className="text-sm text-gray-600">{cabin.details.size}</p>
                </div>
              </div>
              <a
                href="#reserva"
                className="block w-full bg-primary hover:bg-primary/90 text-white text-center font-bold py-3 px-4 rounded-lg transition duration-300 mb-4"
              >
                Reservar ahora
              </a>
              <a
                href={`https://wa.me/5493546406871?text=Hola,%20me%20interesa%20la%20cabaña%20${encodeURIComponent(cabin.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white text-center font-bold py-3 px-4 rounded-lg transition duration-300"
              >
                <i className="fab fa-whatsapp mr-2"></i>Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold mb-6">Comodidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cabin.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <i className={`fas ${amenity.icon} text-primary text-xl`}></i>
                <span className="text-gray-700">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div id="reserva" class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-serif font-bold mb-6">Reserva tu estadía</h2>
          <form id="booking-form" class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="check-in" class="block text-sm font-medium text-gray-700 mb-2">Fecha de llegada</label>
              <input type="date" id="check-in" name="check-in" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"/>
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
        <script>
          document.getElementById('booking-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const message = `
              *Nueva Reserva para ${cabin.title}*
              Fecha de llegada: ${formData.get('check-in')}
              Fecha de salida: ${formData.get('check-out')}
              Número de huéspedes: ${formData.get('guests')}
              Nombre: ${formData.get('name')}
              Email: ${formData.get('email')}
              Mensaje: ${formData.get('message')}
            `;
            const whatsappUrl = `https://wa.me/5493546406871?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          });
        </script>
      </div>
    </main>
  )
}

// Función auxiliar para obtener el ID de la cabaña de la URL (simulada)
function getCabinIdFromUrl() {
  // En un caso real, esto obtendría el ID de la URL
  return "vista-al-lago"
}

export default PropertyDetails

