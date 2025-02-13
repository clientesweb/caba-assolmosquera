function About() {
  return `
    <section id="sobre-nosotros" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-transparent">
        <div class="container mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div class="lg:w-1/2">
                    <div class="space-y-6">
                        <div class="inline-block">
                            <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                3+ Años de Experiencia
                            </span>
                        </div>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold font-serif">
                            <span class="text-primary">Sobre</span>
                            <span class="text-gray-800"> Sol Mosquera Cabañas</span>
                        </h2>
                        <div class="space-y-4">
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Bienvenidos a Sol Mosquera Cabañas, tu destino de confianza para disfrutar de unas vacaciones inolvidables en el Valle de Calamuchita. Desde hace más de una década, nos dedicamos a brindar experiencias únicas en alojamiento turístico.
                            </p>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Nuestras cabañas están estratégicamente ubicadas en los puntos más hermosos del valle, ofreciendo una combinación perfecta de confort, naturaleza y tranquilidad para nuestros huéspedes.
                            </p>
                        </div>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
                            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="text-primary text-2xl font-bold">4+</div>
                                <div class="text-gray-600">Ubicaciones</div>
                            </div>
                            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="text-primary text-2xl font-bold">500+</div>
                                <div class="text-gray-600">Huéspedes Felices</div>
                            </div>
                            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="text-primary text-2xl font-bold">3+</div>
                                <div class="text-gray-600">Años de Experiencia</div>
                            </div>
                            <div class="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div class="text-primary text-2xl font-bold">95%</div>
                                <div class="text-gray-600">Satisfacción</div>
                            </div>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4 pt-6">
                            <a href="#contacto" class="inline-flex items-center justify-center bg-primary text-white hover:bg-primary/90 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-center group">
                                Reservar Ahora
                                <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                            </a>
                            <a href="#servicios" class="inline-flex items-center justify-center bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-300 font-bold py-3 px-8 rounded-full text-center">
                                Nuestras Cabañas
                            </a>
                        </div>
                    </div>
                </div>
                <div class="lg:w-1/2 relative">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
                        <img src="images/sol-mosquera.jpg" 
                             alt="Cabañas en el Valle de Calamuchita" 
                             class="rounded-3xl shadow-2xl w-full relative z-10 transform hover:-rotate-2 transition-transform duration-500">
                    </div>
                    <div class="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-xs">
                        <div class="flex items-center space-x-4">
                            <div class="bg-primary rounded-full p-3">
                                <i class="fas fa-award text-white text-xl"></i>
                            </div>
                            <div>
                                <p class="font-bold text-gray-800">Excelencia en Servicio</p>
                                <p class="text-sm text-gray-600">Reconocidos por nuestra atención personalizada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-20 md:mt-24">
                <h3 class="text-2xl md:text-3xl font-bold mb-10 text-center">
                    <span class="text-primary">Nuestros</span> Servicios Destacados
                </h3>
                <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    <div class="text-center">
                        <i class="fas fa-wifi text-4xl text-primary mb-2"></i>
                        <p class="text-gray-600">WiFi Gratis</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-parking text-4xl text-primary mb-2"></i>
                        <p class="text-gray-600">Estacionamiento</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-swimming-pool text-4xl text-primary mb-2"></i>
                        <p class="text-gray-600">Piscina</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-utensils text-4xl text-primary mb-2"></i>
                        <p class="text-gray-600">Parrilla</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-tv text-4xl text-primary mb-2"></i>
                        <p class="text-gray-600">Smart TV</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
}

