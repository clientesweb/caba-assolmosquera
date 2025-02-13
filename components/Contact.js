function Contact() {
  return `
    <section id="contacto" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Contáctanos
                </span>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                    <span class="text-primary">Reserva</span>
                    <span class="text-gray-800"> Tu Estadía</span>
                </h2>
                <p class="text-gray-600 text-lg">
                    Estamos aquí para ayudarte a planificar tus vacaciones perfectas. Contáctanos y comienza tu experiencia en el Valle de Calamuchita.
                </p>
            </div>

            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
                    <div class="md:col-span-2 space-y-6">
                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <div class="space-y-6">
                                <div class="flex items-center gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <i class="fas fa-phone text-primary text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-lg">Llámanos</h3>
                                        <a href="tel:+5493546406871" class="text-gray-600 hover:text-primary transition-colors duration-300">
                                            +54 9 3546 406871
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <i class="fab fa-whatsapp text-primary text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-lg">WhatsApp</h3>
                                        <a href="https://wa.me/5493546406871" 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           class="text-gray-600 hover:text-primary transition-colors duration-300">
                                            +54 9 3546 406871
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="flex items-center gap-4">
                                    <div class="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <i class="fas fa-map-marker-alt text-primary text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-lg">Ubicación</h3>
                                        <p class="text-gray-600">Valle de Calamuchita, Córdoba</p>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8 pt-8 border-t border-gray-100">
                                <h3 class="font-bold text-lg mb-4">Síguenos</h3>
                                <div class="flex space-x-4">
                                    <a href="https://www.instagram.com/solcitomosq" 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="bg-primary rounded-2xl shadow-lg p-8 text-white">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                                    <i class="fas fa-star text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg">Experiencia Comprobada</h3>
                                    <p class="text-white/90">10+ años brindando experiencias inolvidables</p>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-check-circle"></i>
                                    <span>4+ Ubicaciones Exclusivas</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-check-circle"></i>
                                    <span>500+ Huéspedes Satisfechos</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-check-circle"></i>
                                    <span>Atención Personalizada</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-3">
                        <div class="bg-white rounded-2xl shadow-lg p-8">
                            <form id="contact-form" class="space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="space-y-2">
                                        <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                                        <input type="text" 
                                               id="name" 
                                               name="name" 
                                               required 
                                               placeholder="Tu nombre completo"
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                    </div>
                                    <div class="space-y-2">
                                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" 
                                               id="email" 
                                               name="email" 
                                               required 
                                               placeholder="tu@email.com"
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                    </div>
                                </div>

                                <div class="space-y-2">
                                    <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
                                    <input type="tel" 
                                           id="phone" 
                                           name="phone" 
                                           required 
                                           placeholder="+54 9 XXX XXXXXXX"
                                           class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="space-y-2">
                                        <label for="check-in" class="block text-sm font-medium text-gray-700">Check-in</label>
                                        <input type="date" 
                                               id="check-in" 
                                               name="check-in" 
                                               required 
                                               min="${new Date().toISOString().split("T")[0]}"
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                    </div>
                                    <div class="space-y-2">
                                        <label for="check-out" class="block text-sm font-medium text-gray-700">Check-out</label>
                                        <input type="date" 
                                               id="check-out" 
                                               name="check-out" 
                                               required 
                                               min="${new Date().toISOString().split("T")[0]}"
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                    </div>
                                </div>

                                <div class="space-y-2">
                                    <label for="location" class="block text-sm font-medium text-gray-700">Ubicación</label>
                                    <select id="location" 
                                            name="location" 
                                            required
                                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                        <option value="">Selecciona una ubicación</option>
                                        <option value="villa-del-dique">Villa del Dique</option>
                                        <option value="villa-rumipal">Villa Rumipal</option>
                                        <option value="el-torreon">El Torreón</option>
                                        <option value="santa-rosa">Santa Rosa</option>
                                    </select>
                                </div>

                                <div class="space-y-2">
                                    <label for="guests" class="block text-sm font-medium text-gray-700">Cantidad de Huéspedes</label>
                                    <select id="guests" 
                                            name="guests" 
                                            required
                                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300">
                                        <option value="2">2 personas</option>
                                        <option value="3">3 personas</option>
                                        <option value="4">4 personas</option>
                                        <option value="5">5 personas</option>
                                        <option value="6">6 personas</option>
                                        <option value="7">7+ personas</option>
                                    </select>
                                </div>

                                <div class="space-y-2">
                                    <label for="message" class="block text-sm font-medium text-gray-700">Mensaje</label>
                                    <textarea id="message" 
                                              name="message" 
                                              rows="4" 
                                              required 
                                              placeholder="Cuéntanos más sobre tu estadía..."
                                              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"></textarea>
                                </div>

                                <div class="flex items-center gap-2 text-sm text-gray-600">
                                    <input type="checkbox" 
                                           id="privacy" 
                                           name="privacy" 
                                           required 
                                           class="rounded border-gray-300 text-primary focus:ring-primary">
                                    <label for="privacy">
                                        Acepto la política de privacidad y el tratamiento de mis datos personales
                                    </label>
                                </div>

                                <button type="submit" 
                                        class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center group">
                                    Enviar Consulta
                                    <i class="fas fa-paper-plane ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
}

// Agregar el script para manejar el envío del formulario
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    // Validar fechas al cambiar
    const checkInInput = document.getElementById("check-in")
    const checkOutInput = document.getElementById("check-out")

    checkInInput.addEventListener("change", function () {
      checkOutInput.min = this.value
    })

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault()
      const formData = new FormData(contactForm)

      // Formatear las fechas para mejor legibilidad
      const checkIn = new Date(formData.get("check-in")).toLocaleDateString("es-AR")
      const checkOut = new Date(formData.get("check-out")).toLocaleDateString("es-AR")

      const whatsappMessage =
        `*Nueva Consulta de Reserva*%0A%0A` +
        `*👤 Nombre:* ${formData.get("name")}%0A` +
        `*📧 Email:* ${formData.get("email")}%0A` +
        `*📱 Teléfono:* ${formData.get("phone")}%0A` +
        `*📅 Check-in:* ${checkIn}%0A` +
        `*📅 Check-out:* ${checkOut}%0A` +
        `*📍 Ubicación:* ${formData.get("location")}%0A` +
        `*👥 Huéspedes:* ${formData.get("guests")} personas%0A` +
        `*💬 Mensaje:* ${formData.get("message")}`

      window.open(`https://wa.me/5493546406871?text=${whatsappMessage}`, "_blank")

      // Mostrar mensaje de éxito
      const successMessage = document.createElement("div")
      successMessage.className = "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
      successMessage.textContent = "¡Mensaje enviado con éxito!"
      document.body.appendChild(successMessage)

      // Remover mensaje después de 3 segundos
      setTimeout(() => {
        successMessage.remove()
      }, 3000)

      contactForm.reset()
    })
  }
})

// Exportar la función Contact
window.Contact = Contact

