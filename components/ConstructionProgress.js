function ConstructionProgress() {
  return `
    <section id="proximas-cabanas" class="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Próximas Cabañas
                </span>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                    <span class="text-primary">Nuevas</span>
                    <span class="text-gray-800"> Experiencias</span>
                </h2>
                <p class="text-gray-600 text-lg">
                    Descubre nuestras nuevas cabañas en construcción y sé el primero en disfrutar de estas increíbles experiencias.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="/placeholder.svg?height=400&width=600" alt="Cabaña del Bosque" 
                             class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 right-4">
                            <span class="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">80% Completado</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-xl font-bold">Cabaña del Bosque</h3>
                            <span class="text-primary"><i class="fas fa-tree"></i></span>
                        </div>
                        <p class="text-gray-600 mb-4 line-clamp-2">
                            Nueva cabaña rodeada de naturaleza, perfecta para los amantes del senderismo y la tranquilidad.
                        </p>
                        <div class="space-y-3">
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary h-2 rounded-full" style="width: 80%"></div>
                            </div>
                            <div class="flex justify-between text-sm text-gray-600">
                                <span>Avance</span>
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="/placeholder.svg?height=400&width=600" alt="Cabaña Panorámica" 
                             class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 right-4">
                            <span class="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">60% Completado</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-xl font-bold">Cabaña Panorámica</h3>
                            <span class="text-primary"><i class="fas fa-mountain"></i></span>
                        </div>
                        <p class="text-gray-600 mb-4 line-clamp-2">
                            Disfruta de vistas impresionantes del valle desde esta nueva cabaña con grandes ventanales.
                        </p>
                        <div class="space-y-3">
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary h-2 rounded-full" style="width: 60%"></div>
                            </div>
                            <div class="flex justify-between text-sm text-gray-600">
                                <span>Avance</span>
                                <span>60%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div class="relative overflow-hidden">
                        <img src="/placeholder.svg?height=400&width=600" alt="Cabaña Familiar XL" 
                             class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 right-4">
                            <span class="bg-primary/90 text-white px-3 py-1 rounded-full text-sm">40% Completado</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-xl font-bold">Cabaña Familiar XL</h3>
                            <span class="text-primary"><i class="fas fa-users"></i></span>
                        </div>
                        <p class="text-gray-600 mb-4 line-clamp-2">
                            Espaciosa cabaña diseñada para familias grandes o grupos de amigos, con todas las comodidades.
                        </p>
                        <div class="space-y-3">
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-primary h-2 rounded-full" style="width: 40%"></div>
                            </div>
                            <div class="flex justify-between text-sm text-gray-600">
                                <span>Avance</span>
                                <span>40%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <a href="/proximas-cabanas" 
                   class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
                    Ver Todas las Próximas Cabañas
                    <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
            </div>
        </div>
    </section>
  `
}

// Exportar la función ConstructionProgress
window.ConstructionProgress = ConstructionProgress

