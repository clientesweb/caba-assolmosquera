function Footer() {
  return `
    <footer class="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-24 md:pb-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div class="space-y-6">
                    <img src="images/logo-white.png" 
                         alt="Sol Mosquera Cabañas" 
                         class="h-16 md:h-20">
                    <p class="text-gray-400 max-w-xs">
                        Descubre la magia del Valle de Calamuchita en nuestras hermosas cabañas. Tu hogar lejos de casa para unas vacaciones inolvidables.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://www.instagram.com/solcitomosq" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/5493546406871" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-6 relative inline-block">
                        Enlaces Rápidos
                        <span class="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
                    </h3>
                    <ul class="space-y-4">
                        <li>
                            <a href="#cabanas" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Nuestras Cabañas
                            </a>
                        </li>
                        <li>
                            <a href="#servicios" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="#actividades" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Actividades
                            </a>
                        </li>
                        <li>
                            <a href="#galeria" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Galería
                            </a>
                        </li>
                        <li>
                            <a href="#contacto" 
                               class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-6 relative inline-block">
                        Nuestras Ubicaciones
                        <span class="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
                    </h3>
                    <ul class="space-y-4">
                        <li>
                            <a href="#villa-del-dique" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Villa del Dique
                            </a>
                        </li>
                        <li>
                            <a href="#villa-rumipal" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Villa Rumipal
                            </a>
                        </li>
                        <li>
                            <a href="#el-torreon" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                El Torreón
                            </a>
                        </li>
                        <li>
                            <a href="#santa-rosa" class="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                                Santa Rosa
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-6 relative inline-block">
                        Contacto
                        <span class="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
                    </h3>
                    <ul class="space-y-4">
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-phone mt-1 text-primary"></i>
                            <div>
                                <p class="text-gray-400">Teléfono y WhatsApp</p>
                                <a href="tel:+5493546406871" class="text-gray-400 hover:text-white transition-colors duration-300">
                                    +54 9 3546 406871
                                </a>
                            </div>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-map-marker-alt mt-1 text-primary"></i>
                            <div>
                                <p class="text-gray-400">Ubicación Principal</p>
                                <span class="text-gray-400">Valle de Calamuchita, Córdoba</span>
                            </div>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-clock mt-1 text-primary"></i>
                            <div>
                                <p class="text-gray-400">Horario de Atención</p>
                                <span class="text-gray-400">Todos los días 24hs</span>
                            </div>
                        </li>
                        <li class="flex items-start space-x-3">
                            <i class="fas fa-instagram mt-1 text-primary"></i>
                            <div>
                                <p class="text-gray-400">Instagram</p>
                                <a href="https://www.instagram.com/solcitomosq" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   class="text-gray-400 hover:text-white transition-colors duration-300">
                                    @solcitomosq
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 pt-8 mt-12">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p class="text-gray-400 text-sm">
                        &copy; ${new Date().getFullYear()} Sol Mosquera Cabañas. Todos los derechos reservados.
                    </p>
                    <div class="flex space-x-6">
                        <a href="/politica-privacidad" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            Política de Privacidad
                        </a>
                        <a href="/terminos-condiciones" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                            Términos y Condiciones
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Botón Volver Arriba -->
        <button id="scrollToTopBtn" 
                class="fixed bottom-24 right-4 bg-primary text-white w-10 h-10 rounded-full hidden items-center justify-center shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
                onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
                aria-label="Volver arriba">
            <i class="fas fa-arrow-up"></i>
        </button>
    </footer>
  `
}

// Exportar la función Footer
window.Footer = Footer

