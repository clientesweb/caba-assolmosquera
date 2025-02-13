function Services() {
  return `
    <section id="servicios" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Nuestros Servicios
                </span>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                    <span class="text-primary">Comodidades y</span>
                    <span class="text-gray-800"> Servicios</span>
                </h2>
                <p class="text-gray-600 text-lg">
                    Disfruta de una estadía inolvidable con todos los servicios y comodidades que ofrecemos en nuestras cabañas.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div class="relative z-10">
                        <div class="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-swimming-pool"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Piscina y Solárium</h3>
                        <p class="text-gray-600 mb-6">Disfruta de nuestra piscina con solárium y reposeras para relajarte bajo el sol.</p>
                        <a href="#contacto" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group-hover:translate-x-2 transform">
                            Saber más <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div class="relative z-10">
                        <div class="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Parrilla Privada</h3>
                        <p class="text-gray-600 mb-6">Cada cabaña cuenta con su propia parrilla para disfrutar de un asado en familia.</p>
                        <a href="#contacto" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group-hover:translate-x-2 transform">
                            Saber más <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div class="relative z-10">
                        <div class="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-wifi"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-4">WiFi Gratis</h3>
                        <p class="text-gray-600 mb-6">Conexión WiFi de alta velocidad en todas nuestras cabañas sin costo adicional.</p>
                        <a href="#contacto" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group-hover:translate-x-2 transform">
                            Saber más <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div class="relative z-10">
                        <div class="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-parking"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Estacionamiento Privado</h3>
                        <p class="text-gray-600 mb-6">Estacionamiento privado y techado incluido con cada cabaña.</p>
                        <a href="#contacto" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group-hover:translate-x-2 transform">
                            Saber más <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div class="relative z-10">
                        <div class="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-tv"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Smart TV</h3>
                        <p class="text-gray-600 mb-6">Televisores Smart TV con Netflix y servicios de streaming incluidos.</p>
                        <a href="#contacto" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group-hover:translate-x-2 transform">
                            Saber más <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>

                <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    <div class="relative z-10">
                        <div class="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i class="fas fa-snowflake"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Aire Acondicionado</h3>
                        <p class="text-gray-600 mb-6">Climatización frío/calor en todos los ambientes para tu confort.</p>
                        <a href="#contacto" class="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group-hover:translate-x-2 transform">
                            Saber más <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-16 text-center">
                <a href="#contacto" class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
                    Consulta Nuestros Servicios
                    <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
            </div>
        </div>
    </section>
  `
}

