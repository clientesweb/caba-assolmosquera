function Playlists() {
  return `
    <section id="videos" class="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-transparent">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    Descubre el Valle
                </span>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                    <span class="text-primary">Explora</span>
                    <span class="text-gray-800"> Calamuchita</span>
                </h2>
                <p class="text-gray-600 text-lg">
                    Sumérgete en la belleza del Valle de Calamuchita a través de estos videos inspiradores.
                </p>
            </div>

            <div class="relative overflow-hidden">
                <div id="video-slider" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-4 pb-6 justify-center">
                    <div class="snap-start flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe src="https://www.youtube.com/embed/3JfBBp35gpY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg shadow-lg"></iframe>
                        </div>
                        <h3 class="text-xl font-bold mt-4 mb-2">Villa del Dique: Paraíso Serrano</h3>
                        <p class="text-gray-600">Descubre la belleza natural y las actividades que ofrece Villa del Dique.</p>
                    </div>
                    <div class="snap-start flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg shadow-lg"></iframe>
                        </div>
                        <h3 class="text-xl font-bold mt-4 mb-2">Villa Rumipal: Aventura y Naturaleza</h3>
                        <p class="text-gray-600">Explora las maravillas naturales y deportes acuáticos en Villa Rumipal.</p>
                    </div>
                    <div class="snap-start flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe src="https://www.youtube.com/embed/VIDEO_ID_3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg shadow-lg"></iframe>
                        </div>
                        <h3 class="text-xl font-bold mt-4 mb-2">El Torreón: Historia y Paisajes</h3>
                        <p class="text-gray-600">Sumérgete en la rica historia y los impresionantes paisajes de El Torreón.</p>
                    </div>
                    <div class="snap-start flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe src="https://www.youtube.com/embed/VIDEO_ID_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg shadow-lg"></iframe>
                        </div>
                        <h3 class="text-xl font-bold mt-4 mb-2">Santa Rosa: Tradición y Modernidad</h3>
                        <p class="text-gray-600">Conoce la perfecta mezcla de tradición y modernidad en Santa Rosa de Calamuchita.</p>
                    </div>
                    <div class="snap-start flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe src="https://www.youtube.com/embed/VIDEO_ID_5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="rounded-lg shadow-lg"></iframe>
                        </div>
                        <h3 class="text-xl font-bold mt-4 mb-2">Embalse: Diversión Acuática</h3>
                        <p class="text-gray-600">Disfruta de las múltiples actividades acuáticas que ofrece el Embalse de Río Tercero.</p>
                    </div>
                </div>
            </div>

            <div class="mt-12 text-center">
                <a href="https://www.youtube.com/@ValledeCalamuchitaOficial" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 group">
                    Ver Más Videos del Valle
                    <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
            </div>
        </div>
    </section>

    <style>
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @media (hover: hover) {
            #video-slider {
                overflow-x: hidden;
            }
            #video-slider:hover {
                overflow-x: auto;
            }
        }
    </style>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const slider = document.getElementById('video-slider');
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active');
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active');
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
            });
        });
    </script>
    `
}

// Exportar la función Playlists
window.Playlists = Playlists

