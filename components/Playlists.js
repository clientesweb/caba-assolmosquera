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

            <div class="relative">
                <div class="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
                    <div class="flex-none w-full md:w-[600px] snap-center">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe 
                                src="https://www.youtube.com/embed/9fsP1FVspYQ" 
                                title="El Torreón, Córdoba Argentina" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen 
                                class="rounded-lg shadow-lg w-full h-full"
                            ></iframe>
                        </div>
                        <div class="text-center mt-4">
                            <h3 class="text-xl font-bold text-gray-800">El Torreón: Historia y Paisajes</h3>
                            <p class="text-gray-600 mt-2">Descubre la belleza natural y la rica historia de El Torreón.</p>
                        </div>
                    </div>

                    <div class="flex-none w-full md:w-[600px] snap-center">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe 
                                src="https://www.youtube.com/embed/TupNYur9gQA" 
                                title="Santa Rosa de Calamuchita" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen 
                                class="rounded-lg shadow-lg w-full h-full"
                            ></iframe>
                        </div>
                        <div class="text-center mt-4">
                            <h3 class="text-xl font-bold text-gray-800">Santa Rosa: Tradición y Modernidad</h3>
                            <p class="text-gray-600 mt-2">Explora la perfecta mezcla de tradición y modernidad en Santa Rosa.</p>
                        </div>
                    </div>

                    <div class="flex-none w-full md:w-[600px] snap-center">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe 
                                src="https://www.youtube.com/embed/lC0gwQeiuXA" 
                                title="Embalse de Río Tercero" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen 
                                class="rounded-lg shadow-lg w-full h-full"
                            ></iframe>
                        </div>
                        <div class="text-center mt-4">
                            <h3 class="text-xl font-bold text-gray-800">Embalse: Diversión Acuática</h3>
                            <p class="text-gray-600 mt-2">Disfruta de las múltiples actividades acuáticas en el Embalse.</p>
                        </div>
                    </div>
                </div>

                <!-- Indicadores de scroll -->
                <div class="flex justify-center gap-2 mt-6">
                    <div class="w-2 h-2 rounded-full bg-primary"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
            </div>

            <div class="mt-12 text-center">
                <a href="https://www.youtube.com/@ValledeCalamuchitaOficial" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <span class="relative">Explorar Más Videos del Valle</span>
                    <svg 
                        class="w-5 h-5 ml-2 transition-transform duration-200 ease-out transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>

        <style>
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
            
            .aspect-w-16 {
                position: relative;
                padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            }
            
            .aspect-w-16 iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        </style>

        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const slider = document.querySelector('.overflow-x-auto');
                const dots = document.querySelectorAll('.rounded-full');
                
                // Actualizar dots basado en el scroll
                slider.addEventListener('scroll', () => {
                    const scrollPercentage = slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);
                    const activeIndex = Math.round(scrollPercentage * 2);
                    
                    dots.forEach((dot, index) => {
                        if (index === activeIndex) {
                            dot.classList.remove('bg-gray-300');
                            dot.classList.add('bg-primary');
                        } else {
                            dot.classList.remove('bg-primary');
                            dot.classList.add('bg-gray-300');
                        }
                    });
                });
            });
        </script>
    </section>
  `
}

// Exportar la función Playlists
window.Playlists = Playlists

