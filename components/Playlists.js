function Playlists() {
  return `
  <section id="videos" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
      <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
              <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                  Nuestros Videos
              </span>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                  <span class="text-primary">Explora</span>
                  <span class="text-gray-800"> Nuestras Cabañas</span>
              </h2>
              <p class="text-gray-600 text-lg">
                  Descubre la belleza y comodidad de nuestras cabañas a través de estos videos.
              </p>
          </div>

          <div id="video-container" class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="video-item">
                  <div class="aspect-w-16 aspect-h-9 mb-4">
                      <iframe src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg shadow-lg"></iframe>
                  </div>
                  <h3 class="text-xl font-bold mb-2">Cabaña Vista al Lago</h3>
                  <p class="text-gray-600">Explora nuestra hermosa cabaña con vista panorámica al lago en Villa del Dique.</p>
              </div>
              <div class="video-item">
                  <div class="aspect-w-16 aspect-h-9 mb-4">
                      <iframe src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg shadow-lg"></iframe>
                  </div>
                  <h3 class="text-xl font-bold mb-2">Cabaña Entre Montañas</h3>
                  <p class="text-gray-600">Descubre la tranquilidad de nuestra cabaña rodeada de naturaleza en Villa Rumipal.</p>
              </div>
              <div class="video-item">
                  <div class="aspect-w-16 aspect-h-9 mb-4">
                      <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg shadow-lg"></iframe>
                  </div>
                  <h3 class="text-xl font-bold mb-2">Cabaña Familiar en El Torreón</h3>
                  <p class="text-gray-600">Conoce nuestra espaciosa cabaña ideal para familias en El Torreón.</p>
              </div>
              <div class="video-item">
                  <div class="aspect-w-16 aspect-h-9 mb-4">
                      <iframe src="https://www.youtube.com/embed/VIDEO_ID_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg shadow-lg"></iframe>
                  </div>
                  <h3 class="text-xl font-bold mb-2">Cabaña Premium en Santa Rosa</h3>
                  <p class="text-gray-600">Sumérgete en el lujo de nuestra cabaña premium con jacuzzi en Santa Rosa.</p>
              </div>
          </div>

          <div class="mt-12 text-center">
              <a href="https://www.youtube.com/@SolMosqueraCabanas" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
                  Ver Más Videos
                  <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
              </a>
          </div>
      </div>
  </section>
  `
}

// Exportar la función Playlists
window.Playlists = Playlists

