function Header() {
  return `
  <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm" role="banner">
      <nav class="container mx-auto px-4" role="navigation" aria-label="Navegación principal">
          <div class="flex items-center justify-between h-20">
              <!-- Logo -->
              <div class="flex items-center">
                  <a href="/" class="flex items-center space-x-2 group" aria-label="Sol Mosquera Cabañas - Inicio">
                      <img src="images/logo.png" 
                           alt="Sol Mosquera Cabañas Logo" 
                           class="h-12 md:h-16 transform group-hover:scale-105 transition-transform duration-300"
                           width="64"
                           height="64">
                      <span class="text-xl font-serif text-gray-800"></span>
                  </a>
              </div>

              <!-- Desktop Navigation -->
              <nav class="hidden md:flex items-center space-x-8" role="menubar">
                  <div class="relative group">
                      <a href="#cabanas" 
                         class="text-gray-700 hover:text-primary transition-colors duration-300 relative group inline-flex items-center"
                         role="menuitem"
                         aria-haspopup="true"
                         aria-expanded="false"
                         title="Nuestras cabañas en el Valle de Calamuchita">
                          Cabañas
                          <i class="fas fa-chevron-down ml-2 text-sm"></i>
                          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </a>
                      <div class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                          <a href="#villa-del-dique" class="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300">
                              Villa del Dique
                          </a>
                          <a href="#villa-rumipal" class="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300">
                              Villa Rumipal
                          </a>
                          <a href="#el-torreon" class="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300">
                              El Torreón
                          </a>
                          <a href="#santa-rosa" class="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-300">
                              Santa Rosa
                          </a>
                      </div>
                  </div>
                  <a href="#servicios" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Servicios incluidos en nuestras cabañas">
                      Servicios
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#actividades" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Actividades en el Valle de Calamuchita">
                      Actividades
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#galeria" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Galería de fotos de nuestras cabañas">
                      Galería
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                  <a href="#contacto" 
                     class="text-gray-700 hover:text-primary transition-colors duration-300 relative group"
                     role="menuitem"
                     title="Contactar a Sol Mosquera Cabañas">
                      Contacto
                      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
              </nav>

              <!-- Desktop Social Icons -->
              <div class="flex items-center space-x-6">
                  <div class="flex items-center space-x-4" role="navigation" aria-label="Redes sociales">
                      <a href="https://www.instagram.com/solcitomosq" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                         aria-label="Síguenos en Instagram">
                          <i class="fab fa-instagram text-lg" aria-hidden="true"></i>
                      </a>
                      <a href="https://www.facebook.com/solmosqueracabanas" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         class="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110"
                         aria-label="Síguenos en Facebook">
                          <i class="fab fa-facebook text-lg" aria-hidden="true"></i>
                      </a>
                  </div>
              </div>
          </div>
      </nav>
  </header>
  `
}

// Export the Header function
window.Header = Header

