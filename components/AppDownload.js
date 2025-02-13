function AppDownload() {
  return `
    <section id="app-info" class="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-primary/5">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                <div class="md:w-1/2 text-center md:text-left">
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-primary">
                        Descarga Nuestra Guía del Valle
                    </h2>
                    <p class="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                        Descubre los mejores lugares, actividades y secretos del Valle de Calamuchita con nuestra guía digital gratuita.
                    </p>
                    <div class="space-y-6">
                        <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <a href="#" class="transform hover:scale-105 transition-transform duration-300 bg-primary text-white px-8 py-3 rounded-full flex items-center gap-2">
                                <i class="fas fa-download text-xl"></i>
                                Descargar Guía PDF
                            </a>
                        </div>
                        <div class="flex items-center justify-center md:justify-start space-x-8 text-gray-600">
                            <div class="flex items-center">
                                <i class="fas fa-map-marked-alt text-primary mr-2"></i>
                                <span>20+ Lugares</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-hiking text-primary mr-2"></i>
                                <span>15+ Actividades</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 relative">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
                        <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&q=80" 
                             alt="Guía del Valle de Calamuchita" 
                             class="relative z-10 w-full h-auto rounded-3xl shadow-lg transform hover:-rotate-2 transition-transform duration-500">
                    </div>
                </div>
            </div>
            <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="text-primary text-3xl mb-4">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Lugares Imperdibles</h3>
                    <p class="text-gray-600">Descubre los puntos más hermosos y emblemáticos del Valle de Calamuchita.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="text-primary text-3xl mb-4">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Gastronomía Local</h3>
                    <p class="text-gray-600">Los mejores restaurantes y platos típicos de la región.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="text-primary text-3xl mb-4">
                        <i class="fas fa-hiking"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Actividades</h3>
                    <p class="text-gray-600">Todas las actividades y aventuras que puedes realizar en el valle.</p>
                </div>
            </div>
        </div>
    </section>
  `
}

